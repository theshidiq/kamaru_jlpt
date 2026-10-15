import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { RiPauseFill, RiPlayFill, RiReplay10Line, RiForward10Line, RiRestartLine, RiMusic2Line } from '@remixicon/react'
import { useNavStore } from '@/hooks/useAutoHideNav'
import { clock } from '@/lib/audioBar'

/** Navbar height: h-14 plus its 1px bottom border. */
const NAV_PX = 57


interface Props {
  playing: boolean
  onToggle: () => void
  nowMs: number
  durationMs: number
  onSeek: (ms: number) => void
  /** ±10 s buttons (Lesson); restart button (Read Along). */
  onSkip?: (deltaMs: number) => void
  onRestart?: () => void
  rate: number
  rates: readonly number[]
  onRate: (rate: number) => void
  furigana: boolean
  onFurigana: () => void
  english: boolean
  onEnglish: () => void
  /** Lesson only: the music & effects mix. */
  sound?: { on: boolean; toggle: () => void; label: string }
  /** Shown once the navbar has slid away, so you still know where you are. */
  title: string
  labels: { play: string; pause: string; furigana: string; restart: string }
}

/**
 * The desktop audio bar for Read Along and Lesson: every control in one row,
 * pinned under the navbar and moving to the very top while the navbar is
 * hidden (see useAutoHideNav). Phones keep their own thumb-side controls,
 * so this renders from the md breakpoint up.
 *
 * Portalled: PageWrapper animates with a transform, which would make it the
 * containing block for position: fixed. Pages reserve its height with
 * AUDIO_BAR_PAD.
 */
export function AudioBar(p: Props) {
  const navHidden = useNavStore(s => s.hidden)

  // Space plays/pauses, unless typing or a button has focus (a focused
  // button already reacts to Space, which would toggle twice). The pages
  // re-create onToggle every frame while playing, so the listener reads it
  // from a ref instead of re-subscribing.
  const toggleRef = useRef(p.onToggle)
  useEffect(() => { toggleRef.current = p.onToggle })
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code !== 'Space' || e.repeat || !window.matchMedia('(min-width: 768px)').matches) return
      const el = e.target as HTMLElement | null
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(el.tagName))) return
      e.preventDefault()
      toggleRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleCls = (on: boolean) =>
    `flex items-center justify-center h-8 min-w-8 px-2 rounded-md border text-xs font-bold transition-colors ${on
      ? 'bg-indigo-600 border-indigo-600 text-white'
      : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`
  const iconBtn = 'p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'

  return createPortal(
    <div
      className={`hidden md:block fixed inset-x-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur transition-[transform,box-shadow] duration-200 ease-out ${navHidden ? 'shadow-md' : ''}`}
      style={{ top: NAV_PX, transform: navHidden ? `translateY(-${NAV_PX}px)` : undefined }}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
        <button
          onClick={p.onToggle}
          aria-label={p.playing ? p.labels.pause : p.labels.play}
          title={`${p.playing ? p.labels.pause : p.labels.play} (Space)`}
          className="shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow"
        >
          {p.playing ? <RiPauseFill size={22} /> : <RiPlayFill size={22} />}
        </button>
        {p.onSkip && (
          <>
            <button onClick={() => p.onSkip!(-10000)} aria-label="-10s" title="-10s" className={iconBtn}><RiReplay10Line size={20} /></button>
            <button onClick={() => p.onSkip!(10000)} aria-label="+10s" title="+10s" className={iconBtn}><RiForward10Line size={20} /></button>
          </>
        )}
        {p.onRestart && (
          <button onClick={p.onRestart} aria-label={p.labels.restart} title={p.labels.restart} className={iconBtn}><RiRestartLine size={18} /></button>
        )}

        <span className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-400">{clock(p.nowMs)}</span>
        <input
          type="range" min={0} max={Math.max(1, p.durationMs)} step={100} value={Math.min(p.nowMs, p.durationMs)}
          onChange={e => p.onSeek(Number(e.target.value))}
          aria-label="Seek"
          className="flex-1 min-w-24 accent-indigo-600"
        />
        <span className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-400">{clock(p.durationMs)}</span>

        <div className="shrink-0 flex items-center gap-1">
          <button onClick={p.onFurigana} aria-pressed={p.furigana} aria-label={p.labels.furigana} title={p.labels.furigana} className={toggleCls(p.furigana)}>あ</button>
          <button onClick={p.onEnglish} aria-pressed={p.english} aria-label="EN" title="EN" className={toggleCls(p.english)}>EN</button>
          {p.sound && (
            <button onClick={p.sound.toggle} aria-pressed={p.sound.on} aria-label={p.sound.label} title={p.sound.label} className={toggleCls(p.sound.on)}>
              <RiMusic2Line size={15} />
            </button>
          )}
          <div className="ml-1 flex items-center rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            {p.rates.map(r => (
              <button
                key={r}
                onClick={() => p.onRate(r)}
                className={`text-[11px] font-semibold px-2 py-1.5 tabular-nums transition-colors ${p.rate === r
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >{r}×</button>
            ))}
          </div>
        </div>

        {/* Where you are, once the navbar (and the page title) are out of view */}
        <span className={`hidden lg:block shrink-0 max-w-56 truncate font-jp text-sm font-semibold text-gray-700 dark:text-gray-200 transition-opacity duration-200 ${navHidden ? 'opacity-100' : 'opacity-0'}`}>
          {p.title}
        </span>
      </div>
    </div>,
    document.body,
  )
}
