import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { useAppStore } from '@/store/useAppStore'
import { getChapterTitleLang, getSectionTitleLang } from '@/lib/vocab'
import { t } from '@/lib/i18n'

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
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => navigate('/quiz')}
          className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 min-h-[44px] px-2 flex items-center"
        >
          ← {t('cancel', lang)}
        </button>
        <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{t('flashcard', lang)}</h1>
      </div>

      {/* Chapter selector */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">{t('chapter', lang)}</p>
        <div className="flex gap-2 flex-wrap">
          {chapters.map(ch => {
            const titleWord = ch.sections[0]?.words[0]
            const title = titleWord ? getChapterTitleLang(titleWord, lang) : ''
            return (
              <button
                key={ch.chapter}
                onClick={() => setSelectedChapter(ch.chapter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                  selectedChapter === ch.chapter
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {t('chapter', lang)} {ch.chapter}
                {title && <span className="block text-[10px] opacity-70 leading-tight">{title}</span>}
              </button>
            )
          })}
        </div>
      </div>

      {/* Section list */}
      {chapterData && (
        <div className="space-y-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">{t('section', lang)}</p>
          {chapterData.sections.map(sec => {
            const titleWord = sec.words[0]
            const sectionTitle = titleWord ? getSectionTitleLang(titleWord, lang) : ''
            const isToday = selectedChapter === todayChapter && sec.section === todaySection
            return (
              <button
                key={sec.section}
                onClick={() => startFlashcard(sec.section)}
                className="w-full text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 hover:shadow-sm rounded-xl px-4 py-3.5 transition-all flex items-center justify-between gap-3 min-h-[56px]"
              >
                <div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm">
                    {t('section', lang)} {sec.section}
                    {isToday && (
                      <span className="ml-2 text-[10px] bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 px-1.5 py-0.5 rounded-full font-semibold">TODAY</span>
                    )}
                  </span>
                  {sectionTitle && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{sectionTitle}</p>
                  )}
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{sec.words.length} {t('wordsCount', lang)} →</span>
              </button>
            )
          })}
        </div>
      )}
    </PageWrapper>
  )
}
