/**
 * Progress storage — one interface, two backends.
 *
 * Guests keep everything in localStorage so the app works with no account and
 * no network. Signed-in users go to Supabase exactly as before, but fall back
 * to local writes if a request fails (e.g. a paused free-tier project) so
 * progress is never silently lost.
 *
 * Every call site only ever needs `user.id`, so a guest is simply a
 * UserProfile whose id starts with `local-`.
 */
import { supabase } from '@/lib/supabase'
import type { UserProfile, WordStatus } from '@/types/user'
import type { DailySession, QuizAttempt } from '@/hooks/useProgress'

// ─── Keys ─────────────────────────────────────────────────────────────────────
export const LS_KEYS = {
  profile: 'kamaru:profile',
  wordStatus: 'kamaru:word_status',
  quizAttempts: 'kamaru:quiz_attempts',
  dailySessions: 'kamaru:daily_sessions',
  mockAttempts: 'kamaru:mock_attempts',
} as const

const ATTEMPT_CAP = 200

// ─── Safe localStorage access ────────────────────────────────────────────────
// Private windows and "block site data" make these throw; fall back to an
// in-memory map so the app keeps running instead of white-screening.
const memory = new Map<string, string>()

function readRaw(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return memory.get(key) ?? null
  }
}

function writeRaw(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    memory.set(key, value)
  }
}

function removeRaw(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    memory.delete(key)
  }
}

function read<T>(key: string, fallback: T): T {
  const raw = readRaw(key)
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  try {
    writeRaw(key, JSON.stringify(value))
  } catch {
    // Quota exceeded or unserialisable — drop the write rather than crash.
  }
}

// ─── Guest profile ───────────────────────────────────────────────────────────
export function isGuest(user: UserProfile | null): boolean {
  return !!user && user.id.startsWith('local-')
}

