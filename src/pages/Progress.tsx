import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { useVocab } from '@/hooks/useVocab'
import { useProgress } from '@/hooks/useProgress'
import { t } from '@/lib/i18n'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from 'recharts'
import { RiFireLine, RiTrophyLine, RiBookOpenLine, RiBarChart2Line } from '@remixicon/react'
import type { RemixiconComponentType } from '@remixicon/react'
import { DEFAULT_LEVEL } from '@/lib/vocab'

/**
 * The last six weeks, shaded by how many sections were completed each day
 * (Today's Study saves one session per section, often two a day).
 */
function HeatmapCalendar({ sessions, lang }: { sessions: { session_date: string }[]; lang: 'id' | 'en' }) {
  const counts = new Map<string, number>()
  for (const s of sessions) counts.set(s.session_date, (counts.get(s.session_date) ?? 0) + 1)
  const today = new Date()
  const days: { date: string; n: number }[] = []
  for (let i = 41; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const key = d.toISOString().split('T')[0]
    days.push({ date: key, n: counts.get(key) ?? 0 })
  }

  const shade = (n: number) =>
    n >= 3 ? 'bg-indigo-700' : n === 2 ? 'bg-indigo-500' : n === 1 ? 'bg-indigo-300' : 'bg-gray-200 dark:bg-gray-700'

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {days.map(d => (
          <div
            key={d.date}
            title={d.date + (d.n ? ` · ${t('heatmapSections', lang, { n: d.n })}` : '')}
            className={`w-5 h-5 rounded-sm ${shade(d.n)}`}
          />
        ))}
      </div>
      <div className="flex gap-3 mt-2 text-xs text-gray-400">
        {[1, 2, 3].map(n => (
          <span key={n} className="flex items-center gap-1">
            <span className={`w-3 h-3 rounded-sm inline-block ${shade(n)}`} />
            {t('heatmapSections', lang, { n: n === 3 ? '3+' : n })}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Progress() {
  const { wordStatuses, vocab, preferredLanguage: lang, user } = useAppStore()
  const level = user?.jlpt_level ?? DEFAULT_LEVEL
  const { chapters } = useVocab()
  const progress = useProgress()

  // Chapter mastery chart data
  const chapterData = chapters.map(ch => {
    const words = vocab.filter(v => v.chapter === ch.chapter)
    const known = words.filter(w => wordStatuses[w.wordClean] === 'known').length
    const learning = words.filter(w => wordStatuses[w.wordClean] === 'learning').length
    const newCount = words.length - known - learning
    return { name: `Ch.${ch.chapter}`, Known: known, Learning: learning, New: newCount }
  })

  // Quiz score chart data (last 20 attempts)
  const scoreData = [...progress.recentAttempts]
    .reverse()
    .map((a, i) => ({
      name: `#${i + 1}`,
      score: Math.round((a.score / a.total_questions) * 100),
      type: a.quiz_type,
    }))

  const totalKnown = Object.values(wordStatuses).filter(s => s === 'known').length
  const readiness = vocab.length > 0 ? Math.round((totalKnown / vocab.length) * 100) : 0

  return (
    <PageWrapper>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-5">{t('progress', lang)}</h1>

      {/* Streak + readiness — 2-col on mobile, 4-col on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {([
          { label: t('streak', lang), value: `${progress.streak} ${lang === 'id' ? 'hari' : 'days'}`, Icon: RiFireLine, color: 'text-orange-500' },
          { label: t('bestStreak', lang), value: `${progress.longestStreak} ${lang === 'id' ? 'hari' : 'days'}`, Icon: RiTrophyLine, color: 'text-amber-500' },
          { label: t('sessions', lang), value: `${progress.totalSessions}`, Icon: RiBookOpenLine, color: 'text-indigo-500' },
          { label: t('readiness', lang), value: `${readiness}%`, Icon: RiBarChart2Line, color: 'text-green-500' },
        ] as { label: string; value: string; Icon: RemixiconComponentType; color: string }[]).map(s => (
          <div key={s.label} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-3 md:p-4 text-center">
            <div className={`flex justify-center mb-1 ${s.color}`}><s.Icon size={24} /></div>
            <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Readiness bar */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">{t('n4Readiness', lang, { level })}</h3>
          <span className="text-sm font-bold text-indigo-600">{readiness}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-3 transition-all"
            style={{ width: `${readiness}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">{totalKnown} / {vocab.length} {lang === 'id' ? 'kata dikuasai' : 'words mastered'}</p>
      </div>

      {/* Study heatmap */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('studyCalendar', lang)}</h3>
        <HeatmapCalendar sessions={progress.sessions} lang={lang} />
      </div>

      {/* Chapter mastery */}
      {chapterData.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('masteryByChapter', lang)}</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chapterData} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={50} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="Known" stackId="a" fill="#22c55e" />
              <Bar dataKey="Learning" stackId="a" fill="#f59e0b" />
              <Bar dataKey="New" stackId="a" fill="#e5e7eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Quiz score history */}
      {scoreData.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('quizHistory', lang)}</h3>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={scoreData}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v) => [`${v}%`]} />
              <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 flex items-center gap-1">
            <div className="w-3 h-0.5 bg-indigo-600" />
            <span className="text-xs text-gray-400">{t('accuracy', lang)}</span>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
