import { useMemo } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { useProgress } from '@/hooks/useProgress'
import { LEVEL_CONFIG, DEFAULT_LEVEL } from '@/lib/vocab'

/**
 * The section to study next, derived from what has actually been completed.
 *
 * The original schedule was date-based: sectionIndex = daysElapsed % 60. That
 * advanced whether or not the app was opened, so a missed day silently skipped
 * a section and the plan ran ahead of the learner.
 *
 * Next = one past the furthest section completed, so finishing a section is
 * what moves the plan on. Falls back to the first section when nothing has
 * been completed, and clamps at the end of the level.
 *
 * Furthest rather than count: sections can be studied out of order, and
 * counting them would hand back a section that was already done.
 */
export function usePlanSection() {
  const user = useAppStore(s => s.user)
  const progress = useProgress()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL

  return useMemo(() => {
    const { sectionsPerChapter, totalSections } = LEVEL_CONFIG[level]
    // Only this level's sessions. Sessions saved before levels were recorded
    // have no level; they came from JLPT study, so they count for the JLPT
    // levels but not for BJT, which starts from its first section.
    const own = progress.sessions.filter(s => s.level ? s.level === level : level !== 'BJT')
    const furthest = own.reduce((max, ses) => {
      const idx = (ses.chapter - 1) * sectionsPerChapter + (ses.section - 1)
      return idx > max ? idx : max
    }, -1)
    const index = Math.min(furthest + 1, totalSections - 1)
    return {
      chapter: Math.floor(index / sectionsPerChapter) + 1,
      section: (index % sectionsPerChapter) + 1,
      index,
      totalSections,
      /** True once every section has been completed at least once. */
      done: furthest >= totalSections - 1,
    }
  }, [level, progress.sessions])
}
