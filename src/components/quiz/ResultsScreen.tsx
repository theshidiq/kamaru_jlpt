import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import confetti from 'canvas-confetti'

interface Props {
  questions: QuizQuestion[]
  results: QuizResult[]
  elapsed: number
  quizType?: string
  onRetry: () => void
  onSave?: () => void
}

export function ResultsScreen({ questions, results, elapsed, onRetry, onSave }: Props) {
  const navigate = useNavigate()
  const correct = results.filter(r => r.isCorrect).length
  const total = results.length
  const pct = Math.round((correct / total) * 100)
  const passed = pct >= 67
  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60

  useEffect(() => {
    if (passed) {
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } })
    }
    if (onSave) onSave()
  }, [])

  return (
    <div className="max-w-2xl mx-auto text-center py-6 md:py-8">
      <div className="text-6xl mb-4">
        {pct >= 90 ? '🏆' : pct >= 67 ? '✅' : '💪'}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
        {correct} / {total}
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">{pct}% correct</p>
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
        passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
      }`}>
        {passed ? 'Passed!' : 'Not passed'}
      </span>
      <p className="text-sm text-gray-400 mb-6">Time: {minutes}m {seconds}s</p>

      {/* Buttons — full-width stacked on mobile */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 md:mb-8">
        <button
          onClick={onRetry}
          className="w-full sm:w-auto px-5 py-3.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold transition-colors min-h-[48px]"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate('/quiz')}
          className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold transition-colors min-h-[48px]"
        >
          Back to Quiz
        </button>
      </div>

      {/* Answer review */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden text-left">
        <h3 className="px-4 md:px-5 py-3 font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
          Review Answers
        </h3>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {questions.map((q, i) => {
            const r = results[i]
            if (!r) return null
            return (
              <div key={q.id} className="px-4 md:px-5 py-3">
                <div className="flex items-start gap-2 mb-1">
                  <span className={`mt-0.5 text-sm flex-shrink-0 ${r.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                    {r.isCorrect ? '✓' : '✗'}
                  </span>
                  <p className="text-sm font-jp text-gray-800 dark:text-gray-200 flex-1 whitespace-pre-wrap line-clamp-3">
                    {q.prompt.length > 100 ? q.prompt.slice(0, 100) + '…' : q.prompt}
                  </p>
                </div>
                {!r.isCorrect && (
                  <div className="ml-5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Your answer: <span className="text-red-500">{q.options[r.selectedIndex]}</span>
                    {' → '}
                    Correct: <span className="text-green-600">{q.options[q.correctIndex]}</span>
                  </div>
                )}
                {q.explanation && !r.isCorrect && (
                  <div className="ml-5 mt-1 text-xs text-blue-600 dark:text-blue-400">{q.explanation}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
