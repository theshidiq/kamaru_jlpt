import { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  RiCheckDoubleLine, RiCheckLine, RiMenuFoldLine, RiMenuUnfoldLine, RiPlayCircleLine, RiBookReadLine, RiStackLine, RiQuestionLine, RiFlagLine, RiArrowRightLine,
} from '@remixicon/react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionReaderView } from '@/pages/SectionReader'
import { QuizRunner } from '@/components/quiz/QuizRunner'
import { ResultsScreen } from '@/components/quiz/ResultsScreen'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'
import { useVocab } from '@/hooks/useVocab'
import { usePlanSection } from '@/hooks/usePlanSection'
import { getSection, getMeaning, DEFAULT_LEVEL } from '@/lib/vocab'
import { generateVocabQuiz } from '@/lib/quiz'
import { lessonFor } from '@/lib/lessons'
import { PASSAGE_BANK, altPassageFor } from '@/lib/passages'
import { audioUrl } from '@/lib/assets'
import { hasVideo } from '@/lib/lessonVideo'
import { AUDIO_BAR_PAD } from '@/lib/audioBar'
import { loadJourney, saveJourney, type JourneyStep } from '@/lib/journey'
import { t } from '@/lib/i18n'
import type { Lesson } from '@/types/lesson'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import type { VocabWord } from '@/types/vocab'
import type { WordStatus } from '@/types/user'

// The video player (Remotion) is only downloaded when this step is opened.
const InteractiveLesson = lazy(() => import('@/components/video/InteractiveLesson'))

const BUILD_ID = __BUILD_ID__
const MENU_KEY = 'kamaru.journeyMenu'
const STATUS_COLORS: Record<WordStatus, string> = {
  known: 'bg-green-100 text-green-700',
  learning: 'bg-amber-100 text-amber-700',
  new: 'bg-gray-100 text-gray-500',
}
const ICON = { watch: RiPlayCircleLine, read: RiBookReadLine, cards: RiStackLine, quiz: RiQuestionLine, finish: RiFlagLine }

/**
 * Today's Study, as a learning journey for the plan's section, like a
 * Coursera module: watch the lesson (interactive video), read along,
 * flashcards, a mini quiz, then finish. Steps the section has no content
 * for are left out. Progress is kept per section, and Finish saves the day's
 * session as before, which advances the plan.
 */
export function StudySession() {
  const { chapter, section } = usePlanSection()
  const { user } = useAppStore()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL
  // Keyed so the journey's own state starts fresh when the plan resolves to
  // (or moves on to) another section.
  return <Journey key={`${level}-${chapter}-${section}`} chapter={chapter} section={section} />
}

