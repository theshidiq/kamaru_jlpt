"""
Build a video episode: segment the script, voice every line with ElevenLabs,
and write the timeline the Remotion project renders.

  python video/scripts/build-episode.py bjt-1-1 --dry   # count credits, no API calls
  python video/scripts/build-episode.py bjt-1-1         # voice new or changed lines

Needs: pip install janome, ffprobe on PATH, ELEVENLABS_API_KEY in the repo .env.

Input:  video/episodes/<id>.json          (the script: what is said, by whom)
        video/episodes/_shared.json       (readings every episode uses)
Output: video/public/audio/<id>/<line>.mp3 (+ .json alignment cache)
        video/src/data/<id>.json          (units with per-unit start/end ms)

A line is re-voiced only when its spoken text or voice changes, so editing
one example sentence costs one line of credits, not the whole episode.
eleven_v3 is used because it is the only model that reads Japanese kanji
correctly; its takes are not deterministic, so never regenerate "to check".
"""
import base64, hashlib, json, os, re, shutil, subprocess, sys, urllib.request
from janome.tokenizer import Tokenizer

HERE = os.path.dirname(os.path.abspath(__file__))
VIDEO = os.path.dirname(HERE)
ROOT = os.path.dirname(VIDEO)
MODEL = 'eleven_v3'
CREDITS_PER_CHAR = 0.5  # measured on eleven_v3, Starter plan

KANJI = re.compile(r'[一-鿿々〆]')
KANJI_RUN = r'[一-鿿々〆]+|[^一-鿿々〆]+'
HIRA_ONLY = re.compile(r'^[぀-ゟ]+$')
tok = Tokenizer()


def hira(s):
    return ''.join(chr(ord(c) - 0x60) if 'ァ' <= c <= 'ヶ' else c for c in s)


def ruby_parts(t, r):
    """申し上げる/もうしあげる -> 申(もう) し 上(あ) げる, so furigana sits on kanji only."""
    if not r or not KANJI.search(t):
        return [{'t': t}]
    parts = re.findall(KANJI_RUN, t)
    pat = ''.join('(.+?)' if KANJI.match(p) else '(' + re.escape(hira(p)) + ')' for p in parts)
    m = re.fullmatch(pat, r)
    if not m:
        return [{'t': t, 'r': r}]
    return [{'t': p, 'r': g} if KANJI.match(p) else {'t': p} for p, g in zip(parts, m.groups())]


class Episode:
    def __init__(self, ep, vocab):
        self.ep = ep
        self.read = ep['readings']
        self.kana = set(ep['speakKana'])
        self.words = [w for w in vocab if w['chapter'] == ep['chapter'] and w['section'] == ep['section']]
        self.vocab_read = {w['word']: w.get('furigana') or '' for w in vocab}

    def target(self, t):
        """The section word a unit spells, conjugated or not (伺い -> 伺う)."""
        for w in sorted((w['word'] for w in self.words), key=len, reverse=True):
            if t == w:
                return w
            ts, ws = t.rstrip('ぁ-ゖ'), w.rstrip('ぁ-ゖ')
            if KANJI.search(ws) and ts == ws and t != ts:
                return w
            if HIRA_ONLY.match(w) and len(w) >= 3 and t.startswith(w[:-1]) and len(t) <= len(w) + 1:
                return w
        return None

    def unit(self, t, r):
        u = {'t': t, 'parts': ruby_parts(t, r), 'speak': r if (t in self.kana and r) else t}
        w = self.target(t)
        if w:
            u['word'] = w
        return u

    def segment(self, text):
        raw = [(x.surface, hira(x.reading) if x.reading != '*' else x.surface) for x in tok.tokenize(text)]
        out, i = [], 0
        while i < len(raw):
            # longest run of analyser tokens that spells a known word
            for j in range(min(len(raw), i + 6), i, -1):
                s = ''.join(x[0] for x in raw[i:j])
                if s in self.read or s in self.vocab_read:
                    r = self.read.get(s) or self.vocab_read.get(s) or ''.join(x[1] for x in raw[i:j])
                    # kana-only words still take their reading when listed in
                    # speakKana (BJT -> ビージェーティー); ruby_parts adds no furigana
                    out.append(self.unit(s, r if KANJI.search(s) or s in self.kana else ''))
                    i = j
                    break
            else:
                s, r = raw[i]
                out.append(self.unit(s, r if KANJI.search(s) else ''))
                i += 1
        return out


def env():
    vals = {}
    for line in open(os.path.join(ROOT, '.env'), encoding='utf-8'):
        k, sep, v = line.partition('=')
        if sep and not line.startswith('#'):
            vals[k.strip()] = v.strip().strip('"\'')
    return vals


