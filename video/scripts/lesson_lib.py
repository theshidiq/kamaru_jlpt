"""Builder for BJT lesson scripts (video/episodes/<id>.json).

A lesson = intro, the section's Read Along passage verbatim (its clips are
reused for free), the 25 words in three blocks, a 5-question quiz, outro.
Used by the per-chapter content files in video/lessons/ (see
docs/content-pipeline.md). Writing a chapter = writing one of those files.
"""
import json, os

VIDEO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(VIDEO, 'episodes')


def passages(chapter):
    """The chapter's Read Along passages by section, from
    `npx tsx scripts/dump-bjt-passages.ts <chapter>` (run it first)."""
    f = os.path.join(VIDEO, 'out', f'passages-ch{chapter}.json')
    if not os.path.exists(f):
        raise SystemExit(f'missing {f}: run  npx tsx scripts/dump-bjt-passages.ts {chapter}')
    return {p['section']: p for p in json.load(open(f, encoding='utf-8'))}
HOST = {'id': 'tTLw7unlQfMjcUKIUVzS', 'name': 'ナレーター'}
RIKU, SAKURA, SUSHIO = 'KJje3wzepLiSIQjVGCB6', 'gHBfNp2PWSyFgpPlzCOd', 'iIeTr6tHs1VoWSqmCths'
EXAMPLE_VOICES = {'riku': {'id': RIKU, 'name': '例文'}, 'sakura': {'id': SAKURA, 'name': '例文'}}
KANJI_NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
ONES_READ = ['', 'いっ', 'に', 'さん', 'よん', 'ご', 'ろっ', 'なな', 'はっ', 'きゅう']
TENS_READ = ['', 'じゅう', 'にじゅう', 'さんじゅう', 'よんじゅう', 'ごじゅう', 'ろくじゅう']

def kanji_num(n):
    """1-69 in kanji: 11 -> 十一, 20 -> 二十."""
    t, o = divmod(n, 10)
    return (('' if t < 2 else KANJI_NUM[t - 1]) + '十' if t else '') + (KANJI_NUM[o - 1] if o else '')

def lesson_read(n):
    """Reading before 課: 1 いっ, 10 じゅっ, 11 じゅういっ, 20 にじゅっ."""
    t, o = divmod(n, 10)
    return TENS_READ[t] + ONES_READ[o] if o else TENS_READ[t][:-1] + 'っ'

def w(block, word, ex_jp, ex_en, ey_jp, ey_en):
    return {'type': 'word', 'block': block, 'word': word, 'explain': {'jp': ex_jp, 'en': ex_en}, 'example': {'jp': ey_jp, 'en': ey_en}}

def q(n, prompt, prompt_en, choices, answer, ask, reveal):
    return {'type': 'quiz', 'n': n, 'prompt': prompt, 'promptEn': prompt_en, 'choices': choices, 'answer': answer,
            'ask': {'jp': ask[0], 'en': ask[1]}, 'reveal': {'jp': reveal[0], 'en': reveal[1]}}

def blank(n):
    return (f'第{KANJI_NUM[n-1]}問。かっこに入る言葉はどれでしょう。', f'Question {n}. Which word goes in the brackets?')

def lower_first(t):
    return t if t.split()[0].isupper() else t[0].lower() + t[1:]

def episode(passage, chapter, *, title, title_en, voices, cast, blocks, intro3, label, scene, ambience,
            screen, short, readings, speak, words, quiz):
    sec = passage['section']
    n = (chapter - 1) * 5 + sec  # lesson number: 第6課 is chapter 2 section 1
    reading = {'type': 'scene', 'scene': scene, 'ambience': ambience,
               'lines': [{'sp': cast.get(l['speaker'], 'host'), 'jp': l['jp'], 'en': l['en']} for l in passage['lines']]}
    if label:
        reading['label'] = label
    segs = [{'type': 'intro', 'scene': 'office', 'lines': [
        {'sp': 'host', 'jp': 'こんにちは。華丸のビジネス日本語です。', 'en': 'Hello, and welcome to Kamaru Business Japanese.'},
        {'sp': 'host', 'jp': f'今日は第{kanji_num(n)}課。{title}を、二十五個勉強します。', 'en': f'Today is lesson {n}: 25 words — {lower_first(title_en)}.'},
        {'sp': 'host', 'jp': intro3[0], 'en': intro3[1]}]}, reading]
    order = [k for k in blocks if k != 'quiz']
    for i, b in enumerate(order):
        jp, en = blocks[b]['jp'], lower_first(blocks[b]['en'])
        line = ({'sp': 'host', 'jp': f'では、今日の言葉を一つずつ見ていきましょう。まずは、{jp}の言葉です。', 'en': f"Now let's go through today's words one by one. First: {en}."} if i == 0 else
                {'sp': 'host', 'jp': f'次は、{jp}の言葉です。', 'en': f'Next: {en}.'} if i < len(order) - 1 else
                {'sp': 'host', 'jp': f'最後は、{jp}の言葉です。', 'en': f'Last: {en}.'})
        segs.append({'type': 'bridge', 'block': b, 'lines': [line]})
        segs += [x for x in words if x['block'] == b]
    segs.append({'type': 'bridge', 'block': 'quiz', 'lines': [{'sp': 'host', 'jp': '最後に、クイズで確認しましょう。答えを、一から四の中から選んでください。', 'en': "Finally, let's check with a quiz. Choose the answer from 1 to 4."}]})
    segs += quiz
    segs.append({'type': 'outro', 'lines': [
        {'sp': 'host', 'jp': f'今日は、{title}を、二十五個勉強しました。', 'en': f'Today we studied 25 words: {lower_first(title_en)}.'},
        {'sp': 'host', 'jp': 'アプリの単語リストでも、もう一度確認してみてください。', 'en': "Review them again in the app's word list."},
        {'sp': 'host', 'jp': 'お疲れさまでした。また次の課で会いましょう。', 'en': 'Good work today. See you in the next lesson.'}]})
    ep = {'id': f'bjt-{chapter}-{sec}', 'level': 'BJT', 'chapter': chapter, 'section': sec,
          'title': title, 'titleEn': title_en, 'label': f'BJT · 第{n}課',
          'voices': {'host': HOST, **voices}, 'exampleVoices': list(voices)[:2],
          'blocks': blocks, 'short': short, 'screen': screen,
          'readings': {f'第{kanji_num(n)}課': f'だい{lesson_read(n)}か', **readings},
          'speakKana': [f'第{kanji_num(n)}課', *speak], 'segments': segs}
    count = sum(1 for s in segs if s['type'] == 'word')
    assert count == 25, (ep['id'], count)
    assert all(x['block'] in blocks for x in words), ep['id']
    json.dump(ep, open(os.path.join(OUT, f'{ep["id"]}.json'), 'w'), ensure_ascii=False, indent=1)
    print(f'{ep["id"]} ({ep["label"]}): {len(segs)} segments, {count} words, reading {len(reading["lines"])} lines')