function Journey({ chapter: ch, section: sec }: { chapter: number; section: number }) {
  const navigate = useNavigate()
  const { vocab } = useVocab()
  const { user, preferredLanguage: lang } = useAppStore()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL
  const id = `${level.toLowerCase()}-${ch}-${sec}`
  const words = getSection(vocab, ch, sec)

  const entry = lessonFor(level, ch, sec)
  const hasPassage = PASSAGE_BANK[level].some(p => p.chapter === ch && p.section === sec)
  // After the Lesson has read the first passage aloud, Read Along shows the
  // second one when the section has it: text only, no audio bar.
  const readAlt = !!altPassageFor(level, ch, sec)
  const steps: { id: JourneyStep; title: string; meta: string }[] = [
    ...(entry ? [{ id: 'watch' as const, title: t('journeyWatch', lang), meta: t('journeyMinutes', lang, { n: entry.minutes }) }] : []),
    ...(hasPassage ? [{ id: 'read' as const, title: t('readTitle', lang), meta: t('readAlongMinutes', lang) }] : []),
    { id: 'cards', title: t('journeyCards', lang), meta: `${words.length} ${t('words', lang)}` },
    { id: 'quiz', title: t('miniQuiz', lang), meta: t('journeyQuestions', lang, { n: 5 }) },
    { id: 'finish', title: t('journeyFinish', lang), meta: '' },
  ]

  const [done, setDone] = useState(() => loadJourney(id))
  const [current, setCurrent] = useState<JourneyStep>(() => {
    const d = loadJourney(id)
    return steps.find(s => !d[s.id])?.id ?? 'finish'
  })
  // Desktop step list, which can be folded away (as on Coursera) to give
  // the step the full width. Remembered per device.
  const [menuOpen, setMenuOpen] = useState(() => {
    try { return localStorage.getItem(MENU_KEY) !== 'closed' } catch { return true }
  })
  function toggleMenu() {
    setMenuOpen(o => { try { localStorage.setItem(MENU_KEY, o ? 'closed' : 'open') } catch { /* private mode */ } return !o })
  }
  const index = steps.findIndex(s => s.id === current)
  const next = steps[index + 1]
  const doneCount = steps.filter(s => s.id !== 'finish' && done[s.id]).length
  const total = steps.length - 1

  function markDone(step: JourneyStep) {
    setDone(d => { const n = { ...d, [step]: true as const }; saveJourney(id, n); return n })
  }
  function go(step: JourneyStep) {
    setCurrent(step)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function completeAndNext() {
    markDone(current)
    if (next) go(next.id)
  }

  // The lesson timeline, for the video step.
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [lessonFailed, setLessonFailed] = useState(false)
  useEffect(() => {
    if (!entry) return
    fetch(audioUrl(`/audio/lessons/${entry.id}.json?v=${BUILD_ID}`))
      .then(r => { if (!r.ok) throw new Error(String(r.status)); return r.json() })
      .then((l: Lesson) => setLesson(l))
      .catch(() => setLessonFailed(true))
  }, [entry])

  if (!vocab.length) return <PageWrapper><div className="text-center py-10 text-gray-400">{t('loading', lang)}</div></PageWrapper>
  if (!words.length) return <PageWrapper><div className="text-center py-10 text-gray-400">{t('noWordsSection', lang)}</div></PageWrapper>

  const stepRow = (s: (typeof steps)[number], i: number) => {
    const Icon = ICON[s.id]
    const isCur = s.id === current, isDone = !!done[s.id]
    return (
      <button
        key={s.id}
        onClick={() => go(s.id)}
        className={`w-full flex items-center gap-3 text-left rounded-lg px-3 py-2.5 transition-colors ${
          isCur ? 'bg-indigo-50 dark:bg-indigo-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
      >
        <span className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${
          isDone ? 'bg-green-500 text-white' : isCur ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
          {isDone ? <RiCheckLine size={16} /> : i + 1}
        </span>
        <span className="min-w-0">
          <span className={`flex items-center gap-1.5 text-sm font-semibold ${isCur ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-800 dark:text-gray-200'}`}>
            <Icon size={15} className="shrink-0" />{s.title}
          </span>
          {s.meta && <span className="block text-xs text-gray-400 dark:text-gray-500">{s.meta}</span>}
        </span>
      </button>
    )
  }

  return (
    // The Read Along step shows its desktop audio bar under the navbar (the
    // first passage only; the second is text only).
    <PageWrapper wide className={current === 'read' && !readAlt ? AUDIO_BAR_PAD : ''}>
      <div className="mb-4">
        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{t('todayStudy', lang)}</p>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          {t('chapter', lang)} {ch} · {t('section', lang)} {sec}
          {words[0]?.section_title && <span className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400"> · {words[0].section_title}</span>}
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex-1 max-w-sm bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 rounded-full h-2 transition-all" style={{ width: `${(doneCount / total) * 100}%` }} />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">{t('journeyProgress', lang, { done: doneCount, total })}</span>
        </div>
      </div>

      <div className={menuOpen ? 'lg:grid lg:grid-cols-[220px_1fr] lg:gap-6 items-start' : ''}>
        {/* Steps: a sidebar on large screens */}
        {menuOpen && (
          <nav aria-label={t('journeySteps', lang)} className={`hidden lg:block lg:sticky ${current === 'read' && !readAlt ? 'lg:top-32' : 'lg:top-20'} bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-2`}>
            {steps.map(stepRow)}
            <button onClick={toggleMenu} className="w-full flex items-center gap-2 mt-1 px-3 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300">
              <RiMenuFoldLine size={15} />{t('journeyHideMenu', lang)}
            </button>
          </nav>
        )}
        {/* ...and a numbered stepper above the step on smaller ones, or when the menu is folded */}
        <nav aria-label={t('journeySteps', lang)} className={`mb-3 flex items-center gap-3 ${menuOpen ? 'lg:hidden' : ''}`}>
          {!menuOpen && (
            <button onClick={toggleMenu} aria-label={t('journeyShowMenu', lang)} title={t('journeyShowMenu', lang)}
              className="hidden lg:flex shrink-0 items-center justify-center h-9 w-9 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800">
              <RiMenuUnfoldLine size={18} />
            </button>
          )}
          <div className="flex-1 min-w-0">
          <ol className="flex items-center lg:max-w-md">
            {steps.map((s, i) => {
              const isCur = s.id === current, isDone = !!done[s.id]
              return (
                <li key={s.id} className={`flex items-center ${i < steps.length - 1 ? 'flex-1' : ''}`}>
                  <button
                    onClick={() => go(s.id)}
                    aria-label={s.title}
                    aria-current={isCur ? 'step' : undefined}
                    className={`shrink-0 h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      isDone ? 'bg-green-500 text-white' : isCur ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}
                  >{isDone ? <RiCheckLine size={18} /> : i + 1}</button>
                  {i < steps.length - 1 && <span className={`flex-1 h-0.5 mx-1 ${isDone ? 'bg-green-400' : 'bg-gray-200 dark:bg-gray-700'}`} />}
                </li>
              )
            })}
          </ol>
          <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            {index + 1}. {steps[index]?.title}
            {steps[index]?.meta && <span className="font-normal text-gray-400 dark:text-gray-500"> · {steps[index].meta}</span>}
          </p>
          </div>
        </nav>

        <section className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
              {current === 'watch' && (
                <div>
                  {lesson && hasVideo(lesson) ? (
                    <Suspense fallback={<div className="aspect-video rounded-xl bg-indigo-950/90 animate-pulse" />}>
                      <InteractiveLesson lesson={lesson} onEnded={() => markDone('watch')} />
                    </Suspense>
                  ) : lessonFailed || (lesson && !hasVideo(lesson)) ? (
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('journeyNoVideo', lang)}</p>
                      <button onClick={() => navigate(`/lesson/${ch}/${sec}`)} className="mt-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">{t('journeyOpenLesson', lang)} →</button>
                    </div>
                  ) : (
                    <div className="aspect-video rounded-xl bg-indigo-950/90 animate-pulse" />
                  )}
                  <StepFooter onDone={completeAndNext} doneLabel={next ? t('journeyNext', lang, { step: next.title }) : t('journeyMarkDone', lang)} />
                </div>
              )}

              {current === 'read' && (
                <div>
                  <SectionReaderView chapter={ch} section={sec} embedded variant="alt" onEnded={() => markDone('read')} />
                  <StepFooter onDone={completeAndNext} doneLabel={next ? t('journeyNext', lang, { step: next.title }) : t('journeyMarkDone', lang)} />
                </div>
              )}

              {current === 'cards' && <Flashcards words={words} onDone={completeAndNext} />}

              {current === 'quiz' && <MiniQuiz vocab={vocab} chapter={ch} section={sec} onDone={completeAndNext} />}

              {current === 'finish' && <Finish chapter={ch} section={sec} onSaved={() => { markDone('finish'); navigate('/') }} />}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </PageWrapper>
  )
}

function StepFooter({ onDone, doneLabel }: { onDone: () => void; doneLabel: string }) {
  return (
    <div className="flex justify-end mt-5">
      <button onClick={onDone} className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm min-h-[44px]">
        <RiCheckLine size={16} />{doneLabel}<RiArrowRightLine size={16} />
      </button>
    </div>
  )
}

function Flashcards({ words, onDone }: { words: VocabWord[]; onDone: () => void }) {
  const { wordStatuses, setWordStatus, preferredLanguage: lang } = useAppStore()
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const w = words[cardIndex]
  return (
    <div>
      <div className="text-center mb-2"><span className="text-sm text-gray-400">{cardIndex + 1} / {words.length}</span></div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
        <div className="bg-indigo-500 rounded-full h-1.5" style={{ width: `${((cardIndex + 1) / words.length) * 100}%` }} />
      </div>
      <div className="cursor-pointer" style={{ perspective: 1000 }} onClick={() => setFlipped(!flipped)}>
        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div key="front" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-300 dark:border-indigo-700 p-8 md:p-10 text-center shadow-lg min-h-[200px] md:min-h-[180px] flex flex-col items-center justify-center">
              <p className="font-jp text-4xl font-bold text-gray-900 dark:text-white">{w?.wordClean}</p>
              {w?.isSuruVerb && <span className="mt-2 text-xs text-indigo-400">{t('suruVerb', lang)}</span>}
              <p className="mt-4 text-sm text-gray-400">{t('tapToFlip', lang)}</p>
            </motion.div>
          ) : (
            <motion.div key="back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="bg-indigo-600 rounded-2xl p-8 md:p-10 text-center shadow-lg min-h-[200px] md:min-h-[180px] flex flex-col items-center justify-center">
              {w?.furigana && <p className="text-indigo-200 text-sm mb-1">{w.furigana}</p>}
              <p className="text-white text-2xl font-bold">{w ? getMeaning(w, lang) : ''}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {flipped && w && (
        <div className="flex justify-center gap-2 mt-4">
          {(['new', 'learning', 'known'] as WordStatus[]).map(s => (
            <button key={s} onClick={() => setWordStatus(w.wordClean, s, w.chapter, w.section)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium min-h-[44px] ${STATUS_COLORS[s]} ${(wordStatuses[w.wordClean] ?? 'new') === s ? 'ring-2 ring-indigo-500' : ''}`}>
              {t(s, lang)}
            </button>
          ))}
        </div>
      )}
      <div className="flex justify-center gap-3 mt-6">
        <button onClick={() => { setCardIndex(Math.max(0, cardIndex - 1)); setFlipped(false) }} disabled={cardIndex === 0}
          className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 disabled:opacity-40 min-h-[48px] font-medium">{t('prev', lang)}</button>
        {cardIndex < words.length - 1 ? (
          <button onClick={() => { setCardIndex(cardIndex + 1); setFlipped(false) }}
            className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 min-h-[48px] font-medium">{t('next', lang)}</button>
        ) : (
          <button onClick={onDone} className="px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 min-h-[48px] font-medium">{t('miniQuizNext', lang)}</button>
        )}
      </div>
    </div>
  )
}

function MiniQuiz({ vocab, chapter, section, onDone }: { vocab: VocabWord[]; chapter: number; section: number; onDone: () => void }) {
  const { user, preferredLanguage: lang } = useAppStore()
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => generateVocabQuiz(vocab, chapter, section, 5, lang))
  const [results, setResults] = useState<QuizResult[] | null>(null)
  const [elapsed, setElapsed] = useState(0)

  if (!questions.length) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p>{t('notEnoughWords', lang)}</p>
        <button onClick={onDone} className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-xl">{t('next', lang)}</button>
      </div>
    )
  }
  if (!results) {
    return (
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t('miniQuiz', lang)}</h2>
          <p className="text-sm text-gray-500">{t('miniQuizSub', lang)}</p>
        </div>
        <QuizRunner questions={questions} onComplete={(r, e) => { setResults(r); setElapsed(e) }} />
      </div>
    )
  }
  return (
    <div>
      <ResultsScreen
        questions={questions} results={results} elapsed={elapsed} quizType="vocab"
        onRetry={() => { setQuestions(generateVocabQuiz(vocab, chapter, section, 5, lang)); setResults(null) }}
        onSave={async () => {
          if (!user) return
          await storeFor(user).addQuizAttempt(user.id, {
            quiz_type: 'vocab', chapter, section,
            score: results.filter(r => r.isCorrect).length, total_questions: results.length,
            time_taken_seconds: elapsed, answers: results,
          })
        }}
      />
      <div className="text-center mt-4">
        <button onClick={onDone} className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold">{t('finishSession', lang)}</button>
      </div>
    </div>
  )
}

