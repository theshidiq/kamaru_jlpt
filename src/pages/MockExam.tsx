import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { useAppStore } from '@/store/useAppStore'
import { generateMockExam, calculateMockScore } from '@/lib/quiz'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { supabase } from '@/lib/supabase'
import { useNavigate } from 'react-router-dom'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import confetti from 'canvas-confetti'

type Phase = 'intro' | 'vocab' | 'grammar' | 'reading' | 'results'

export function MockExam() {
  const navigate = useNavigate()
  const { vocab } = useVocab()
  const { user } = useAppStore()

  const [phase, setPhase] = useState<Phase>('intro')
  const [vocabQs, setVocabQs] = useState<QuizQuestion[]>([])
  const [grammarQs, setGrammarQs] = useState<QuizQuestion[]>([])
  const [readingQs, setReadingQs] = useState<QuizQuestion[]>([])
  const [vocabResults, setVocabResults] = useState<QuizResult[]>([])
  const [grammarResults, setGrammarResults] = useState<QuizResult[]>([])
  const [readingResults, setReadingResults] = useState<QuizResult[]>([])
  const [totalElapsed, setTotalElapsed] = useState(0)
  const [_sectionElapsed, setSectionElapsed] = useState(0)

  function startExam() {
    const { vocabQuestions, grammarQuestions, readingQuestions } = generateMockExam(vocab)
    setVocabQs(vocabQuestions)
    setGrammarQs(grammarQuestions)
    setReadingQs(readingQuestions)
    setPhase('vocab')
  }

  function handleVocabComplete(res: QuizResult[], el: number) {
    setVocabResults(res)
    setSectionElapsed(el)
    setTotalElapsed(t => t + el)
    setPhase('grammar')
  }

  function handleGrammarComplete(res: QuizResult[], el: number) {
    setGrammarResults(res)
    setSectionElapsed(el)
    setTotalElapsed(t => t + el)
    setPhase('reading')
  }

  async function handleReadingComplete(res: QuizResult[], el: number) {
    setReadingResults(res)
    const finalElapsed = totalElapsed + el

    const vCorrect = vocabResults.filter(r => r.isCorrect).length
    const gCorrect = grammarResults.filter(r => r.isCorrect).length
    const rCorrect = res.filter(r => r.isCorrect).length
    const score = calculateMockScore(vCorrect, gCorrect, rCorrect)

    setPhase('results')

    if (score.passed) {
      confetti({ particleCount: 200, spread: 80, origin: { y: 0.5 } })
    }

    if (user) {
      await supabase.from('mock_exam_attempts').insert({
        user_id: user.id,
        vocab_score: vCorrect,
        grammar_score: gCorrect,
        reading_score: rCorrect,
        total_score: score.scaled,
        passed: score.passed,
        time_taken_seconds: finalElapsed,
      })
      await supabase.from('quiz_attempts').insert({
        user_id: user.id,
        quiz_type: 'mock',
        score: vCorrect + gCorrect + rCorrect,
        total_questions: vocabResults.length + grammarResults.length + res.length,
        time_taken_seconds: finalElapsed,
        answers: [...vocabResults, ...grammarResults, ...res],
      })
    }
  }

  if (phase === 'results') {
    const vCorrect = vocabResults.filter(r => r.isCorrect).length
    const gCorrect = grammarResults.filter(r => r.isCorrect).length
    const rCorrect = readingResults.filter(r => r.isCorrect).length
    const score = calculateMockScore(vCorrect, gCorrect, rCorrect)

    return (
      <PageWrapper>
        <div className="max-w-lg mx-auto text-center py-6 md:py-8">
          <div className="text-6xl mb-4">{score.passed ? '🏆' : '💪'}</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Score: {score.scaled} / 180
          </h2>
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
            score.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
          }`}>
            {score.passed ? 'Passed! N4 Clear!' : 'Not passed — keep going!'}
          </span>

          <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
            {[
              ['Vocab', vCorrect, 25, score.vocabPassed],
              ['Grammar', gCorrect, 20, score.grammarPassed],
              ['Reading', rCorrect, 13, score.readingPassed],
            ].map(([label, correct, total, passed]) => (
              <div key={label as string} className={`bg-white dark:bg-gray-800 rounded-xl border-2 p-3 ${
                passed ? 'border-green-300' : 'border-red-300'
              }`}>
                <p className="text-xs text-gray-500 mb-1">{label as string}</p>
                <p className="font-bold text-lg text-gray-900 dark:text-white">{correct as number}/{total as number}</p>
                <p className="text-xs">{passed ? '✅ Pass' : '❌ Fail'}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={startExam} className="w-full sm:w-auto px-5 py-3.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold min-h-[48px]">
              Try Again
            </button>
            <button onClick={() => navigate('/')} className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl min-h-[48px]">
              Home
            </button>
          </div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      {phase === 'intro' && (
        <div className="max-w-lg mx-auto text-center py-6 md:py-8">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">JLPT N4 Mock Exam</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-5">Practice in a real exam format</p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 md:p-5 text-left mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 dark:text-gray-400">
                  <th className="text-left pb-2">Section</th>
                  <th className="text-right pb-2">Questions</th>
                  <th className="text-right pb-2">Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="py-1"><td className="py-1.5">Vocabulary</td><td className="text-right py-1.5">25Q</td><td className="text-right py-1.5">35min</td></tr>
                <tr><td className="py-1.5">Grammar</td><td className="text-right py-1.5">20Q</td><td className="text-right py-1.5">30min</td></tr>
                <tr><td className="py-1.5">Reading</td><td className="text-right py-1.5">13Q</td><td className="text-right py-1.5">40min</td></tr>
                <tr className="font-semibold border-t border-gray-200 dark:border-gray-700"><td className="pt-2">Total</td><td className="text-right pt-2">58Q</td><td className="text-right pt-2">105min</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mb-5">Pass: 90/180 points and ≥38% in each section</p>
          <button
            onClick={startExam}
            disabled={!vocab.length}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors min-h-[52px] text-base"
          >
            Start Exam
          </button>
        </div>
      )}

      {phase === 'vocab' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-indigo-500 font-medium">Section 1 / 3</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Vocabulary (25Q · 35min)</h2>
            </div>
          </div>
          <QuizRunner questions={vocabQs} onComplete={handleVocabComplete} timeLimit={35 * 60} />
        </>
      )}

      {phase === 'grammar' && (
        <>
          <div className="mb-4">
            <p className="text-xs text-indigo-500 font-medium">Section 2 / 3</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Grammar (20Q · 30min)</h2>
          </div>
          <QuizRunner questions={grammarQs} onComplete={handleGrammarComplete} timeLimit={30 * 60} />
        </>
      )}

      {phase === 'reading' && (
        <>
          <div className="mb-4">
            <p className="text-xs text-indigo-500 font-medium">Section 3 / 3</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Reading (13Q · 40min)</h2>
          </div>
          <QuizRunner questions={readingQs} onComplete={handleReadingComplete} timeLimit={40 * 60} showExplanations={false} />
        </>
      )}
    </PageWrapper>
  )
}
