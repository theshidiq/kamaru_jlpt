import { Navigate, useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useAppStore(s => s.user)
  const authReady = useAppStore(s => s.authReady)
  const location = useLocation()

  if (!authReady) return null  // wait for session check before redirecting
  if (!user) return <Navigate to="/login" replace />

  // First-time user: redirect to level selection
  if (user.jlpt_level === null && location.pathname !== '/level-select') {
    return <Navigate to="/level-select" replace />
  }

  return <>{children}</>
}
