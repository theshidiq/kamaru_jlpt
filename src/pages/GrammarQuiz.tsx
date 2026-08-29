import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'
import { t } from '@/lib/i18n'
import { generateGrammarQuiz } from '@/lib/quiz'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { ResultsScreen } from '@/components/quiz/ResultsScreen'
import type { QuizResult } from '@/types/quiz'
import { useNavigate } from 'react-router-dom'
import { DEFAULT_LEVEL } from '@/lib/vocab'

type Phase = 'quiz' | 'results'

export function GrammarQuiz() {
  const { user, preferredLanguage: lang } = useAppStore()
  const navigate = useNavigate()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL
  const [phase, setPhase] = useState<Phase>('quiz')
  const [questions] = useState(() => generateGrammarQuiz(15, undefined, level))
  const [results, setResults] = useState<QuizResult[]>([])
  const [elapsed, setElapsed] = useState(0)

  async function handleComplete(res: QuizResult[], el: number) {
    setResults(res)
    setElapsed(el)
    setPhase('results')
    if (user) {
      await storeFor(user).addQuizAttempt(user.id, {
        quiz_type: 'grammar',
        score: res.filter(r => r.isCorrect).length,
        total_questions: res.length,
        time_taken_seconds: el,
        answers: res,
      })
    }
  }

  function retry() {
    setResults([])
    setPhase('quiz')
  }

  return (
    <PageWrapper>
      {phase === 'quiz' && (
        <>
          <div className="flex items-center justify-between mb-4 gap-3">
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{t('grammarQuizPage', lang)}</h1>
            <button onClick={() => navigate('/quiz')} className="text-sm text-gray-400 hover:text-gray-600 min-h-[44px] px-2 flex items-center">{t('cancel', lang)}</button>
          </div>
          <QuizRunner questions={questions} onComplete={handleComplete} />
        </>
      )}

      {phase === 'results' && (
        <ResultsScreen
          questions={questions}
          results={results}
          elapsed={elapsed}
          quizType="grammar"
          onRetry={retry}
        />
      )}
    </PageWrapper>
  )
}