def tts(key, voice, text):
    req = urllib.request.Request(
        f'https://api.elevenlabs.io/v1/text-to-speech/{voice}/with-timestamps',
        data=json.dumps({'text': text, 'model_id': MODEL}).encode(),
        headers={'xi-api-key': key, 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=120) as res:
        return json.load(res)


def passage_clips(voices):
    """Read Along clips (audio-src/passages/), keyed by (voice id, displayed text).

    A lesson whose reading part is the section's passage reuses these for free.
    Their cache stores per-displayed-character times rather than the raw
    alignment, and the voice only inside the hash, so match on that.
    """
    out = {}
    root = os.path.join(ROOT, 'audio-src', 'passages')
    if not os.path.isdir(root):
        return out
    for d in sorted(os.listdir(root)):
        for f in sorted(os.listdir(os.path.join(root, d))):
            if not f.endswith('.json'):
                continue
            meta = json.load(open(os.path.join(root, d, f), encoding='utf-8'))
            spoken = meta.get('spoken', meta['text'])
            for v in voices:
                if hashlib.sha1(f'{MODEL}|{v}|{spoken}'.encode()).hexdigest()[:12] == meta['hash']:
                    out[(v, meta['text'])] = (os.path.join(root, d, f[:-5] + '.mp3'), meta['chars'])
    return out


def duration_ms(path):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path],
                         capture_output=True, text=True, check=True).stdout
    return round(float(out) * 1000)


