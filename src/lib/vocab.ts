import type { VocabWord, ChapterInfo } from '@/types/vocab'
import type { JlptLevel } from '@/types/user'

export const TOTAL_SECTIONS = 42 // 7 chapters × 6 sections (N4 default)
export const DEFAULT_LEVEL: JlptLevel = 'N4'
const DEFAULT_START_DATE = new Date('2026-03-26')

export const LEVEL_CONFIG: Record<
  JlptLevel,
  { totalSections: number; chapters: number; sectionsPerChapter: number; file: string; words: number }
> = {
  N4: { totalSections: 42, chapters: 7, sectionsPerChapter: 6, file: '/jtest_n4_vocab.json', words: 894 },
  N3: { totalSections: 60, chapters: 12, sectionsPerChapter: 5, file: '/jtest_n3_vocab.json', words: 1390 },
  N2: { totalSections: 60, chapters: 12, sectionsPerChapter: 5, file: '/jtest_n2_vocab.json', words: 1546 },
}

export function getTodaySectionForLevel(level: JlptLevel, startDate?: string | null) {
  const { totalSections, sectionsPerChapter } = LEVEL_CONFIG[level]
  const base = startDate ? new Date(startDate) : DEFAULT_START_DATE
  const daysElapsed = Math.max(0, Math.floor((new Date().getTime() - base.getTime()) / 86400000))
  const sectionIndex = ((daysElapsed % totalSections) + totalSections) % totalSections
  const chapter = Math.floor(sectionIndex / sectionsPerChapter) + 1
  const section = (sectionIndex % sectionsPerChapter) + 1
  return { chapter, section, sectionIndex, daysElapsed }
}

export function getTodaySection() {
  return getTodaySectionForLevel(DEFAULT_LEVEL)
}

function decodeEntities(s: string): string {
  return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
}

export function cleanWord(raw: string): string {
  const decoded = decodeEntities(raw)
  return decoded.replace(/[＜<]する[＞>]/g, '').replace(/[＜<][^＞>]*[＞>]/g, '').trim()
}

export function isSuruVerb(raw: string): boolean {
  const decoded = decodeEntities(raw)
  return /[＜<]する[＞>]/.test(decoded)
}


const vocabCache: Partial<Record<JlptLevel, VocabWord[]>> = {}

export async function loadVocab(level: JlptLevel = DEFAULT_LEVEL): Promise<VocabWord[]> {
  if (vocabCache[level]) return vocabCache[level]!

  const res = await fetch(LEVEL_CONFIG[level].file)
  const raw: Array<{
    chapter: number
    chapter_title: string
    section: number
    section_title: string
    word: string
    meaning_vi: string
    meaning_en: string
    meaning_id?: string
    chapter_title_id?: string
    section_title_id?: string
    chapter_title_en?: string
    section_title_en?: string
    furigana?: string
    example?: { jp: string; en: string; seg: { t: string; r?: string }[] }
  }> = await res.json()

  vocabCache[level] = raw.map(item => ({
    ...item,
    wordClean: cleanWord(item.word),
    isSuruVerb: isSuruVerb(item.word),
  }))

  return vocabCache[level]!
}

export function getSection(vocab: VocabWord[], chapter: number, section: number): VocabWord[] {
  return vocab.filter(w => w.chapter === chapter && w.section === section)
}

export function getChapterWords(vocab: VocabWord[], chapter: number): VocabWord[] {
  return vocab.filter(w => w.chapter === chapter)
}

export function buildChapterMap(vocab: VocabWord[], sectionsPerChapter = 6): ChapterInfo[] {
  const chapters: Map<number, ChapterInfo> = new Map()

  for (const word of vocab) {
    if (!chapters.has(word.chapter)) {
      chapters.set(word.chapter, {
        chapter: word.chapter,
        chapter_title: word.chapter_title,
        sections: [],
        totalWords: 0,
      })
    }
    const ch = chapters.get(word.chapter)!
    ch.totalWords++

    let sec = ch.sections.find(s => s.section === word.section)
    if (!sec) {
      const sectionIndex = (word.chapter - 1) * sectionsPerChapter + (word.section - 1)
      sec = {
        chapter: word.chapter,
        section: word.section,
        chapter_title: word.chapter_title,
        section_title: word.section_title,
        words: [],
        sectionIndex,
      }
      ch.sections.push(sec)
    }
    sec.words.push(word)
  }

  return Array.from(chapters.values()).sort((a, b) => a.chapter - b.chapter)
}

export function getSectionTitle(vocab: VocabWord[], chapter: number, section: number): string {
  const w = vocab.find(v => v.chapter === chapter && v.section === section)
  return w?.section_title ?? ''
}

export function getChapterTitle(vocab: VocabWord[], chapter: number): string {
  const w = vocab.find(v => v.chapter === chapter)
  return w?.chapter_title ?? ''
}

export function getMeaning(word: VocabWord, lang: 'id' | 'en'): string {
  if (lang === 'id' && word.meaning_id) return word.meaning_id
  return word.meaning_en
}

export function getChapterTitleLang(item: VocabWord, lang: 'id' | 'en'): string {
  if (lang === 'id' && item.chapter_title_id) return item.chapter_title_id
  if (lang === 'en' && item.chapter_title_en) return item.chapter_title_en
  return item.chapter_title
}

export function getSectionTitleLang(item: VocabWord, lang: 'id' | 'en'): string {
  if (lang === 'id' && item.section_title_id) return item.section_title_id
  if (lang === 'en' && item.section_title_en) return item.section_title_en
  return item.section_title
}

export function filterVocab(
  vocab: VocabWord[],
  query: string,
  statusFilter: 'all' | 'new' | 'learning' | 'known',
  statuses: Record<string, string>,
  chapterFilter?: number,
  lang: 'id' | 'en' = 'en',
): VocabWord[] {
  return vocab.filter(w => {
    if (chapterFilter && w.chapter !== chapterFilter) return false
    if (statusFilter !== 'all') {
      const s = statuses[w.wordClean] ?? 'new'
      if (s !== statusFilter) return false
    }
    if (query) {
      const q = query.toLowerCase()
      return (
        w.wordClean.includes(q) ||
        w.meaning_en.toLowerCase().includes(q) ||
        w.meaning_vi.toLowerCase().includes(q) ||
        (lang === 'id' && !!w.meaning_id && w.meaning_id.toLowerCase().includes(q))
      )
    }
    return true
  })
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
