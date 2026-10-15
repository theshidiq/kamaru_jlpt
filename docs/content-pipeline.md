# BJT content pipeline — handbook for the content agent

This is the full context for producing Kamaru's BJT study content: reading
passages (**Read Along**), narrated lessons (**Lesson**), and later videos.
It is written for a fresh conversation, so read it once end to end before
starting. App code is handled in a separate session; see
[Who owns what](#who-owns-what).

The user (Kamal) is studying for the BJT (Business Japanese Proficiency
Test) in Japan, at about 2 sections a day. Stay a chapter or two ahead of
that pace.

---

## Status (update this table after every chapter)

| Chapter | Words | Read Along | Lesson (app, with sound) | Video |
|---|---|---|---|---|
| 1 | 1–125 | ✅ 1-1 … 1-5 | ✅ 第1課–第5課 | ✅ 1-1 … 1-5 (1-1, 1-2 in the old layout) |
| 2 | 126–250 | ✅ | ✅ 第6課–第10課 | — later |
| 3 | 251–375 | ✅ | ✅ 第11課–第15課 | — later |
| 4–13 | 376–1573 | — | — | — |

- **Next:** chapter 4 (sections 4-1 … 4-5).
- The list has **1,573 words in 63 sections**: chapters 1–12 have 5 sections
  of 25 words; chapter 13 has 3 (25, 25, 23).
- **ElevenLabs credits:** Starter plan, 30,000 per month, resetting on the
  24th (next: 2026-10-24). As of 2026-10-12, 12,802 were left. A full section
  (Read Along + Lesson) costs about 740; a whole chapter about 3,700–3,800.
  Check before starting:
  ```bash
  set -a; source <(grep ELEVENLABS_API_KEY .env); set +a
  curl -s https://api.elevenlabs.io/v1/user/subscription -H "xi-api-key: $ELEVENLABS_API_KEY" \
    | python3 -c "import json,sys;d=json.load(sys.stdin);print(d['character_limit']-d['character_count'],'left')"
  ```
  The usage counter lags a few seconds behind generation.

---

## What the two features are

| | **Read Along** | **Lesson** |
|---|---|---|
| Route | `/read/:chapter/:section` | `/lesson/:chapter/:section` |
| What you hear | The section's passage, read aloud, one voice per speaker | Intro → the same passage → all 25 words explained (meaning + example) in 3 blocks → 5-question quiz → outro |
| Length | ~1–1.5 min | ~7–8 min |
| Sound | Voice only (exam-like) | Music, effects and a place sound, with an on/off switch |
| Built by | `scripts/build-bjt-passages.py` + `scripts/generate-bjt-passages.ts` | `video/lessons/bjt-chN.py` → `video/scripts/build-episode.py` → `video/scripts/export-app.ts` |

The Lesson's reading part is **the Read Along passage, verbatim**, so its
clips are reused for free. Always make the Read Along first.

---

## One-time setup

```bash
brew install ffmpeg                     # ffmpeg + ffprobe
npm install && (cd video && npm install)
python3 -m venv .venv-content && .venv-content/bin/pip install janome
```
Use `.venv-content/bin/python` for every Python script below (it has janome).
`.env` (never commit it) must have `ELEVENLABS_API_KEY` and
`VITE_AUDIO_BASE_URL`; wrangler must be logged in (`npx wrangler login`).

---

## Making a chapter, step by step

Replace `N` with the chapter number throughout.

### 1. List the words
```bash
python3 -c "
import json;d=json.load(open('public/bjt_vocab.json'))
for sec in range(1,6):
  s=[w for w in d if w['chapter']==N and w['section']==sec]
  if s: print(f'== N-{sec}', s[0]['section_title_en']); print(' | '.join(f\"{w['word']}({w.get('furigana','')}) {w['meaning_en'][:30]}\" for w in s))"
```
Each word has `word`, `furigana`, `meaning_en`, `section_title_en`, and
`alsoIn` (`N2`/`N3` if it is also on a JLPT list).

### 2. Write the five passages
Add five `dict(chapter=N, section=…)` entries at the end of `PASSAGES` in
`scripts/build-bjt-passages.py` (copy the chapter 3 ones as a model).

- **Every one of the section's 25 words must appear**, naturally, in
  original text. ~14–17 lines, ~400–500 characters.
- **Formats:** `email`, `memo` (report), `notice`, `letter` (documents, read
  by the narrator: first two lines `H` headers 件名/宛先, last line `S`
  signature); `chat`, `phone`, `meeting`, `conversation` (spoken, with a
  speaker name per line). Vary them across the chapter.
- **Places:** set spoken passages somewhere with a place sound (see
  [Places](#places-ambience)), and vary them: a café, a shop, a station, a
  meeting room.
- **Speakers** must be in `SPEAKER_VOICE` in `scripts/generate-bjt-passages.ts`
  (中村, 木村, 田中課長, 佐藤, 山田, 小林). A new name needs a voice added there.
- **Readings:** add to `READING_FIX` any word janome misreads, especially
  counters and numbers (十か所 じゅっかしょ, 三十分 さんじゅっぷん, 一日 いちにち, 三冊),
  names (小林 こばやし), and 方 = かた when it means a person.

Build and check:
```bash
cp src/lib/passages_bjt.ts /tmp/before.ts
.venv-content/bin/python scripts/build-bjt-passages.py            # add --review to see every token
```
Required: every `N-x … tappable 25/25`, and **no `unintended tap` lines**.
Then confirm the earlier chapters' tokens did not change, because their
audio timings index those tokens:
```bash
python3 - <<'EOF'
a=open('/tmp/before.ts').read(); b=open('src/lib/passages_bjt.ts').read()
A=a[:a.rfind(']')].rstrip(); B=b[:b.find("    level: 'BJT', chapter: N")].rstrip().rstrip('{').rstrip()
print('earlier chapters unchanged:', A == B)
EOF
```
If a word is "not reachable", look at `--review`. Usually janome tagged it
oddly: ござい is an auxiliary, and 指し matched 指し示す. The splitter rules in
the script handle the known cases. If you change a rule, keep it scoped so
earlier chapters stay unchanged; `local` (the section's own words) exists
for that.

### 3. Voice the Read Along
```bash
BASE=$(grep VITE_AUDIO_BASE_URL .env | cut -d= -f2)
curl -s "$BASE/audio/passages/manifest.json?fresh=$(date +%s)" -o public/audio/passages/manifest.json
cp public/audio/passages/manifest.json /tmp/manifest.backup.json
npx tsx scripts/generate-bjt-passages.ts --chapter N --dry-run      # cost per passage
npx tsx scripts/generate-bjt-passages.ts --chapter N
```
The manifest is **shared with every N2/N3/BJT passage**. Always start from
the live copy and back it up first. Before uploading, confirm nothing else
changed:
```bash
python3 -c "
import json;a={e['id']:e for e in json.load(open('/tmp/manifest.backup.json'))['entries']};b={e['id']:e for e in json.load(open('public/audio/passages/manifest.json'))['entries']}
print('existing kept:', all(a[k]==b[k] for k in a), len(a),'->',len(b))"
for i in 1 2 3 4 5; do npx wrangler r2 object put "kamaru-audio/audio/passages/bjt-N-$i.mp3" --file "public/audio/passages/bjt-N-$i.mp3" --remote; done
npx wrangler r2 object put "kamaru-audio/audio/passages/manifest.json" --file public/audio/passages/manifest.json --remote
```
For words the voice would misread, add them to `SPEAK_AS` in
`generate-bjt-passages.ts`; it is voiced from kana while the display keeps
the kanji. Numbers (三十年 さんじゅうねん), 何か所, 聴読解 and BJT (ビージェーティー)
are already there.

### 4. Write and voice the Lessons
```bash
npx tsx scripts/dump-bjt-passages.ts N          # -> video/out/passages-chN.json
```
Create `video/lessons/bjt-chN.py`; copy `bjt-ch3.py` and rewrite every
word's content. Each `episode(...)` call takes:

- **title / title_en:** e.g. 調査とデータの言葉 / Surveys & data.
- **voices / cast:** the passage's speakers, mapped to voices. Give the boss
  role `'cast': 'boss'` and the junior `'staff'` (used by the video's
  talk bubbles). Narrated documents use `EXAMPLE_VOICES`.
- **blocks:** three groups of the 25 words, each `{jp, en, scene}`, plus
  `quiz`.
- **label:** what the reading part is (会議 · Meeting, メール · Email, カフェで ·
  At a café…). **ambience:** its place. **scene:** the video picture.
- **words:** for each word, `w(block, word, explanation, en, example, en)`.
  The explanation is in easy Japanese, one short sentence (〜ことです /
  〜という意味です). Keigo words say which form they are (言うの謙譲語です).
  The example is a natural business sentence. Never reuse the passage's
  own sentence.
- **quiz:** 5 questions with `q(...)`, mixing fill-the-blank (`blank(n)`)
  and "what is X called?". Spread the answers across positions 1–4. Each
  must have exactly one correct choice, so avoid choices that would also
  fit.
- **readings / speak:** furigana fixes, and numbers or counters to voice
  from kana (`NUM_READ` in the chapter file).

Lesson numbers continue across chapters: 第(5·(N−1)+section)課, handled
by `lesson_lib.py`.

```bash
python3 video/lessons/bjt-chN.py
.venv-content/bin/python video/scripts/check-lesson-furigana.py N   # must say "matches"
for s in 1 2 3 4 5; do .venv-content/bin/python video/scripts/build-episode.py bjt-N-$s --dry | head -1; done
```
In the dry run, check that **"reused from Read Along" equals the passage's
line count** (14–17); if it shows 0, the reading text differs from the
passage. Read the full dry-run output (`--dry` without `head`), which
prints every line with its furigana and what will actually be spoken, and
fix readings before spending credits. Then voice:
```bash
for s in 1 2 3 4 5; do .venv-content/bin/python -u video/scripts/build-episode.py bjt-N-$s || break; done
```
~70 lines per lesson, ~10 minutes each. **Do not edit an episode file
while it is being voiced**: the script reads it once at the start.

After voicing, look for broken takes (long gaps, very slow lines):
```bash
cd video && python3 - <<'EOF'
import json
for i in range(1,6):
    d=json.load(open(f'src/data/bjt-N-{i}.json')); bad=[]
    for s in d['segments']:
        for l in s['lines']:
            c=json.load(open(f'public/audio/bjt-N-{i}/{l["id"]}.json')).get('alignment')
            if not c: continue
            g=[round(c['character_start_times_seconds'][k+1]-c['character_end_times_seconds'][k],2) for k in range(len(c['characters'])-1) if c['character_start_times_seconds'][k+1]-c['character_end_times_seconds'][k]>0.7]
            if g: bad.append((l['id'],g))
    print(f'N-{i}', bad or 'ok')
EOF
```
Slow but gap-free lines are normal: the narrator reads headwords slowly.
A bad line: delete its `.json` in `video/public/audio/bjt-N-s/` and re-run
`build-episode.py` for that lesson. Only that line is re-voiced.

### 5. Put the Lessons in the app
1. `video/src/Root.tsx`: import `./data/bjt-N-1.json`… and add them to
   `EPISODES` (the sound bed is rendered from these compositions).
2. `src/lib/lessons.ts`: add `{ level: 'BJT', chapter: N, section: s, id: 'bjt-N-s', minutes: 7 }`
   rows. This makes the Lesson cards, the Dashboard card and Prev/Next
   appear.
3. Export (voice-only + with-sound MP3 + timeline JSON, ~2 min each). The
   JSON also carries what the app's interactive video needs (`dur`,
   `scene`, `blocks`, `screen`). To refresh only the JSON (seconds, MP3s
   untouched), add `--json-only`, then upload just the `.json`:
   ```bash
   (cd video && npx tsc --noEmit -p . && for s in 1 2 3 4 5; do npx tsx scripts/export-app.ts bjt-N-$s || break; done)
   for s in 1 2 3 4 5; do for f in bjt-N-$s.mp3 bjt-N-$s-sound.mp3 bjt-N-$s.json; do
     npx wrangler r2 object put "kamaru-audio/audio/lessons/$f" --file "public/audio/lessons/$f" --remote; done; done
   ```
4. Build and deploy:
   ```bash
   npx tsc -b && npm run build && npx wrangler pages deploy dist --project-name kamaru-jlpt --commit-dirty=true
   ```
5. Check in the browser (dev server: `npm run dev`, port 1997; "continue
   without account" (Lanjut tanpa akun) → pick BJT):
   - `/read/N/1…5`: audio plays, words light up, a tapped word opens the right entry
   - `/lesson/N/1`: the reading-part label, all three blocks, 25 words, the sound switch
   - `/study` with the plan on this chapter: the Watch step plays the video
   - Prev/Next from the previous chapter's last lesson into this one

### 6. Commit and push
Commit only what you made (the repo has unrelated untracked files:
`.vite/`, `*.pptx`, `*.docx`, `kamaru_qrcode.png`):
```bash
git add scripts/build-bjt-passages.py scripts/generate-bjt-passages.ts src/lib/passages_bjt.ts \
  src/lib/lessons.ts audio-src/passages video/episodes video/lessons video/src/data \
  video/public/audio video/src/Root.tsx docs/content-pipeline.md
git commit   # message ending with: Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
git push
```
Push after every chapter; the user wants the remote kept current. Then
update the **Status** table at the top.

### 7. Videos (later — the user asked to do audio and app first)
```bash
cd video
npx remotion render src/index.ts bjt-N-s out/bjt-N-s.mp4                    # landscape, full lesson
npx remotion render src/index.ts bjt-N-s-short out/bjt-N-s-short.mp4        # portrait short
```
Sound in videos: pass `--props='{"sound":"music"}'` (the Episode
composition defaults to `sound: 'off'`). About 8 minutes per landscape
render. `out/` is not committed. Rendered videos and voice backups will
move to Google Drive later.

---

## Reference

### Voices (ElevenLabs, model `eleven_v3` only)
| Key | ID | Use |
|---|---|---|
| Hikari (narrator) | `tTLw7unlQfMjcUKIUVzS` | host of every Lesson; documents in Read Along |
| Riku | `KJje3wzepLiSIQjVGCB6` | 中村, 田中課長, 山田 (calm, middle-aged male) |
| Sakura | `gHBfNp2PWSyFgpPlzCOd` | 木村, 小林 (young female) |
| Sushio | `iIeTr6tHs1VoWSqmCths` | 佐藤 (casual, younger male) |

Only `eleven_v3` reads Japanese kanji correctly. Older models romanise
them as pinyin and drop っ. v3 never reads the same text the same way
twice, so **never regenerate a line just to check it**; that is what the
committed clips are for.

### Places (ambience)
`office`, `meeting`, `training`, `cafe`, `store` (shop/crowd), `station`.
Files: `video/public/sfx/amb-<place>.mp3`, all levelled by
`video/scripts/make-beds.py`. A new place costs ~200 credits: generate a
20 s clip with the ElevenLabs sound-generation API, save it as
`video/public/sfx/<place>.mp3`, add it to `PLACES` in `make-beds.py`, run
the script, and add it to `SCENE_PLACE`/`PLACES` in `video/src/sound.tsx`.

### Sound design (already approved, version B)
Jingle at the start and end, a whoosh per block, a pop per word, a tick
during the 5 s quiz thinking time, a ding on the answer, music under
everything except the reading part (ducked under speech, ~18 dB below the
voice), and the place sound under the reading part (~16 dB below). Logic:
`video/src/sound.tsx`. Pacing: `video/src/timeline.ts`.

### Where things live
| What | Path | Committed? |
|---|---|---|
| BJT vocab | `public/bjt_vocab.json` | yes |
| Passage texts (source) | `scripts/build-bjt-passages.py` | yes |
| Passage tokens (generated, do not hand-edit) | `src/lib/passages_bjt.ts` | yes |
| Read Along clips | `audio-src/passages/bjt-N-s/NN.{mp3,json}` | yes (the backup) |
| Read Along audio + manifest | `public/audio/passages/` → R2 `audio/passages/` | no (R2) |
| Lesson content | `video/lessons/bjt-chN.py` → `video/episodes/bjt-N-s.json` | yes |
| Lesson clips | `video/public/audio/bjt-N-s/` | yes (the backup) |
| Lesson timeline (generated) | `video/src/data/bjt-N-s.json` | yes |
| Lesson audio for the app | `public/audio/lessons/` → R2 `audio/lessons/` | no (R2) |
| Shared readings | `video/episodes/_shared.json` | yes |

Audio is served from R2 (`VITE_AUDIO_BASE_URL`). The build drops
`dist/audio`, so deploys stay small. The app caches the manifest per
build (`BUILD_ID`), so after uploading new passages, **deploy** for them to
appear.

### Pitfalls already hit (don't repeat them)
- **方:** janome reads it ほう. When it means a person (担当者の方, 店舗の方), it
  must be かた: `READING_FIX` in passages, `readings` in lessons.
- **Numbers and counters:** always add readings, and voice from kana.
- **A lesson's furigana for reused lines** can differ from the passage's;
  `check-lesson-furigana.py` catches it.
- **Lone kana** (な, と) used to open kana words in the same section. The
  reader now ignores single-hiragana taps, but `build-bjt-passages.py` still
  reports `unintended tap`; reword if one appears.
- **Earlier chapters must not change.** Any rule change in
  `build-bjt-passages.py` can re-split old passages and desync their audio.
  Run the "unchanged" check every time.
- **The R2 manifest is shared.** Never upload it without the "existing
  kept" check.
- **Writing the BJT name:** voice it as ビージェーティー (already in SPEAK_AS
  and `_shared.json`).
- **貴社 vs 御社:** 貴社 is written, 御社 is spoken. Keep keigo correct in
  the passages, because the user is learning from them.

### Content and copyright rules
- All passages, explanations, examples and quizzes are **original**. The
  BJT word list came from the user's copy of the official guide: use the
  words only, never its sentences, questions or audio.
- Company and person names are invented (ミナト商事, サクラ電機, サクラシステム…).
- English only for now (no Indonesian translations in lessons yet).

---

## Who owns what
- **Content agent (this handbook):** passages, lesson scripts, voicing, sound
  assets, exports and uploads, the Lessons registry (`src/lib/lessons.ts`),
  `video/src/Root.tsx` registrations, videos.
- **Software development session:** everything else in `src/`, the reader
  and lesson player, app features, the build and deploy setup.
  - If content needs an app change (a new passage format, a new UI element),
    write down what is needed and hand it to that session rather than
    editing app code here.
  - Generated files (`src/lib/passages_bjt.ts`) and registry rows
    (`lessons.ts`) are fine for the content agent to change.
