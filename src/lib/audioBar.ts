/** m:ss for the audio players. */
export function clock(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

/** Page top padding on desktop that keeps content clear of AudioBar. */
export const AUDIO_BAR_PAD = 'md:pt-20'
