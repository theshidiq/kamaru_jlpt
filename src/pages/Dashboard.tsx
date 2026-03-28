import { useNavigate } from 'react-router-dom'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { useVocab } from '@/hooks/useVocab'
import { useProgress } from '@/hooks/useProgress'
import { LEVEL_CONFIG } from '@/lib/vocab'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { RiBookOpenLine, RiPencilLine, RiFileTextLine, RiTargetLine } from '@remixicon/react'

export function Dashboard() {
  const navigate = useNavigate()
  const { user, wordStatuses, todayChapter, todaySection, todayDaysElapsed, vocab } = useAppStore()
  const { isLoading } = useVocab()
  const progress = useProgress()

  const level = user?.jlpt_level ?? 'N4'
  const TOTAL_SECTIONS = LEVEL_CONFIG[level].totalSections
  const daysUntilExam = user?.target_exam_date
    ? Math.max(0, Math.ceil((new Date(user.target_exam_date).getTime() - Date.now()) / 86400000))
    : null

  // Mastery stats
  const statuses = Object.values(wordStatuses)
  const known = statuses.filter(s => s === 'known').length
  const learning = statuses.filter(s => s === 'learning').length
  const newCount = vocab.length - known - learning

  const pieData = [
    { name: 'Known', value: known, color: '#22c55e' },
    { name: 'Learning', value: learning, color: '#f59e0b' },
    { name: 'New', value: newCount, color: '#e5e7eb' },
  ]


  return (
    <PageWrapper>
      <div className="mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Hey, {user?.display_name} 👋
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Keep up the great work!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Today's Study Card — full-width on mobile */}
        <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-5 md:p-6 text-white">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Day {todayDaysElapsed + 1} / {TOTAL_SECTIONS}</span>
            {daysUntilExam !== null && (
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{daysUntilExam} days to exam</span>
            )}
          </div>
          <h2 className="text-lg md:text-xl font-bold mt-2">
            Chapter {todayChapter} · Section {todaySection}
          </h2>

          {/* Progress bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
            <div
              className="bg-white rounded-full h-2 transition-all"
              style={{ width: `${Math.round((todayDaysElapsed / TOTAL_SECTIONS) * 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-white/80">Streak</p>
              <p className="text-2xl font-bold">{progress.streak} days 🔥</p>
            </div>
            <button
              onClick={() => navigate('/study')}
              className="bg-white text-indigo-700 font-semibold px-4 md:px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm md:text-base min-h-[44px] whitespace-nowrap"
            >
              Start Today's Study →
            </button>
          </div>
        </div>

        {/* Mastery stats */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Word Mastery</h3>
          {isLoading ? (
            <div className="h-32 flex items-center justify-center text-gray-400">Loading...</div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={50}>
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => [`${v} words`]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-2">
                {pieData.map(d => (
                  <div key={d.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                      <span className="text-gray-600 dark:text-gray-400">{d.name}</span>
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">{d.value} words</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Recent quiz attempts */}
      {progress.recentAttempts.length > 0 && (
        <div className="mt-4 bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-5 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Quizzes</h3>
          <div className="space-y-2">
            {progress.recentAttempts.slice(0, 5).map(a => {
              const pct = Math.round((a.score / a.total_questions) * 100)
              return (
                <div key={a.id} className="flex items-center justify-between py-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-400 capitalize">
                    {a.quiz_type === 'vocab' ? 'Vocab' : a.quiz_type === 'grammar' ? 'Grammar' : a.quiz_type === 'reading' ? 'Reading' : 'Mock'}
                    {a.chapter ? ` Ch.${a.chapter}` : ''}
                  </span>
                  <span className={`font-semibold ${pct >= 67 ? 'text-green-600' : 'text-red-500'}`}>
                    {a.score}/{a.total_questions} ({pct}%)
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Quick links — 2-col on mobile, 4-col on desktop */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Vocabulary', to: '/vocab', Icon: RiBookOpenLine },
          { label: 'Quiz', to: '/quiz', Icon: RiPencilLine },
          { label: 'Reading', to: '/reading', Icon: RiFileTextLine },
          { label: 'Mock Exam', to: '/mock-exam', Icon: RiTargetLine },
        ].map(q => (
          <button
            key={q.to}
            onClick={() => navigate(q.to)}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center hover:border-indigo-300 hover:shadow-sm transition-all min-h-[80px] flex flex-col items-center justify-center gap-1.5"
          >
            <q.Icon size={22} className="text-indigo-500 dark:text-indigo-400" />
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{q.label}</div>
          </button>
        ))}
      </div>
    </PageWrapper>
  )
}
