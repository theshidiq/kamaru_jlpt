import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { RiPlayFill, RiPauseFill, RiRestartLine } from '@remixicon/react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { t } from '@/lib/i18n'
import { DEFAULT_LEVEL } from '@/lib/vocab'
import { PASSAGE_BANK } from '@/lib/passages'
import { audioUrl } from '@/lib/assets'
import type { PassageManifest, PassageAudioEntry } from '@/types/passage'
import type { WordStatus } from '@/types/user'

const SPEEDS = [0.5, 0.75, 1, 1.25] as const

/** Cache key for the passage manifest; replaced at build time. */
const BUILD_ID = __BUILD_ID__

export function SectionReader() {
  const { chapter, section } = useParams()
  const navigate = useNavigate()
  const { user, vocab, preferredLanguage: lang, wordStatuses, setWordStatus } = useAppStore()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL

  const ch = Number(chapter), sec = Number(section)
  const passage = useMemo(
    () => PASSAGE_BANK[level].find(p => p.chapter === ch && p.section === sec),
    [level, ch, sec],
  )

  const [audio, setAudio] = useState<PassageAudioEntry | null>(null)
  const [showFurigana, setShowFurigana] = useState(true)
  const [showEnglish, setShowEnglish] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [rate, setRate] = useState(1)
  const [nowMs, setNowMs] = useState(0)
  const [picked, setPicked] = useState<{ word: string; ch: number; sec: number } | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // R2's r2.dev domain sends no Cache-Control, so browsers apply heuristic
    // caching and can serve a stale manifest after new passages are added --
    // the entry is missing, so the player silently never renders. BUILD_ID
    // changes per build, which scopes the cache to a deployment.
    fetch(audioUrl(`/audio/passages/manifest.json?v=${BUILD_ID}`))
      .then(r => r.json())
      .then((m: PassageManifest) => {
        const id = `${level.toLowerCase()}-${ch}-${sec}`
        setAudio(m.entries.find(e => e.id === id) ?? null)
      })
      .catch(() => setAudio(null))
  }, [level, ch, sec])

  // Which token is being spoken right now
  let activeS = -1
  let activeW = -1
  if (audio && playing) {
    audio.timings.forEach((row, si) => {
      row.forEach((tm, wi) => {
        if (nowMs >= tm.startMs && nowMs < tm.endMs) { activeS = si; activeW = wi }
      })
    })
  }
  const active = { s: activeS, w: activeW }

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate
  }, [rate, audio])

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) { a.play().catch(() => {}); setPlaying(true) }
    else { a.pause(); setPlaying(false) }
  }

  function playSentence(si: number) {
    const a = audioRef.current
    if (!a || !audio) return
    a.currentTime = audio.timings[si][0].startMs / 1000
    a.play().catch(() => {})
    setPlaying(true)
  }

  // A token counts as a vocab word if it matches a word from this section
  const sectionWords = useMemo(
    () => vocab.filter(w => w.chapter === ch && w.section === sec),
    [vocab, ch, sec],
  )
  function lookup(text: string) {
    return sectionWords.find(w => w.wordClean === text || w.wordClean.startsWith(text))
  }

  if (!passage) {
    return (
      <PageWrapper>
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">{t('readerMissing', lang)}</p>
          <button onClick={() => navigate(-1)} className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
            {t('back', lang)}
          </button>
        </div>
      </PageWrapper>
    )
  }

  const detail = picked ? lookup(picked.word) : null
  const status: WordStatus = detail ? (wordStatuses[detail.wordClean] ?? 'new') : 'new'

  return (
    <PageWrapper>
      <button onClick={() => navigate(-1)} className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {t('back', lang)}
      </button>

      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-jp">{passage.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        {t('chapter', lang)} {ch} · {t('section', lang)} {sec} · {passage.targetWords.length} {t('words', lang)}
      </p>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        {audio && (
          <>
            <button
              onClick={toggle}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {playing ? <RiPauseFill size={18} /> : <RiPlayFill size={18} />}
              {playing ? t('pause', lang) : t('playAudio', lang)}
            </button>
            <button
              onClick={() => { const a = audioRef.current; if (a) { a.currentTime = 0; a.play().catch(() => {}); setPlaying(true) } }}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              title={t('restart', lang)}
            >
              <RiRestartLine size={18} />
            </button>

            {/* Playback speed — timings scale with the rate, so highlighting stays in sync */}
            <div className="flex items-center rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {SPEEDS.map(sp => (
                <button
                  key={sp}
                  onClick={() => setRate(sp)}
                  className={`text-xs font-semibold px-2.5 py-2 transition-colors ${
                    rate === sp
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {sp}×
                </button>
              ))}
            </div>
          </>
        )}
        {[
          { label: t('furigana', lang), on: showFurigana, set: () => setShowFurigana(v => !v) },
          { label: 'EN', on: showEnglish, set: () => setShowEnglish(v => !v) },
        ].map(o => (
          <button
            key={o.label}
            onClick={o.set}
            className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
              o.on
                ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300'
                : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {audio && (
        <audio
          ref={audioRef}
          src={audioUrl(audio.audioUrl)}
          preload="auto"
          onTimeUpdate={() => audioRef.current && setNowMs(audioRef.current.currentTime * 1000)}
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
        />
      )}

      {/* Passage */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-7 shadow-sm space-y-4">
        {passage.sentences.map((sentence, si) => (
          <div
            key={si}
            onClick={() => audio && playSentence(si)}
            className={`rounded-lg px-2 py-1.5 -mx-2 transition-colors ${audio ? 'cursor-pointer' : ''} ${
              active.s === si ? 'bg-indigo-50/70 dark:bg-indigo-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/40'
            }`}
          >
            <p className="font-jp text-lg md:text-xl leading-loose text-gray-900 dark:text-gray-100">
              {sentence.seg.map((tok, wi) => {
                const hit = lookup(tok.t)
                const st = hit ? (wordStatuses[hit.wordClean] ?? 'new') : null
                const isActive = active.s === si && active.w === wi
                return (
                  <span
                    key={wi}
                    onClick={e => { if (hit) { e.stopPropagation(); setPicked({ word: tok.t, ch, sec }) } }}
                    className={`rounded transition-colors ${isActive ? 'bg-amber-200 dark:bg-amber-500/40' : ''} ${
                      hit ? 'cursor-pointer underline decoration-dotted underline-offset-4 ' : ''
                    }${
                      hit && st === 'known' ? 'decoration-gray-300 dark:decoration-gray-600'
                      : hit && st === 'learning' ? 'decoration-amber-400 text-amber-700 dark:text-amber-300'
                      : hit ? 'decoration-indigo-400 text-indigo-700 dark:text-indigo-300' : ''
                    }`}
                  >
                    {showFurigana && tok.r
                      ? <ruby>{tok.t}<rt className="text-[10px] text-indigo-400">{tok.r}</rt></ruby>
                      : tok.t}
                  </span>
                )
              })}
            </p>
            {showEnglish && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{sentence.en}</p>
            )}
          </div>
        ))}
      </div>

      {/* Word detail */}
      {detail && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:relative md:mt-4">
          <div className="bg-white dark:bg-gray-800 border-t md:border border-gray-200 dark:border-gray-700 md:rounded-xl p-5 shadow-lg max-w-5xl mx-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-jp text-2xl font-bold text-gray-900 dark:text-white">{detail.wordClean}</p>
                {detail.furigana && <p className="font-jp text-sm text-indigo-500 dark:text-indigo-400">{detail.furigana}</p>}
                <p className="text-gray-700 dark:text-gray-300 mt-1">{detail.meaning_en}</p>
              </div>
              <button onClick={() => setPicked(null)} className="text-gray-400 text-sm">✕</button>
            </div>
            <div className="flex gap-2 mt-4">
              {(['known', 'learning', 'new'] as WordStatus[]).map(s => (
                <button
                  key={s}
                  onClick={() => { setWordStatus(detail.wordClean, s, ch, sec); setPicked(null) }}
                  className={`flex-1 text-xs font-semibold py-2 rounded-lg border transition-colors ${
                    status === s
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {t(s, lang)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {!audio && (
        <p className="text-xs text-gray-400 mt-4">{t('readerNoAudio', lang)}</p>
      )}
    </PageWrapper>
  )
}
