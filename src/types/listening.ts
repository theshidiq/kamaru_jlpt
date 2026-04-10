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
  level: 'N4' | 'N2'
  sceneType: ListeningSceneType
  sceneProps?: Record<string, unknown>
  script: DialogueLine[]
  audioUrl?: string
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}
