import { create } from 'zustand'
import { loadVocab, getTodaySection, buildChapterMap } from '@/lib/vocab'
import type { VocabWord, ChapterInfo } from '@/types/vocab'
import type { UserProfile, WordStatus } from '@/types/user'
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
}

const initDarkMode = () => {
  const stored = localStorage.getItem('kamaru-dark')
  if (stored !== null) return stored === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const today = getTodaySection()

export const useAppStore = create<AppState>((set, get) => ({
  vocab: [],
  chapters: [],
  vocabLoaded: false,

  user: null,
  authReady: false,
  setUser: (user) => set({ user }),
  setAuthReady: () => set({ authReady: true }),

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
    const vocab = await loadVocab()
    const chapters = buildChapterMap(vocab)
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
}))

// Apply dark mode class on init
if (typeof window !== 'undefined') {
  const dm = initDarkMode()
  document.documentElement.classList.toggle('dark', dm)
}
