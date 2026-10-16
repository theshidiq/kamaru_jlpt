# Handoff: pictures on the flashcards

From the content session, 2026-10-16. For the software session.

**Status: done** (software session, 2026-10-16). `src/hooks/useWordArt.ts`;
picture on the back of the card, in Today's Study and in the section
flashcard view (`/flashcard` → `/vocab/:ch/:sec?view=flashcard`).

## Why
Kamal wants each flashcard to come with a picture. Content has drawn a small
scene for every word, in the Lesson video's flat style (same faceless office
people). Chapter 1 is done (125 words), and later chapters follow ahead of
the study plan.

## What content has done (committed)
- `public/art/words/bjt-<ch>-<sec>/<NN>.svg`: one 480×320 SVG per word,
  about 8 KB each, served with the app (not R2: about 1 MB for chapter 1).
- `public/art/words/manifest.json`: `{ "<wordClean>": "bjt-1-1/01.svg", … }`.
  The keys are `wordClean`. A word with no entry has no picture yet.
- The pictures never spell out their own word (they are hints), and they have
  their own light backgrounds, so they read the same in light and dark mode.

## What the app needs
1. Load the manifest once (`/art/words/manifest.json`; append `?v=__BUILD_ID__`
   like the other content fetches), and look a word up by `wordClean`.
2. **Flashcards** (Today's Study `Flashcards` in `StudySession.tsx`, and the
   `/flashcard` page): show the picture when there is one, as an
   `<img>` with a 3:2 aspect ratio, rounded corners, `loading="lazy"` and an
   empty `alt` (the word is already on the card).
   - Suggested: on the **back**, above the reading and meaning, so the front
     still tests recall. Kamal asked for "cards with an illustration"; if it
     should be on the front instead (as a hint), that is a one-line change.
   - Reserve the space only when a picture exists, so cards without one keep
     today's layout.
3. Optional: preload the next card's picture so flipping feels instant.

## Check
`/study` on BJT 1-1, Flashcards step: flip 納品 and see a delivery truck,
flip 値引き and see a crossed-out price tag. A section without pictures
(chapter 2 for now) shows the cards exactly as before.
