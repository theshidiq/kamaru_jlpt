import { useEffect } from 'react'
import { create } from 'zustand'

/**
 * Whether the navbar has slid away. On the audio pages (Read Along, Lesson)
 * the desktop navbar hides while scrolling down and returns on any scroll
 * up, so the audio bar under it can take the top of the screen. The navbar
 * drives this; AudioBar reads it to move into the space.
 */
export const useNavStore = create<{ hidden: boolean; setHidden: (hidden: boolean) => void }>(set => ({
  hidden: false,
  setHidden: hidden => set({ hidden }),
}))

/** Past this, scrolling down hides the navbar; above it, it always shows. */
const TOP_ZONE = 80
/** Ignore jitter smaller than this (trackpads report tiny reversals). */
const DEADBAND = 4
const DESKTOP = '(min-width: 768px)'

export function useAutoHideNav(enabled: boolean) {
  const setHidden = useNavStore(s => s.setHidden)
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    if (!enabled) { setHidden(false); return }
    // Handled on every scroll event, not batched into requestAnimationFrame:
    // scroll already fires about once a frame, and rAF stops in background
    // tabs, which left the navbar stuck hidden after a scroll back to the top.
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY, dy = y - lastY
      if (!mq.matches || y < TOP_ZONE) setHidden(false)
      else if (dy > DEADBAND) setHidden(true)
      else if (dy < -DEADBAND) setHidden(false)
      if (Math.abs(dy) > DEADBAND || y < TOP_ZONE) lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    mq.addEventListener('change', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener('change', onScroll)
      setHidden(false)
    }
  }, [enabled, setHidden])
}
