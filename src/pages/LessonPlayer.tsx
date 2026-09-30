import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { RiPauseFill, RiPlayFill, RiReplay10Line, RiForward10Line } from '@remixicon/react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { t } from '@/lib/i18n'
import { DEFAULT_LEVEL } from '@/lib/vocab'
import { audioUrl } from '@/lib/assets'
import { lessonFor } from '@/lib/lessons'
import type { Lesson, LessonLine, LessonPart, LessonSegment } from '@/types/lesson'
import type { WordStatus } from '@/types/user'

const SPEEDS = [0.75, 1, 1.25] as const
const BUILD_ID = __BUILD_ID__
const STATUS_NEXT: Record<WordStatus, WordStatus> = { new: 'learning', learning: 'known', known: 'new' }
const BLOCK_TITLE: Record<string, { jp: string; en: string }> = {
  keigo: { jp: '敬語の言葉', en: 'Keigo words' },
  trade: { jp: '取引の言葉', en: 'Doing business' },
  sales: { jp: '商品と販売', en: 'Products & sales' },
  quiz: { jp: '確認クイズ', en: 'Quiz' },
}
const SPEAKER_CHIP: Record<string, string> = {
  nakamura: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200',
  suzuki: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200',
}

function clock(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function Parts({ parts, furigana }: { parts: LessonPart[]; furigana: boolean }) {
  return (
    <>
      {parts.map((p, k) => p.r && furigana
        ? <ruby key={k}>{p.t}<rt className="text-[10px] text-indigo-400">{p.r}</rt></ruby>
        : <span key={k}>{p.t}</span>)}
    </>
  )
}

/** One spoken line. `t` is ms into this line while it is the current one. */
function LineText({ line, t, furigana, english, onSeek }: {
  line: LessonLine; t: number | null; furigana: boolean; english: boolean; onSeek: () => void
}) {
  return (
    <div
      id={`line-${line.id}`}
      onClick={onSeek}
      className={`cursor-pointer rounded-lg px-2 py-1.5 -mx-2 transition-colors ${
        t !== null ? 'bg-indigo-50/80 dark:bg-indigo-900/25' : 'hover:bg-gray-50 dark:hover:bg-gray-700/40'
      }`}
    >
      <p className="font-jp text-lg leading-loose text-gray-900 dark:text-gray-100">
        {line.units.map((u, i) => {
          const now = t !== null && u.start <= t && t < u.end
          return (
            <span key={i} className={`rounded ${now ? 'bg-amber-200 dark:bg-amber-500/40' : ''} ${
              u.word ? 'underline decoration-dotted decoration-indigo-400 underline-offset-4' : ''}`}>
              <Parts parts={u.parts} furigana={furigana} />
            </span>
          )
        })}
      </p>
      {english && <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{line.en}</p>}
    </div>
  )
}

export function LessonPlayer() {
  const { chapter, section } = useParams()
  const navigate = useNavigate()
  const { user, vocab, preferredLanguage: lang, wordStatuses, setWordStatus } = useAppStore()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL
  const ch = Number(chapter), sec = Number(section)
  const entry = lessonFor(level, ch, sec)

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [nowMs, setNowMs] = useState(0)
  const [rate, setRate] = useState(1)
  const [furigana, setFurigana] = useState(true)
  const [english, setEnglish] = useState(true)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!entry) return
    fetch(audioUrl(`/audio/lessons/${entry.id}.json?v=${BUILD_ID}`))
      .then(r => { if (!r.ok) throw new Error(String(r.status)); return r.json() })
      .then((l: Lesson) => setLesson(l))
      .catch(() => setFailed(true))
  }, [entry])

  // rAF, not timeupdate: timeupdate fires every ~250ms, slower than most
  // units last, so the highlight would skip words (same as the reader).
  useEffect(() => {
    if (!playing) return
    let raf = 0
    const tick = () => {
      const a = audioRef.current
      if (a) setNowMs(a.currentTime * 1000)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate
  }, [rate, lesson])

  const lines = useMemo(() => lesson?.segments.flatMap(s => s.lines) ?? [], [lesson])
  // The line being spoken, or the last one started: held through the gaps so
  // the highlight doesn't flicker off between lines.
  const current = useMemo(() => {
    let cur: LessonLine | null = null
    for (const l of lines) if (l.at <= nowMs) cur = l
    return cur
  }, [lines, nowMs])

  // Keep the spoken line on screen while playing.
  const currentId = current?.id
  useEffect(() => {
    if (!playing || !currentId) return
    document.getElementById(`line-${currentId}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [currentId, playing])

  // Lock-screen / headphone controls.
  useEffect(() => {
    if (!lesson || !('mediaSession' in navigator)) return
    navigator.mediaSession.metadata = new MediaMetadata({ title: lesson.title, artist: '華丸 Kamaru', album: lesson.label })
    const a = () => audioRef.current
    navigator.mediaSession.setActionHandler('play', () => { a()?.play().catch(() => {}) })
    navigator.mediaSession.setActionHandler('pause', () => { a()?.pause() })
    navigator.mediaSession.setActionHandler('seekbackward', () => { const el = a(); if (el) el.currentTime -= 10 })
    navigator.mediaSession.setActionHandler('seekforward', () => { const el = a(); if (el) el.currentTime += 10 })
  }, [lesson])

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play().catch(() => {})
    else a.pause()
  }
  function seek(ms: number, play = true) {
    const a = audioRef.current
    if (!a) return
    a.currentTime = Math.max(0, ms) / 1000
    setNowMs(Math.max(0, ms))
    if (play) a.play().catch(() => {})
  }

  if (!entry || failed) {
    return (
      <PageWrapper>
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">{t('lessonMissing', lang)}</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium">{t('back', lang)}</button>
        </div>
      </PageWrapper>
    )
  }
  if (!lesson) {
    return <PageWrapper><p className="text-center py-16 text-gray-400">{t('loading', lang)}</p></PageWrapper>
  }

  const lineT = (l: LessonLine) => (current?.id === l.id ? nowMs - l.at : null)
  const lineProps = (l: LessonLine) => ({ line: l, t: lineT(l), furigana, english, onSeek: () => seek(l.at) })

  // A render function, not a component: defined in here it would be a new
  // component type every frame, and React would remount the whole transcript.
  function renderSegment(s: LessonSegment) {
    if (s.type === 'bridge') {
      const b = BLOCK_TITLE[s.block ?? ''] ?? null
      return (
        <div className="pt-4">
          {b && <h2 className="font-jp text-lg font-bold text-gray-900 dark:text-white">{b.jp} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">· {b.en}</span></h2>}
          {s.lines.map(l => <LineText key={l.id} {...lineProps(l)} />)}
        </div>
      )
    }
    if (s.type === 'scene') {
      return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-5 shadow-sm">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2">会話 · {t('conversation', lang)}</p>
          <div className="space-y-2">
            {s.lines.map(l => (
              <div key={l.id}>
                <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${SPEAKER_CHIP[l.sp] ?? 'bg-gray-100 text-gray-700'}`}>{l.name}</span>
                <LineText {...lineProps(l)} />
              </div>
            ))}
          </div>
        </div>
      )
    }
    if (s.type === 'word') {
      const w = vocab.find(v => v.wordClean === s.word)
      const st: WordStatus = w ? (wordStatuses[w.wordClean] ?? 'new') : 'new'
      return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <button onClick={() => seek(s.at)} className="text-left">
              <span className="block text-xs text-indigo-500 dark:text-indigo-400 font-jp">{s.reading}</span>
              <span className="block font-jp text-2xl font-bold text-gray-900 dark:text-white">{s.word}</span>
              <span className="block text-sm text-gray-600 dark:text-gray-300 mt-0.5">{s.meaning}</span>
            </button>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className="text-[11px] text-gray-400">{(s.index ?? 0) + 1} / {s.total}</span>
              {w && (
                <button
                  onClick={() => setWordStatus(w.wordClean, STATUS_NEXT[st], ch, sec)}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    st === 'known' ? 'bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300'
                    : st === 'learning' ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300'
                    : 'border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400'}`}
                >
                  {t(st, lang)}
                </button>
              )}
            </div>
          </div>
          <div className="mt-2 space-y-1">
            {s.lines.map(l => (
              <div key={l.id}>
                <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500">{l.role === 'example' ? `例文 · ${t('example', lang)}` : `意味 · ${t('meaning', lang)}`}</span>
                <LineText {...lineProps(l)} />
              </div>
            ))}
          </div>
        </div>
      )
    }
    if (s.type === 'quiz') {
      const [, reveal] = s.lines
      const mine = answers[s.n ?? 0]
      const shown = mine !== undefined || (reveal && nowMs >= reveal.at)
      return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-5 shadow-sm">
          <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">第{s.n}問</span>
          <p className="font-jp text-lg md:text-xl font-semibold leading-loose text-gray-900 dark:text-white mt-2">
            {s.prompt?.map((u, i) => <Parts key={i} parts={u.parts} furigana={furigana} />)}
          </p>
          {english && <p className="text-sm text-gray-500 dark:text-gray-400">{s.promptEn}</p>}
          <div className="grid grid-cols-2 gap-2 mt-3">
            {s.choices?.map((c, i) => {
              const right = i === s.answer, picked = mine === i
              return (
                <button
                  key={i}
                  disabled={mine !== undefined}
                  onClick={() => setAnswers(a => ({ ...a, [s.n ?? 0]: i }))}
                  className={`flex items-center gap-2 font-jp text-base font-semibold px-3 py-2.5 rounded-lg border text-left transition-colors ${
                    shown && right ? 'bg-green-50 border-green-400 text-green-800 dark:bg-green-900/30 dark:border-green-600 dark:text-green-200'
                    : shown && picked ? 'bg-red-50 border-red-300 text-red-700 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300'
                    : 'border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/40'}`}
                >
                  <span className="text-xs text-gray-400">{i + 1}</span>{c}
                </button>
              )
            })}
          </div>
          {!shown && <p className="text-[11px] text-gray-400 mt-2">{t('lessonQuizHint', lang)}</p>}
          <div className="mt-2 space-y-1">
            {s.lines.map(l => (l.role !== 'reveal' || shown) && <LineText key={l.id} {...lineProps(l)} />)}
          </div>
        </div>
      )
    }
    // intro / outro: narration
    return <div>{s.lines.map(l => <LineText key={l.id} {...lineProps(l)} />)}</div>
  }

  return (
    <PageWrapper>
      <div className="pb-40">
        <button onClick={() => navigate(-1)} className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('back', lang)}</button>
        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{t('lesson', lang)} · {lesson.label}</p>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-jp">{lesson.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          {lesson.titleEn} · {lesson.segments.filter(s => s.type === 'word').length} {t('words', lang)} · {clock(lesson.durationMs)}
        </p>

        <div className="space-y-3">
          {lesson.segments.map((s, i) => <div key={i}>{renderSegment(s)}</div>)}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl(lesson.audioUrl)}
        preload="auto"
        onTimeUpdate={() => audioRef.current && setNowMs(audioRef.current.currentTime * 1000)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {/* Player bar. Portalled: PageWrapper animates with a transform, which
          would make it the containing block for position: fixed. */}
      {createPortal(
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
          <div className="max-w-5xl mx-auto px-4 pt-2 pb-3">
            <input
              type="range" min={0} max={lesson.durationMs} step={100} value={Math.min(nowMs, lesson.durationMs)}
              onChange={e => seek(Number(e.target.value), playing)}
              aria-label="Seek"
              className="w-full accent-indigo-600"
            />
            <div className="flex items-center justify-between gap-2 mt-1">
              <span className="text-xs tabular-nums text-gray-500 dark:text-gray-400 w-24">{clock(nowMs)} / {clock(lesson.durationMs)}</span>
              <div className="flex items-center gap-3">
                <button onClick={() => seek(nowMs - 10000, playing)} aria-label="-10s" className="p-2 text-gray-600 dark:text-gray-300"><RiReplay10Line size={24} /></button>
                <button onClick={toggle} aria-label={playing ? t('pause', lang) : t('playAudio', lang)}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">
                  {playing ? <RiPauseFill size={26} /> : <RiPlayFill size={26} />}
                </button>
                <button onClick={() => seek(nowMs + 10000, playing)} aria-label="+10s" className="p-2 text-gray-600 dark:text-gray-300"><RiForward10Line size={24} /></button>
              </div>
              <div className="flex items-center gap-1 w-24 justify-end">
                <button
                  onClick={() => setRate(r => SPEEDS[(SPEEDS.indexOf(r as typeof SPEEDS[number]) + 1) % SPEEDS.length])}
                  className="text-xs font-semibold px-2 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 tabular-nums"
                >{rate}×</button>
                {[
                  { label: 'あ', on: furigana, set: () => setFurigana(v => !v), full: t('furigana', lang) },
                  { label: 'EN', on: english, set: () => setEnglish(v => !v), full: 'EN' },
                ].map(o => (
                  <button key={o.full} onClick={o.set} aria-pressed={o.on} aria-label={o.full}
                    className={`text-xs font-bold h-8 w-8 rounded-md border ${o.on
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'}`}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </PageWrapper>
  )
}
