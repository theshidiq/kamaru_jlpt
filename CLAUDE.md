# Kamaru — JLPT Study App

## Project Overview
A private web app for a small group of friends to practice for the JLPT
(Japanese Language Proficiency Test). All content is 100% original — no
reproduction of copyrighted JLPT exam materials. The app simulates the
authentic exam experience, especially the listening section.

**Current target user:** Kamal (N2, July 2026 exam) + small friend group.

---

## Tech Stack
- **Framework:** React 19 + TypeScript + Vite (port 1997)
- **Styling:** Tailwind CSS v3.4 + framer-motion animations
- **State:** Zustand (`useAppStore`, `useQuizStore`)
- **Backend:** Supabase (auth + postgres)
- **Routing:** react-router-dom v7
- **Path alias:** `@/` → `./src/`
- **Audio Generation:** MiniMax TTS API (Speech-02-HD model) — NOT YET INTEGRATED
- **Scene Illustrations:** SVG (programmatic) — NOT YET INTEGRATED

---

## Repo Structure
```
src/
  pages/          # Route-level components (see routes below)
  components/
    layout/       # Navbar, ProtectedRoute
    quiz/         # QuizRunner, ResultsScreen
  store/
    useAppStore   # Global state: auth, vocab, dark mode, word statuses
    useQuizStore  # Active quiz session: questions, results, score
  lib/
    vocab.ts      # Vocab loading, filtering, chapter/section utils
    quiz.ts       # Question generators (mondai1–4, grammar, reading, mock)
    grammar.ts    # GRAMMAR_QUESTIONS + GRAMMAR_QUESTIONS_N2 banks
    reading.ts    # READING_PASSAGES + READING_PASSAGES_N2 banks
    supabase.ts   # Supabase client
    i18n.ts       # Language helpers
  types/
    vocab.ts      # VocabWord, SectionInfo, ChapterInfo
    quiz.ts       # QuizQuestion, QuizResult, QuizType, QuizMode
    user.ts       # UserProfile, WordStatus, WordStatusRecord
  hooks/
    useAuth.ts    # Supabase auth session resolver
    useVocab.ts   # Triggers fetchVocab on login
```

---

## Routes
| Path | Page | Notes |
|---|---|---|
| `/login` | Login | Supabase OAuth |
| `/level-select` | LevelSelect | N4 or N2 |
| `/language-select` | LanguageSelect | Indonesian or English |
| `/` | Dashboard | Today's section, stats |
| `/vocab` | VocabBrowser | Browse all words |
| `/vocab/:chapter/:section` | VocabSection | Section word list |
| `/study` | StudySession | Today's flashcard study |
| `/quiz` | QuizHub | Quiz type picker |
| `/quiz/vocab` | VocabQuiz | Vocab multiple choice |
| `/quiz/grammar` | GrammarQuiz | Grammar fill-in-blank |
| `/reading` | Reading | Reading comprehension |
| `/mock-exam` | MockExam | Full simulated exam |
| `/progress` | Progress | Charts (recharts) |
| `/leaderboard` | Leaderboard | Friends ranking |
| `/flashcard` | FlashcardPicker | Section flashcard picker |

---

## Vocab Data
JSON files served from `/public/`:
- `/jtest_n4_vocab.json` — 894 words, 7 chapters × 6 sections = 42 sections
- `/jtest_n2_vocab.json` — 1,546 words, 12 chapters × 5 sections = 60 sections

Each word object:
```ts
{
  chapter: number         // 1–7 (N4) or 1–12 (N2)
  chapter_title: string   // Vietnamese (original)
  section: number         // 1–6 (N4) or 1–5 (N2)
  section_title: string   // Vietnamese (original)
  word: string            // raw, may contain ＜する＞ or HTML entities
  meaning_vi: string      // Vietnamese meaning
  meaning_en: string      // English meaning
  meaning_id?: string     // Indonesian meaning (optional)
  furigana?: string       // hiragana reading
  example?: { jp, en, seg: {t, r?}[] }
}
```

After loading, `loadVocab()` adds:
- `wordClean` — strips `＜する＞` and angle bracket tags
- `isSuruVerb` — boolean

**Today's section** is calculated from `study_start_date` in profile:
```ts
sectionIndex = daysElapsed % totalSections
chapter = floor(sectionIndex / sectionsPerChapter) + 1
section = (sectionIndex % sectionsPerChapter) + 1
```

---

## Quiz Question Types (JLPT-aligned)
Defined in `src/types/quiz.ts`:
```ts
type QuizMode = 'mondai1' | 'mondai2' | 'mondai3' | 'mondai4' | 'mondai5'
```

