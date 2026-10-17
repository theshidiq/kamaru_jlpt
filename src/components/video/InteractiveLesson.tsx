import { useEffect, useMemo, useRef, useState } from 'react'
import { Player, type PlayerRef } from '@remotion/player'
import { motion } from 'framer-motion'
import { RiFullscreenExitLine, RiFullscreenLine, RiMusic2Line, RiPauseFill, RiPlayFill, RiRewindFill, RiSpeedFill } from '@remixicon/react'
import { AppEpisode } from '@video/AppEpisode'
import { useAppStore } from '@/store/useAppStore'
import { audioUrl } from '@/lib/assets'
import { getMeaning } from '@/lib/vocab'
import { lessonToEpisode } from '@/lib/lessonVideo'
import { t } from '@/lib/i18n'
import type { Lesson } from '@/types/lesson'
import type { WordStatus } from '@/types/user'

const FPS = 30
const SPEEDS = [0.75, 1, 1.25]
const NARROW = '(max-width: 639px)'
/** Two taps closer than this are a double tap. */
const TAP_MS = 280
/** After a side double tap, further taps there keep skipping for this long. */
const SKIP_MS = 700
type Zone = 'back' | 'mid' | 'fwd'
const SOUND_KEY = 'kamaru.lessonSound' // shared with the Lesson page
// The Fullscreen API, falling back to the webkit-prefixed one (iPad Safari).
type WebkitDoc = Document & { webkitFullscreenElement?: Element | null; webkitExitFullscreen?: () => void }
type WebkitEl = HTMLElement & { webkitRequestFullscreen?: () => void }
function fsElement() {
  return document.fullscreenElement ?? (document as WebkitDoc).webkitFullscreenElement ?? null
}
function requestFs(el: HTMLElement): Promise<void> {
  const req = el.requestFullscreen ?? (el as WebkitEl).webkitRequestFullscreen
  if (!req) return Promise.reject(new Error('no fullscreen'))
  // The prefixed call returns nothing, and some embedded browsers leave the
  // promise pending forever; settle on whether it actually took.
  Promise.resolve(req.call(el)).catch(() => {})
  return new Promise((resolve, reject) => setTimeout(() => (fsElement() === el ? resolve() : reject(new Error('refused'))), 600))
}
function exitFs() {
  if (document.exitFullscreen) document.exitFullscreen().catch(() => {})
  else (document as WebkitDoc).webkitExitFullscreen?.()
}

const STATUS_NEXT: Record<WordStatus, WordStatus> = { new: 'learning', learning: 'known', known: 'new' }

