/**
 * An audio lesson: one voiced episode (built in video/, exported by
 * video/scripts/export-app.ts) played as a single MP3 with this timeline.
 * Line times are absolute ms in the file; unit times are relative to their line.
 */
export interface LessonPart { t: string; r?: string }
export interface LessonUnit { parts: LessonPart[]; start: number; end: number; word?: string }
export interface LessonLine {
  id: string
  sp: string            // 'host' | a character key
  name: string          // speaker's display name
  cast?: 'boss' | 'staff' // their role in the conversation
  role?: 'explain' | 'example' | 'ask' | 'reveal'
  en: string
  at: number
  durationMs: number
  units: LessonUnit[]
}
export interface LessonSegment {
  type: 'intro' | 'scene' | 'bridge' | 'word' | 'quiz' | 'outro'
  block?: string
  /** the reading part's kind: 会議, 報告書, お知らせ… (default: a conversation) */
  label?: { jp: string; en: string }
  at: number
  lines: LessonLine[]
  // word
  word?: string; reading?: string; meaning?: string; alsoIn?: string | null; index?: number; total?: number
  // quiz
  n?: number; prompt?: { parts: LessonPart[] }[]; promptEn?: string; choices?: string[]; answer?: number
}
export interface Lesson {
  id: string
  level: string
  chapter: number
  section: number
  title: string
  titleEn: string
  label: string
  durationMs: number
  audioUrl: string
  blocks: Record<string, { jp: string; en: string }>
  segments: LessonSegment[]
}
