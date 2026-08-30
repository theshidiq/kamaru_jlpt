import type { ListeningQuestion, ListeningSceneType, ListeningSpeaker, DialogueLine } from '@/types/listening'
import type { JlptLevel } from '@/types/user'
import { JLPT_LEVELS } from '@/types/user'
import { DEFAULT_LEVEL } from '@/lib/vocab'
import { audioUrl } from '@/lib/assets'

const VOICE = {
  N: 'Japanese_DependableWoman',    // NARRATOR
  M: 'Japanese_IntellectualSenior', // MALE
  F: 'Japanese_KindLady',           // FEMALE
} as const

const SPEAKER_MAP: Record<string, ListeningSpeaker> = {
  N: 'NARRATOR',
  M: 'MALE',
  F: 'FEMALE',
}

interface RawLine {
  s: 'N' | 'M' | 'F'
  t: string
}

interface RawQuestion {
  id: string
  level: JlptLevel
  scene: string
  lines: RawLine[]
  question: string
  options: string[]
  answer: number
  hint?: string
}

function expand(raw: RawQuestion): ListeningQuestion {
  const script: DialogueLine[] = raw.lines.map(line => ({
    speaker: SPEAKER_MAP[line.s],
    text: line.t,
    voiceId: VOICE[line.s],
    emotion: 'neutral' as const,
    speed: 0.9,
  }))
  return {
    id: raw.id,
    mondaiType: 'mondai1',
    level: raw.level,
    sceneType: raw.scene as ListeningSceneType,
    audioUrl: audioUrl(`/audio/listening/${raw.id}.mp3`),
    script,
    question: raw.question,
    options: raw.options,
    correctIndex: raw.answer,
    explanation: raw.hint,
  }
}

let cache: ListeningQuestion[] | null = null

export async function loadListeningQuestions(): Promise<ListeningQuestion[]> {
  if (cache) return cache
  const res = await fetch('/listening-questions.json')
  if (!res.ok) throw new Error(`Failed to load listening-questions.json: ${res.status}`)
  const raw: RawQuestion[] = await res.json()
  cache = raw.map(expand)
  return cache
}

export function generateListeningQuiz(
  questions: ListeningQuestion[],
  level: JlptLevel = DEFAULT_LEVEL,
  count = 10,
): ListeningQuestion[] {
  // Include everything at or below the learner's level (JLPT_LEVELS is ordered
  // easiest first), so higher levels still drill easier comprehension.
  const ceiling = JLPT_LEVELS.indexOf(level)
  const pool = questions.filter(q => JLPT_LEVELS.indexOf(q.level) <= ceiling)
  return pool.slice(0, Math.min(count, pool.length))
}
