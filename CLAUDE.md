# Kamaru — JLPT & BJT Study App

## Project Overview
A private web app for a small group of friends to study Japanese for the JLPT
(Japanese Language Proficiency Test) and the BJT (Business Japanese
Proficiency Test). All content is 100% original: no reproduction of
copyrighted exam materials. It simulates the real exam experience,
especially listening.

**Current target user:** Kamal, now preparing for the **BJT** in Japan at
about 2 sections a day, plus a small friend group. BJT content comes first.

**Two kinds of session work on this repo:**
- **Software development** (app features, UI, build/deploy): this file.
- **Content** (BJT reading passages, voiced Lessons, sound, videos): run in
  a separate conversation, following **[docs/content-pipeline.md](docs/content-pipeline.md)**,
  which has the whole pipeline, its status, and the pitfalls already hit.
  If a content task needs an app change, it is written up and handed to the
  software session.

---

## Tech Stack
- **Framework:** React 19 + TypeScript + Vite (port 1997)
- **Styling:** Tailwind CSS v3.4 + framer-motion animations
- **State:** Zustand (`useAppStore`, `useQuizStore`)
- **Backend:** Supabase (auth + postgres); a local guest mode also works without an account
- **Routing:** react-router-dom v7
- **Path alias:** `@/` → `./src/`
- **Audio:**
  - Read Along and Lessons: ElevenLabs `eleven_v3` (the only model that
    reads Japanese kanji correctly), with character-level timings for the
    word highlighting.
  - Listening quiz: MiniMax `speech-02-hd`.
  - All audio is served from Cloudflare R2 (`VITE_AUDIO_BASE_URL`), never
    bundled into the app.
- **Scene illustrations:** programmatic SVG (`src/components/scenes/` for
  the quiz; `video/src/art/` for videos). No AI images.
- **Video:** a separate Remotion project in `video/` (own `package.json`;
  ignored by the root lint and build).

---

## Repo Structure
```
src/
  pages/            # Route-level components (see routes below)
  components/
    layout/         # Navbar (hamburger drawer), PageWrapper, ProtectedRoute
    quiz/           # QuizRunner, ResultsScreen, ListeningPlayer
    reader/         # FormattedPassage (email/chat/phone/meeting/… layouts)
    scenes/         # SVG scenes for the listening quiz
    ListenCard.tsx  # Read Along / Lesson entry card
  store/            # useAppStore (auth, vocab, dark mode, word statuses), useQuizStore
  lib/
    vocab.ts        # LEVEL_CONFIG, vocab loading, chapter/section utils
    quiz.ts         # Question generators (mondai1–4, grammar, reading, mock)
    grammar.ts      # Grammar banks
    reading.ts      # Reading comprehension banks
    passages*.ts    # Read Along passage texts per level (passages_bjt.ts is generated)
    lessons.ts      # Registry of sections that have a Lesson
    listening.ts    # Listening quiz questions
    assets.ts       # audioUrl(): resolves audio paths against VITE_AUDIO_BASE_URL
    storage.ts      # Local/Supabase persistence (sessions, last read)
    supabase.ts, i18n.ts
  types/            # vocab, quiz, user, passage, lesson, listening
  hooks/            # useAuth, useVocab, useProgress, usePlanSection
scripts/            # Content build scripts (passages, voicing, R2 sync)
audio-src/          # Committed Read Along voice clips (backup; regenerating costs credits)
video/              # Remotion: lesson scripts, voicing, sound, export to the app, MP4s
docs/               # content-pipeline.md (content handbook), commercial-strategy.md (on hold)
```

---

## Routes
| Path | Page | Notes |
|---|---|---|
| `/login` | Login | Supabase OAuth, email, or continue as guest |
| `/level-select` | LevelSelect | N4, N3, N2 or BJT |
| `/language-select` | LanguageSelect | Indonesian or English |
| `/` | Dashboard | Plan section, Read Along / Lesson cards, stats |
| `/vocab` | VocabBrowser | Browse all words |
| `/vocab/:chapter/:section` | VocabSection | Word list + Read Along / Lesson cards |
| `/study` | StudySession | **Today's Study journey** for the plan section: Watch (interactive video) → Read Along → Flashcards → Mini quiz → Finish |
| `/read/:chapter/:section` | SectionReader | **Read Along**: passage with audio and word highlighting |
| `/lesson/:chapter/:section` | LessonPlayer | **Lesson**: full narrated lesson, quiz, sound on/off |
| `/quiz` | QuizHub | Quiz type picker |
| `/quiz/vocab` | VocabQuiz | Vocab multiple choice |
| `/quiz/grammar` | GrammarQuiz | Grammar fill-in-blank |
| `/quiz/listening` | ListeningQuiz | Listening questions with SVG scenes |
| `/reading` | Reading | Reading comprehension |
| `/mock-exam` | MockExam | Full simulated exam |
| `/progress` | Progress | Charts (recharts) |
| `/leaderboard` | Leaderboard | Friends ranking |
| `/flashcard` | FlashcardPicker | Section flashcard picker |

