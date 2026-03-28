import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { useVocab } from '@/hooks/useVocab'
import { useProgress } from '@/hooks/useProgress'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from 'recharts'
import { RiFireLine, RiTrophyLine, RiBookOpenLine, RiBarChart2Line } from '@remixicon/react'
import type { RemixiconComponentType } from '@remixicon/react'

function HeatmapCalendar({ sessions }: { sessions: { session_date: string; self_rating: string | null }[] }) {
  const sessionMap = new Map(sessions.map(s => [s.session_date, s.self_rating]))
  const today = new Date()
  const days: { date: string; rating: string | null }[] = []
  for (let i = 41; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const key = d.toISOString().split('T')[0]
    days.push({ date: key, rating: sessionMap.get(key) ?? null })
  }

  const colorMap: Record<string, string> = {
    easy: 'bg-green-400',
    okay: 'bg-blue-400',
    hard: 'bg-amber-400',
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1">
        {days.map(d => (
          <div
            key={d.date}
            title={d.date + (d.rating ? ` (${d.rating})` : '')}
            className={`w-5 h-5 rounded-sm ${d.rating ? colorMap[d.rating] ?? 'bg-indigo-400' : 'bg-gray-200 dark:bg-gray-700'}`}
          />
        ))}
      </div>
      <div className="flex gap-3 mt-2 text-xs text-gray-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-400 rounded-sm inline-block" /> Easy</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-400 rounded-sm inline-block" /> Okay</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-400 rounded-sm inline-block" /> Hard</span>
      </div>
    </div>
  )
}

export function Progress() {
  const { wordStatuses, vocab } = useAppStore()
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
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-5">Progress</h1>

      {/* Streak + readiness — 2-col on mobile, 4-col on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {([
          { label: 'Streak', value: `${progress.streak} days`, Icon: RiFireLine, color: 'text-orange-500' },
          { label: 'Best Streak', value: `${progress.longestStreak} days`, Icon: RiTrophyLine, color: 'text-amber-500' },
          { label: 'Sessions', value: `${progress.totalSessions}`, Icon: RiBookOpenLine, color: 'text-indigo-500' },
          { label: 'Readiness', value: `${readiness}%`, Icon: RiBarChart2Line, color: 'text-green-500' },
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
          <h3 className="font-semibold text-gray-900 dark:text-white">N4 Readiness</h3>
          <span className="text-sm font-bold text-indigo-600">{readiness}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-3 transition-all"
            style={{ width: `${readiness}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">{totalKnown} / {vocab.length} words mastered</p>
      </div>

      {/* Study heatmap */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Study Calendar (last 42 days)</h3>
        <HeatmapCalendar sessions={progress.sessions} />
      </div>

      {/* Chapter mastery */}
      {chapterData.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Mastery by Chapter</h3>
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
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quiz Score History</h3>
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
            <span className="text-xs text-gray-400">Accuracy (%) — 67%+ to pass</span>
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
