import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { useAppStore } from '@/store/useAppStore'
import { getChapterTitleLang, getSectionTitleLang } from '@/lib/vocab'
import { t } from '@/lib/i18n'
import { RiArrowRightSLine } from '@remixicon/react'

export function FlashcardPicker() {
  const navigate = useNavigate()
  const { chapters, isLoading } = useVocab()
  const { preferredLanguage: lang, todayChapter, todaySection } = useAppStore()
  const [selectedChapter, setSelectedChapter] = useState<number>(todayChapter)

  const chapterData = chapters.find(c => c.chapter === selectedChapter)

  function startFlashcard(section: number) {
    navigate(`/vocab/${selectedChapter}/${section}?view=flashcard`)
  }

  if (isLoading) {
    return <PageWrapper><div className="text-center py-10 text-gray-400">Loading...</div></PageWrapper>
  }

  return (
    <PageWrapper>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">{t('flashcard', lang)}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{t('flashcardDesc', lang)}</p>
        </div>
        <button
          onClick={() => navigate('/quiz')}
          className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 min-h-[44px] px-2 flex items-center"
        >
          {t('cancel', lang)}
        </button>
      </div>

      {/* Chapter selector — horizontal scroll */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2.5">{t('chapter', lang)}</p>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
          {chapters.map(ch => {
            const titleWord = ch.sections[0]?.words[0]
            const title = titleWord ? getChapterTitleLang(titleWord, lang) : ''
            const isSelected = selectedChapter === ch.chapter
            const isToday = ch.chapter === todayChapter
            return (
              <button
                key={ch.chapter}
                onClick={() => setSelectedChapter(ch.chapter)}
                className={`flex-shrink-0 flex flex-col items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[56px] min-w-[80px] relative ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {isToday && !isSelected && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full" />
                )}
                <span className="font-bold">{ch.chapter}</span>
                {title && (
                  <span className={`text-[10px] leading-tight mt-0.5 text-center line-clamp-1 max-w-[72px] ${isSelected ? 'text-indigo-200' : 'text-gray-400 dark:text-gray-500'}`}>
                    {title}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Section list */}
      {chapterData && (
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2.5">{t('section', lang)}</p>
          <div className="space-y-2">
            {chapterData.sections.map((sec, idx) => {
              const titleWord = sec.words[0]
              const sectionTitle = titleWord ? getSectionTitleLang(titleWord, lang) : ''
              const isToday = selectedChapter === todayChapter && sec.section === todaySection
              return (
                <button
                  key={sec.section}
                  onClick={() => startFlashcard(sec.section)}
                  className={`w-full text-left rounded-2xl px-4 py-3.5 transition-all flex items-center gap-4 min-h-[64px] group ${
                    isToday
                      ? 'bg-cyan-50 dark:bg-cyan-950 border-2 border-cyan-300 dark:border-cyan-700'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:shadow-sm'
                  }`}
                >
                  {/* Number badge */}
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                    isToday
                      ? 'bg-cyan-200 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${isToday ? 'text-cyan-800 dark:text-cyan-200' : 'text-gray-900 dark:text-white'}`}>
                        {sectionTitle || `${t('section', lang)} ${sec.section}`}
                      </span>
                      {isToday && (
                        <span className="text-[10px] bg-cyan-500 text-white px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wide">Today</span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 ${isToday ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-400 dark:text-gray-500'}`}>
                      {sec.words.length} {t('wordsCount', lang)}
                    </p>
                  </div>

                  {/* Arrow */}
                  <RiArrowRightSLine
                    size={20}
                    className={`flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${
                      isToday ? 'text-cyan-500' : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
