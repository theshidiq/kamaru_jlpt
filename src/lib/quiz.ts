import type { QuizQuestion } from '@/types/quiz'
import type { VocabWord } from '@/types/vocab'
import type { JlptLevel } from '@/types/user'
import { getChapterWords, getSection, shuffle, getMeaning, LEVEL_CONFIG, DEFAULT_LEVEL } from '@/lib/vocab'
import { GRAMMAR_QUESTIONS, GRAMMAR_QUESTIONS_N3, GRAMMAR_QUESTIONS_N2 } from '@/lib/grammar'
import { READING_PASSAGES, READING_PASSAGES_N3, READING_PASSAGES_N2 } from '@/lib/reading'

const GRAMMAR_BANK: Record<JlptLevel, typeof GRAMMAR_QUESTIONS> = {
  N4: GRAMMAR_QUESTIONS,
  N3: GRAMMAR_QUESTIONS_N3,
  N2: GRAMMAR_QUESTIONS_N2,
}

const READING_BANK: Record<JlptLevel, typeof READING_PASSAGES> = {
  N4: READING_PASSAGES,
  N3: READING_PASSAGES_N3,
  N2: READING_PASSAGES_N2,
}

let questionCounter = 0
function nextId(prefix: string) {
  return `${prefix}-${++questionCounter}-${Date.now()}`
}

function pickDistractors(pool: VocabWord[], exclude: VocabWord, key: 'meaning_en' | 'wordClean', count = 3): string[] {
  const candidates = pool.filter(
    w => w.wordClean !== exclude.wordClean && w[key] !== exclude[key]
  )
  return shuffle(candidates)
    .slice(0, count)
    .map(w => w[key])
}

function pickFuriganaDistractors(pool: VocabWord[], exclude: VocabWord, count = 3): string[] {
  const candidates = pool.filter(
    w => w.furigana && w.wordClean !== exclude.wordClean && w.furigana !== exclude.furigana
  )
  return shuffle(candidates)
    .slice(0, count)
    .map(w => w.furigana!)
}

// 問題1: Choose correct furigana (reading) for a kanji word — JLPT exam style
export function generateMondai1(
  vocab: VocabWord[],
  chapter: number,
  section: number | null,
  count: number,
): QuizQuestion[] {
  const pool = (section ? getSection(vocab, chapter, section) : getChapterWords(vocab, chapter))
    .filter(w => !!w.furigana)
  let chapterPool = getChapterWords(vocab, chapter).filter(w => !!w.furigana)

  // If not enough furigana words in chapter, expand to all vocab
  if (chapterPool.length < 4) {
    chapterPool = vocab.filter(w => !!w.furigana)
  }
  if (pool.length < 1 || chapterPool.length < 4) return []

  return shuffle(pool)
    .slice(0, count)
    .map(word => {
      const distractors = pickFuriganaDistractors(chapterPool, word, 3)
      if (distractors.length < 3) return null
      const options = shuffle([word.furigana!, ...distractors])
      const q: QuizQuestion = {
        id: nextId('m1'),
        type: 'mondai1',
        prompt: `「${word.wordClean}」の読み方はどれですか。`,
        options,
        correctIndex: options.indexOf(word.furigana!),
        explanation: `「${word.wordClean}」は「${word.furigana}」と読みます。意味：${word.meaning_en}`,
        word: word.wordClean,
        chapter: word.chapter,
        section: word.section,
      }
      return q
    })
    .filter((q): q is QuizQuestion => q !== null)
}

// 問題2: Japanese word → choose correct meaning
export function generateMondai2(
  vocab: VocabWord[],
  chapter: number,
  section: number | null,
  count: number,
  lang: 'id' | 'en' = 'en',
): QuizQuestion[] {
  const pool = section ? getSection(vocab, chapter, section) : getChapterWords(vocab, chapter)
  const chapterPool = getChapterWords(vocab, chapter)
  if (pool.length < 4) return []

  const mapped: (QuizQuestion | null)[] = shuffle(pool)
    .slice(0, count)
    .map(word => {
      const wordMeaning = getMeaning(word, lang)
      const distractors = chapterPool
        .filter(w => w.wordClean !== word.wordClean && getMeaning(w, lang) !== wordMeaning)
      const distracted = shuffle(distractors).slice(0, 3).map(w => getMeaning(w, lang))
      if (distracted.length < 3) return null
      const options = shuffle([wordMeaning, ...distracted])
      const q: QuizQuestion = {
        id: nextId('m2'),
        type: 'mondai2',
        prompt: `What is the meaning of「${word.wordClean}」?`,
        options,
        correctIndex: options.indexOf(wordMeaning),
        explanation: word.furigana
          ? `${word.wordClean}（${word.furigana}）= ${wordMeaning}`
          : `${word.wordClean} = ${wordMeaning}`,
        furiganaHint: word.furigana,
        word: word.wordClean,
        chapter: word.chapter,
        section: word.section,
      }
      return q
    })
  return mapped.filter((q): q is QuizQuestion => q !== null)
}

