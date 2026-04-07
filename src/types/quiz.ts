export type QuizType = 'vocab' | 'grammar' | 'reading' | 'mock'
export type QuizMode = 'mondai1' | 'mondai2' | 'mondai3' | 'mondai4' | 'mondai5'

export interface QuizQuestion {
  id: string
  type: QuizMode | 'grammar' | 'reading'
  prompt: string
  options: string[]
  correctIndex: number
  explanation?: string
  furiganaHint?: string
  passageFuriganaMap?: Array<{ kanji: string; reading: string }>
  word?: string
  chapter?: number
  section?: number
}

export interface QuizResult {
  questionId: string
  selectedIndex: number
  isCorrect: boolean
  timeMs: number
}
