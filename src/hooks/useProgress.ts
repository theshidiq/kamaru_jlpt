import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
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
      const [sessionsRes, attemptsRes] = await Promise.all([
        supabase
          .from('daily_sessions')
          .select('session_date, self_rating, chapter, section')
          .eq('user_id', user!.id)
          .order('session_date', { ascending: false }),
        supabase
          .from('quiz_attempts')
          .select('id, quiz_type, score, total_questions, time_taken_seconds, created_at, chapter')
          .eq('user_id', user!.id)
          .order('created_at', { ascending: false })
          .limit(20),
      ])

      const sessions: DailySession[] = sessionsRes.data ?? []
      const recentAttempts: QuizAttempt[] = attemptsRes.data ?? []

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
