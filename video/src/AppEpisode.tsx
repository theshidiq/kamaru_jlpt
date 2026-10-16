import { Audio } from 'remotion'
import { Episode } from './Episode'
import { InteractionContext, type Interaction } from './interaction'
import type { Episode as Ep } from './timeline'

/**
 * The lesson as the app plays it, live in the Remotion Player: the same
 * visuals as the MP4, but over the app's single stitched lesson MP3 (voice
 * only, or with sound) instead of the per-line clips, and with the viewer's
 * toggles and taps. Backgrounds are the real footage, loaded from R2 beside
 * the audio: audio/lessons/<id>.mp3 -> audio/bg/<clip>.mp4.
 */
export function AppEpisode({ ep, audioSrc, interaction }: { ep: Ep & { durationMs: number }; audioSrc: string; interaction: Interaction }) {
  return (
    <InteractionContext.Provider value={interaction}>
      <Episode ep={ep} voices={false} bg="video" bgSrc={clip => new URL(`../bg/${clip}.mp4`, audioSrc).href} />
      <Audio src={audioSrc} />
    </InteractionContext.Provider>
  )
}
