import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'
import { useVocab } from '@/hooks/useVocab'
import { getSection, getMeaning, DEFAULT_LEVEL } from '@/lib/vocab'
import { t } from '@/lib/i18n'
import { generateVocabQuiz } from '@/lib/quiz'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { ResultsScreen } from '@/components/quiz/ResultsScreen'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import type { WordStatus } from '@/types/user'
import { RiCheckDoubleLine } from '@remixicon/react'
import { usePlanSection } from '@/hooks/usePlanSection'

type Stage = 'intro' | 'flashcards' | 'mini-quiz' | 'quiz-results' | 'self-rating' | 'complete'

const STATUS_COLORS: Record<WordStatus, string> = {
  known: 'bg-green-100 text-green-700',
  learning: 'bg-amber-100 text-amber-700',
  new: 'bg-gray-100 text-gray-500',
}

export function StudySession() {
  const navigate = useNavigate()
  const { vocab } = useVocab()
  const { user, wordStatuses, setWordStatus, preferredLanguage: lang } = useAppStore()
  const { chapter: todayChapter, section: todaySection } = usePlanSection()

  const [stage, setStage] = useState<Stage>('intro')
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [miniQuizQuestions, setMiniQuizQuestions] = useState<QuizQuestion[]>([])
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [quizElapsed, setQuizElapsed] = useState(0)
  const [selfRating, setSelfRating] = useState<'easy' | 'okay' | 'hard' | null>(null)
  const [saving, setSaving] = useState(false)

  const words = getSection(vocab, todayChapter, todaySection)

  useEffect(() => {
    if (vocab.length > 0 && miniQuizQuestions.length === 0) {
      setMiniQuizQuestions(generateVocabQuiz(vocab, todayChapter, todaySection, 5, lang))
    }
  }, [vocab, todayChapter, todaySection])

  async function handleComplete() {
    if (!user || !selfRating) return
    setSaving(true)
    try {
      await storeFor(user).upsertDailySession(user.id,
        {
          session_date: new Date().toISOString().split('T')[0],
          chapter: todayChapter,
          section: todaySection,
          self_rating: selfRating,
          completed_at: new Date().toISOString(),
          level: user.jlpt_level ?? DEFAULT_LEVEL,
        },
      )
      toast.success(lang === 'id' ? 'Sesi selesai! Hebat 🎉' : 'Session complete! Well done 🎉')
      navigate('/')
    } catch {
      toast.error(lang === 'id' ? 'Gagal menyimpan' : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  if (!vocab.length) return <PageWrapper><div className="text-center py-10 text-gray-400">{t('loading', lang)}</div></PageWrapper>
  if (!words.length) return <PageWrapper><div className="text-center py-10 text-gray-400">{t('noWordsSection', lang)}</div></PageWrapper>

  return (
    <PageWrapper>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 gap-3">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{t('chapter', lang)} {todayChapter} · {t('section', lang)} {todaySection}</h1>
          <p className="text-sm text-gray-500">{words.length} {t('wordsCount', lang)}</p>
        </div>
        <button onClick={() => navigate('/')} className="text-sm text-gray-400 hover:text-gray-600 min-h-[44px] px-2 flex items-center">{t('back', lang)}</button>
      </div>

      <AnimatePresence mode="wait">
        {/* INTRO */}
        {stage === 'intro' && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center mb-4">
              <p className="text-indigo-200 text-sm mb-1">{t('todayStudyLink', lang)}</p>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{t('chapter', lang)} {todayChapter} · {t('section', lang)} {todaySection}</h2>
              <p className="text-indigo-200 mb-6">{words.length} {t('flashcardsQuiz', lang)}</p>
              <button
                onClick={() => setStage('flashcards')}
                className="bg-white text-indigo-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors min-h-[48px] text-base"
              >
                {t('start', lang)}
              </button>
            </div>
          </motion.div>
        )}

        {/* FLASHCARDS */}
        {stage === 'flashcards' && (
          <motion.div key="flashcards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="text-center mb-2">
              <span className="text-sm text-gray-400">{cardIndex + 1} / {words.length}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
              <div className="bg-indigo-500 rounded-full h-1.5" style={{ width: `${((cardIndex + 1) / words.length) * 100}%` }} />
            </div>

            <div
              className="cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => setFlipped(!flipped)}
            >
              <AnimatePresence mode="wait">
                {!flipped ? (
                  <motion.div
                    key="front"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-300 dark:border-indigo-700 p-8 md:p-10 text-center shadow-lg min-h-[200px] md:min-h-[180px] flex flex-col items-center justify-center"
                  >
                    <p className="font-jp text-4xl md:text-4xl font-bold text-gray-900 dark:text-white">{words[cardIndex]?.wordClean}</p>
                    {words[cardIndex]?.isSuruVerb && <span className="mt-2 text-xs text-indigo-400">{t('suruVerb', lang)}</span>}
                    <p className="mt-4 text-sm text-gray-400">{t('tapToFlip', lang)}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="bg-indigo-600 rounded-2xl p-8 md:p-10 text-center shadow-lg min-h-[200px] md:min-h-[180px] flex flex-col items-center justify-center"
                  >
                    {words[cardIndex]?.furigana && (
                      <p className="text-indigo-200 text-sm mb-1">{words[cardIndex].furigana}</p>
                    )}
                    <p className="text-white text-2xl md:text-2xl font-bold">{words[cardIndex] ? getMeaning(words[cardIndex], lang) : ''}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {flipped && words[cardIndex] && (
              <div className="flex justify-center gap-2 mt-4">
                {(['new', 'learning', 'known'] as WordStatus[]).map(s => (
                  <button
                    key={s}
                    onClick={() => setWordStatus(words[cardIndex].wordClean, s, words[cardIndex].chapter, words[cardIndex].section)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium min-h-[44px] ${STATUS_COLORS[s]} ${
                      (wordStatuses[words[cardIndex].wordClean] ?? 'new') === s ? 'ring-2 ring-indigo-500' : ''
                    }`}
                  >
                    {t(s, lang)}
                  </button>
                ))}
              </div>
            )}

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => { setCardIndex(Math.max(0, cardIndex - 1)); setFlipped(false) }}
                disabled={cardIndex === 0}
                className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 disabled:opacity-40 min-h-[48px] font-medium"
              >
                {t('prev', lang)}
              </button>
              {cardIndex < words.length - 1 ? (
                <button
                  onClick={() => { setCardIndex(cardIndex + 1); setFlipped(false) }}
                  className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 min-h-[48px] font-medium"
                >
                  {t('next', lang)}
                </button>
              ) : (
                <button
                  onClick={() => setStage('mini-quiz')}
                  className="px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 min-h-[48px] font-medium"
                >
                  {t('miniQuizNext', lang)}
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* MINI QUIZ */}
        {stage === 'mini-quiz' && (
          <motion.div key="mini-quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t('miniQuiz', lang)}</h2>
              <p className="text-sm text-gray-500">{t('miniQuizSub', lang)}</p>
            </div>
            {miniQuizQuestions.length > 0 ? (
              <QuizRunner
                questions={miniQuizQuestions}
                onComplete={(results, elapsed) => {
                  setQuizResults(results)
                  setQuizElapsed(elapsed)
                  setStage('quiz-results')
                }}
              />
            ) : (
              <div className="text-center py-8 text-gray-400">
                <p>{t('notEnoughWords', lang)}</p>
                <button onClick={() => setStage('self-rating')} className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-xl">
                  {t('next', lang)}
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* QUIZ RESULTS */}
        {stage === 'quiz-results' && (
          <motion.div key="quiz-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ResultsScreen
              questions={miniQuizQuestions}
              results={quizResults}
              elapsed={quizElapsed}
              quizType="vocab"
              onRetry={() => {
                setMiniQuizQuestions(generateVocabQuiz(vocab, todayChapter, todaySection, 5, lang))
                setStage('mini-quiz')
              }}
              onSave={async () => {
                if (!user) return
                const correct = quizResults.filter(r => r.isCorrect).length
                await storeFor(user).addQuizAttempt(user.id, {
                  quiz_type: 'vocab',
                  chapter: todayChapter,
                  section: todaySection,
                  score: correct,
                  total_questions: quizResults.length,
                  time_taken_seconds: quizElapsed,
                  answers: quizResults,
                })
              }}
            />
            <div className="text-center mt-4">
              <button
                onClick={() => setStage('self-rating')}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold"
              >
                {t('finishSession', lang)}
              </button>
            </div>
          </motion.div>
        )}

        {/* SELF RATING */}
        {stage === 'self-rating' && (
          <motion.div key="self-rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="max-w-md mx-auto text-center py-6 md:py-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('howWasSession', lang)}</h2>
              <p className="text-gray-500 text-sm mb-6 md:mb-8">{t('beHonest', lang)}</p>
              <div className="flex justify-center gap-3 mb-6 md:mb-8">
                {([['easy', 'bg-green-500'], ['okay', 'bg-blue-500'], ['hard', 'bg-red-500']] as const).map(([val, color]) => (
                  <button
                    key={val}
                    onClick={() => setSelfRating(val)}
                    className={`flex flex-col items-center gap-2 flex-1 py-4 rounded-2xl border-2 transition-all min-h-[80px] ${
                      selfRating === val
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950'
                        : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full ${color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t(val, lang)}</span>
                  </button>
                ))}
              </div>
              <button
                disabled={!selfRating || saving}
                onClick={handleComplete}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors min-h-[52px] text-base"
              >
                {saving ? t('saving', lang) : <span className="flex items-center justify-center gap-1.5"><RiCheckDoubleLine size={18} />{t('complete', lang)}</span>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
