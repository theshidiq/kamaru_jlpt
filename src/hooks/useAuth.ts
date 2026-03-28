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
      console.log('[useAuth] resolveSession', { userId })

      if (userId) {
        let { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single()

        if (!data) {
          const displayName = userName ?? userEmail?.split('@')[0] ?? 'User'
          const { data: created } = await supabase
            .from('profiles')
            .insert({ id: userId, display_name: displayName })
            .select('*')
            .single()
          data = created
        }

        console.log('[useAuth] profile:', data)
        setUser(data ?? null)
        if (data) loadWordStatuses(data.id)
      } else {
        setUser(null)
      }
      setAuthReady()
    }

    // onAuthStateChange MUST be registered first — it's what processes the hash token
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('[useAuth] onAuthStateChange', _event, session?.user?.id)
      resolved = false // allow re-resolution on auth state changes
      resolveSession(
        session?.user.id,
        session?.user.email,
        session?.user.user_metadata?.full_name ?? session?.user.user_metadata?.name,
      )
    })

    // Fallback: if no auth event fires within 3s, mark as unauthenticated
    const timeout = setTimeout(() => {
      console.log('[useAuth] timeout — no session found')
      if (!resolved) resolveSession(undefined)
    }, 3000)

    return () => {
      subscription.unsubscribe()
      clearTimeout(timeout)
    }
  }, [setUser, setAuthReady, loadWordStatuses])
}
