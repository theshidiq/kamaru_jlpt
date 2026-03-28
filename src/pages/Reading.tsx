import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { generateReadingQuiz } from '@/lib/quiz'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { ResultsScreen } from '@/components/quiz/ResultsScreen'
import { supabase } from '@/lib/supabase'
import type { QuizResult } from '@/types/quiz'
import { useNavigate } from 'react-router-dom'

type Phase = 'quiz' | 'results'

export function Reading() {
  const { user } = useAppStore()
  const navigate = useNavigate()
  const [phase, setPhase] = useState<Phase>('quiz')
  const [questions] = useState(() => generateReadingQuiz())
  const [results, setResults] = useState<QuizResult[]>([])
  const [elapsed, setElapsed] = useState(0)

  async function handleComplete(res: QuizResult[], el: number) {
    setResults(res)
    setElapsed(el)
    setPhase('results')
    if (user) {
      await supabase.from('quiz_attempts').insert({
        user_id: user.id,
        quiz_type: 'reading',
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
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Reading Practice</h1>
            <button onClick={() => navigate('/quiz')} className="text-sm text-gray-400 hover:text-gray-600 min-h-[44px] px-2 flex items-center">Cancel</button>
          </div>
          <QuizRunner questions={questions} onComplete={handleComplete} showExplanations={false} />
        </>
      )}

      {phase === 'results' && (
        <ResultsScreen
          questions={questions}
          results={results}
          elapsed={elapsed}
          quizType="reading"
          onRetry={retry}
        />
      )}
    </PageWrapper>
  )
}
