import type { ListeningQuestion, ListeningSceneType, ListeningSpeaker, DialogueLine } from '@/types/listening'

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
  level: 'N4' | 'N2'
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
    audioUrl: `/audio/listening/${raw.id}.mp3`,
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
  level: 'N4' | 'N2' = 'N4',
  count = 10,
): ListeningQuestion[] {
  const pool = level === 'N2' ? questions : questions.filter(q => q.level === 'N4')
  return pool.slice(0, Math.min(count, pool.length))
}
