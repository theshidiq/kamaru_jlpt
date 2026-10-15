import { createContext, useContext } from 'react'

/**
 * What the viewer can do when a lesson plays live in the app (Remotion
 * Player) rather than as a rendered MP4. Renders never provide it, so the
 * defaults reproduce the video exactly: furigana and English on, nothing
 * clickable.
 */
export type Interaction = {
  furigana: boolean
  english: boolean
  /** a studied word in the subtitles was tapped */
  onWord?: (word: string) => void
  /** quiz number → the choice the viewer picked */
  answers?: Record<number, number>
  onAnswer?: (n: number, choice: number) => void
}

export const InteractionContext = createContext<Interaction>({ furigana: true, english: true })
export const useInteraction = () => useContext(InteractionContext)