The two listening features are named for what you do in each, with one
icon each everywhere. Keep these names:
- **Read Along** (Baca Bersama), book icon: the passage read aloud.
- **Lesson** (Pelajaran), headphone icon: the full narrated class.

---

## Vocab Data
JSON files served from `/public/`, configured in `LEVEL_CONFIG` (`src/lib/vocab.ts`):

| Level | File | Words | Structure |
|---|---|---|---|
| N4 | `/jtest_n4_vocab.json` | 894 | 7 chapters × 6 sections |
| N3 | `/jtest_n3_vocab.json` | 1,390 | 12 × 5 |
| N2 | `/jtest_n2_vocab.json` | 1,546 | 12 × 5 |
| BJT | `/bjt_vocab.json` | 1,573 | 13 chapters, 63 sections of 25 (the last has 23), most frequent first; `alsoIn` marks words also on N2/N3 |

Each word object:
```ts
{
  chapter: number, chapter_title: string, section: number, section_title: string
  word: string            // raw, may contain ＜する＞ or HTML entities
  meaning_vi: string      // Vietnamese meaning (JLPT files; empty for BJT)
  meaning_en: string      // English meaning
  meaning_id?: string     // Indonesian meaning (optional)
  furigana?: string       // hiragana reading
  example?: { jp, en, seg: {t, r?}[] }
  alsoIn?: 'N2' | 'N3'    // BJT only
}
```

After loading, `loadVocab()` adds:
- `wordClean`: strips `＜する＞` and angle-bracket tags.
- `isSuruVerb`: boolean.

**The plan section** advances on completion, not by calendar: the next
section is the furthest completed + 1, per level (`usePlanSection`).

---

## Quiz Question Types (JLPT-aligned)
| Type | JLPT Section | Description | Status |
|---|---|---|---|
| `mondai1` | 問題1 | Kanji reading → choose furigana | ✅ Built |
| `mondai2` | 問題2 | Japanese word → choose meaning | ✅ Built |
| `mondai4` | 問題4 | Meaning given → choose Japanese word | ✅ Built |
| `grammar` | 文法 | Fill-in-blank grammar sentence | ✅ Built |
| `reading` | 読解 | Passage comprehension | ✅ Built |
| listening | 聴解 | Scene + dialogue + 4 choices (`/quiz/listening`, 35 questions, MiniMax audio) | ✅ Built |
| BJT quiz | — | Vocab quiz for BJT words | 🔲 Not built (the user said "quiz later") |

---

## Audio architecture (for app work)
- **Read Along:** one MP3 per passage, plus a shared
  `audio/passages/manifest.json` with per-token timings
  (`timings[sentence][token]`). `SectionReader` highlights by
  requestAnimationFrame. Tapping a line plays from it.
- **Lesson:** `audio/lessons/<id>.json` is the timeline, with two MP3s:
  `<id>.mp3` (voice only) and `<id>-sound.mp3` (with music, effects and
  place sounds). `LessonPlayer` swaps between them at the same position;
  the choice is remembered per device. One file per lesson, so playback
  survives a locked phone screen.
- **Caching:** R2's `r2.dev` sends no Cache-Control, so every fetch carries
  `?v=__BUILD_ID__`. New audio appears after a deploy.
- **Media Session** gives lock-screen controls on the Lesson page.
- **Desktop controls:** `AudioBar` (`src/components/AudioBar.tsx`) holds
  every control in one row under the navbar on both audio pages. On those
  routes the navbar hides while scrolling down and returns on any scroll up
  (`useAutoHideNav`), and the bar moves to the top. Space plays/pauses.
  Phones keep the thumb-side buttons and the bottom bar.
  - Hidden documents get no scroll events, so in a background browser pane
    test the behaviour by calling `dispatchEvent(new Event('scroll'))`
    after each scroll.
- **Interactive video (the Watch step of `/study`):** the Remotion Player
  (`@remotion/player`) draws the video project's own `Episode` live over
  the Lesson's existing MP3, so nothing is rendered or voiced for it.
  - `src/components/video/InteractiveLesson.tsx` (lazy-loaded, its own
    ~360 KB chunk). `@video/*` resolves to `video/src/*`; Vite dedupes
    React and Remotion so both projects share one copy.
  - `src/lib/lessonVideo.ts` turns the lesson JSON into the episode shape.
    It needs the video fields that `export-app.ts` writes (`dur`, `scene`,
    `blocks`, `screen`); older JSON without them falls back to a link to
    `/lesson`.
  - Interaction goes through `video/src/interaction.ts` (a context):
    furigana/EN toggles, word taps, and quiz answers. MP4 renders use the
    defaults, so they are unchanged.
  - The quiz pauses at each question's thinking time until answered;
    answering jumps to the reveal.
