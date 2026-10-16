# Handoff: drop the Finish step, go straight on to the next section

From the content session, 2026-10-16. For the software session.

## What Kamal asked
"No need this page, also continue to section 2". The Finish step ("How was
today's session? Easy / Okay / Hard → Complete!") should go. Finishing a
section should lead straight into the next one, e.g. 1-1 → 1-2, since Kamal
studies 2 sections a day.

## 1. Remove the Finish step (`src/pages/StudySession.tsx`)
- Today the session is saved only by `Finish.complete()`
  (`upsertDailySession`). That save is what moves the plan on
  (`usePlanSection`: furthest completed + 1), so it must still happen, just
  automatically.
- Suggested: when the **last step** is completed (the Mini quiz's done, or the
  last step's Next), save the session with `self_rating: null` (the type
  already allows it), show the existing "Session complete" toast, and open the
  next section's journey in place: Watch step, progress reset. Add a
  small "Next: Chapter 1 · Section 2" line or button so the move is clear.
- Decide what counts as done when a step was skipped. In the screenshot, step
  3 (Flashcards) was not ticked, yet the user reached the end. Simplest: reaching the
  end saves the section, as today.
- Remove the journey's 5th step in `src/lib/journey.ts` and its i18n strings,
  if nothing else uses them.

## 2. Bug: signed-in BJT users never advance (please check first)
This blocks "continue to section 2" for a signed-in account.
- `supabaseStore.upsertDailySession` leaves out `level` because
  `daily_sessions` has no `level` column, and `getSessions` selects no level.
- `usePlanSection` keeps only `s.level === level`, or sessions without a level
  **only when the level is not BJT**. So every BJT session read from Supabase
  is dropped, and the plan stays at BJT 1-1.
- Guests are fine (the local store keeps `level`).
- Fix: add a nullable `level text` column to `daily_sessions` (migration),
  write and select it, and keep treating old rows without a level as JLPT.

## 3. Bug: a second section on the same day overwrites the first
- The Supabase upsert uses `onConflict: 'user_id,session_date'`, and the local
  store keys on date + level. Doing 1-1 and then 1-2 on one day leaves only
  the 1-2 row. The plan still advances (it uses the furthest section), but
  history, Progress and streak lose a section.
- Fix: key on `user_id, session_date, level, chapter, section` (or no unique
  key), in both stores.

## Check
Signed in, BJT: finish 1-1 → the journey opens 1-2 with no Finish page →
reload `/study` and it still shows 1-2 → finish 1-2 the same day → both 1-1
and 1-2 appear in Progress, and the plan shows 1-3. Repeat as a guest.
