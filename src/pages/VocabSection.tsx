import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { useAppStore } from '@/store/useAppStore'
import { getSection } from '@/lib/vocab'
import { motion, AnimatePresence } from 'framer-motion'
import type { WordStatus } from '@/types/user'

const STATUS_COLORS: Record<WordStatus, string> = {
  known: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  learning: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  new: 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
}
const STATUS_LABELS: Record<WordStatus, string> = {
  known: 'Known',
  learning: 'Learning',
  new: 'Unknown',
}
const STATUS_ORDER: WordStatus[] = ['new', 'learning', 'known']

function StatusToggle({ status, onCycle }: { status: WordStatus; onCycle: () => void }) {
  const icons: Record<WordStatus, string> = { known: '✓', learning: '~', new: '·' }
  return (
    <button
      onClick={onCycle}
      title="Click to cycle: Unknown → Learning → Known"
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-150 active:scale-95 select-none ${STATUS_COLORS[status]}`}
    >
      <span className="font-bold leading-none">{icons[status]}</span>
      {STATUS_LABELS[status]}
    </button>
  )
}

const SWIPE_THRESHOLD = 60 // px

function SwipeableCard({
  children,
  onFlip,
  onSwipeLeft,
  onSwipeRight,
  canSwipeLeft,
  canSwipeRight,
}: {
  children: React.ReactNode
  onFlip: () => void
  onSwipeLeft: () => void
  onSwipeRight: () => void
  canSwipeLeft: boolean
  canSwipeRight: boolean
}) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const isDragging = useRef(false)
  const touchHandled = useRef(false)

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    isDragging.current = false
    touchHandled.current = false
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.touches[0].clientX - touchStartX.current
    const dy = e.touches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      isDragging.current = true
    }
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - (touchStartY.current ?? 0)

    if (isDragging.current && Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0 && canSwipeLeft) onSwipeLeft()
      else if (dx > 0 && canSwipeRight) onSwipeRight()
    } else if (!isDragging.current) {
      touchHandled.current = true
      onFlip()
    }

    touchStartX.current = null
    touchStartY.current = null
    isDragging.current = false
  }

  return (
    <div
      className="relative w-full max-w-lg h-72 md:h-80 cursor-pointer select-none touch-pan-y"
      style={{ perspective: 1000 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() => { if (!touchHandled.current) onFlip(); touchHandled.current = false }}
    >
      {children}
    </div>
  )
}

export function VocabSection() {
  const { chapter, section } = useParams<{ chapter: string; section: string }>()
  const ch = Number(chapter)
  const sec = Number(section)
  const { vocab, isLoading } = useVocab()
  const { wordStatuses, setWordStatus } = useAppStore()
  const [view, setView] = useState<'table' | 'flashcard'>('table')
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const words = getSection(vocab, ch, sec)

  if (isLoading) return <PageWrapper><div className="text-center py-10 text-gray-400">Loading...</div></PageWrapper>
  if (!words.length) return <PageWrapper><div className="text-center py-10 text-gray-400">No words in this section</div></PageWrapper>

  const known = words.filter(w => (wordStatuses[w.wordClean] ?? 'new') === 'known').length
  const currentWord = words[cardIndex]

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/vocab" className="hover:text-indigo-600">Vocabulary</Link>
        <span>›</span>
        <span>Chapter {ch}</span>
        <span>›</span>
        <span>Section {sec}</span>
      </div>

      <div className="flex items-start justify-between mb-4 gap-3">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Chapter {ch} · Section {sec}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{words.length} words · {known}/{words.length} known</p>
        </div>
        <Link
          to={`/study`}
          className="text-sm bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap min-h-[44px] flex items-center"
        >
          Today's Study
        </Link>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-5">
        <div
          className="bg-green-500 rounded-full h-1.5 transition-all"
          style={{ width: `${Math.round((known / words.length) * 100)}%` }}
        />
      </div>

      {/* View toggle */}
      <div className="flex gap-2 mb-4">
        {(['table', 'flashcard'] as const).map(v => (
          <button
            key={v}
            onClick={() => { setView(v); setCardIndex(0); setFlipped(false) }}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              view === v
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            {v === 'table' ? 'Table' : 'Flashcard'}
          </button>
        ))}
      </div>

      {/* Table view */}
      {view === 'table' && (
        <>
        <div className="flex items-center gap-3 mb-2 px-1 text-xs text-gray-400 dark:text-gray-500">
          <span>Click status to cycle:</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 font-semibold">· Unknown</span>
          <span>→</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 font-semibold">~ Learning</span>
          <span>→</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-semibold">✓ Known</span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">#</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">Word</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300 hidden md:table-cell">Reading</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">Meaning</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {words.map((w, i) => {
                const status = (wordStatuses[w.wordClean] ?? 'new') as WordStatus
                const nextStatus = STATUS_ORDER[(STATUS_ORDER.indexOf(status) + 1) % STATUS_ORDER.length]
                return (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 dark:border-gray-700 transition-colors ${
                      status === 'known' ? 'bg-green-50/40 dark:bg-green-900/10' : ''
                    }`}
                  >
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{i + 1}</td>
                    <td className="px-4 py-2.5">
                      <span className={`font-jp text-lg font-medium ${status === 'known' ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>{w.wordClean}</span>
                      {w.isSuruVerb && <span className="ml-1 text-xs text-indigo-400">suru</span>}
                    </td>
                    <td className="px-4 py-2.5 text-gray-500 dark:text-gray-400 hidden md:table-cell">{w.furigana ?? '—'}</td>
                    <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{w.meaning_en}</td>
                    <td className="px-4 py-2.5">
                      <StatusToggle
                        status={status}
                        onCycle={() => setWordStatus(w.wordClean, nextStatus, w.chapter, w.section)}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        </>
      )}

      {/* Flashcard view */}
      {view === 'flashcard' && currentWord && (
        <div className="flex flex-col items-center">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5 mb-4">
            {words.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all ${
                  i === cardIndex
                    ? 'w-4 h-2 bg-indigo-500'
                    : (wordStatuses[words[i].wordClean] ?? 'new') === 'known'
                    ? 'w-2 h-2 bg-green-400'
                    : 'w-2 h-2 bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-gray-400 mb-3">{cardIndex + 1} / {words.length} · swipe or tap ← →</div>

          {/* Swipeable card */}
          <SwipeableCard
            onFlip={() => setFlipped(f => !f)}
            onSwipeLeft={() => {
              if (cardIndex < words.length - 1) { setCardIndex(cardIndex + 1); setFlipped(false); setShowHint(false) }
            }}
            onSwipeRight={() => {
              if (cardIndex > 0) { setCardIndex(cardIndex - 1); setFlipped(false); setShowHint(false) }
            }}
            canSwipeLeft={cardIndex < words.length - 1}
            canSwipeRight={cardIndex > 0}
          >
            <AnimatePresence mode="wait">
              {!flipped ? (
                <motion.div
                  key="front"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-300 dark:border-indigo-700 flex flex-col items-center justify-center p-6 shadow-lg"
                >
                  <p className="font-jp text-5xl font-bold text-gray-900 dark:text-white">{currentWord.wordClean}</p>
                  {currentWord.isSuruVerb && <span className="mt-2 text-xs text-indigo-400">suru verb</span>}
                  {showHint && currentWord.furigana && (
                    <p className="mt-2 text-sm text-indigo-500 dark:text-indigo-400 font-jp">{currentWord.furigana}</p>
                  )}
                  <p className="mt-4 text-xs text-gray-400">Tap to flip</p>
                  {currentWord.furigana && (
                    <button
                      onClick={e => { e.stopPropagation(); setShowHint(v => !v) }}
                      className="absolute bottom-3 right-3 text-xs text-gray-400 hover:text-indigo-500 underline underline-offset-2"
                    >
                      {showHint ? 'hide' : 'reading?'}
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg"
                >
                  {currentWord.furigana && (
                    <p className="text-indigo-200 text-lg mb-2 font-jp">{currentWord.furigana}</p>
                  )}
                  <p className="text-white text-3xl font-bold text-center px-4">{currentWord.meaning_en}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </SwipeableCard>

          {/* Status selector */}
          {flipped && (
            <div className="flex gap-2 mt-4">
              {(Object.keys(STATUS_LABELS) as WordStatus[]).map(s => (
                <button
                  key={s}
                  onClick={() => setWordStatus(currentWord.wordClean, s, currentWord.chapter, currentWord.section)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium min-h-[44px] ${STATUS_COLORS[s]} ${
                    (wordStatuses[currentWord.wordClean] ?? 'new') === s ? 'ring-2 ring-offset-1 ring-indigo-500' : ''
                  }`}
                >
                  {STATUS_LABELS[s]}
                </button>
              ))}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center gap-3 mt-5 w-full max-w-sm">
            <button
              onClick={() => { setCardIndex(Math.max(0, cardIndex - 1)); setFlipped(false); setShowHint(false) }}
              disabled={cardIndex === 0}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 disabled:opacity-40 min-h-[44px] font-medium"
            >
              ← Prev
            </button>
            <button
              onClick={() => { setCardIndex(Math.min(words.length - 1, cardIndex + 1)); setFlipped(false); setShowHint(false) }}
              disabled={cardIndex === words.length - 1}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 disabled:opacity-40 min-h-[44px] font-medium"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
