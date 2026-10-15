import { useEffect, useMemo, useRef, useState } from 'react'
import { Player, type PlayerRef } from '@remotion/player'
import { RiMusic2Line } from '@remixicon/react'
import { AppEpisode } from '@video/AppEpisode'
import { useAppStore } from '@/store/useAppStore'
import { audioUrl } from '@/lib/assets'
import { getMeaning } from '@/lib/vocab'
import { lessonToEpisode } from '@/lib/lessonVideo'
import { t } from '@/lib/i18n'
import type { Lesson } from '@/types/lesson'
import type { WordStatus } from '@/types/user'

const FPS = 30
const SPEEDS = [0.75, 1, 1.25] as const
const SOUND_KEY = 'kamaru.lessonSound' // shared with the Lesson page
const STATUS_NEXT: Record<WordStatus, WordStatus> = { new: 'learning', learning: 'known', known: 'new' }

/**
 * A Lesson played as an interactive video: the same composition as the MP4
 * (video/src), drawn live by the Remotion Player over the lesson's existing
 * audio, so it needs no rendering and no new voicing.
 * - The quiz waits: at each question's thinking time the video pauses, and
 *   picking an answer jumps to the narrator's reveal. Pressing play
 *   instead carries on without answering.
 * - Tapping a studied word in the subtitles pauses and opens it below.
 * - あ, EN, sound and speed apply instantly, because the text is drawn live.
 */
export default function InteractiveLesson({ lesson, onEnded }: { lesson: Lesson; onEnded?: () => void }) {
  const { vocab, wordStatuses, setWordStatus, preferredLanguage: lang } = useAppStore()
  const player = useRef<PlayerRef>(null)
  const ep = useMemo(() => lessonToEpisode(lesson), [lesson])
  const [furigana, setFurigana] = useState(true)
  const [english, setEnglish] = useState(true)
  const [rate, setRate] = useState(1)
  const [soundOn, setSoundOn] = useState(() => {
    try { return localStorage.getItem(SOUND_KEY) !== 'off' } catch { return true }
  })
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [word, setWord] = useState<string | null>(null)

  // Where each quiz waits, on the lesson clock (ms).
  const quizzes = useMemo(() => ep.segments.filter(s => s.type === 'quiz').map(s => {
    const [ask, reveal] = s.lines
    return { n: s.n ?? 0, think: s.at + ask.at + ask.durationMs, reveal: s.at + reveal.at }
  }), [ep])

  // Pause once per question when its thinking time starts, unless answered.
  const answered = useRef(answers)
  useEffect(() => { answered.current = answers }, [answers])
  const onEndedRef = useRef(onEnded)
  useEffect(() => { onEndedRef.current = onEnded }, [onEnded])
  useEffect(() => {
    const p = player.current
    if (!p) return
    const waited = new Set<number>()
    const onFrame = (e: { detail: { frame: number } }) => {
      const ms = (e.detail.frame / FPS) * 1000
      for (const q of quizzes) {
        if (ms >= q.think && ms < q.reveal && answered.current[q.n] === undefined && !waited.has(q.n)) {
          waited.add(q.n)
          p.pause()
        }
      }
    }
    const onEnd = () => onEndedRef.current?.()
    p.addEventListener('frameupdate', onFrame)
    p.addEventListener('ended', onEnd)
    return () => { p.removeEventListener('frameupdate', onFrame); p.removeEventListener('ended', onEnd) }
  }, [quizzes])

  const interaction = useMemo(() => ({
    furigana, english, answers,
    onWord: (w: string) => { player.current?.pause(); setWord(w) },
    onAnswer: (n: number, choice: number) => {
      setAnswers(a => ({ ...a, [n]: choice }))
      const q = quizzes.find(x => x.n === n)
      if (q && player.current) {
        player.current.seekTo(Math.round((q.reveal / 1000) * FPS))
        player.current.play()
      }
    },
  }), [furigana, english, answers, quizzes])

  const src = audioUrl(soundOn && lesson.soundUrl ? lesson.soundUrl : lesson.audioUrl)
  const picked = word ? vocab.find(v => v.wordClean === word) : null
  const status: WordStatus = picked ? (wordStatuses[picked.wordClean] ?? 'new') : 'new'

  const toggleCls = (on: boolean) =>
    `flex items-center justify-center h-9 min-w-9 px-2.5 rounded-lg border text-xs font-bold transition-colors ${on
      ? 'bg-indigo-600 border-indigo-600 text-white'
      : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`

  return (
    <div>
      <div className="rounded-xl overflow-hidden shadow-lg bg-indigo-950">
        <Player
          ref={player}
          component={AppEpisode}
          inputProps={{ ep, audioSrc: src, interaction }}
          durationInFrames={Math.ceil((ep.durationMs / 1000) * FPS)}
          fps={FPS}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{ width: '100%', aspectRatio: '16 / 9' }}
          controls
          clickToPlay={false}
          doubleClickToFullscreen
          playbackRate={rate}
          acknowledgeRemotionLicense
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-3">
        <button onClick={() => setFurigana(v => !v)} aria-pressed={furigana} title={t('furigana', lang)} className={toggleCls(furigana)}>あ</button>
        <button onClick={() => setEnglish(v => !v)} aria-pressed={english} title="EN" className={toggleCls(english)}>EN</button>
        {lesson.soundUrl && (
          <button
            onClick={() => setSoundOn(v => { const n = !v; try { localStorage.setItem(SOUND_KEY, n ? 'on' : 'off') } catch { /* private mode */ } return n })}
            aria-pressed={soundOn} title={t('lessonSound', lang)} className={toggleCls(soundOn)}
          ><RiMusic2Line size={16} /></button>
        )}
        <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {SPEEDS.map(r => (
            <button key={r} onClick={() => setRate(r)}
              className={`text-xs font-semibold px-2.5 py-2 tabular-nums ${rate === r ? 'bg-indigo-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >{r}×</button>
          ))}
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{t('videoHint', lang)}</span>
      </div>

      {picked && (
        <div className="mt-3 flex items-start justify-between gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div>
            {picked.furigana && <p className="font-jp text-xs text-indigo-500 dark:text-indigo-400">{picked.furigana}</p>}
            <p className="font-jp text-2xl font-bold text-gray-900 dark:text-white">{picked.wordClean}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{getMeaning(picked, lang)}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setWordStatus(picked.wordClean, STATUS_NEXT[status], picked.chapter, picked.section)}
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                status === 'known' ? 'bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300'
                : status === 'learning' ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300'
                : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400'}`}
            >{t(status, lang)}</button>
            <button onClick={() => { setWord(null); player.current?.play() }} className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
              {t('videoResume', lang)} ▶
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
