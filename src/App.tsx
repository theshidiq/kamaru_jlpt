import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function AppInner() {
  useAuth()
  useVocab()
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
