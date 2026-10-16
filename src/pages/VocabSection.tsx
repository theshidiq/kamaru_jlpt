import { useState, useRef, useMemo, useEffect } from 'react'
import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { useAppStore } from '@/store/useAppStore'
import { getSection, buildChapterMap, getMeaning, DEFAULT_LEVEL } from '@/lib/vocab'
import { t } from '@/lib/i18n'
import { PASSAGE_BANK } from '@/lib/passages'
import { lessonFor } from '@/lib/lessons'
import { RiBookReadLine, RiHeadphoneLine } from '@remixicon/react'
import { ListenCard } from '@/components/ListenCard'
import { useWordArt, preloadArt } from '@/hooks/useWordArt'
import { motion, AnimatePresence } from 'framer-motion'
import type { WordStatus } from '@/types/user'

const STATUS_COLORS: Record<WordStatus, string> = {
  known: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  learning: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  new: 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
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
  const navigate = useNavigate()
  const ch = Number(chapter)
  const sec = Number(section)
  const { vocab, isLoading } = useVocab()
  const { user, wordStatuses, setWordStatus, preferredLanguage: lang } = useAppStore()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL
  const [searchParams] = useSearchParams()
  const [view, setView] = useState<'list' | 'flashcard'>(
    searchParams.get('view') === 'flashcard' ? 'flashcard' : 'list'
  )
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showFurigana, setShowFurigana] = useState(true)
  const [showMeaning, setShowMeaning] = useState(true)
  const [showExample, setShowExample] = useState(true)
  // Per-card revealed state: true = furigana+meaning visible (default), false = hidden (self-test)
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({})

  function handleCardTap(wordClean: string, currentStatus: WordStatus, chapter: number, section: number) {
    const isRevealed = revealedCards[wordClean] !== false // default true
    if (isRevealed) {
      // Tap 1: hide furigana+meaning, advance to Learning
      setRevealedCards(prev => ({ ...prev, [wordClean]: false }))
      if (currentStatus === 'new') {
        setWordStatus(wordClean, 'learning', chapter, section)
      }
    } else if (currentStatus === 'learning') {
      // Tap 2 (hidden + Learning): advance to Known, stay hidden
      setWordStatus(wordClean, 'known', chapter, section)
    } else {
      // Tap 3 (hidden + Known, or any other hidden state): reveal again
      setRevealedCards(prev => ({ ...prev, [wordClean]: true }))
    }
  }

  const words = getSection(vocab, ch, sec)
  // The current level's bank: checking N2 alone showed a dead Read button on
  // BJT and N3 sections that N2 happens to have and they don't.
  const hasPassage = PASSAGE_BANK[level].some(p => p.chapter === ch && p.section === sec)
  const lesson = lessonFor(level, ch, sec)
  const shuffledWords = useMemo(() => [...words].sort(() => Math.random() - 0.5), [ch, sec, words.length])
  const art = useWordArt()
  // This card's picture and the next one's, so flipping and moving on show
  // them at once.
  useEffect(() => {
    if (view === 'flashcard') preloadArt([art(shuffledWords[cardIndex]?.wordClean), art(shuffledWords[cardIndex + 1]?.wordClean)])
  })

  if (isLoading) return <PageWrapper><div className="text-center py-10 text-gray-400">Loading...</div></PageWrapper>
  if (!words.length) return <PageWrapper><div className="text-center py-10 text-gray-400">No words in this section</div></PageWrapper>

  const known = words.filter(w => (wordStatuses[w.wordClean] ?? 'new') === 'known').length
  const currentWord = shuffledWords[cardIndex]

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/vocab" className="hover:text-indigo-600">{t('vocabulary', lang)}</Link>
        <span>›</span>
        <span>{t('chapter', lang)} {ch}</span>
        <span>›</span>
        <span>{t('section', lang)} {sec}</span>
      </div>

      <div className="flex items-start justify-between mb-4 gap-3">
        <div>
          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{t('chapter', lang)} {ch} · {t('section', lang)} {sec}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{words.length} {t('wordsCount', lang)} · {known}/{words.length} {t('known', lang).toLowerCase()}</p>
        </div>
        <Link
          to={`/study`}
          className="text-sm bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap min-h-[44px] flex items-center"
        >
          {t('todayStudyLink', lang)}
        </Link>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-5">
        <div
          className="bg-green-500 rounded-full h-1.5 transition-all"
          style={{ width: `${Math.round((known / words.length) * 100)}%` }}
        />
      </div>

      {/* The two listening features, as cards that say what each one is:
          Read Along is the passage read aloud; Lesson is the full class. */}
      {(hasPassage || lesson) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {hasPassage && (
            <ListenCard
              icon={<RiBookReadLine size={22} />}
              tone="rose"
              title={t('readTitle', lang)}
              meta={t('readAlongMinutes', lang)}
              desc={t('readAlongDesc', lang)}
              onClick={() => navigate(`/read/${ch}/${sec}`)}
            />
          )}
          {lesson && (
            <ListenCard
              icon={<RiHeadphoneLine size={22} />}
              tone="indigo"
              title={t('lesson', lang)}
              meta={t('lessonMinutes', lang, { n: lesson.minutes })}
              desc={t('lessonDesc', lang)}
              onClick={() => navigate(`/lesson/${ch}/${sec}`)}
            />
          )}
        </div>
      )}

      {/* View toggle */}
      <div className="flex flex-wrap gap-2 mb-4">
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
            {v === 'list' ? t('list', lang) : t('flashcard', lang)}
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
              { label: t('furigana', lang), value: showFurigana, toggle: () => setShowFurigana(v => !v) },
              { label: t('meaning', lang), value: showMeaning, toggle: () => setShowMeaning(v => !v) },
              { label: t('example', lang), value: showExample, toggle: () => setShowExample(v => !v) },
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
            <span className="ml-auto text-xs text-gray-400">{t('tapToReveal', lang)}</span>
          </div>

          {/* Word cards */}
          <div className="space-y-3">
            {words.map((w, i) => {
              const status = (wordStatuses[w.wordClean] ?? 'new') as WordStatus
              const cardRevealed = revealedCards[w.wordClean] !== false // default true
              // No placeholder when a word has no example: the old
              // "{word}を使います。" filler is ungrammatical for most words that
              // are not nouns (恐れ入るを使います), so show nothing instead.
              const example = w.example
              // furigana and meaning visible only when card is revealed AND global toggle is on
              const furiganaVisible = cardRevealed && showFurigana
              const meaningVisible = cardRevealed && showMeaning
              return (
                <div
                  key={i}
                  onClick={() => handleCardTap(w.wordClean, status, w.chapter, w.section)}
                  className={`bg-white dark:bg-gray-800 rounded-2xl border transition-colors cursor-pointer active:scale-[0.99] select-none ${
                    status === 'known'
                      ? 'border-green-200 dark:border-green-800'
                      : status === 'learning'
                      ? 'border-amber-200 dark:border-amber-800'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="px-4 pt-4 pb-3">
                    {/* Top row: number + word + status badge */}
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
                          {w.alsoIn && (
                            <span
                              className="ml-1.5 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 align-middle"
                              title={`Also in your ${w.alsoIn} list`}
                            >
                              {w.alsoIn}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Status badge — tap to revert one step */}
                      <button
                        onClick={e => {
                          e.stopPropagation()
                          if (status === 'known') {
                            setWordStatus(w.wordClean, 'learning', w.chapter, w.section)
                          } else if (status === 'learning') {
                            setWordStatus(w.wordClean, 'new', w.chapter, w.section)
                            setRevealedCards(prev => ({ ...prev, [w.wordClean]: true }))
                          }
                        }}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 transition-opacity ${STATUS_COLORS[status]} ${
                          status === 'new' ? 'cursor-default' : 'active:opacity-70'
                        }`}
                      >
                        · {t(status, lang)}
                      </button>
                    </div>

                    {/* Furigana — hidden when card is in self-test mode */}
                    {furiganaVisible && w.furigana && (
                      <p className="font-jp text-sm text-indigo-500 dark:text-indigo-400 mb-1 ml-5">{w.furigana}</p>
                    )}
                    {!cardRevealed && (
                      <p className="text-xs text-gray-300 dark:text-gray-600 ml-5 mb-1 select-none">{t('tapToReveal', lang)}</p>
                    )}

                    {/* Meaning */}
                    {meaningVisible && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 ml-5">{getMeaning(w, lang)}</p>
                    )}
                  </div>

                  {/* Example sentence */}
                  {showExample && example && (
                    <div className="border-t border-gray-100 dark:border-gray-700 px-4 py-3 space-y-1">
                      <p className="font-jp text-sm text-gray-800 dark:text-gray-200 leading-loose">
                        {furiganaVisible && example.seg
                          ? example.seg.map((seg, si) =>
                              seg.r
                                ? <ruby key={si}>{seg.t}<rt className="text-indigo-400 text-[10px]">{seg.r}</rt></ruby>
                                : <span key={si}>{seg.t}</span>
                            )
                          : example.jp
                        }
                      </p>
                      {meaningVisible && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                          {lang === 'id' && example.id ? example.id : example.en}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom actions */}
          {(() => {
            const chapterMap = buildChapterMap(vocab)
            const currentChapter = chapterMap.find(c => c.chapter === ch)
            const maxSection = currentChapter ? currentChapter.sections.length : sec
            const maxChapter = chapterMap.length

            let nextPath: string | null = null
            if (sec < maxSection) {
              nextPath = `/vocab/${ch}/${sec + 1}`
            } else if (ch < maxChapter) {
              nextPath = `/vocab/${ch + 1}/1`
            }

            return (
              <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => { setView('flashcard'); setCardIndex(0); setFlipped(false) }}
                  className="flex-1 py-3.5 rounded-xl border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
                >
                  {t('flashcard', lang)}
                </button>
                {nextPath ? (
                  <Link
                    to={nextPath}
                    className="flex-1 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm text-center transition-colors"
                  >
                    {sec < maxSection ? t('nextSection', lang) : `${t('chapter', lang)} ${ch + 1} →`}
                  </Link>
                ) : (
                  <Link
                    to="/vocab"
                    className="flex-1 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm text-center transition-colors"
                  >
                    {t('allDone', lang)}
                  </Link>
                )}
              </div>
            )
          })()}
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
          <div className="text-xs text-gray-400 mb-3">{cardIndex + 1} / {shuffledWords.length} · {t('swipeInstruction', lang)}</div>

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
                  {/* The picture on both sides: on the front it helps the word sink in */}
                  {art(currentWord.wordClean) && (
                    <img src={art(currentWord.wordClean)} alt="" loading="lazy" className="h-28 md:h-36 aspect-[3/2] rounded-xl mb-3 shadow-md" />
                  )}
                  <p className={`font-jp font-bold text-gray-900 dark:text-white ${art(currentWord.wordClean) ? 'text-4xl md:text-5xl' : 'text-5xl'}`}>{currentWord.wordClean}</p>
                  {currentWord.isSuruVerb && <span className="mt-2 text-xs text-indigo-400">{t('suruVerb', lang)}</span>}
                  {showHint && currentWord.furigana && (
                    <p className="mt-2 text-sm text-indigo-500 dark:text-indigo-400 font-jp">{currentWord.furigana}</p>
                  )}
                  <p className={`${art(currentWord.wordClean) ? 'mt-2' : 'mt-4'} text-xs text-gray-400`}>{t('tapToFlip', lang)}</p>
                  {currentWord.furigana && (
                    <button
                      onClick={e => { e.stopPropagation(); setShowHint(v => !v) }}
                      className="absolute bottom-3 right-3 text-xs text-gray-400 hover:text-indigo-500 underline underline-offset-2"
                    >
                      {showHint ? t('hideReading', lang) : (lang === 'id' ? 'cara baca?' : 'reading?')}
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
                  {art(currentWord.wordClean) && (
                    <img src={art(currentWord.wordClean)} alt="" loading="lazy" className="h-28 md:h-36 aspect-[3/2] rounded-xl mb-3 shadow-md" />
                  )}
                  {currentWord.furigana && (
                    <p className={`text-indigo-200 font-jp ${art(currentWord.wordClean) ? 'text-base mb-1' : 'text-lg mb-2'}`}>{currentWord.furigana}</p>
                  )}
                  <p className={`text-white font-bold text-center px-4 ${art(currentWord.wordClean) ? 'text-xl md:text-2xl' : 'text-3xl'}`}>{getMeaning(currentWord, lang)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </SwipeableCard>

          {/* Status selector */}
          {flipped && (
            <div className="flex gap-2 mt-4">
              {(['known', 'learning', 'new'] as WordStatus[]).map(s => (
                <button
                  key={s}
                  onClick={() => setWordStatus(currentWord.wordClean, s, currentWord.chapter, currentWord.section)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium min-h-[44px] ${STATUS_COLORS[s]} ${
                    (wordStatuses[currentWord.wordClean] ?? 'new') === s ? 'ring-2 ring-offset-1 ring-indigo-500' : ''
                  }`}
                >
                  {t(s, lang)}
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
              {t('prev', lang)}
            </button>
            <button
              onClick={() => { setCardIndex(Math.min(shuffledWords.length - 1, cardIndex + 1)); setFlipped(false); setShowHint(false) }}
              disabled={cardIndex === shuffledWords.length - 1}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 disabled:opacity-40 min-h-[44px] font-medium"
            >
              {t('next', lang)}
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
