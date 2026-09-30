# Kamaru video episodes

Remotion project that turns a lesson script into an MP4: a landscape full
episode and a portrait short. It is separate from the app (own
`package.json`, ignored by the root lint and build).

## Make an episode

1. Write the script: `episodes/<id>.json`. Each segment is spoken text plus
   an English line:
   - `intro`
   - `scene` (a conversation)
   - `bridge` (block title)
   - `word` (explanation and example for one vocab word)
   - `quiz` (question, 4 choices, answer)
   - `outro`

   `readings` fixes furigana, and `speakKana` lists tokens the voice should
   read from their kana (numbers, 御社, …).
2. Check it for free:
   `python video/scripts/build-episode.py <id> --dry`
   This prints every line with its furigana, what will actually be spoken,
   and the credit cost.
3. Voice it: `python video/scripts/build-episode.py <id>`
   This writes `public/audio/<id>/*.mp3` and `src/data/<id>.json`. Only new
   or changed lines are voiced, so edits are cheap. Needs `pip install
   janome`, ffprobe, and `ELEVENLABS_API_KEY` in the repo `.env`.
4. Preview: `npm run studio`. Render:
   - `npx remotion render src/index.ts <id> out/<id>.mp4`
   - `npx remotion render src/index.ts <id>-short out/<id>-short.mp4`

5. Put it in the app: `npx tsx scripts/export-app.ts <id>` stitches the clips
   into one MP3 and writes the lesson timeline to
   `../public/audio/lessons/<id>.{mp3,json}`. Upload both to R2:
   - `npx wrangler r2 object put kamaru-audio/audio/lessons/<file> --file ../public/audio/lessons/<file> --remote`

   Then add the section to `LESSONS` in `src/lib/lessons.ts`. The
   `/lesson/:chapter/:section` page plays it.

Pacing (gaps, quiz thinking time) lives in `src/timeline.ts`; scenes are
code-drawn SVG in `src/art/` (no AI images, per the app's convention).

## Cost

bjt-1-1: 78 lines, 1,764 characters, 705 credits on eleven_v3, 7m19s. The
voice clips are committed, because regenerating them costs credits and v3
never reads a line the same way twice.
