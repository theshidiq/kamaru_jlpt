import { useRef, useState, useEffect, useCallback } from 'react'
import { RiPlayLargeLine, RiPauseLine, RiRepeatLine } from '@remixicon/react'
import { SCENE_MAP } from '@/components/scenes'
import { t } from '@/lib/i18n'
import { useAppStore } from '@/store/useAppStore'
import type { ListeningQuestion } from '@/types/listening'

type AudioPhase = 'idle' | 'loading' | 'playing' | 'paused' | 'done' | 'answered'

interface Props {
  question: ListeningQuestion
  index: number
  total: number
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void
  onNext: () => void
  autoPlay?: boolean
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function ListeningPlayer({ question, index, total, onAnswer, onNext, autoPlay }: Props) {
  const { preferredLanguage: lang } = useAppStore()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [phase, setPhase] = useState<AudioPhase>('idle')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [countdown, setCountdown] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showTranscript, setShowTranscript] = useState(false)
  const hasAudio = Boolean(question.audioUrl)
  const SceneComponent = SCENE_MAP[question.sceneType]

  // Reset state when question changes
  useEffect(() => {
    setPhase('idle')
    setCurrentTime(0)
    setDuration(0)
    setCountdown(0)
    setSelectedIndex(null)
    setShowTranscript(false)
  }, [question.id])

  // Auto-play audio when question changes (if autoPlay enabled)
  useEffect(() => {
    if (!autoPlay || !hasAudio) return
    const id = setTimeout(() => {
      audioRef.current?.play().catch(() => {})
    }, 500)
    return () => clearTimeout(id)
  }, [question.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // Countdown after audio ends before enabling options
  useEffect(() => {
    if (phase !== 'done') return
    setCountdown(3)
    const id = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(id)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [phase])

  const handlePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (phase === 'idle' || phase === 'paused') {
      audio.play()
      setPhase('playing')
    } else if (phase === 'playing') {
      audio.pause()
      setPhase('paused')
    }
  }, [phase])

  const handleReplay = useCallback(() => {
    const audio = audioRef.current
    if (!audio || phase === 'answered') return
    audio.currentTime = 0
    audio.play()
    setPhase('playing')
  }, [phase])

  const handleSelect = useCallback((idx: number) => {
    if (phase === 'answered') return
    if (phase !== 'done' && countdown > 0) return
    // no audio fallback: allow answering immediately
    setSelectedIndex(idx)
    setPhase('answered')
    onAnswer(idx, idx === question.correctIndex)
    // Auto-advance after 1.5s (gives time to see feedback)
    setTimeout(() => onNext(), 1500)
  }, [phase, countdown, question.correctIndex, onAnswer, onNext])

  const optionsEnabled = phase === 'answered' || phase === 'done' && countdown === 0 || !hasAudio

  function optionClass(idx: number): string {
    const base = 'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all min-h-[44px] '
    if (phase !== 'answered') {
      if (!optionsEnabled) {
        return base + 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 cursor-not-allowed'
      }
      return base + 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer'
    }
    if (idx === question.correctIndex) {
      return base + 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
    }
    if (idx === selectedIndex) {
      return base + 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
    }
    return base + 'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50'
  }

  const optionLabels = ['A', 'B', 'C', 'D']

  return (
    <div className="space-y-4">
      {/* Scene illustration */}
      <div className="flex justify-center">
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 max-w-xs w-full">
          <SceneComponent />
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span className="font-medium">問題 {index} / {total}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400">
          聴解 · Mondai 1
        </span>
      </div>

      {/* Audio player */}
      {hasAudio ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-3">
          <audio
            ref={audioRef}
            src={question.audioUrl}
            preload="auto"
            onLoadedMetadata={() => {
              const d = audioRef.current?.duration; if (d && isFinite(d)) setDuration(d)
            }}
            onDurationChange={() => {
              const d = audioRef.current?.duration; if (d && isFinite(d)) setDuration(d)
            }}
            onTimeUpdate={() => {
              if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
            }}
            onEnded={() => setPhase('done')}
            onCanPlay={() => {
              if (phase === 'idle') setPhase('idle')
            }}
            onWaiting={() => setPhase('loading')}
            onPlaying={() => setPhase('playing')}
          />

          {/* Controls row */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlay}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-colors"
              aria-label={phase === 'playing' ? 'Pause' : t('playAudio', lang)}
            >
              {phase === 'playing' ? (
                <RiPauseLine size={18} />
              ) : phase === 'loading' ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <RiPlayLargeLine size={18} />
              )}
            </button>

            {/* Progress bar */}
            <div className="flex-1 space-y-1">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all"
                  style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{duration > 1 ? formatTime(duration) : '--:--'}</span>
              </div>
            </div>

            {/* Replay button */}
            {(phase === 'done' || phase === 'answered') && (
              <button
                onClick={handleReplay}
                disabled={phase === 'answered'}
                className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 flex items-center justify-center hover:border-rose-400 hover:text-rose-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label={t('replayAudio', lang)}
              >
                <RiRepeatLine size={15} />
              </button>
            )}
          </div>

          {/* Status message */}
          <p className="text-xs text-center text-gray-400 dark:text-gray-500">
            {phase === 'idle' && t('waitingForAudio', lang)}
            {phase === 'loading' && t('loading', lang)}
            {phase === 'playing' && t('audioPlaying', lang)}
            {phase === 'paused' && t('playAudio', lang)}
            {phase === 'done' && countdown > 0 && `${countdown}...`}
            {phase === 'done' && countdown === 0 && t('audioDone', lang)}
            {phase === 'answered' && t('audioDone', lang)}
          </p>
        </div>
      ) : (
        /* No audio fallback */
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3 text-sm text-amber-700 dark:text-amber-300">
          <div className="flex items-center justify-between">
            <span>音声ファイルがありません</span>
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-xs underline"
            >
              {showTranscript ? 'スクリプトを隠す' : 'スクリプトを読む'}
            </button>
          </div>
          {showTranscript && (
            <div className="mt-2 space-y-1 text-xs text-gray-700 dark:text-gray-300">
              {question.script.map((line, i) => (
                <p key={i}>
                  <span className="font-semibold text-gray-500">[{line.speaker}] </span>
                  {line.text}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Question */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{question.question}</p>
      </div>

      {/* Answer options */}
      <div className="space-y-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={!optionsEnabled || phase === 'answered'}
            className={optionClass(idx)}
          >
            <span className="font-bold mr-2 text-gray-400">{optionLabels[idx]}.</span>
            {option}
          </button>
        ))}
      </div>

      {/* Explanation (shown briefly before auto-advance) */}
      {phase === 'answered' && question.explanation && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl px-4 py-3 text-sm text-blue-800 dark:text-blue-200">
          {question.explanation}
        </div>
      )}
    </div>
  )
}
