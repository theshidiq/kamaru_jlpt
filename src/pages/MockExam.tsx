import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'
import { t } from '@/lib/i18n'
import { generateMockExam, calculateMockScore } from '@/lib/quiz'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { useNavigate } from 'react-router-dom'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import confetti from 'canvas-confetti'
import { RiTrophyLine, RiEmotionHappyLine, RiTargetLine, RiCheckLine, RiCloseLine } from '@remixicon/react'
import { DEFAULT_LEVEL } from '@/lib/vocab'

type Phase = 'intro' | 'vocab' | 'grammar' | 'reading' | 'results'

export function MockExam() {
  const navigate = useNavigate()
  const { vocab } = useVocab()
  const { user, preferredLanguage: lang } = useAppStore()

  const [phase, setPhase] = useState<Phase>('intro')
  const [vocabQs, setVocabQs] = useState<QuizQuestion[]>([])
  const [grammarQs, setGrammarQs] = useState<QuizQuestion[]>([])
  const [readingQs, setReadingQs] = useState<QuizQuestion[]>([])
  const [vocabResults, setVocabResults] = useState<QuizResult[]>([])
  const [grammarResults, setGrammarResults] = useState<QuizResult[]>([])
  const [readingResults, setReadingResults] = useState<QuizResult[]>([])
  const [totalElapsed, setTotalElapsed] = useState(0)
  const [_sectionElapsed, setSectionElapsed] = useState(0)

  const level = user?.jlpt_level ?? DEFAULT_LEVEL

  function startExam() {
    const { vocabQuestions, grammarQuestions, readingQuestions } = generateMockExam(vocab, level)
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
      await storeFor(user).addMockAttempt(user.id, {
        vocab_score: vCorrect,
        grammar_score: gCorrect,
        reading_score: rCorrect,
        total_score: score.scaled,
        passed: score.passed,
        time_taken_seconds: finalElapsed,
      })
      await storeFor(user).addQuizAttempt(user.id, {
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
          <div className={`flex justify-center mb-4 ${score.passed ? 'text-amber-500' : 'text-indigo-500'}`}>
            {score.passed ? <RiTrophyLine size={56} /> : <RiEmotionHappyLine size={56} />}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Score: {score.scaled} / 180
          </h2>
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
            score.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
          }`}>
            {score.passed ? t('passed', lang, { level }) : t('notPassed', lang)}
          </span>

          <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
            {[
              [t('vocab', lang), vCorrect, 25, score.vocabPassed],
              [t('grammar', lang), gCorrect, 20, score.grammarPassed],
              [t('reading', lang), rCorrect, 13, score.readingPassed],
            ].map(([label, correct, total, passed]) => (
              <div key={label as string} className={`bg-white dark:bg-gray-800 rounded-xl border-2 p-3 ${
                passed ? 'border-green-300' : 'border-red-300'
              }`}>
                <p className="text-xs text-gray-500 mb-1">{label as string}</p>
                <p className="font-bold text-lg text-gray-900 dark:text-white">{correct as number}/{total as number}</p>
                <p className={`text-xs flex items-center justify-center gap-0.5 font-medium ${passed ? 'text-green-600' : 'text-red-500'}`}>
                  {passed ? <RiCheckLine size={12} /> : <RiCloseLine size={12} />}
                  {passed ? (lang === 'id' ? 'Lulus' : 'Pass') : (lang === 'id' ? 'Gagal' : 'Fail')}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={startExam} className="w-full sm:w-auto px-5 py-3.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold min-h-[48px]">
              {t('tryAgain', lang)}
            </button>
            <button onClick={() => navigate('/')} className="w-full sm:w-auto px-5 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl min-h-[48px]">
              {t('home', lang)}
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
          <div className="flex justify-center mb-4 text-indigo-500"><RiTargetLine size={48} /></div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('mockExamPageTitle', lang, { level })}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-5">{t('mockExamPageSub', lang)}</p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 md:p-5 text-left mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 dark:text-gray-400">
                  <th className="text-left pb-2">{t('sectionCol', lang)}</th>
                  <th className="text-right pb-2">{t('questionsCol', lang)}</th>
                  <th className="text-right pb-2">{t('timeCol', lang)}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="py-1"><td className="py-1.5">{t('vocabulary', lang)}</td><td className="text-right py-1.5">25Q</td><td className="text-right py-1.5">35min</td></tr>
                <tr><td className="py-1.5">{t('grammar', lang)}</td><td className="text-right py-1.5">20Q</td><td className="text-right py-1.5">30min</td></tr>
                <tr><td className="py-1.5">{t('reading', lang)}</td><td className="text-right py-1.5">13Q</td><td className="text-right py-1.5">40min</td></tr>
                <tr className="font-semibold border-t border-gray-200 dark:border-gray-700"><td className="pt-2">{lang === 'id' ? 'Total' : 'Total'}</td><td className="text-right pt-2">58Q</td><td className="text-right pt-2">105min</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mb-5">{t('passCondition', lang)}</p>
          <button
            onClick={startExam}
            disabled={!vocab.length}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors min-h-[52px] text-base"
          >
            {t('startExam', lang)}
          </button>
        </div>
      )}

      {phase === 'vocab' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-indigo-500 font-medium">Section 1 / 3</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('vocabulary', lang)} (25Q · 35min)</h2>
            </div>
          </div>
          <QuizRunner questions={vocabQs} onComplete={handleVocabComplete} timeLimit={35 * 60} />
        </>
      )}

      {phase === 'grammar' && (
        <>
          <div className="mb-4">
            <p className="text-xs text-indigo-500 font-medium">Section 2 / 3</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('grammar', lang)} (20Q · 30min)</h2>
          </div>
          <QuizRunner questions={grammarQs} onComplete={handleGrammarComplete} timeLimit={30 * 60} />
        </>
      )}

      {phase === 'reading' && (
        <>
          <div className="mb-4">
            <p className="text-xs text-indigo-500 font-medium">Section 3 / 3</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('reading', lang)} (13Q · 40min)</h2>
          </div>
          <QuizRunner questions={readingQs} onComplete={handleReadingComplete} timeLimit={40 * 60} showExplanations={false} />
        </>
      )}
    </PageWrapper>
  )
}
