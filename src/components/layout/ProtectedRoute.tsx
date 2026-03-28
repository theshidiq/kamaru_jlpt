import { Navigate } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useAppStore(s => s.user)
  const authReady = useAppStore(s => s.authReady)

  if (!authReady) return null  // wait for session check before redirecting
  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}
