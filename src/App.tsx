import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '@/hooks/useAuth'
import { useVocab } from '@/hooks/useVocab'
import { Navbar } from '@/components/layout/Navbar'
import { ProtectedRoute } from '@/components/layout/ProtectedRoute'
import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { LevelSelect } from '@/pages/LevelSelect'
import { LanguageSelect } from '@/pages/LanguageSelect'
import { VocabBrowser } from '@/pages/VocabBrowser'
import { VocabSection } from '@/pages/VocabSection'
import { StudySession } from '@/pages/StudySession'
import { QuizHub } from '@/pages/QuizHub'
import { VocabQuiz } from '@/pages/VocabQuiz'
import { GrammarQuiz } from '@/pages/GrammarQuiz'
import { Reading } from '@/pages/Reading'
import { MockExam } from '@/pages/MockExam'
import { Progress } from '@/pages/Progress'
import { Leaderboard } from '@/pages/Leaderboard'
import { SectionReader } from '@/pages/SectionReader'
import { FlashcardPicker } from '@/pages/FlashcardPicker'
import { ListeningQuiz } from '@/pages/ListeningQuiz'

/**
 * Send a standalone launch to the Dashboard.
 *
 * "Add to Home Screen" bakes in whatever URL was on screen when it was saved,
 * and iOS never re-reads the manifest's start_url for a shortcut that already
 * exists. So a shortcut saved from /progress keeps reopening there even once
 * the manifest is correct. This corrects it at launch instead of asking the
 * shortcut to be deleted and re-added.
 *
 * Only on the first render of a standalone session: in a normal browser tab
 * this would break refreshing and deep links, and after launch the user
 * navigating to a page themselves must stick.
 */
function useLaunchAtHome() {
  const location = useLocation()
  const navigate = useNavigate()
  const handled = useRef(false)

  useEffect(() => {
    if (handled.current) return
    handled.current = true

    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      // iOS Safari predates display-mode and exposes this instead.
      (window.navigator as { standalone?: boolean }).standalone === true
    if (!standalone) return

    // Onboarding routes redirect on their own; leave those alone.
    const onboarding = ['/login', '/level-select', '/language-select']
    if (location.pathname === '/' || onboarding.includes(location.pathname)) return

    navigate('/', { replace: true })
  }, [location.pathname, navigate])
}

function AppInner() {
  useAuth()
  useVocab()
  useLaunchAtHome()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/level-select" element={<ProtectedRoute><LevelSelect /></ProtectedRoute>} />
        <Route path="/language-select" element={<ProtectedRoute><LanguageSelect /></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/vocab" element={<ProtectedRoute><VocabBrowser /></ProtectedRoute>} />
        <Route path="/vocab/:chapter/:section" element={<ProtectedRoute><VocabSection /></ProtectedRoute>} />
        <Route path="/study" element={<ProtectedRoute><StudySession /></ProtectedRoute>} />
        <Route path="/quiz" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
        <Route path="/quiz/vocab" element={<ProtectedRoute><VocabQuiz /></ProtectedRoute>} />
        <Route path="/quiz/grammar" element={<ProtectedRoute><GrammarQuiz /></ProtectedRoute>} />
        <Route path="/reading" element={<ProtectedRoute><Reading /></ProtectedRoute>} />
        <Route path="/mock-exam" element={<ProtectedRoute><MockExam /></ProtectedRoute>} />
        <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/read/:chapter/:section" element={<ProtectedRoute><SectionReader /></ProtectedRoute>} />
        <Route path="/flashcard" element={<ProtectedRoute><FlashcardPicker /></ProtectedRoute>} />
        <Route path="/quiz/listening" element={<ProtectedRoute><ListeningQuiz /></ProtectedRoute>} />
      </Routes>
      <Toaster position="bottom-center" />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