// 問題4: paraphrase — given meaning, choose correct Japanese word
export function generateMondai4(
  vocab: VocabWord[],
  chapter: number,
  section: number | null,
  count: number,
  lang: 'id' | 'en' = 'en',
): QuizQuestion[] {
  const pool = section ? getSection(vocab, chapter, section) : getChapterWords(vocab, chapter)
  const chapterPool = getChapterWords(vocab, chapter)
  if (pool.length < 4) return []

  const mapped4: (QuizQuestion | null)[] = shuffle(pool)
    .slice(0, count)
    .map(word => {
      const wordMeaning = getMeaning(word, lang)
      const distractors = pickDistractors(chapterPool, word, 'wordClean', 3)
      if (distractors.length < 3) return null
      const options = shuffle([word.wordClean, ...distractors])
      const q: QuizQuestion = {
        id: nextId('m4'),
        type: 'mondai4',
        prompt: `Which word means "${wordMeaning}"?`,
        options,
        correctIndex: options.indexOf(word.wordClean),
        explanation: `${wordMeaning} = ${word.wordClean}`,
        word: word.wordClean,
        chapter: word.chapter,
        section: word.section,
      }
      return q
    })
  return mapped4.filter((q): q is QuizQuestion => q !== null)
}

// Mixed vocab quiz: 問題1 (reading) + 問題2 (meaning) — JLPT exam aligned
export function generateVocabQuiz(
  vocab: VocabWord[],
  chapter: number,
  section: number | null,
  count: number,
  lang: 'id' | 'en' = 'en',
): QuizQuestion[] {
  const half = Math.ceil(count / 2)
  const m1 = generateMondai1(vocab, chapter, section, half)
  // Fill remaining with mondai2 (also used as fallback if not enough furigana words)
  const remaining = count - m1.length
  const m2 = generateMondai2(vocab, chapter, section, remaining > 0 ? remaining : Math.floor(count / 2), lang)
  return shuffle([...m1, ...m2]).slice(0, count)
}

// Grammar quiz — draw from GRAMMAR_QUESTIONS bank
export function generateGrammarQuiz(
  count: number,
  pattern?: string,
  level: JlptLevel = DEFAULT_LEVEL,
): QuizQuestion[] {
  const bank = GRAMMAR_BANK[level]
  const pool = pattern
    ? bank.filter(q => q.pattern === pattern)
    : bank
  return shuffle(pool)
    .slice(0, count)
    .map(q => {
      const correct = q.options[q.correctIndex]
      const shuffled = shuffle([...q.options])
      return {
        id: nextId('g'),
        type: 'grammar' as const,
        prompt: q.sentence,
        options: shuffled,
        correctIndex: shuffled.indexOf(correct),
        explanation: q.explanation,
      }
    })
}

// Reading quiz — draw from READING_PASSAGES bank
export function generateReadingQuiz(
  type?: '短文' | '中文' | '情報検索',
  passageCount?: number,
  level: JlptLevel = DEFAULT_LEVEL,
): QuizQuestion[] {
  const bank = READING_BANK[level]
  const pool = type
    ? bank.filter(p => p.type === type)
    : bank
  const passages = shuffle(pool).slice(0, passageCount ?? pool.length)

  return passages.map(passage => {
    const q = passage.questions[Math.floor(Math.random() * passage.questions.length)]
    const correct = q.options[q.correctIndex]
    const shuffled = shuffle([...q.options])
    return {
      id: nextId('r'),
      type: 'reading' as const,
      prompt: `[${passage.title}]\n\n${passage.text}\n\n---\n${q.prompt}`,
      options: shuffled,
      correctIndex: shuffled.indexOf(correct),
      passageFuriganaMap: passage.furiganaMap,
      passageId: passage.id,
    }
  })
}

// Full mock exam question set
export function generateMockExam(vocab: VocabWord[], level: JlptLevel = DEFAULT_LEVEL): {
  vocabQuestions: QuizQuestion[]
  grammarQuestions: QuizQuestion[]
  readingQuestions: QuizQuestion[]
} {
  // Vocab: draw evenly across all chapters
  const chapCount = LEVEL_CONFIG[level].chapters
  const chapters = Array.from({ length: chapCount }, (_, i) => i + 1)
  const perChapter = Math.ceil(25 / chapters.length)
  const vocabQuestions = shuffle(
    chapters.flatMap(ch => generateVocabQuiz(vocab, ch, null, perChapter))
  ).slice(0, 25)

  const grammarQuestions = generateGrammarQuiz(20, undefined, level)

  // Reading: mix of types
  const readingShort = generateReadingQuiz('短文', 2, level)   // 4 questions
  const readingMed = generateReadingQuiz('中文', 2, level)      // 6 questions
  const readingInfo = generateReadingQuiz('情報検索', 1, level) // 2 questions (total ~12, round to 13)
  const readingQuestions = shuffle([...readingShort, ...readingMed, ...readingInfo]).slice(0, 13)

  return { vocabQuestions, grammarQuestions, readingQuestions }
}

// Score a section for mock exam (scaled 0–180)
export function calculateMockScore(
  vocabCorrect: number,
  grammarCorrect: number,
  readingCorrect: number,
): {
  total: number
  scaled: number
  passed: boolean
  vocabPassed: boolean
  grammarPassed: boolean
  readingPassed: boolean
} {
  const total = vocabCorrect + grammarCorrect + readingCorrect
  const totalQ = 58
  const scaled = Math.round((total / totalQ) * 180)
  const vocabPassed = vocabCorrect / 25 >= 0.38
  const grammarPassed = grammarCorrect / 20 >= 0.38
  const readingPassed = readingCorrect / 13 >= 0.38
  const passed = scaled >= 90 && vocabPassed && grammarPassed && readingPassed
  return { total, scaled, passed, vocabPassed, grammarPassed, readingPassed }
}