| Type | JLPT Section | Description | Status |
|---|---|---|---|
| `mondai1` | 問題1 | Kanji reading → choose furigana | ✅ Built |
| `mondai2` | 問題2 | Japanese word → choose meaning | ✅ Built |
| `mondai4` | 問題4 | Meaning given → choose Japanese word | ✅ Built |
| `grammar` | 文法 | Fill-in-blank grammar sentence | ✅ Built |
| `reading` | 読解 | Passage comprehension | ✅ Built |
| `mondai3` | 問題3 | Listening: scene image + audio | 🔲 NOT YET BUILT |
| `mondai5` | 問題5 | Listening: longer passage + printed handout | 🔲 NOT YET BUILT |

---

## Listening Feature — TO BE BUILT
This is the next major feature. It simulates the JLPT listening section.

### JLPT Listening Format Reference
**問題1 (Task-based comprehension):**
- Show a scene illustration (SVG) depicting a situation
- Play a dialogue between two speakers (male + female)
- Read the question aloud after dialogue
- Show 4 answer choices
- ~30 second pause before audio, 3 second pause at end

**問題3 (Verbal expression):**
- Show a scene illustration (SVG)
- Play a short spoken phrase
- Pick best response from 3 choices (audio only)

**問題5 (Integrated comprehension):**
- Display a printed handout on screen (schedule, menu, form — SVG/table)
- Play a longer passage
- Multiple questions on same audio

### Audio Generation Strategy — MiniMax TTS API
**Model:** `speech-02-hd` (or `speech-2.6-hd`)
**API endpoint:** `https://api.minimax.io/v1/t2a_v2`
**Auth:** Bearer token from `VITE_MINIMAX_API_KEY` in `.env`

**Voice assignments:**
- NARRATOR: neutral female announcer (reads question numbers, instructions)
- MALE: confident male voice (one side of dialogue)
- FEMALE: calm female voice (other side of dialogue)

**Dialogue script format:**
```ts
interface DialogueLine {
  speaker: 'NARRATOR' | 'MALE' | 'FEMALE'
  text: string          // Japanese text
  voiceId: string       // MiniMax voice ID
  emotion: 'neutral' | 'happy' | 'sad'
  speed: number         // 0.9 for exam-paced feel
}
```

**Audio stitching timing:**
- 800ms silence before dialogue starts
- 400ms gap between speaker turns
- 1500ms gap before question is read
- 3000ms silence at end (answer time)

**Language boost:** always set `languageBoost: 'Japanese'`

### Scene Illustration Strategy — SVG
- All scene images are programmatic SVG (no external images, no AI generation)
- Drawn inline as React SVG components
- Keep style simple: flat, clean, line-based (matches actual JLPT exam illustrations)
- Common scene types to support:
  - Office/workplace (desk, computer, whiteboard)
  - Station/transit (platform, ticket machine, map)
  - Restaurant/cafe (counter, menu, table)
  - Home (living room, kitchen)
  - Store/shopping (shelves, cashier)
  - Classroom (blackboard, desks)

### Listening Question Data Structure (planned)
```ts
interface ListeningQuestion {
  id: string
  mondaiType: 'mondai1' | 'mondai3' | 'mondai5'
  sceneType: string          // 'office' | 'station' | 'restaurant' etc.
  sceneProps?: object        // props passed to SVG scene component
  handout?: object           // for mondai5: printed handout data
  script: DialogueLine[]     // full dialogue script
  audioUrl?: string          // pre-generated mp3 URL (cached)
  question: string           // question text (also read by NARRATOR)
  options: string[]          // 4 answer choices
  correctIndex: number
  explanation?: string
}
```

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
- All new pages go in `src/pages/`, add route in `App.tsx`
- All quiz question generators go in `src/lib/quiz.ts`
- Use `useAppStore()` for global state (vocab, user, dark mode)
- Use `useQuizStore()` for active quiz session state
- Dark mode: `dark:` Tailwind classes, toggled via `document.documentElement.classList`
- Language: `preferredLanguage` is `'id'` (Indonesian) or `'en'` (English)
- Always use `getMeaning(word, lang)` to get meaning — never access `meaning_en` directly
- Word identity key is always `wordClean` (not `word`)
- Supabase client imported from `@/lib/supabase`

---

## Environment Variables (.env)
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_MINIMAX_API_KEY=...      # for TTS audio generation (not yet used)
VITE_MINIMAX_GROUP_ID=...     # MiniMax group ID (not yet used)
```

---

## Copyright & Content Policy
- NO reproduction of actual JLPT exam questions or audio
- All quiz questions are original, generated from our own vocab JSON data
- Grammar questions are original sentences written to test N4/N2 grammar patterns
- Reading passages are original text written at N4/N2 level
- Attribution to jtest.net for vocabulary source data
- Listening audio is 100% generated — no use of JLPT official audio
- Scene illustrations are 100% original SVG — no use of JLPT official images
- Site Policy clauses (1) personal use and (4) free educational use apply

---

## Dev Commands
```bash
npm run dev      # start dev server at http://localhost:1997
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # preview production build
```
