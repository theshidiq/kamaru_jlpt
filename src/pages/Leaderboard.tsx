import { useState, useEffect } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useAppStore } from '@/store/useAppStore'
import { supabase } from '@/lib/supabase'
import { RiMedalLine } from '@remixicon/react'

interface LeaderboardEntry {
  user_id: string
  display_name: string
  avatar_url: string | null
  known_words: number
  study_days: number
  avg_quiz_score: number
}

export function Leaderboard() {
  const { user } = useAppStore()
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from('leaderboard_view')
        .select('user_id, display_name, avatar_url, known_words, study_days, avg_quiz_score')
        .order('known_words', { ascending: false })
        .limit(20)
      setEntries(data ?? [])
      setLoading(false)
    }
    fetch()
  }, [])

  const medalColors = ['text-amber-500', 'text-gray-400', 'text-amber-700']

  return (
    <PageWrapper>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">ランキング</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">グループ全体のスコアを比較しましょう</p>

      {loading ? (
        <div className="text-center py-10 text-gray-400">読み込み中...</div>
      ) : entries.length === 0 ? (
        <div className="text-center py-10 text-gray-400">まだデータがありません</div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden overflow-x-auto">
          <table className="w-full text-sm min-w-0">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left px-3 md:px-4 py-3 text-gray-600 dark:text-gray-300 w-10">#</th>
                <th className="text-left px-3 md:px-4 py-3 text-gray-600 dark:text-gray-300">名前</th>
                <th className="text-right px-3 md:px-4 py-3 text-gray-600 dark:text-gray-300">語数</th>
                <th className="text-right px-3 md:px-4 py-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">学習日数</th>
                <th className="text-right px-3 md:px-4 py-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">平均スコア</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => {
                const isMe = e.user_id === user?.id
                return (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 dark:border-gray-700 ${
                      isMe ? 'bg-indigo-50 dark:bg-indigo-950' : ''
                    }`}
                  >
                    <td className="px-3 md:px-4 py-3 text-center">
                      {i < 3
                        ? <RiMedalLine size={18} className={medalColors[i]} />
                        : <span className="text-gray-500 text-xs">{i + 1}</span>
                      }
                    </td>
                    <td className="px-3 md:px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {e.display_name?.[0]?.toUpperCase() ?? '?'}
                        </div>
                        <span className={`font-medium truncate max-w-[120px] md:max-w-none ${isMe ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-900 dark:text-white'}`}>
                          {e.display_name}
                          {isMe && <span className="ml-1 text-xs text-indigo-400">(あなた)</span>}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 md:px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">{e.known_words}</td>
                    <td className="px-3 md:px-4 py-3 text-right text-gray-600 dark:text-gray-400 hidden md:table-cell">{e.study_days}日</td>
                    <td className="px-3 md:px-4 py-3 text-right hidden md:table-cell">
                      <span className={`font-medium ${Number(e.avg_quiz_score) >= 67 ? 'text-green-600' : 'text-amber-600'}`}>
                        {Math.round(Number(e.avg_quiz_score))}%
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </PageWrapper>
  )
}
