import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { supabase } from '@/lib/supabase'
import { useState } from 'react'

const NAV_LINKS = [
  { to: '/', label: 'Dashboard' },
  { to: '/study', label: "Today's Study" },
  { to: '/vocab', label: 'Vocabulary' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/reading', label: 'Reading' },
  { to: '/mock-exam', label: 'Mock Exam' },
  { to: '/progress', label: 'Progress' },
  { to: '/leaderboard', label: 'Leaderboard' },
]

// Bottom nav shows 5 items on mobile
const BOTTOM_NAV = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/vocab', label: 'Vocab', icon: '📖' },
  { to: '/quiz', label: 'Quiz', icon: '✏️' },
  { to: '/progress', label: 'Progress', icon: '📊' },
  { to: '/study', label: 'Study', icon: '🎯' },
]

export function Navbar() {
  const { user, darkMode, toggleDarkMode } = useAppStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  if (!user) return null

  return (
    <>
      {/* Top nav bar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-indigo-600 dark:text-indigo-400">
            <span className="bg-indigo-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-black">N4</span>
            Kamaru
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
              title="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 min-w-[44px] min-h-[44px]"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">
                  {user.display_name?.[0]?.toUpperCase() ?? '?'}
                </div>
                <span className="hidden md:block text-sm text-gray-700 dark:text-gray-300 max-w-[100px] truncate">
                  {user.display_name}
                </span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 safe-area-bottom">
        <div className="flex items-stretch h-16">
          {BOTTOM_NAV.map(link => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative flex-1 flex flex-col items-center justify-center gap-0.5 text-xs font-medium transition-colors min-h-[44px] ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <span className="text-lg leading-none">{link.icon}</span>
                <span className="leading-none">{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
