export type WordStatus = 'new' | 'learning' | 'known'

/**
 * Levels the app has content for. Order matches difficulty, easiest first.
 *
 * BJT (Business Japanese Proficiency Test) is not a JLPT level, but it has the
 * same shape — a vocab file split into chapters and sections — so it is listed
 * here to reuse the whole study flow. It sits last because its business
 * vocabulary assumes roughly N2.
 */
export const JLPT_LEVELS = ['N4', 'N3', 'N2', 'BJT'] as const
export type JlptLevel = (typeof JLPT_LEVELS)[number]

/** Display name: "JLPT N2", but plain "BJT". */
export function levelLabel(level: JlptLevel): string {
  return level === 'BJT' ? 'BJT' : `JLPT ${level}`
}

export interface UserProfile {
  id: string
  display_name: string
  avatar_url: string | null
  target_exam_date: string
  jlpt_level: JlptLevel | null
  preferred_language: 'id' | 'en' | null
  study_start_date: string | null
  created_at: string
}

export interface WordStatusRecord {
  word: string
  chapter: number
  section: number
  status: WordStatus
  updated_at: string
}