- **Journey Read step** shows the section's second passage (`altPassageFor`,
  `src/lib/passages_bjt_alt.ts`, text only) via `SectionReaderView
  variant="alt"`, since the Lesson already reads the first one aloud. It
  skips the audio manifest; あ/EN float at the side once the inline bar
  scrolls away. `/read` and the Lesson keep the first passage.
- **Journey progress** is per section in localStorage (`src/lib/journey.ts`).
  Finish saves the daily session, which advances the plan, as before.

---

## Supabase Schema (relevant tables)
```sql
profiles (id, display_name, avatar_url, jlpt_level, preferred_language,
          study_start_date, target_exam_date, created_at)

word_status (user_id, word, status, chapter, section, updated_at)
-- status: 'new' | 'learning' | 'known'
-- PK: (user_id, word)

quiz_attempts (user_id, quiz_type, chapter, section, score, total,
               accuracy, elapsed_seconds, created_at)

mock_exam_attempts (user_id, vocab_score, grammar_score, reading_score,
                    total_scaled, passed, created_at)

daily_sessions (user_id, chapter, section, completed_at)
```

---

## Key Conventions
- All new pages go in `src/pages/`; add the route in `App.tsx`.
- All quiz question generators go in `src/lib/quiz.ts`.
- Use `useAppStore()` for global state (vocab, user, dark mode).
- Use `useQuizStore()` for active quiz session state.
- Dark mode: `dark:` Tailwind classes, toggled via `document.documentElement.classList`.
- Language: `preferredLanguage` is `'id'` (Indonesian) or `'en'` (English);
  every UI string goes through `t()` in `src/lib/i18n.ts` with both languages.
- Always use `getMeaning(word, lang)` to get a meaning; never access `meaning_en` directly.
- The word identity key is always `wordClean` (not `word`).
- The Supabase client is imported from `@/lib/supabase`.
- React Compiler lint rules apply: no synchronous setState in effects, and
  no components defined inside components (use render functions).
- The lint baseline is 21 problems (17 errors, 4 warnings), all
  pre-existing. Don't add new ones.
- `position: fixed` UI inside pages must be portalled to `document.body`,
  because `PageWrapper` animates with a transform.

---

## Environment Variables (.env — never commit; list names, never values)
```
VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_GOOGLE_CLIENT_ID
VITE_AUDIO_BASE_URL          # R2 public URL that all audio is served from
VITE_MINIMAX_API_KEY, VITE_MINIMAX_GROUP_ID   # listening quiz audio
ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID, ELEVENLABS_MODEL   # Read Along / Lessons (eleven_v3)
```

---

## Copyright & Content Policy
- NO reproduction of actual JLPT or BJT exam questions or audio.
- All quiz questions, passages, explanations and examples are original.
- Grammar questions are original sentences written to test N4/N2 grammar patterns.
- Reading passages are original text.
- The JLPT vocab lists come from jtest.net (attributed). The BJT list is
  words taken from the user's copy of the official guide: words only, never
  its sentences, questions or audio.
- All audio is generated; no official exam audio.
- Scene illustrations are 100% original SVG.
- Site Policy clauses (1) personal use and (4) free educational use apply.

---

## Dev Commands
```bash
npm run dev      # dev server at http://localhost:1997
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # preview production build
```

---

## Deployment
- **Host:** Cloudflare Pages (Wrangler CLI, direct upload; not git-connected).
- **Project name:** `kamaru-jlpt` (note: *not* `kamaru`).
- **Live URL:** https://kamaru-jlpt.pages.dev
- **Deploy:**
  `npm run build && npx wrangler pages deploy dist --project-name kamaru-jlpt --commit-dirty=true`
  (`--commit-dirty` because the repo has unrelated untracked files).
- **The build drops `dist/audio`** whenever `VITE_AUDIO_BASE_URL` is set
  (`vite.config.ts`). Local audio copies must not be deployed: at 169 MB,
  Pages refused the upload.
- **Audio goes to R2,** bucket `kamaru-audio`, via
  `npx wrangler r2 object put kamaru-audio/<path> --file <file> --remote`.
- **SPA routing:** `public/_redirects` (`/* /index.html 200`) is required,
  or deep links 404.
- Requires `npx wrangler login` once per machine (`pages (write)` scope).

## Git
- Commit and push to `origin/main` when a piece of work is done.
- Commit only the files the work touched. Leave `.vite/`, `*.pptx`,
  `*.docx` and `kamaru_qrcode.png` out.
- End commit messages with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