/**
 * A Lesson played as an interactive video: the same composition as the MP4
 * (video/src), drawn live by the Remotion Player over the lesson's existing
 * audio, so it needs no rendering and no new voicing.
 * - The quiz waits: at each question's thinking time the video pauses, and
 *   picking an answer jumps to the narrator's reveal. Pressing play
 *   instead carries on without answering.
 * - Tapping a studied word in the subtitles pauses and opens it below.
 * - Taps on the picture work as on YouTube: one tap plays or pauses, a
 *   double tap on the left or right third skips 10 s (each further tap adds
 *   10 s), and a double tap in the middle toggles fullscreen.
 * - あ, EN, sound and speed apply instantly, because the text is drawn live.
 *   They sit in the player's own control bar, so they stay at hand in
 *   fullscreen. Fullscreen is taken by our wrapper rather than the Player,
 *   via the webkit-prefixed API where that is all there is (iPad Safari).
 *   Without the API (iPhone) or if it is refused, the wrapper instead
 *   covers the window ("fill" mode), so the button always does something.
 *   so the word card can show over the video there too.
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
  const box = useRef<HTMLDivElement>(null)
  const [native, setNative] = useState(false)
  const [fill, setFill] = useState(false)
  const fullscreen = native || fill
  useEffect(() => {
    const on = () => setNative(!!box.current && fsElement() === box.current)
    document.addEventListener('fullscreenchange', on)
    document.addEventListener('webkitfullscreenchange', on)
    return () => {
      document.removeEventListener('fullscreenchange', on)
      document.removeEventListener('webkitfullscreenchange', on)
    }
  }, [])
  // Fill mode: Escape leaves it, and the page behind does not scroll.
  useEffect(() => {
    if (!fill) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setFill(false) }
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = overflow }
  }, [fill])
  function toggleFullscreen() {
    if (fill) { setFill(false); return }
    if (fsElement()) { exitFs(); return }
    const el = box.current
    if (!el) return
    requestFs(el).catch(() => setFill(true))
  }

  // Phones have volume buttons; dropping the slider keeps the bar on one line.
  const [narrow, setNarrow] = useState(() => window.matchMedia(NARROW).matches)
  useEffect(() => {
    const mq = window.matchMedia(NARROW)
    const on = () => setNarrow(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

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

  // ── Taps on the picture ──
  const frames = Math.ceil((ep.durationMs / 1000) * FPS)
  const tap = useRef<{ t: number; zone: Zone; timer?: number; skipping?: Zone }>({ t: 0, zone: 'mid' })
  const [flash, setFlash] = useState<{ kind: 'play' | 'pause' | Exclude<Zone, 'mid'>; secs: number; id: number } | null>(null)
  const flashTimer = useRef<number | undefined>(undefined)
  function show(kind: 'play' | 'pause' | 'back' | 'fwd', secs = 0) {
    // Skips on the same side add up (10 s, 20 s, …) while the taps continue.
    setFlash(f => ({ kind, secs: f && f.kind === kind ? f.secs + secs : secs, id: Date.now() }))
    window.clearTimeout(flashTimer.current)
    flashTimer.current = window.setTimeout(() => setFlash(null), 700)
  }
  function togglePlay() {
    const p = player.current
    if (!p) return
    const playing = p.isPlaying()
    if (playing) p.pause()
    else p.play()
    show(playing ? 'pause' : 'play')
  }
  function skip(zone: 'back' | 'fwd') {
    const p = player.current
    if (!p) return
    const to = p.getCurrentFrame() + (zone === 'back' ? -10 : 10) * FPS
    p.seekTo(Math.max(0, Math.min(to, frames - 1)))
    show(zone, 10)
  }
  function onPictureTap(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.target as HTMLElement
    // Only the picture itself: the control bar sits outside the composition
    // element, and words and quiz answers (pointer cursor) have their own taps.
    if (!el.closest('.__remotion-player') || getComputedStyle(el).cursor === 'pointer') return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const zone: Zone = x < 0.35 ? 'back' : x > 0.65 ? 'fwd' : 'mid'
    const now = performance.now()
    const s = tap.current
    if (zone !== 'mid' && s.skipping === zone && now - s.t < SKIP_MS) {
      s.t = now
      skip(zone)
      return
    }
    if (now - s.t < TAP_MS && s.zone === zone) {
      window.clearTimeout(s.timer)
      s.t = now
      if (zone === 'mid') {
        // The first tap already toggled playback; put it back, as YouTube does.
        togglePlay()
        toggleFullscreen()
      } else {
        s.skipping = zone
        skip(zone)
      }
      return
    }
    s.t = now
    s.zone = zone
    s.skipping = undefined
    // In the middle a tap acts at once; on the sides it waits a moment, in
    // case it is the first of a double tap.
    if (zone === 'mid') togglePlay()
    else s.timer = window.setTimeout(togglePlay, TAP_MS)
  }
  const FlashIcon = flash ? { play: RiPlayFill, pause: RiPauseFill, back: RiRewindFill, fwd: RiSpeedFill }[flash.kind] : null

  // Sized like the Player's own buttons, white on its dark control bar.
  const barBtn = (on: boolean) =>
    `flex items-center justify-center h-7 min-w-7 px-1.5 rounded-md text-xs font-bold transition-colors ${on
      ? 'bg-white text-indigo-900'
      : 'text-white/80 hover:bg-white/15'}`
  const toggleSound = () => setSoundOn(v => {
    const n = !v
    try { localStorage.setItem(SOUND_KEY, n ? 'on' : 'off') } catch { /* private mode */ }
    return n
  })
  // Re-created each render, which the Player picks up as a new prop.
  const renderControls = () => (
    <div className="flex items-center gap-0.5 sm:gap-1 mr-1">
      <button type="button" onClick={() => setFurigana(v => !v)} aria-pressed={furigana} title={t('furigana', lang)} className={barBtn(furigana)}>あ</button>
      <button type="button" onClick={() => setEnglish(v => !v)} aria-pressed={english} title="EN" className={barBtn(english)}>EN</button>
      {lesson.soundUrl && (
        <button type="button" onClick={toggleSound} aria-pressed={soundOn} title={t('lessonSound', lang)} className={barBtn(soundOn)}>
          <RiMusic2Line size={15} />
        </button>
      )}
      {/* One button cycling the speeds, so the bar still fits a phone */}
      <button type="button" onClick={() => setRate(r => SPEEDS[(SPEEDS.indexOf(r) + 1) % SPEEDS.length])} title="Speed"
        className={`${barBtn(false)} tabular-nums w-11`}>{rate}×</button>
      <button type="button" onClick={toggleFullscreen} aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'} title={fullscreen ? 'Exit fullscreen' : 'Fullscreen'} className={barBtn(false)}>
        {fullscreen ? <RiFullscreenExitLine size={17} /> : <RiFullscreenLine size={17} />}
      </button>
    </div>
  )

  const card = picked && (
    <div className={`flex items-start justify-between gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 ${
      fullscreen ? 'absolute top-4 right-4 w-80 shadow-2xl z-10' : 'mt-3'}`}>
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
        <button onClick={() => { setWord(null); player.current?.play() }} className="text-xs text-indigo-600 dark:text-indigo-400 font-medium whitespace-nowrap">
          {t('videoResume', lang)} ▶
        </button>
      </div>
    </div>
  )

  return (
    <div>
      {/* Fill mode is position: fixed inside PageWrapper, which is safe here:
          its entrance transform has ended (to none) before anyone can tap. */}
      <div ref={box} className={fill ? 'fixed inset-0 z-[70] flex items-center justify-center bg-black' : native ? 'relative flex items-center justify-center bg-black' : 'relative'}>
        <div className={`relative select-none ${fullscreen ? '' : 'rounded-xl overflow-hidden shadow-lg bg-indigo-950'}`}
          // manipulation: no double-tap zoom on phones, so double taps reach us
          style={{ touchAction: 'manipulation', ...(fullscreen ? { width: 'min(100vw, calc(100dvh * 16 / 9))' } : {}) }}
          onClick={onPictureTap}>
          <Player
            ref={player}
            component={AppEpisode}
            inputProps={{ ep, audioSrc: src, interaction }}
            durationInFrames={frames}
            fps={FPS}
            compositionWidth={1920}
            compositionHeight={1080}
            style={{ width: '100%', aspectRatio: '16 / 9' }}
            controls
            clickToPlay={false}
            allowFullscreen={false}
            showVolumeControls={!narrow}
            renderCustomControls={renderControls}
            playbackRate={rate}
            acknowledgeRemotionLicense
          />
          {flash && FlashIcon && (
            <div className={`pointer-events-none absolute top-0 bottom-12 flex items-center justify-center ${
              flash.kind === 'back' ? 'left-0 w-1/3' : flash.kind === 'fwd' ? 'right-0 w-1/3' : 'inset-x-0'}`}>
              <motion.span
                key={flash.id}
                initial={{ opacity: 1, scale: 0.85 }}
                animate={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-black/45 text-white"
              >
                <FlashIcon size={28} />
                {flash.secs > 0 && <span className="text-[11px] font-semibold tabular-nums">{flash.secs}s</span>}
              </motion.span>
            </div>
          )}
        </div>
        {fullscreen && card}
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-right">{t('videoHint', lang)}</p>
      {!fullscreen && card}
    </div>
  )
}
