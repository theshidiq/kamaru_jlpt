import { create } from 'zustand'
import type { QuizQuestion, QuizResult } from '@/types/quiz'

interface QuizState {
  questions: QuizQuestion[]
  currentIndex: number
  results: QuizResult[]
  startTime: number | null
  questionStartTime: number | null
  isComplete: boolean

  startQuiz: (questions: QuizQuestion[]) => void
  submitAnswer: (selectedIndex: number) => void
  nextQuestion: () => void
  resetQuiz: () => void

  // Derived
  score: () => number
  accuracy: () => number
  elapsedSeconds: () => number
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  currentIndex: 0,
  results: [],
  startTime: null,
  questionStartTime: null,
  isComplete: false,

  startQuiz: (questions) =>
    set({
      questions,
      currentIndex: 0,
      results: [],
      startTime: Date.now(),
      questionStartTime: Date.now(),
      isComplete: false,
    }),

  submitAnswer: (selectedIndex) => {
    const { questions, currentIndex, results, questionStartTime } = get()
    const q = questions[currentIndex]
    if (!q) return
    const timeMs = questionStartTime ? Date.now() - questionStartTime : 0
    const result: QuizResult = {
      questionId: q.id,
      selectedIndex,
      isCorrect: selectedIndex === q.correctIndex,
      timeMs,
    }
    set({ results: [...results, result] })
  },

  nextQuestion: () => {
    const { currentIndex, questions } = get()
    if (currentIndex + 1 >= questions.length) {
      set({ isComplete: true })
    } else {
      set({ currentIndex: currentIndex + 1, questionStartTime: Date.now() })
    }
  },

  resetQuiz: () =>
    set({
      questions: [],
      currentIndex: 0,
      results: [],
      startTime: null,
      questionStartTime: null,
      isComplete: false,
    }),

  score: () => get().results.filter(r => r.isCorrect).length,

  accuracy: () => {
    const { results } = get()
    if (!results.length) return 0
    return Math.round((results.filter(r => r.isCorrect).length / results.length) * 100)
  },

  elapsedSeconds: () => {
    const { startTime } = get()
    if (!startTime) return 0
    return Math.floor((Date.now() - startTime) / 1000)
  },
}))
