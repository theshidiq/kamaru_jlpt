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
  furigana?: string   // hiragana reading from dataset
  example?: {
    jp: string
    en: string
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
