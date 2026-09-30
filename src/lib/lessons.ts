import type { JlptLevel } from '@/types/user'

/**
 * Sections with a voiced audio lesson. The audio and timeline live with the
 * other audio (R2 in production) under /audio/lessons/<id>.{mp3,json}; the
 * episode itself is built in video/.
 */
const LESSONS: { level: JlptLevel; chapter: number; section: number; id: string; minutes: number }[] = [
  { level: 'BJT', chapter: 1, section: 1, id: 'bjt-1-1', minutes: 7 },
  { level: 'BJT', chapter: 1, section: 2, id: 'bjt-1-2', minutes: 8 },
  { level: 'BJT', chapter: 1, section: 3, id: 'bjt-1-3', minutes: 8 },
  { level: 'BJT', chapter: 1, section: 4, id: 'bjt-1-4', minutes: 8 },
  { level: 'BJT', chapter: 1, section: 5, id: 'bjt-1-5', minutes: 8 },
]

export function lessonFor(level: JlptLevel, chapter: number, section: number) {
  return LESSONS.find(l => l.level === level && l.chapter === chapter && l.section === section) ?? null
}

/** The lessons before and after this one in its level, in chapter/section order. */
export function lessonNeighbours(level: JlptLevel, chapter: number, section: number) {
  const all = LESSONS.filter(l => l.level === level).sort((a, b) => a.chapter - b.chapter || a.section - b.section)
  const i = all.findIndex(l => l.chapter === chapter && l.section === section)
  return { prev: i > 0 ? all[i - 1] : null, next: i >= 0 && i < all.length - 1 ? all[i + 1] : null }
}
