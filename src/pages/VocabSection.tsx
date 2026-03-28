import { useState, useRef, useMemo, useCallback } from 'react'
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

function makeExample(word: string, meaning: string): { jp: string; en: string } {
  const templates = [
    { jp: `${word}について考えてみましょう。`, en: `Let's think about "${meaning}".` },
    { jp: `${word}はとても大切なことです。`, en: `"${meaning}" is very important.` },
    { jp: `彼は${word}をよく理解しています。`, en: `He understands "${meaning}" well.` },
    { jp: `${word}という言葉を覚えましょう。`, en: `Let's remember the word "${meaning}".` },
    { jp: `${word}が必要な場面があります。`, en: `There are situations where "${meaning}" is needed.` },
  ]
  // Stable pick based on word string length
  return templates[word.length % templates.length]
}

export function VocabSection() {
  const { chapter, section } = useParams<{ chapter: string; section: string }>()
  const ch = Number(chapter)
  const sec = Number(section)
  const { vocab, isLoading } = useVocab()
  const { wordStatuses, setWordStatus } = useAppStore()
  const [view, setView] = useState<'list' | 'flashcard'>('list')
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showFurigana, setShowFurigana] = useState(true)
  const [showMeaning, setShowMeaning] = useState(true)
  const [expandedEx, setExpandedEx] = useState<Record<number, boolean>>({})

  const toggleExample = useCallback((i: number) => {
    setExpandedEx(prev => ({ ...prev, [i]: !prev[i] }))
  }, [])

  const words = getSection(vocab, ch, sec)
  const shuffledWords = useMemo(() => [...words].sort(() => Math.random() - 0.5), [ch, sec, words.length])

  if (isLoading) return <PageWrapper><div className="text-center py-10 text-gray-400">Loading...</div></PageWrapper>
  if (!words.length) return <PageWrapper><div className="text-center py-10 text-gray-400">No words in this section</div></PageWrapper>

  const known = words.filter(w => (wordStatuses[w.wordClean] ?? 'new') === 'known').length
  const currentWord = shuffledWords[cardIndex]

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
        {(['list', 'flashcard'] as const).map(v => (
          <button
            key={v}
            onClick={() => { setView(v); setCardIndex(0); setFlipped(false) }}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
              view === v
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            {v === 'list' ? 'List' : 'Flashcard'}
          </button>
        ))}
      </div>

      {/* List (card) view */}
      {view === 'list' && (
        <>
          {/* Toggle controls */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs text-gray-400 dark:text-gray-500 mr-1">Show:</span>
            {[
              { label: 'Furigana', value: showFurigana, toggle: () => setShowFurigana(v => !v) },
              { label: 'Meaning', value: showMeaning, toggle: () => setShowMeaning(v => !v) },
            ].map(({ label, value, toggle }) => (
              <button
                key={label}
                onClick={toggle}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                  value
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
            <span className="ml-auto text-xs text-gray-400">Tap status to cycle</span>
          </div>

          {/* Word cards */}
          <div className="space-y-3">
            {words.map((w, i) => {
              const status = (wordStatuses[w.wordClean] ?? 'new') as WordStatus
              const nextStatus = STATUS_ORDER[(STATUS_ORDER.indexOf(status) + 1) % STATUS_ORDER.length]
              const example = makeExample(w.wordClean, w.meaning_en)
              const exOpen = expandedEx[i] ?? false
              return (
                <div
                  key={i}
                  className={`bg-white dark:bg-gray-800 rounded-2xl border transition-colors ${
                    status === 'known'
                      ? 'border-green-200 dark:border-green-800'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="px-4 pt-4 pb-3">
                    {/* Top row: number + word + status */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-baseline gap-2 min-w-0">
                        <span className="text-xs text-gray-300 dark:text-gray-600 flex-shrink-0">{i + 1}</span>
                        <div>
                          <span className={`font-jp text-2xl font-bold leading-tight ${
                            status === 'known' ? 'text-gray-300 dark:text-gray-600 line-through' : 'text-gray-900 dark:text-white'
                          }`}>
                            {w.wordClean}
                          </span>
                          {w.isSuruVerb && <span className="ml-1.5 text-xs text-indigo-400 align-middle">する</span>}
                        </div>
                      </div>
                      <StatusToggle
                        status={status}
                        onCycle={() => setWordStatus(w.wordClean, nextStatus, w.chapter, w.section)}
                      />
                    </div>

                    {/* Furigana */}
                    {showFurigana && w.furigana && (
                      <p className="font-jp text-sm text-indigo-500 dark:text-indigo-400 mb-1 ml-5">{w.furigana}</p>
                    )}

                    {/* Meaning */}
                    {showMeaning && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-5">{w.meaning_en}</p>
                    )}
                  </div>

                  {/* Example sentence toggle */}
                  <div className="border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => toggleExample(i)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-xs text-gray-400 hover:text-indigo-500 transition-colors"
                    >
                      <span>例文 Example</span>
                      <span className={`transition-transform ${exOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    {exOpen && (
                      <div className="px-4 pb-3 space-y-1">
                        <p className="font-jp text-sm text-gray-800 dark:text-gray-200">{example.jp}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">{example.en}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      {/* Flashcard view */}
      {view === 'flashcard' && currentWord && (
        <div className="flex flex-col items-center">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5 mb-4">
            {shuffledWords.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all ${
                  i === cardIndex
                    ? 'w-4 h-2 bg-indigo-500'
                    : (wordStatuses[shuffledWords[i].wordClean] ?? 'new') === 'known'
                    ? 'w-2 h-2 bg-green-400'
                    : 'w-2 h-2 bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-gray-400 mb-3">{cardIndex + 1} / {shuffledWords.length} · swipe or tap ← →</div>

          {/* Swipeable card */}
          <SwipeableCard
            onFlip={() => setFlipped(f => !f)}
            onSwipeLeft={() => {
              if (cardIndex < shuffledWords.length - 1) { setCardIndex(cardIndex + 1); setFlipped(false); setShowHint(false) }
            }}
            onSwipeRight={() => {
              if (cardIndex > 0) { setCardIndex(cardIndex - 1); setFlipped(false); setShowHint(false) }
            }}
            canSwipeLeft={cardIndex < shuffledWords.length - 1}
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
              onClick={() => { setCardIndex(Math.min(shuffledWords.length - 1, cardIndex + 1)); setFlipped(false); setShowHint(false) }}
              disabled={cardIndex === shuffledWords.length - 1}
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
