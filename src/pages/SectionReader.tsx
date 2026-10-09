import { useState, useEffect, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { RiPlayFill, RiPauseFill, RiRestartLine, RiArrowLeftSLine, RiArrowRightSLine, RiBookReadLine, RiHeadphoneLine } from '@remixicon/react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { t } from '@/lib/i18n'
import { DEFAULT_LEVEL } from '@/lib/vocab'
import { PASSAGE_BANK } from '@/lib/passages'
import { audioUrl } from '@/lib/assets'
import { saveLastRead } from '@/lib/storage'
import { lessonFor } from '@/lib/lessons'
import type { PassageManifest, PassageAudioEntry, PassageSentence } from '@/types/passage'
import { FormattedPassage } from '@/components/reader/FormattedPassage'
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

  // Neighbouring sections in reading order across the whole level, so Next
  // rolls from chapter 1 section 5 into chapter 2 section 1 rather than
  // dead-ending. PASSAGE_BANK is authored in order; sort defensively so a
  // future out-of-order entry cannot scramble navigation.
  const { prev, next } = useMemo(() => {
    const all = [...PASSAGE_BANK[level]].sort(
      (a, b) => a.chapter - b.chapter || a.section - b.section,
    )
    const i = all.findIndex(p => p.chapter === ch && p.section === sec)
    return {
      prev: i > 0 ? all[i - 1] : null,
      next: i >= 0 && i < all.length - 1 ? all[i + 1] : null,
    }
  }, [level, ch, sec])

  const [audio, setAudio] = useState<PassageAudioEntry | null>(null)
  const lesson = lessonFor(level, ch, sec)
  const [showFurigana, setShowFurigana] = useState(true)
  const [showEnglish, setShowEnglish] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [rate, setRate] = useState(1)
  const [nowMs, setNowMs] = useState(0)
  const [picked, setPicked] = useState<{ word: string; ch: number; sec: number } | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const controlsRef = useRef<HTMLDivElement>(null)
  const [controlsHidden, setControlsHidden] = useState(false)

  useEffect(() => {
    // R2's r2.dev domain sends no Cache-Control, so browsers apply heuristic
    // caching and can serve a stale manifest after new passages are added --
    // the entry is missing, so the player silently never renders. BUILD_ID
    // changes per build, which scopes the cache to a deployment.
    // Remember where the reader was last open so the Dashboard can offer to
    // resume here. Recorded on open rather than on play: opening a section is
    // already the intent to read it.
    saveLastRead({ level, chapter: ch, section: sec, at: new Date().toISOString() })

    fetch(audioUrl(`/audio/passages/manifest.json?v=${BUILD_ID}`))
      .then(r => r.json())
      .then((m: PassageManifest) => {
        const id = `${level.toLowerCase()}-${ch}-${sec}`
        setAudio(m.entries.find(e => e.id === id) ?? null)
      })
      .catch(() => setAudio(null))
  }, [level, ch, sec])

  // Which token is being spoken right now
  // Held while paused too: pausing mid-sentence to shadow a line is the main
  // way this page is used, and clearing the highlight there loses your place.
  let activeS = -1
  let activeW = -1
  if (audio) {
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

  // Track playback position with rAF rather than the element's timeupdate
  // event. timeupdate fires only about every 265ms, but the median passage
  // token lasts 240ms — over half of them are shorter than one interval, so
  // the highlight skips tokens entirely and lags audibly behind the voice.
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

  // Show a floating play/pause once the inline controls scroll out of view.
  // Passages run long, and shadowing means pausing every sentence — without
  // this you have to scroll back to the top for every pause.
  //
  // A scroll listener rather than IntersectionObserver: this component
  // early-returns before the controls exist (no passage, or audio still
  // loading), so an observer registered against the ref can end up bound to
  // nothing and never re-run.
  useEffect(() => {
    function onScroll() {
      const el = controlsRef.current
      setControlsHidden(!!el && el.getBoundingClientRect().bottom < 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  })

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
  // Prefix matching lets a conjugated stem find its word (継 → 継ぐ). For the
  // business passages it is tightened so the leftover must be okurigana:
  // otherwise 会議 would open 会議室 and 人 would open 人間. The JLPT passages
  // keep the looser rule, which their multi-kanji verbs rely on (向 → 向き合う).
  const strictLookup = !!passage?.format
  function lookup(text: string) {
    // A lone hiragana (な, と) is a particle, never a word's stem: it would
    // otherwise open a kana word that happens to start with it (なにやら).
    if (strictLookup && /^[\u3040-\u309f]$/.test(text)) return undefined
    return sectionWords.find(w =>
      w.wordClean === text ||
      (w.wordClean.startsWith(text) &&
        (!strictLookup || /^[\u3040-\u309f]+$/.test(w.wordClean.slice(text.length)))))
  }

  // One sentence's tokens, shared by every layout so lookup, status colouring
  // and furigana behave the same in an email as in a narrative passage.
  function renderTokens(sentence: PassageSentence, si: number) {
    return sentence.seg.map((tok, wi) => {
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
    })
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

  /**
   * Prev/next section links. Rendered twice — above the passage and below it —
   * because passages are long enough that scrolling back up to advance is the
   * same friction the floating play button solves.
   */
  function sectionNav(placement: 'top' | 'bottom') {
    const cls =
      'flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border transition-colors ' +
      'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 ' +
      'hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:pointer-events-none'
    return (
      <div className={`flex items-center justify-between gap-2 ${placement === 'top' ? 'mb-4' : 'mt-6'}`}>
        <button
          className={cls}
          disabled={!prev}
          onClick={() => { if (prev) { window.scrollTo(0, 0); navigate(`/read/${prev.chapter}/${prev.section}`) } }}
          title={prev ? prev.title : undefined}
        >
          <RiArrowLeftSLine size={18} />
          {t('prev', lang)}
        </button>
        <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
          {ch} · {sec}
        </span>
        <button
          className={cls}
          disabled={!next}
          onClick={() => { if (next) { window.scrollTo(0, 0); navigate(`/read/${next.chapter}/${next.section}`) } }}
          title={next ? next.title : undefined}
        >
          {t('next', lang)}
          <RiArrowRightSLine size={18} />
        </button>
      </div>
    )
  }

  return (
    <PageWrapper>
      <button onClick={() => navigate(-1)} className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {t('back', lang)}
      </button>

      <p className="flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
        <RiBookReadLine size={14} />
        {t('readTitle', lang)}{audio && ` · ${Math.floor(audio.durationMs / 60000)}:${String(Math.floor(audio.durationMs / 1000) % 60).padStart(2, '0')}`}
      </p>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-jp">{passage.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        {t('chapter', lang)} {ch} · {t('section', lang)} {sec} · {passage.targetWords.length} {t('words', lang)}
      </p>

      {lesson && (
        <button
          onClick={() => navigate(`/lesson/${ch}/${sec}`)}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4 -mt-2"
        >
          <RiHeadphoneLine size={16} />
          {t('lesson', lang)} · {t('lessonMinutes', lang, { n: lesson.minutes })} →
        </button>
      )}

      {sectionNav('top')}

      {/* Controls */}
      <div ref={controlsRef} className="flex flex-wrap items-center gap-2 mb-5">
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
          // Keyed per section so navigating remounts the element rather than
          // reusing it — a fresh <audio> starts paused at 0, which resets
          // playback without a state-clearing effect.
          key={`${level}-${ch}-${sec}`}
          ref={audioRef}
          src={audioUrl(audio.audioUrl)}
          preload="auto"
          // Coarse fallback; the rAF loop above drives this during playback.
          onTimeUpdate={() => audioRef.current && setNowMs(audioRef.current.currentTime * 1000)}
          onLoadedMetadata={() => { setPlaying(false); setNowMs(0) }}
          onEnded={() => setPlaying(false)}
          onPause={() => setPlaying(false)}
        />
      )}

      {/* Passage */}
      {passage.format ? (
        <FormattedPassage
          format={passage.format}
          sentences={passage.sentences}
          renderTokens={renderTokens}
          showEnglish={showEnglish}
          lang={lang}
          onSentence={audio ? playSentence : undefined}
          activeSentence={active.s}
        />
      ) : (
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
                {renderTokens(sentence, si)}
              </p>
              {showEnglish && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{sentence.en}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Floating play/pause — appears once the inline controls scroll away.
          Passages run long and shadowing means pausing every sentence, so
          without this you have to scroll back to the top for every pause.
          Hidden while the word sheet is open: that sheet owns the bottom of
          the screen on narrow viewports and has its own controls.

          Portalled to <body> because PageWrapper animates with a transform,
          and a transformed ancestor becomes the containing block for
          position: fixed — inside it, top-1/2 resolves against the full page
          height rather than the viewport. */}
      {audio && controlsHidden && !detail && createPortal(
        // Vertically centred on the right edge, where the thumb rests while
        // holding the phone — and clear of the mobile tab bar without needing
        // to reason about its height. z-50 matches the bar so nothing here is
        // painted behind it.
        <div className="fixed top-1/2 -translate-y-1/2 right-5 z-50 flex flex-col items-center gap-2">
          <button
            onClick={toggle}
            aria-label={playing ? t('pause', lang) : t('playAudio', lang)}
            className="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl transition-colors"
          >
            {playing ? <RiPauseFill size={26} /> : <RiPlayFill size={26} />}
          </button>

          {/* The same furigana / English toggles as the inline control bar, so they
              stay reachable once it has scrolled away. Smaller and muted, so
              play/pause stays the obvious primary action. */}
          {[
            // あ reads as the furigana toggle at a glance; the truncated word
            // ('Fu') would not, and the label is the same in both languages.
            { label: 'あ', on: showFurigana, set: () => setShowFurigana(v => !v), full: t('furigana', lang) },
            { label: 'EN', on: showEnglish, set: () => setShowEnglish(v => !v), full: 'EN' },
          ].map(o => (
            <button
              key={o.full}
              onClick={o.set}
              aria-pressed={o.on}
              aria-label={o.full}
              className={`flex items-center justify-center h-10 w-10 rounded-full text-xs font-bold shadow-lg border transition-colors ${
                o.on
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>,
        document.body,
      )}

      {/* Word detail */}
      {detail && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 md:relative md:mt-4"
        >
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

      {!audio && !passage.format && (
        <p className="text-xs text-gray-400 mt-4">{t('readerNoAudio', lang)}</p>
      )}

      {sectionNav('bottom')}
    </PageWrapper>
  )
}
