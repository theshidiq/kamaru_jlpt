import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useVocab } from '@/hooks/useVocab'
import { useAppStore } from '@/store/useAppStore'
import { filterVocab, getMeaning, getChapterTitleLang, getSectionTitleLang } from '@/lib/vocab'
import { t } from '@/lib/i18n'
import type { WordStatus } from '@/types/user'

const STATUS_COLORS: Record<WordStatus, string> = {
  known: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  learning: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  new: 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
}

export function VocabBrowser() {
  const { vocab, chapters, isLoading } = useVocab()
  const { wordStatuses, setWordStatus, preferredLanguage: lang } = useAppStore()
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | WordStatus>('all')
  const [chapterFilter, setChapterFilter] = useState<number | undefined>()
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(new Set([1]))

  const filtered = filterVocab(vocab, query, statusFilter, wordStatuses, chapterFilter, lang)

  if (isLoading) {
    return (
      <PageWrapper>
        <div className="flex items-center justify-center h-40 text-gray-400">Loading vocabulary...</div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('vocabulary', lang)}</h1>

      {/* Filters — full-width search on mobile */}
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder={t('search', lang)}
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2.5 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex gap-2 flex-wrap">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as 'all' | WordStatus)}
            className="flex-1 min-w-[120px] border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="all">All</option>
            <option value="known">{t('known', lang)}</option>
            <option value="learning">{t('learning', lang)}</option>
            <option value="new">{t('new', lang)}</option>
          </select>
          <select
            value={chapterFilter ?? ''}
            onChange={e => setChapterFilter(e.target.value ? Number(e.target.value) : undefined)}
            className="flex-1 min-w-[140px] border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">{t('allChapters', lang)}</option>
            {chapters.map(ch => (
              <option key={ch.chapter} value={ch.chapter}>{t('chapter', lang)} {ch.chapter}</option>
            ))}
          </select>
          {(query || statusFilter !== 'all' || chapterFilter) && (
            <span className="text-sm text-gray-500 dark:text-gray-400 self-center">{filtered.length} words</span>
          )}
        </div>
      </div>

      {/* Search results */}
      {(query || statusFilter !== 'all') ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">Word</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300 hidden md:table-cell">Reading</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">Meaning</th>
                <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 100).map((w, i) => {
                const status = (wordStatuses[w.wordClean] ?? 'new') as WordStatus
                return (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-4 py-2 font-jp text-lg font-medium text-gray-900 dark:text-white">
                      {w.wordClean}
                      {w.isSuruVerb && <span className="ml-1 text-xs text-indigo-400">suru</span>}
                    </td>
                    <td className="px-4 py-2 text-gray-500 dark:text-gray-400 hidden md:table-cell">
                      {w.furigana ?? '—'}
                    </td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{getMeaning(w, lang)}</td>
                    <td className="px-4 py-2">
                      <select
                        value={status}
                        onChange={e => setWordStatus(w.wordClean, e.target.value as WordStatus, w.chapter, w.section)}
                        className={`text-xs px-2 py-0.5 rounded-full border-0 ${STATUS_COLORS[status]}`}
                      >
                        {(['known', 'learning', 'new'] as WordStatus[]).map(s => (
                          <option key={s} value={s}>{t(s, lang)}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {filtered.length > 100 && (
            <div className="px-4 py-2 text-sm text-gray-400 text-center">
              Narrow your search to show more results
            </div>
          )}
        </div>
      ) : (
        /* Chapter accordion */
        <div className="space-y-3">
          {chapters.filter(ch => !chapterFilter || ch.chapter === chapterFilter).map(ch => {
            const isOpen = expandedChapters.has(ch.chapter)
            const chWords = vocab.filter(v => v.chapter === ch.chapter)
            const chKnown = chWords.filter(v => (wordStatuses[v.wordClean] ?? 'new') === 'known').length
            return (
              <div key={ch.chapter} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedChapters(prev => {
                    const next = new Set(prev)
                    isOpen ? next.delete(ch.chapter) : next.add(ch.chapter)
                    return next
                  })}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors min-h-[56px]"
                >
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {t('chapter', lang)} {ch.chapter}
                      {ch.sections[0] && (
                        <span className="ml-2 font-normal text-gray-500 dark:text-gray-400 text-sm">
                          {getChapterTitleLang(ch.sections[0].words[0], lang)}
                        </span>
                      )}
                    </span>
                    <span className="ml-2 text-xs text-gray-400">{ch.totalWords} words</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-green-600 dark:text-green-400">
                      {chKnown}/{ch.totalWords} known
                    </span>
                    <span className="text-gray-400">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 dark:border-gray-700 px-5 py-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {ch.sections.map(sec => {
                        const secKnown = sec.words.filter(w => (wordStatuses[w.wordClean] ?? 'new') === 'known').length
                        return (
                          <Link
                            key={sec.section}
                            to={`/vocab/${ch.chapter}/${sec.section}`}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 border border-gray-100 dark:border-gray-700 transition-colors"
                          >
                            <div>
                              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {t('section', lang)} {sec.section}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {sec.words[0] ? getSectionTitleLang(sec.words[0], lang) : ''} · {sec.words.length} words
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                                {secKnown}/{sec.words.length}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </PageWrapper>
  )
}
