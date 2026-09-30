import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'
import { supabase } from '@/lib/supabase'
import { useState, useRef, useEffect } from 'react'
import {
  RiHome4Line, RiBookOpenLine, RiPencilLine, RiBarChart2Line, RiTargetLine, RiSunLine, RiMoonLine,
  RiMenuLine, RiCloseLine, RiFileTextLine, RiFileList3Line, RiTrophyLine,
} from '@remixicon/react'
import { t } from '@/lib/i18n'
import { DEFAULT_LEVEL } from '@/lib/vocab'
import { isGuest, clearLocalProfile, exportProgress, importProgress } from '@/lib/storage'
import toast from 'react-hot-toast'
import { levelLabel } from '@/types/user'

export function Navbar() {
  const { user, darkMode, toggleDarkMode, resetWordStatuses, preferredLanguage, setLanguage, setUser } = useAppStore()
  const lang = preferredLanguage
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [resetting, setResetting] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const NAV_LINKS = [
    { to: '/', label: t('dashboard', lang), Icon: RiHome4Line },
    { to: '/study', label: t('todayStudy', lang), Icon: RiTargetLine },
    { to: '/vocab', label: t('vocabulary', lang), Icon: RiBookOpenLine },
    { to: '/quiz', label: t('quiz', lang), Icon: RiPencilLine },
    { to: '/reading', label: t('reading', lang), Icon: RiFileTextLine },
    { to: '/mock-exam', label: t('mockExam', lang), Icon: RiFileList3Line },
    { to: '/progress', label: t('progress', lang), Icon: RiBarChart2Line },
    { to: '/leaderboard', label: t('leaderboard', lang), Icon: RiTrophyLine },
  ]

  // Mobile navigation drawer. It replaces the fixed bottom tab bar, which
  // took 81px of every screen and was rarely used; the drawer costs nothing
  // until opened and holds all eight links rather than five.
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = () => setDrawerOpen(false)
  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawerOpen(false) }
    document.addEventListener('keydown', onKey)
    // Keep the page behind the drawer from scrolling while it is open.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [drawerOpen])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  const guest = isGuest(user)

  async function handleLogout() {
    setMenuOpen(false)
    if (guest) {
      if (!confirm(lang === 'id'
        ? 'Keluar mode tamu? Progres tetap tersimpan di perangkat ini.'
        : 'Exit guest mode? Your progress stays saved on this device.')) return
      clearLocalProfile()
      setUser(null)
    } else {
      await supabase.auth.signOut()
    }
    navigate('/login')
  }

  function handleExport() {
    setMenuOpen(false)
    const payload = exportProgress()
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `kamaru-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
    toast.success(t('exportDone', lang))
  }

  function handleImport() {
    setMenuOpen(false)
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json,.json'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      try {
        importProgress(JSON.parse(await file.text()))
        toast.success(t('importDone', lang))
        window.location.reload()
      } catch {
        toast.error(t('importFailed', lang))
      }
    }
    input.click()
  }

  async function handleResetScore() {
    if (!confirm(lang === 'id' ? 'Reset semua skor kata? Tidak bisa dibatalkan.' : 'Reset all word scores? This cannot be undone.')) return
    setResetting(true)
    await resetWordStatuses()
    setResetting(false)
    setMenuOpen(false)
  }

  if (!user) return null

  return (
    <>
      {/* Top nav bar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 gap-4">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden -ml-2 w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Menu"
            aria-expanded={drawerOpen}
          >
            <RiMenuLine size={22} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 font-bold text-base text-indigo-600 dark:text-indigo-400 shrink-0 md:mr-0 mr-auto">
            <img src="/favicon.svg" alt="" className="w-6 h-6 shrink-0" />
            <span className="leading-none">華丸</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2.5 py-1.5 rounded text-sm font-medium transition-colors whitespace-nowrap ${
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
          <div className="flex items-center gap-2 shrink-0">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(preferredLanguage === 'id' ? 'en' : 'id')}
              className="px-2 py-1 rounded text-xs font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors h-9 flex items-center gap-0.5"
              title={t('language', lang)}
            >
              <span className={preferredLanguage === 'id' ? 'text-gray-900 dark:text-white' : 'text-gray-400'}>ID</span>
              <span className="text-gray-300 dark:text-gray-600 mx-0.5">|</span>
              <span className={preferredLanguage === 'en' ? 'text-gray-900 dark:text-white' : 'text-gray-400'}>EN</span>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 w-9 h-9 flex items-center justify-center"
              title={darkMode ? (lang === 'id' ? 'Mode terang' : 'Light mode') : (lang === 'id' ? 'Mode gelap' : 'Dark mode')}
            >
              {darkMode ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
            </button>

            {/* User dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {user.display_name?.[0]?.toUpperCase() ?? '?'}
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[100px] truncate">
                  {user.display_name}
                </span>
                <svg className="hidden md:block w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 overflow-hidden">
                  {/* User info header */}
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user.display_name}</p>
                    <span className="inline-block mt-0.5 text-xs font-medium px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                      {levelLabel(user.jlpt_level ?? DEFAULT_LEVEL)}
                    </span>
                  </div>

                  {/* Menu items */}
                  <div className="py-1">
                    <button
                      onClick={() => { setMenuOpen(false); navigate('/level-select') }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {t('changeLevel', lang)}
                    </button>

                    <button
                      onClick={handleExport}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {t('exportProgress', lang)}
                    </button>

                    <button
                      onClick={handleImport}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      {t('importProgress', lang)}
                    </button>

                    <button
                      onClick={handleResetScore}
                      disabled={resetting}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                    >
                      <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      {resetting ? t('resetting', lang) : t('resetScore', lang)}
                    </button>
                  </div>

                  <div className="border-t border-gray-100 dark:border-gray-700 py-1">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      {guest ? t('exitGuest', lang) : t('signOut', lang)}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-black/40" onClick={closeDrawer} />
          <aside className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-white dark:bg-gray-900 shadow-xl flex flex-col animate-[drawerIn_180ms_ease-out]">
            <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-1.5 font-bold text-base text-indigo-600 dark:text-indigo-400">
                <img src="/favicon.svg" alt="" className="w-6 h-6" />
                華丸
              </span>
              <button
                onClick={closeDrawer}
                className="w-10 h-10 -mr-2 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <RiCloseLine size={22} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {NAV_LINKS.map(({ to, label, Icon }) => {
                const active = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={closeDrawer}
                    className={`flex items-center gap-3 mx-2 px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                      active
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={20} className={active ? '' : 'text-gray-400 dark:text-gray-500'} />
                    {label}
                  </Link>
                )
              })}
            </nav>
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 safe-area-bottom">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user.display_name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{levelLabel(user.jlpt_level ?? DEFAULT_LEVEL)}</p>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
