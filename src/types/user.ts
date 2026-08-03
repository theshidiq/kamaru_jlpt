export type WordStatus = 'new' | 'learning' | 'known'

/** Levels the app has content for. Order matches difficulty, easiest first. */
export const JLPT_LEVELS = ['N4', 'N3', 'N2'] as const
export type JlptLevel = (typeof JLPT_LEVELS)[number]

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
