"""
Check a chapter's lessons against its Read Along passages before voicing.

  python video/scripts/check-lesson-furigana.py 3      (needs janome; run
  npx tsx scripts/dump-bjt-passages.ts 3 first)

A lesson's reading part replays the Read Along clips, but build-episode.py
re-derives the furigana for those lines. Where the two disagree, the screen
would show one reading while the voice says another (方 ほう vs かた, 十か所
じゅう vs じゅっ). Every mismatch is printed as (kanji, lesson, passage); fix it
with an entry in that lesson's `readings`. A split that only changes how a
word is grouped (具体例 vs 具体 + 例) is reported too: prefer the passage's
grouping so the studied word stays marked.
"""
import importlib.util, json, os, sys

VIDEO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT = os.path.dirname(VIDEO)
spec = importlib.util.spec_from_file_location('be', os.path.join(VIDEO, 'scripts', 'build-episode.py'))
be = importlib.util.module_from_spec(spec); spec.loader.exec_module(be)

ch = int(sys.argv[1])
passages = {p['section']: p for p in json.load(open(os.path.join(VIDEO, 'out', f'passages-ch{ch}.json'), encoding='utf-8'))}
vocab = json.load(open(os.path.join(ROOT, 'public', 'bjt_vocab.json'), encoding='utf-8'))
shared = json.load(open(os.path.join(VIDEO, 'episodes', '_shared.json'), encoding='utf-8'))
runs = lambda parts_list: [(p['t'], p['r']) for parts in parts_list for p in parts if p.get('r')]
problems = 0
for sec, p in sorted(passages.items()):
    eid = f'bjt-{ch}-{sec}'
    path = os.path.join(VIDEO, 'episodes', f'{eid}.json')
    if not os.path.exists(path):
        print(f'{eid}: no lesson script yet'); continue
    ep = json.load(open(path, encoding='utf-8'))
    ep['readings'] = {**shared['readings'], **ep['readings']}
    ep['speakKana'] = [*shared['speakKana'], *ep['speakKana']]
    E = be.Episode(ep, vocab)
    reading = next(s for s in ep['segments'] if s['type'] == 'scene')
    for line, pl in zip(reading['lines'], p['lines']):
        if line['jp'] != pl['jp']:
            print(f'{eid}: reading line differs from the passage, so its clip will not be reused:\n  {line["jp"]}'); problems += 1; continue
        L = dict(runs(u['parts'] for u in E.segment(line['jp'])))
        P = dict(runs(be.ruby_parts(t['t'], t.get('r', '')) for t in pl['toks']))
        diff = [(k, L.get(k), P.get(k)) for k in dict.fromkeys([*L, *P]) if L.get(k) != P.get(k)]
        if diff:
            print(f'{eid}  {line["jp"][:24]}…  {diff}'); problems += 1
print(f'chapter {ch}: {problems} line(s) to fix' if problems else f'chapter {ch}: lesson furigana matches the passages')
