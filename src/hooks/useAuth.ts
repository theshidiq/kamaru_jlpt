import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAppStore } from '@/store/useAppStore'

export function useAuth() {
  const { setUser, setAuthReady, loadWordStatuses } = useAppStore()

  useEffect(() => {
    let resolved = false

    async function resolveSession(userId: string | undefined, userEmail?: string, userName?: string) {
      if (resolved) return
      resolved = true

      if (userId) {
        let { data } = await supabase
          .from('profiles')
          .select('id, display_name, avatar_url, jlpt_level, preferred_language, study_start_date, target_exam_date, created_at')
          .eq('id', userId)
          .single()

        if (!data) {
          const raw = userName ?? userEmail?.split('@')[0] ?? 'User'
          const displayName = raw.trim().slice(0, 30)
          const { data: created } = await supabase
            .from('profiles')
            .insert({ id: userId, display_name: displayName })
            .select('id, display_name, avatar_url, jlpt_level, preferred_language, study_start_date, target_exam_date, created_at')
            .single()
          data = created
        }

        setUser(data ?? null)
        if (data) loadWordStatuses(data.id)
      } else {
        setUser(null)
      }
      setAuthReady()
    }

    // Try to resolve immediately from local storage before waiting for network
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!resolved && session) {
        resolveSession(
          session.user.id,
          session.user.email,
          session.user.user_metadata?.full_name ?? session.user.user_metadata?.name,
        )
      }
    })

    // onAuthStateChange handles subsequent login/logout events
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      resolved = false // allow re-resolution on auth state changes
      resolveSession(
        session?.user.id,
        session?.user.email,
        session?.user.user_metadata?.full_name ?? session?.user.user_metadata?.name,
      )
    })

    // Fallback: if no auth event fires within 3s, mark as unauthenticated
    const timeout = setTimeout(() => {
      if (!resolved) resolveSession(undefined)
    }, 3000)

    return () => {
      subscription.unsubscribe()
      clearTimeout(timeout)
    }
  }, [setUser, setAuthReady, loadWordStatuses])
}
