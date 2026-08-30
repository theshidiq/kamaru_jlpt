import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiHeadphoneLine } from '@remixicon/react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ResultsScreen } from '@/components/quiz/ResultsScreen'
import { ListeningPlayer } from '@/components/quiz/ListeningPlayer'
import { SCENE_MAP } from '@/components/scenes'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'
import { t } from '@/lib/i18n'
import { loadListeningQuestions, generateListeningQuiz } from '@/lib/listening'
import type { QuizQuestion, QuizResult } from '@/types/quiz'
import type { ListeningQuestion } from '@/types/listening'
import { DEFAULT_LEVEL } from '@/lib/vocab'
import { audioUrl } from '@/lib/assets'

type Phase = 'loading' | 'intro-instructions' | 'intro-example' | 'quiz' | 'results'

// Hardcoded example question matching the intro-example.mp3 dialogue
const EXAMPLE_QUESTION = {
  sceneType: 'classroom' as const,
  question: '学生はこれから何をしますか。',
  options: ['先生に宿題を出す', '宿題をする', '机を片付ける', '教室を出る'],
}

function toQuizQuestion(q: ListeningQuestion): QuizQuestion {
  return {
    id: q.id,
    type: 'mondai3',
    prompt: q.question,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  }
}

export function ListeningQuiz() {
  const { user, preferredLanguage: lang } = useAppStore()
  const navigate = useNavigate()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL

  const [questions, setQuestions] = useState<ListeningQuestion[]>([])
  const [phase, setPhase] = useState<Phase>('loading')
  const [results, setResults] = useState<QuizResult[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [startTime, setStartTime] = useState(0)

  // intro-instructions audio state (27.8s hardcoded as Safari fallback)
  const introRef = useRef<HTMLAudioElement>(null)
  const [instrTime, setInstrTime] = useState(0)
  const [instrDuration, setInstrDuration] = useState(27.8)
  const [instrPlaying, setInstrPlaying] = useState(false)

  // intro-example audio state (52.1s hardcoded as Safari fallback)
  const exampleRef = useRef<HTMLAudioElement>(null)
  const [exTime, setExTime] = useState(0)
  const [exDuration, setExDuration] = useState(52.1)

  useEffect(() => {
    loadListeningQuestions()
      .then(all => {
        setQuestions(generateListeningQuiz(all, level, 10))
        setPhase('intro-instructions')
      })
      .catch(console.error)
  }, [level])

  // Auto-play example track when phase enters intro-example (no user gesture needed — came from audio onEnded)
  useEffect(() => {
    if (phase !== 'intro-example') return
    const id = setTimeout(() => exampleRef.current?.play().catch(() => {}), 100)
    return () => clearTimeout(id)
  }, [phase])

  function skipIntro() {
    introRef.current?.pause()
    exampleRef.current?.pause()
    setStartTime(Date.now())
    setPhase('quiz')
  }

  function handleAnswer(selectedIndex: number, isCorrect: boolean) {
    const timeMs = Date.now() - startTime
    setResults(prev => [
      ...prev,
      { questionId: questions[currentIndex].id, selectedIndex, isCorrect, timeMs },
    ])
  }

  async function handleNext() {
    const nextIndex = currentIndex + 1
    if (nextIndex >= questions.length) {
      const el = Math.floor((Date.now() - startTime) / 1000)
      setElapsed(el)
      setPhase('results')
      if (user) {
        const finalResults = results
        await storeFor(user).addQuizAttempt(user.id, {
          quiz_type: 'listening',
          score: finalResults.filter(r => r.isCorrect).length,
          total_questions: finalResults.length,
          time_taken_seconds: el,
          answers: finalResults,
        })
      }
    } else {
      setCurrentIndex(nextIndex)
    }
  }

  function retry() {
    loadListeningQuestions()
      .then(all => {
        setResults([])
        setCurrentIndex(0)
        setQuestions(generateListeningQuiz(all, level, 10))
        setPhase('intro-instructions')
      })
      .catch(console.error)
  }

  const ExampleScene = SCENE_MAP[EXAMPLE_QUESTION.sceneType]

  return (
    <PageWrapper>
      {phase === 'loading' && (
        <div className="flex items-center justify-center py-20 text-gray-400 dark:text-gray-500">
          {t('loading', lang)}
        </div>
      )}

      {/* ── Phase 1: Instructions ── */}
      {phase === 'intro-instructions' && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-5">
          <audio
            ref={introRef}
            src={audioUrl('/audio/listening/intro-instructions.mp3')}
            preload="auto"
            onLoadedMetadata={() => { const d = introRef.current?.duration; if (d && isFinite(d)) setInstrDuration(d) }}
            onDurationChange={() => { const d = introRef.current?.duration; if (d && isFinite(d)) setInstrDuration(d) }}
            onTimeUpdate={() => introRef.current && setInstrTime(introRef.current.currentTime)}
            onPlay={() => setInstrPlaying(true)}
            onPause={() => setInstrPlaying(false)}
            onEnded={() => { setInstrPlaying(false); setPhase('intro-example') }}
          />

          {/* Pulsing icon */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-rose-500 flex items-center justify-center animate-pulse">
              <RiHeadphoneLine size={28} className="text-white" />
            </div>
            <p className="text-xs font-semibold tracking-widest text-rose-500 uppercase">日本語能力試験 {level}</p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">聴解</h1>
          </div>

          {/* Section card */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-5 max-w-sm w-full text-left shadow-sm">
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-3">もんだい１</p>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              もんだい１では、まず しつもんを 聞いて ください。それから 話を 聞いて、もんだいようしの{' '}
              <span className="font-bold">１から４</span>の 中から、いちばん いい ものを 一つ えらんで ください。
            </p>
          </div>

          {/* Progress bar — shown once playing starts */}
          {instrPlaying && (
            <div className="w-full max-w-sm space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400">
                <span>再生中...</span>
                <span>
                  {Math.floor(instrTime / 60)}:{String(Math.floor(instrTime % 60)).padStart(2, '0')}
                  {' / '}
                  {Math.floor(instrDuration / 60)}:{String(Math.floor(instrDuration % 60)).padStart(2, '0')}
                </span>
              </div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all duration-300"
                  style={{ width: `${(instrTime / instrDuration) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Play button — shown when audio hasn't started (e.g. autoplay blocked) */}
          {!instrPlaying && instrTime === 0 && (
            <button
              onClick={() => introRef.current?.play().catch(() => {})}
              className="flex items-center justify-center gap-2 w-full max-w-sm bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl transition-colors min-h-[48px]"
            >
              <RiHeadphoneLine size={18} />
              始める
            </button>
          )}

          <button
            onClick={skipIntro}
            className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 py-2 transition-colors"
          >
            スキップして始める →
          </button>

          <button
            onClick={() => navigate('/quiz')}
            className="text-xs text-gray-300 dark:text-gray-600 hover:text-gray-500 transition-colors"
          >
            {t('cancel', lang)}
          </button>
        </div>
      )}

      {/* ── Phase 2: Example question ── */}
      {phase === 'intro-example' && (
        <div className="flex flex-col items-center min-h-[60vh] px-4 space-y-4 pt-4">
          <audio
            ref={exampleRef}
            src={audioUrl('/audio/listening/intro-example.mp3')}
            preload="auto"
            onLoadedMetadata={() => { const d = exampleRef.current?.duration; if (d && isFinite(d)) setExDuration(d) }}
            onDurationChange={() => { const d = exampleRef.current?.duration; if (d && isFinite(d)) setExDuration(d) }}
            onTimeUpdate={() => exampleRef.current && setExTime(exampleRef.current.currentTime)}
            onEnded={() => { setStartTime(Date.now()); setPhase('quiz') }}
          />

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 uppercase tracking-wide">
              れい（例題）
            </span>
          </div>

          {/* Scene illustration */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 w-full max-w-xs">
            <ExampleScene />
          </div>

          {/* Question */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3 w-full max-w-sm">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {EXAMPLE_QUESTION.question}
            </p>
          </div>

          {/* Options — grayed out, non-interactive */}
          <div className="space-y-2 w-full max-w-sm">
            {EXAMPLE_QUESTION.options.map((opt, idx) => (
              <div
                key={idx}
                className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 select-none"
              >
                <span className="font-bold mr-2">{idx + 1}.</span>
                {opt}
              </div>
            ))}
          </div>

          {/* Progress bar — shown once playing starts */}
          {exTime > 0 && (
            <div className="w-full max-w-sm space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400">
                <span>再生中...</span>
                <span>
                  {Math.floor(exTime / 60)}:{String(Math.floor(exTime % 60)).padStart(2, '0')}
                  {' / '}
                  {Math.floor(exDuration / 60)}:{String(Math.floor(exDuration % 60)).padStart(2, '0')}
                </span>
              </div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all duration-300"
                  style={{ width: `${(exTime / exDuration) * 100}%` }}
                />
              </div>
            </div>
          )}

          <button
            onClick={skipIntro}
            className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 py-2 transition-colors"
          >
            スキップして始める →
          </button>
        </div>
      )}

      {/* ── Phase 3: Quiz ── */}
      {phase === 'quiz' && questions.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-4 gap-3">
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {t('listeningQuizPage', lang)}
            </h1>
            <button
              onClick={() => navigate('/quiz')}
              className="text-sm text-gray-400 hover:text-gray-600 min-h-[44px] px-2 flex items-center"
            >
              {t('cancel', lang)}
            </button>
          </div>
          <ListeningPlayer
            question={questions[currentIndex]}
            index={currentIndex + 1}
            total={questions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
            autoPlay
          />
        </>
      )}

      {phase === 'results' && (
        <ResultsScreen
          questions={questions.map(toQuizQuestion)}
          results={results}
          elapsed={elapsed}
          quizType="listening"
          onRetry={retry}
        />
      )}
    </PageWrapper>
  )
}
