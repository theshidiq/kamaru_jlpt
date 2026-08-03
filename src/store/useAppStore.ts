import { create } from 'zustand'
import { loadVocab, getTodaySectionForLevel, buildChapterMap, LEVEL_CONFIG, DEFAULT_LEVEL } from '@/lib/vocab'
import type { VocabWord, ChapterInfo } from '@/types/vocab'
import type { UserProfile, WordStatus, JlptLevel } from '@/types/user'
import { supabase } from '@/lib/supabase'

interface AppState {
  // Vocab
  vocab: VocabWord[]
  chapters: ChapterInfo[]
  vocabLoaded: boolean
  fetchVocab: () => Promise<void>

  // Auth
  user: UserProfile | null
  authReady: boolean
  setUser: (user: UserProfile | null) => void
  setAuthReady: () => void
  setJlptLevel: (level: JlptLevel) => Promise<void>
  preferredLanguage: 'id' | 'en'
  setLanguage: (lang: 'id' | 'en') => Promise<void>

  // Today's section
  todayChapter: number
  todaySection: number
  todaySectionIndex: number
  todayDaysElapsed: number

  // Dark mode
  darkMode: boolean
  toggleDarkMode: () => void

  // Word statuses (key: wordClean)
  wordStatuses: Record<string, WordStatus>
  setWordStatus: (word: string, status: WordStatus, chapter: number, section: number) => Promise<void>
  loadWordStatuses: (userId: string) => Promise<void>
  resetWordStatuses: () => Promise<void>
}

const initDarkMode = () => {
  const stored = localStorage.getItem('kamaru-dark')
  if (stored !== null) return stored === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const today = getTodaySectionForLevel(DEFAULT_LEVEL)

export const useAppStore = create<AppState>((set, get) => ({
  vocab: [],
  chapters: [],
  vocabLoaded: false,

  user: null,
  authReady: false,
  preferredLanguage: 'id',
  setUser: (user) => {
    const level = user?.jlpt_level ?? DEFAULT_LEVEL
    const t = getTodaySectionForLevel(level, user?.study_start_date)
    set({
      user,
      preferredLanguage: user?.preferred_language ?? 'id',
      vocab: [],
      chapters: [],
      vocabLoaded: false,
      todayChapter: t.chapter,
      todaySection: t.section,
      todaySectionIndex: t.sectionIndex,
      todayDaysElapsed: t.daysElapsed,
    })
  },
  setAuthReady: () => set({ authReady: true }),

  setLanguage: async (lang: 'id' | 'en') => {
    set({ preferredLanguage: lang })
    const { user } = get()
    if (user) {
      await supabase.from('profiles').update({ preferred_language: lang }).eq('id', user.id)
      set({ user: { ...user, preferred_language: lang } })
    }
  },

  setJlptLevel: async (level: JlptLevel) => {
    const { user } = get()
    if (!user) return
    const { error } = await supabase.from('profiles').update({ jlpt_level: level }).eq('id', user.id)
    if (error) throw new Error('Failed to update level: ' + error.message)
    const updatedUser = { ...user, jlpt_level: level }
    const t = getTodaySectionForLevel(level, user.study_start_date)
    // Reset vocab cache for the new level
    set({
      user: updatedUser,
      vocab: [],
      chapters: [],
      vocabLoaded: false,
      todayChapter: t.chapter,
      todaySection: t.section,
      todaySectionIndex: t.sectionIndex,
      todayDaysElapsed: t.daysElapsed,
    })
    // Reload vocab for new level
    const vocab = await loadVocab(level)
    const chapters = buildChapterMap(vocab, LEVEL_CONFIG[level].sectionsPerChapter)
    set({ vocab, chapters, vocabLoaded: true })
  },

  todayChapter: today.chapter,
  todaySection: today.section,
  todaySectionIndex: today.sectionIndex,
  todayDaysElapsed: today.daysElapsed,

  darkMode: initDarkMode(),
  toggleDarkMode: () => {
    const next = !get().darkMode
    set({ darkMode: next })
    localStorage.setItem('kamaru-dark', String(next))
    document.documentElement.classList.toggle('dark', next)
  },

  wordStatuses: {},

  fetchVocab: async () => {
    if (get().vocabLoaded) return
    const level = get().user?.jlpt_level ?? DEFAULT_LEVEL
    const vocab = await loadVocab(level)
    const chapters = buildChapterMap(vocab, LEVEL_CONFIG[level].sectionsPerChapter)
    set({ vocab, chapters, vocabLoaded: true })
  },

  loadWordStatuses: async (userId: string) => {
    const { data } = await supabase
      .from('word_status')
      .select('word, status')
      .eq('user_id', userId)
    if (data) {
      const statuses: Record<string, WordStatus> = {}
      for (const row of data) statuses[row.word] = row.status
      set({ wordStatuses: statuses })
    }
  },

  setWordStatus: async (word, status, chapter, section) => {
    const { user } = get()
    if (!user) return
    set(s => ({ wordStatuses: { ...s.wordStatuses, [word]: status } }))
    await supabase.from('word_status').upsert(
      { user_id: user.id, word, status, chapter, section, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,word' },
    )
  },

  resetWordStatuses: async () => {
    const { user } = get()
    if (!user) return
    const todayStr = new Date().toISOString().split('T')[0]
    await Promise.all([
      supabase.from('word_status').delete().eq('user_id', user.id),
      supabase.from('quiz_attempts').delete().eq('user_id', user.id),
      supabase.from('mock_exam_attempts').delete().eq('user_id', user.id),
      supabase.from('daily_sessions').delete().eq('user_id', user.id),
      supabase.from('profiles').update({ study_start_date: todayStr }).eq('id', user.id),
    ])
    const updatedUser = { ...user, study_start_date: todayStr }
    const level = user.jlpt_level ?? DEFAULT_LEVEL
    const t = getTodaySectionForLevel(level, todayStr)
    set({
      wordStatuses: {},
      user: updatedUser,
      todayChapter: t.chapter,
      todaySection: t.section,
      todaySectionIndex: t.sectionIndex,
      todayDaysElapsed: t.daysElapsed,
    })
  },
}))

// Apply dark mode class on init
if (typeof window !== 'undefined') {
  const dm = initDarkMode()
  document.documentElement.classList.toggle('dark', dm)
}
