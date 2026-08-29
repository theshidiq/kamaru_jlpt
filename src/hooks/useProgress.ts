import { useState, useEffect } from 'react'
import { storeFor } from '@/lib/storage'
import { useAppStore } from '@/store/useAppStore'

export interface DailySession {
  session_date: string
  self_rating: string | null
  chapter: number
  section: number
}

export interface QuizAttempt {
  id: string
  quiz_type: string
  score: number
  total_questions: number
  time_taken_seconds: number
  created_at: string
  chapter: number | null
}

export interface ProgressData {
  streak: number
  longestStreak: number
  sessions: DailySession[]
  recentAttempts: QuizAttempt[]
  totalSessions: number
  loading: boolean
}

export function useProgress(): ProgressData {
  const { user } = useAppStore()
  const [data, setData] = useState<ProgressData>({
    streak: 0,
    longestStreak: 0,
    sessions: [],
    recentAttempts: [],
    totalSessions: 0,
    loading: true,
  })

  useEffect(() => {
    if (!user) return

    async function fetchProgress() {
      const store = storeFor(user)
      const [sessions, recentAttempts] = await Promise.all([
        store.getSessions(user!.id),
        store.getAttempts(user!.id, 20),
      ])

      // Calculate streak
      let streak = 0
      let longestStreak = 0
      let current = 0
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const sortedDates = [...sessions]
        .map(s => new Date(s.session_date))
        .sort((a, b) => b.getTime() - a.getTime())

      for (let i = 0; i < sortedDates.length; i++) {
        const d = sortedDates[i]
        d.setHours(0, 0, 0, 0)
        const expected = new Date(today)
        expected.setDate(today.getDate() - i)
        if (d.getTime() === expected.getTime()) {
          current++
          longestStreak = Math.max(longestStreak, current)
        } else {
          break
        }
      }
      streak = current

      setData({
        streak,
        longestStreak,
        sessions,
        recentAttempts,
        totalSessions: sessions.length,
        loading: false,
      })
    }

    fetchProgress()
  }, [user])

  return data
}
