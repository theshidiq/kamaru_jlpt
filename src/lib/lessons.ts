import type { JlptLevel } from '@/types/user'

/**
 * Sections with a voiced audio lesson. The audio and timeline live with the
 * other audio (R2 in production) under /audio/lessons/<id>.{mp3,json}; the
 * episode itself is built in video/.
 */
const LESSONS: { level: JlptLevel; chapter: number; section: number; id: string; minutes: number }[] = [
  { level: 'BJT', chapter: 1, section: 1, id: 'bjt-1-1', minutes: 7 },
]

export function lessonFor(level: JlptLevel, chapter: number, section: number) {
  return LESSONS.find(l => l.level === level && l.chapter === chapter && l.section === section) ?? null
}
