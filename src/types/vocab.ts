export interface VocabWord {
  chapter: number
  chapter_title: string
  section: number
  section_title: string
  word: string        // raw, may contain ＜する＞
  wordClean: string   // stripped display form
  isSuruVerb: boolean
  meaning_vi: string
  meaning_en: string
  meaning_id?: string
  chapter_title_id?: string
  section_title_id?: string
  chapter_title_en?: string
  section_title_en?: string
  furigana?: string   // hiragana reading from dataset
  /** BJT only: the JLPT list this word was already studied in, shown as a review badge. */
  alsoIn?: 'N2' | 'N3'
  example?: {
    jp: string
    en: string
    id?: string
    seg: { t: string; r?: string }[]
  }
}

export interface SectionInfo {
  chapter: number
  section: number
  chapter_title: string
  section_title: string
  words: VocabWord[]
  sectionIndex: number
}

export interface ChapterInfo {
  chapter: number
  chapter_title: string
  sections: SectionInfo[]
  totalWords: number
}