def main():
    ep_id = sys.argv[1]
    dry = '--dry' in sys.argv
    ep = json.load(open(os.path.join(VIDEO, 'episodes', f'{ep_id}.json'), encoding='utf-8'))
    shared = json.load(open(os.path.join(VIDEO, 'episodes', '_shared.json'), encoding='utf-8'))
    ep['readings'] = {**shared['readings'], **ep['readings']}
    ep['speakKana'] = [*shared['speakKana'], *ep['speakKana']]
    vocab = json.load(open(os.path.join(ROOT, 'public', 'bjt_vocab.json'), encoding='utf-8'))
    E = Episode(ep, vocab)
    by_word = {w['word']: w for w in E.words}
    audio_dir = os.path.join(VIDEO, 'public', 'audio', ep_id)
    os.makedirs(audio_dir, exist_ok=True)

    # 1. the script -> lines of units
    segs, word_i = [], 0
    for si, s in enumerate(ep['segments']):
        seg = {k: v for k, v in s.items() if k not in ('lines', 'explain', 'example', 'ask', 'reveal', 'prompt')}
        lines = []
        if s['type'] == 'word':
            w = by_word[s['word']]
            head = E.unit(s['word'], w.get('furigana') or '')
            head['speak'] = w.get('furigana') or s['word']  # the headword alone: say it in kana
            lines.append({'sp': 'host', 'units': [head, *E.segment('。' + s['explain']['jp'])], 'en': s['explain']['en'], 'role': 'explain'})
            lines.append({'sp': ep['exampleVoices'][word_i % 2], 'units': E.segment(s['example']['jp']), 'en': s['example']['en'], 'role': 'example'})
            seg.update(reading=w.get('furigana') or '', meaning=w['meaning_en'], alsoIn=w.get('alsoIn'), index=word_i, total=len(E.words))
            word_i += 1
        elif s['type'] == 'quiz':
            lines.append({'sp': 'host', **s['ask'], 'role': 'ask'})
            lines.append({'sp': 'host', **s['reveal'], 'role': 'reveal'})
            seg['prompt'] = E.segment(s['prompt'])
        else:
            lines = [dict(l) for l in s['lines']]
        for k, l in enumerate(lines):
            if 'units' not in l:
                l['units'] = E.segment(l.pop('jp'))
            l.pop('jp', None)
            l['id'] = f'{si:02d}{chr(97 + k)}'
            l['name'] = ep['voices'][l['sp']]['name']
            if ep['voices'][l['sp']].get('cast'):
                l['cast'] = ep['voices'][l['sp']]['cast']  # who they are in the scene
            l['text'] = ''.join(u['speak'] for u in l['units'])
        seg['lines'] = lines
        segs.append(seg)

    # 2. voice whatever is new or changed
    all_lines = [l for s in segs for l in s['lines']]
    todo = []
    for l in all_lines:
        voice = ep['voices'][l['sp']]['id']
        l['hash'] = hashlib.sha1(f'{MODEL}|{voice}|{l["text"]}'.encode()).hexdigest()[:12]
        cache = os.path.join(audio_dir, l['id'] + '.json')
        if not (os.path.exists(cache) and json.load(open(cache))['hash'] == l['hash']):
            todo.append(l)
    # Lines a Read Along passage already voiced: copied, not paid for.
    reuse = passage_clips({v['id'] for v in ep['voices'].values()})
    for l in list(todo):
        hit = reuse.get((ep['voices'][l['sp']]['id'], ''.join(u['t'] for u in l['units'])))
        if hit:
            mp3, chars_at = hit
            if not dry:
                shutil.copyfile(mp3, os.path.join(audio_dir, l['id'] + '.mp3'))
                json.dump({'hash': l['hash'], 'text': l['text'], 'chars': chars_at, 'source': os.path.relpath(mp3, ROOT)},
                          open(os.path.join(audio_dir, l['id'] + '.json'), 'w'), ensure_ascii=False)
            todo.remove(l)
            l['reused'] = True
    reused = sum(1 for l in all_lines if l.get('reused'))
    chars = sum(len(l['text']) for l in todo)
    print(f'{len(all_lines)} lines, {sum(len(l["text"]) for l in all_lines)} chars total; '
          f'{reused} reused from Read Along; {len(todo)} to voice = {chars} chars ≈ {chars * CREDITS_PER_CHAR:.0f} credits')
    if dry:
        for l in all_lines:
            print(f"  {l['id']} {l['sp']:9} {' '.join(u['t'] + ('(' + '/'.join(p['r'] for p in u['parts'] if 'r' in p) + ')' if any('r' in p for p in u['parts']) else '') + ('*' if u.get('word') else '') for u in l['units'])}")
            if any(u['speak'] != u['t'] for u in l['units']):
                print(f"       spoken: {l['text']}")
        return

    key = env()['ELEVENLABS_API_KEY']
    for n, l in enumerate(todo, 1):
        voice = ep['voices'][l['sp']]['id']
        print(f'  [{n}/{len(todo)}] {l["id"]} {l["text"]}')
        res = tts(key, voice, l['text'])
        mp3 = os.path.join(audio_dir, l['id'] + '.mp3')
        open(mp3, 'wb').write(base64.b64decode(res['audio_base64']))
        al = res['alignment']
        json.dump({'hash': l['hash'], 'text': l['text'], 'alignment': al}, open(os.path.join(audio_dir, l['id'] + '.json'), 'w'), ensure_ascii=False)

    # 3. timings: map each unit's spoken characters onto the alignment
    for l in all_lines:
        cache = json.load(open(os.path.join(audio_dir, l['id'] + '.json')))
        l['durationMs'] = duration_ms(os.path.join(audio_dir, l['id'] + '.mp3'))
        if 'chars' in cache:  # reused Read Along clip: times per displayed character
            off = 0
            for u in l['units']:
                n = len(u['t'])
                u['start'], u['end'] = round(cache['chars'][off][0]), round(cache['chars'][off + n - 1][1])
                off += n
                u.pop('speak')
            l['audio'] = f'audio/{ep_id}/{l["id"]}.mp3'
            for k in ('hash', 'text', 'reused'):
                l.pop(k, None)
            continue
        al = cache['alignment']
        starts, ends = al['character_start_times_seconds'], al['character_end_times_seconds']
        exact = ''.join(al['characters']) == l['text']
        if not exact:
            print(f'  ! {l["id"]}: alignment text differs, spacing units evenly')
        off, n = 0, len(l['text'])
        for u in l['units']:
            a, b = off, off + len(u['speak'])
            if exact:
                u['start'], u['end'] = round(starts[a] * 1000), round(ends[b - 1] * 1000)
            else:
                u['start'], u['end'] = round(l['durationMs'] * a / n), round(l['durationMs'] * b / n)
            off = b
            u.pop('speak')
        l['audio'] = f'audio/{ep_id}/{l["id"]}.mp3'
        for k in ('hash', 'text', 'reused'):
            l.pop(k, None)

    out = {k: ep[k] for k in ('id', 'level', 'chapter', 'section', 'title', 'titleEn', 'label', 'blocks', 'short', 'screen') if k in ep}
    out['segments'] = segs
    os.makedirs(os.path.join(VIDEO, 'src', 'data'), exist_ok=True)
    path = os.path.join(VIDEO, 'src', 'data', f'{ep_id}.json')
    json.dump(out, open(path, 'w'), ensure_ascii=False, indent=1)
    print(f'wrote {os.path.relpath(path, ROOT)}')


if __name__ == '__main__':
    main()
