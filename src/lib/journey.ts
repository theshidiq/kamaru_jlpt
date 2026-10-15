/**
 * Today's Study is a journey of steps for one section: watch the lesson,
 * read along, flashcards, mini quiz, finish. Which steps are done is kept
 * per section on this device, so leaving and coming back resumes where you
 * were. Finishing the journey still saves the daily session as before,
 * which is what advances the plan.
 */
export type JourneyStep = 'watch' | 'read' | 'cards' | 'quiz' | 'finish'

const KEY = 'kamaru.journey'

function all(): Record<string, Partial<Record<JourneyStep, true>>> {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') } catch { return {} }
}

export function loadJourney(id: string): Partial<Record<JourneyStep, true>> {
  return all()[id] ?? {}
}

export function saveJourney(id: string, done: Partial<Record<JourneyStep, true>>) {
  try { localStorage.setItem(KEY, JSON.stringify({ ...all(), [id]: done })) } catch { /* private mode: this visit only */ }
}
