export type WordStatus = 'new' | 'learning' | 'known'

export interface UserProfile {
  id: string
  display_name: string
  avatar_url: string | null
  target_exam_date: string
  created_at: string
}

export interface WordStatusRecord {
  word: string
  chapter: number
  section: number
  status: WordStatus
  updated_at: string
}