function newId(): string {
  try {
    return crypto.randomUUID()
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`
  }
}

export function createGuestProfile(displayName?: string): UserProfile {
  const today = new Date().toISOString().split('T')[0]
  const profile: UserProfile = {
    id: `local-${newId()}`,
    display_name: displayName?.trim().slice(0, 30) || 'You',
    avatar_url: null,
    target_exam_date: '',
    jlpt_level: null,        // null → ProtectedRoute sends them to /level-select
    preferred_language: null,
    study_start_date: today,
    created_at: new Date().toISOString(),
  }
  write(LS_KEYS.profile, profile)
  return profile
}

export function loadLocalProfile(): UserProfile | null {
  return read<UserProfile | null>(LS_KEYS.profile, null)
}

export function saveLocalProfile(profile: UserProfile): void {
  write(LS_KEYS.profile, profile)
}

export function clearLocalProfile(): void {
  removeRaw(LS_KEYS.profile)
}

// ─── Record shapes ───────────────────────────────────────────────────────────
export interface NewQuizAttempt {
  quiz_type: string
  score: number
  total_questions: number
  time_taken_seconds: number
  chapter?: number | null
  section?: number | null
  answers?: unknown
}

export interface NewMockAttempt {
  vocab_score: number
  grammar_score: number
  reading_score: number
  total_score: number
  passed: boolean
  time_taken_seconds: number
}

export interface NewDailySession {
  session_date: string
  chapter: number
  section: number
  self_rating: string | null
  completed_at: string
}

export interface ProgressStore {
  loadWordStatuses(userId: string): Promise<Record<string, WordStatus>>
  setWordStatus(userId: string, word: string, status: WordStatus, chapter: number, section: number): Promise<void>
  addQuizAttempt(userId: string, attempt: NewQuizAttempt): Promise<void>
  addMockAttempt(userId: string, attempt: NewMockAttempt): Promise<void>
  upsertDailySession(userId: string, session: NewDailySession): Promise<void>
  getSessions(userId: string): Promise<DailySession[]>
  getAttempts(userId: string, limit: number): Promise<QuizAttempt[]>
  reset(userId: string): Promise<void>
}

// ─── Local backend ───────────────────────────────────────────────────────────
export const localStore: ProgressStore = {
  async loadWordStatuses() {
    return read<Record<string, WordStatus>>(LS_KEYS.wordStatus, {})
  },

  async setWordStatus(_userId, word, status) {
    const all = read<Record<string, WordStatus>>(LS_KEYS.wordStatus, {})
    all[word] = status
    write(LS_KEYS.wordStatus, all)
  },

  async addQuizAttempt(_userId, attempt) {
    const all = read<QuizAttempt[]>(LS_KEYS.quizAttempts, [])
    all.unshift({
      id: newId(),
      quiz_type: attempt.quiz_type,
      score: attempt.score,
      total_questions: attempt.total_questions,
      time_taken_seconds: attempt.time_taken_seconds,
      chapter: attempt.chapter ?? null,
      created_at: new Date().toISOString(),
    })
    write(LS_KEYS.quizAttempts, all.slice(0, ATTEMPT_CAP))
  },

  async addMockAttempt(_userId, attempt) {
    const all = read<Array<NewMockAttempt & { id: string; created_at: string }>>(LS_KEYS.mockAttempts, [])
    all.unshift({ ...attempt, id: newId(), created_at: new Date().toISOString() })
    write(LS_KEYS.mockAttempts, all.slice(0, ATTEMPT_CAP))
  },

  async upsertDailySession(_userId, session) {
    const all = read<DailySession[]>(LS_KEYS.dailySessions, [])
    // One session per day — replace same-date entry (mirrors the DB's
    // onConflict: 'user_id,session_date').
    const rest = all.filter(s => s.session_date !== session.session_date)
    rest.unshift({
      session_date: session.session_date,
      self_rating: session.self_rating,
      chapter: session.chapter,
      section: session.section,
    })
    write(LS_KEYS.dailySessions, rest)
  },

  async getSessions() {
    const all = read<DailySession[]>(LS_KEYS.dailySessions, [])
    return [...all].sort((a, b) => b.session_date.localeCompare(a.session_date))
  },

  async getAttempts(_userId, limit) {
    const all = read<QuizAttempt[]>(LS_KEYS.quizAttempts, [])
    return [...all]
      .sort((a, b) => b.created_at.localeCompare(a.created_at))
      .slice(0, limit)
  },

  async reset() {
    removeRaw(LS_KEYS.wordStatus)
    removeRaw(LS_KEYS.quizAttempts)
    removeRaw(LS_KEYS.dailySessions)
    removeRaw(LS_KEYS.mockAttempts)
  },
}

// ─── Supabase backend ────────────────────────────────────────────────────────
// Writes fall back to localStore when the request fails, so a paused project
// mid-session does not lose the attempt.
async function withFallback(
  op: () => PromiseLike<{ error: unknown } | void>,
  fallback: () => Promise<void>,
) {
  try {
    const res = await op()
    if (res && 'error' in res && res.error) throw res.error
  } catch (err) {
    console.warn('[storage] remote write failed, saved locally instead', err)
    await fallback()
  }
}

export const supabaseStore: ProgressStore = {
  async loadWordStatuses(userId) {
    try {
      const { data, error } = await supabase
        .from('word_status')
        .select('word, status')
        .eq('user_id', userId)
      if (error) throw error
      const statuses: Record<string, WordStatus> = {}
      for (const row of data ?? []) statuses[row.word] = row.status
      return statuses
    } catch {
      return localStore.loadWordStatuses(userId)
    }
  },

  async setWordStatus(userId, word, status, chapter, section) {
    await withFallback(
      () => supabase.from('word_status').upsert(
        { user_id: userId, word, status, chapter, section, updated_at: new Date().toISOString() },
        { onConflict: 'user_id,word' },
      ),
      () => localStore.setWordStatus(userId, word, status, chapter, section),
    )
  },

  async addQuizAttempt(userId, attempt) {
    await withFallback(
      () => supabase.from('quiz_attempts').insert({ user_id: userId, ...attempt }),
      () => localStore.addQuizAttempt(userId, attempt),
    )
  },

  async addMockAttempt(userId, attempt) {
    await withFallback(
      () => supabase.from('mock_exam_attempts').insert({ user_id: userId, ...attempt }),
      () => localStore.addMockAttempt(userId, attempt),
    )
  },

  async upsertDailySession(userId, session) {
    await withFallback(
      () => supabase.from('daily_sessions').upsert(
        { user_id: userId, ...session },
        { onConflict: 'user_id,session_date' },
      ),
      () => localStore.upsertDailySession(userId, session),
    )
  },

  async getSessions(userId) {
    try {
      const { data, error } = await supabase
        .from('daily_sessions')
        .select('session_date, self_rating, chapter, section')
        .eq('user_id', userId)
        .order('session_date', { ascending: false })
      if (error) throw error
      return data ?? []
    } catch {
      return localStore.getSessions(userId)
    }
  },

  async getAttempts(userId, limit) {
    try {
      const { data, error } = await supabase
        .from('quiz_attempts')
        .select('id, quiz_type, score, total_questions, time_taken_seconds, created_at, chapter')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)
      if (error) throw error
      return data ?? []
    } catch {
      return localStore.getAttempts(userId, limit)
    }
  },

  async reset(userId) {
    await Promise.all([
      supabase.from('word_status').delete().eq('user_id', userId),
      supabase.from('quiz_attempts').delete().eq('user_id', userId),
      supabase.from('mock_exam_attempts').delete().eq('user_id', userId),
      supabase.from('daily_sessions').delete().eq('user_id', userId),
    ])
    await localStore.reset(userId)
  },
}

/** Pick the backend for the active profile. */
export function storeFor(user: UserProfile | null): ProgressStore {
  return isGuest(user) ? localStore : supabaseStore
}

// ─── Backup ──────────────────────────────────────────────────────────────────
export interface BackupPayload {
  kind: 'kamaru-backup'
  version: 1
  exportedAt: string
  data: Record<string, unknown>
}

export function exportProgress(): BackupPayload {
  const data: Record<string, unknown> = {}
  for (const key of Object.values(LS_KEYS)) {
    const raw = readRaw(key)
    if (raw !== null) {
      try {
        data[key] = JSON.parse(raw)
      } catch {
        // skip unparseable entries
      }
    }
  }
  return { kind: 'kamaru-backup', version: 1, exportedAt: new Date().toISOString(), data }
}

/** Returns the number of restored keys, or throws if the file isn't a backup. */
export function importProgress(payload: unknown): number {
  const p = payload as BackupPayload
  if (!p || p.kind !== 'kamaru-backup' || typeof p.data !== 'object' || p.data === null) {
    throw new Error('Not a Kamaru backup file')
  }
  const valid = new Set<string>(Object.values(LS_KEYS))
  let restored = 0
  for (const [key, value] of Object.entries(p.data)) {
    if (!valid.has(key)) continue
    write(key, value)
    restored++
  }
  return restored
}
