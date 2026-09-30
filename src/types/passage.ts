import type { JlptLevel } from '@/types/user'

/** One token of a sentence. Same shape as VocabWord['example'].seg so the
 *  existing <ruby> renderer in VocabSection works unchanged. */
export interface PassageToken {
  t: string   // surface text
  r?: string  // furigana reading (kanji tokens only)
}

export interface PassageSentence {
  seg: PassageToken[]
  en: string
  /** Who is speaking, for phone calls, meetings and chat. */
  speaker?: string
  /** Header lines (件名 / 宛先) and signatures render apart from the body. */
  kind?: 'header' | 'signature'
}

/**
 * Business text formats (BJT). Absent means a plain narrative passage — the
 * JLPT ones, which also have audio. Formatted passages are text-only.
 */
export type PassageFormat = 'email' | 'chat' | 'phone' | 'meeting' | 'memo' | 'notice' | 'letter'

export interface SectionPassage {
  level: JlptLevel
  chapter: number
  section: number
  title: string
  sentences: PassageSentence[]
  /** wordClean values from the section that this passage uses. */
  targetWords: string[]
  format?: PassageFormat
}

/** Per-token audio timing, derived at generation time from the ElevenLabs
 *  character alignment. Indexed [sentenceIndex][tokenIndex]. */
export interface PassageTiming {
  startMs: number
  endMs: number
}

export interface PassageAudioEntry {
  /** Model that produced this audio; a mismatch means the file is stale. */
  modelId?: string
  id: string          // `${level}-${chapter}-${section}`
  audioUrl: string
  durationMs: number
  timings: PassageTiming[][]
}

export interface PassageManifest {
  generatedAt: string
  voiceId: string
  modelId: string
  entries: PassageAudioEntry[]
}

export function passageId(level: JlptLevel, chapter: number, section: number): string {
  return `${level.toLowerCase()}-${chapter}-${section}`
}
