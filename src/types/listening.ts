import type { JlptLevel } from '@/types/user'

export type ListeningSceneType = 'office' | 'station' | 'restaurant' | 'home' | 'store' | 'classroom'

export type ListeningSpeaker = 'NARRATOR' | 'MALE' | 'FEMALE'

export interface DialogueLine {
  speaker: ListeningSpeaker
  text: string
  voiceId: string
  emotion: 'neutral' | 'happy' | 'sad'
  speed: number
}

export interface ListeningQuestion {
  id: string
  mondaiType: 'mondai1'
  level: JlptLevel
  sceneType: ListeningSceneType
  sceneProps?: Record<string, unknown>
  script: DialogueLine[]
  audioUrl?: string
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}
