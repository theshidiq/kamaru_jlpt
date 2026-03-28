import { useState, useEffect, useCallback } from 'react'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  questions: QuizQuestion[]
  onComplete: (results: QuizResult[], elapsed: number) => void
  timeLimit?: number // seconds total, optional
  showExplanations?: boolean
}

type Phase = 'active' | 'reviewing' | 'complete'

export function QuizRunner({ questions, onComplete, timeLimit, showExplanations = true }: Props) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [results, setResults] = useState<QuizResult[]>([])
  const [phase, setPhase] = useState<Phase>('active')
  const [startTime] = useState(Date.now())
  const [questionStart, setQuestionStart] = useState(Date.now())
  const [timeLeft, setTimeLeft] = useState(timeLimit ?? null)
  const [showFurigana, setShowFurigana] = useState(false)

  const current = questions[index]
  const isAnswered = selected !== null

  // Timer
  useEffect(() => {
    if (!timeLimit) return
    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === null || prev <= 0) {
          clearInterval(id)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [timeLimit])

  useEffect(() => {
    if (timeLeft === 0) finishQuiz(results)
  }, [timeLeft])

  const finishQuiz = useCallback((finalResults: QuizResult[]) => {
    setPhase('complete')
    const elapsed = Math.floor((Date.now() - startTime) / 1000)
    onComplete(finalResults, elapsed)
  }, [onComplete, startTime])

  function handleSelect(optionIndex: number) {
    if (isAnswered) return
    const timeMs = Date.now() - questionStart
    const result: QuizResult = {
      questionId: current.id,
      selectedIndex: optionIndex,
      isCorrect: optionIndex === current.correctIndex,
      timeMs,
    }
    const newResults = [...results, result]
    setResults(newResults)
    setSelected(optionIndex)
    if (!showExplanations) {
      // Auto-advance after short delay
      setTimeout(() => advance(newResults), 600)
    }
  }

  // Reset furigana hint on each new question
  useEffect(() => { setShowFurigana(false) }, [index])

  function advance(finalResults = results) {
    if (index + 1 >= questions.length) {
      finishQuiz(finalResults)
    } else {
      setIndex(i => i + 1)
      setSelected(null)
      setQuestionStart(Date.now())
      setPhase('active')
    }
  }

  if (phase === 'complete') return null // Parent handles results screen

  const correctCount = results.filter(r => r.isCorrect).length
  const progress = ((index + (isAnswered ? 1 : 0)) / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto">
      {/* Sticky header — always visible during quiz */}
      <div className="sticky top-14 z-40 bg-white dark:bg-gray-900 pt-2 pb-3 -mx-4 px-4 border-b border-gray-100 dark:border-gray-800 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {index + 1} / {questions.length}
          </span>
          <div className="flex items-center gap-3">
            {timeLeft !== null && (
              <span className={`text-sm font-mono font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </span>
            )}
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">{correctCount} correct</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-indigo-500 rounded-full h-2 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-700 mb-4">
            <p className="font-jp text-base md:text-lg text-gray-900 dark:text-white whitespace-pre-wrap leading-relaxed">
              {current.prompt}
            </p>
            {current.type === 'mondai2' && current.furiganaHint && !isAnswered && (
              <button
                onClick={() => setShowFurigana(v => !v)}
                className="mt-2 text-xs text-indigo-400 dark:text-indigo-300 underline underline-offset-2 block"
              >
                {showFurigana ? `読み方: ${current.furiganaHint}` : 'Show reading'}
              </button>
            )}
          </div>

          {/* Options — generous touch targets on mobile */}
          <div className="space-y-2.5">
            {current.options.map((option, i) => {
              let style = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
              if (selected !== null) {
                if (i === current.correctIndex) {
                  style = 'bg-green-50 dark:bg-green-950 border-green-400 dark:border-green-600'
                } else if (i === selected && selected !== current.correctIndex) {
                  style = 'bg-red-50 dark:bg-red-950 border-red-400 dark:border-red-600'
                } else {
                  style = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-50'
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={isAnswered}
                  className={`w-full text-left px-4 py-3.5 md:py-3 rounded-xl border-2 font-jp text-gray-900 dark:text-white transition-all min-h-[52px] md:min-h-0 ${style}`}
                >
                  <span className="font-semibold text-gray-400 mr-2">{String.fromCharCode(97 + i)})</span>
                  {option}
                  {selected !== null && i === current.correctIndex && (
                    <span className="float-right text-green-600">✓</span>
                  )}
                  {selected === i && selected !== current.correctIndex && (
                    <span className="float-right text-red-500">✗</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Explanation + Next */}
          {isAnswered && showExplanations && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              {current.explanation && (
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-3 mb-3 text-sm text-blue-800 dark:text-blue-200">
                  💡 {current.explanation}
                </div>
              )}
              <button
                onClick={() => advance()}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors min-h-[52px] text-base"
              >
                {index + 1 < questions.length ? 'Next →' : 'See Results'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