function Finish({ chapter, section, onSaved }: { chapter: number; section: number; onSaved: () => void }) {
  const { user, preferredLanguage: lang } = useAppStore()
  const [rating, setRating] = useState<'easy' | 'okay' | 'hard' | null>(null)
  const [saving, setSaving] = useState(false)

  async function complete() {
    if (!user || !rating) return
    setSaving(true)
    try {
      await storeFor(user).upsertDailySession(user.id, {
        session_date: new Date().toISOString().split('T')[0],
        chapter, section, self_rating: rating,
        completed_at: new Date().toISOString(),
        level: user.jlpt_level ?? DEFAULT_LEVEL,
      })
      toast.success(lang === 'id' ? 'Sesi selesai! Hebat 🎉' : 'Session complete! Well done 🎉')
      onSaved()
    } catch {
      toast.error(lang === 'id' ? 'Gagal menyimpan' : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-md mx-auto text-center py-6 md:py-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('howWasSession', lang)}</h2>
      <p className="text-gray-500 text-sm mb-6 md:mb-8">{t('beHonest', lang)}</p>
      <div className="flex justify-center gap-3 mb-6 md:mb-8">
        {([['easy', 'bg-green-500'], ['okay', 'bg-blue-500'], ['hard', 'bg-red-500']] as const).map(([val, color]) => (
          <button key={val} onClick={() => setRating(val)}
            className={`flex flex-col items-center gap-2 flex-1 py-4 rounded-2xl border-2 transition-all min-h-[80px] ${
              rating === val ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950' : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'}`}>
            <span className={`w-5 h-5 rounded-full ${color}`} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t(val, lang)}</span>
          </button>
        ))}
      </div>
      <button disabled={!rating || saving} onClick={complete}
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors min-h-[52px] text-base">
        {saving ? t('saving', lang) : <span className="flex items-center justify-center gap-1.5"><RiCheckDoubleLine size={18} />{t('complete', lang)}</span>}
      </button>
    </div>
  )
}
