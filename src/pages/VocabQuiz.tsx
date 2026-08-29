import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'
import { useProgress } from '@/hooks/useProgress'
import { generateVocabQuiz } from '@/lib/quiz'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { ResultsScreen } from '@/components/quiz/ResultsScreen'
import { t } from '@/lib/i18n'
import type { QuizQuestion, QuizResult } from '@/types/quiz'

type Phase = 'setup' | 'quiz' | 'results'

export function VocabQuiz() {
  const { vocab, chapters } = useVocab()
  const { user, todayChapter, preferredLanguage: lang } = useAppStore()
  const progress = useProgress()
  const [phase, setPhase] = useState<Phase>('setup')
  const [chapter, setChapter] = useState(todayChapter)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [results, setResults] = useState<QuizResult[]>([])
  const [elapsed, setElapsed] = useState(0)

  // Best score per chapter from recent attempts
  function bestScore(ch: number): number | null {
    const attempts = progress.recentAttempts.filter(a => a.quiz_type === 'vocab' && a.chapter === ch)
    if (!attempts.length) return null
    return Math.max(...attempts.map(a => Math.round((a.score / a.total_questions) * 100)))
  }

  function startQuiz() {
    const qs = generateVocabQuiz(vocab, chapter, null, 15, lang)
    setQuestions(qs)
    setPhase('quiz')
  }

  async function handleComplete(res: QuizResult[], el: number) {
    setResults(res)
    setElapsed(el)
    setPhase('results')
    if (user) {
      const correct = res.filter(r => r.isCorrect).length
      await storeFor(user).addQuizAttempt(user.id, {
        quiz_type: 'vocab',
        chapter,
        score: correct,
        total_questions: res.length,
        time_taken_seconds: el,
        answers: res,
      })
    }
  }

  function retry() {
    const qs = generateVocabQuiz(vocab, chapter, null, 15, lang)
    setQuestions(qs)
    setResults([])
    setPhase('quiz')
  }

  return (
    <PageWrapper>
      {phase === 'setup' && (
        <div className="flex flex-col h-full">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{t('vocabQuizTitle', lang)}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('vocabQuizSub', lang)}</p>

          {/* Chapter list */}
          <div className="overflow-y-auto -mx-4 px-4">
            <div className="space-y-2 pb-4">
              {chapters.map(ch => {
                const score = bestScore(ch.chapter)
                const isSelected = chapter === ch.chapter
                const passed = score !== null && score >= 67
                return (
                  <button
                    key={ch.chapter}
                    onClick={() => {
                      setChapter(ch.chapter)
                      const qs = generateVocabQuiz(vocab, ch.chapter, null, 15, lang)
                      setQuestions(qs)
                      setPhase('quiz')
                    }}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl border-2 transition-all text-left min-h-[64px] ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {ch.chapter}
                      </span>
                      <div>
                        <p className={`text-sm font-semibold ${isSelected ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-800 dark:text-gray-200'}`}>
                          {t('chapter', lang)} {ch.chapter}
                        </p>
                        <p className="text-xs text-gray-400">{ch.totalWords} {t('wordsCount', lang)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {score !== null ? (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          passed
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {passed ? '✓' : ''} {score}%
                        </span>
                      ) : (
                        <span className="text-xs text-gray-300 dark:text-gray-600">—</span>
                      )}
                      {isSelected && <span className="text-indigo-500 text-sm">●</span>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Start button anchored to bottom */}
          <div className="pt-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
            <button
              onClick={startQuiz}
              disabled={!vocab.length}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-colors text-base"
            >
              {t('start', lang).replace('→', '').trim()} — {t('chapter', lang)} {chapter}
            </button>
          </div>
        </div>
      )}

      {phase === 'quiz' && (
        <>
          <div className="flex items-center justify-between mb-4 gap-3">
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{t('vocab', lang)} — {t('chapter', lang)} {chapter}</h1>
            <button onClick={() => setPhase('setup')} className="text-sm text-gray-400 hover:text-gray-600 min-h-[44px] px-2 flex items-center">{t('cancel', lang)}</button>
          </div>
          <QuizRunner questions={questions} onComplete={handleComplete} />
        </>
      )}

      {phase === 'results' && (
        <ResultsScreen
          questions={questions}
          results={results}
          elapsed={elapsed}
          quizType="vocab"
          onRetry={retry}
        />
      )}
    </PageWrapper>
  )
}
