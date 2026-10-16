import type { JlptLevel } from '@/types/user'
import type { SectionPassage } from '@/types/passage'
import { PASSAGES_N2 } from '@/lib/passages_n2'
import { PASSAGES_N3 } from '@/lib/passages_n3'
import { PASSAGES_BJT } from '@/lib/passages_bjt'
import { PASSAGES_BJT_ALT } from '@/lib/passages_bjt_alt'

/**
 * Reader passages by level, mirroring GRAMMAR_BANK / READING_BANK in quiz.ts.
 *
 * A level with no passages yet is an empty array rather than a missing key,
 * so the reader renders its "not available" state instead of throwing.
 */
export const PASSAGE_BANK: Record<JlptLevel, SectionPassage[]> = {
  N4: [],
  N3: PASSAGES_N3,
  N2: PASSAGES_N2,
  BJT: PASSAGES_BJT,
}

/**
 * Second passages: the section's topic and words told another way, text
 * only. Today's Study reads one after the Lesson, which already reads the
 * first passage aloud; /read keeps the first.
 */
const PASSAGE_BANK_ALT: Partial<Record<JlptLevel, SectionPassage[]>> = {
  BJT: PASSAGES_BJT_ALT,
}

export function altPassageFor(level: JlptLevel, chapter: number, section: number): SectionPassage | undefined {
  return PASSAGE_BANK_ALT[level]?.find(p => p.chapter === chapter && p.section === section)
}
