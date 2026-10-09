/**
 * Music and sound effects under an episode, placed from its schedule.
 *
 * The reading part (conversation, report, notice) never gets music, only a
 * faint room sound: the real BJT listening section has none, so that part
 * stays exam-like. Music, when on, sits under everything else and ducks
 * whenever someone speaks.
 *
 * Files are in public/sfx/, made once with ElevenLabs sound generation and
 * music and reused by every episode. Levels are relative to the voice
 * (about -18 dB mean); the source files differ a lot, hence the spread.
 */
import { Audio, Sequence, staticFile, useVideoConfig } from 'remotion'
import type { Episode } from './timeline'

export type SoundMode = 'off' | 'sfx' | 'music'

/** The place sound for a reading part: the script's `ambience`, else its picture's. */
const SCENE_PLACE: Record<string, string> = { office: 'office', meeting: 'meeting', training: 'training', store: 'store' }
export const PLACES = ['office', 'meeting', 'training', 'cafe', 'store', 'station'] as const
// Measured, not guessed: under speech the music sits ~17 dB below the voice,
// and rises ~6 dB in the gaps.
const VOL = { sting: 0.45, whoosh: 0.3, pop: 0.55, tick: 2.0, ding: 0.75, ambience: 1, music: 0.24, musicUnder: 0.11 }
const FADE_MS = 600

export function SoundLayer({ ep, mode }: { ep: Episode & { durationMs: number }; mode: SoundMode }) {
  const { fps } = useVideoConfig()
  if (mode === 'off') return null
  const f = (ms: number) => Math.max(0, Math.round((ms / 1000) * fps))
  const cues: React.ReactNode[] = []
  const cue = (key: string, file: string, atMs: number, lenMs: number, volume: number | ((frame: number) => number), loop = false) => cues.push(
    <Sequence key={key} from={f(atMs)} durationInFrames={Math.max(1, f(lenMs))} layout="none">
      <Audio src={staticFile(`sfx/${file}.mp3`)} volume={volume} loop={loop} />
    </Sequence>,
  )
  const fadeInOut = (lenMs: number, peak: number) => (frame: number) => {
    const ms = (frame / fps) * 1000
    return peak * Math.min(1, ms / FADE_MS, (lenMs - ms) / FADE_MS)
  }

  for (const [i, s] of ep.segments.entries()) {
    if (s.type === 'intro') cue(`sting-${i}`, 'sting', s.at, 4000, VOL.sting)
    if (s.type === 'outro') cue(`sting-${i}`, 'sting', s.at + s.dur - 4200, 4000, VOL.sting)
    if (s.type === 'bridge') cue(`whoosh-${i}`, 'whoosh', s.at, 1200, VOL.whoosh)
    if (s.type === 'word') cue(`pop-${i}`, 'pop', s.at + 60, 600, VOL.pop) // the card pops in
    if (s.type === 'quiz') {
      const [ask, reveal] = s.lines
      const thinkAt = s.at + ask.at + ask.durationMs
      cue(`tick-${i}`, 'tick', thinkAt, reveal.at - (ask.at + ask.durationMs), VOL.tick)
      cue(`ding-${i}`, 'ding', s.at + reveal.at - 120, 1500, VOL.ding)
    }
    // amb-<place>.mp3 are levelled by scripts/make-beds.py, so one volume fits all
    if (s.type === 'scene') cue(`room-${i}`, `amb-${s.ambience ?? SCENE_PLACE[s.scene ?? ''] ?? 'office'}`, s.at, s.dur, fadeInOut(s.dur, VOL.ambience), true)
  }

  if (mode === 'music') {
    // Every voiced line on the episode clock, to duck under.
    const speech = ep.segments.flatMap(s => s.lines.map(l => [s.at + l.at, s.at + l.at + l.durationMs] as const))
    // One bed per run of non-reading segments. music-bed.mp3 is the generated
    // track's solid middle, crossfaded into 110s: the raw file fades in and out.
    const runs: { at: number; end: number }[] = []
    for (const s of ep.segments) {
      if (s.type === 'scene') continue
      const last = runs[runs.length - 1]
      if (last && last.end === s.at) last.end = s.at + s.dur
      else runs.push({ at: s.at, end: s.at + s.dur })
    }
    for (const [i, r] of runs.entries()) {
      const len = r.end - r.at
      const volume = (frame: number) => {
        const local = (frame / fps) * 1000, ms = r.at + local
        // Distance to the nearest line: under a voice it sits low, and it
        // swells back over ~400ms in the gaps.
        let d = Infinity
        for (const [a, b] of speech) d = Math.min(d, ms < a ? a - ms : ms > b ? ms - b : 0)
        const swell = Math.min(1, Math.max(0, (d - 150) / 400))
        const edge = Math.min(1, local / FADE_MS, (len - local) / FADE_MS)
        return (VOL.musicUnder + (VOL.music - VOL.musicUnder) * swell) * edge
      }
      cues.push(
        <Sequence key={`music-${i}`} from={f(r.at)} durationInFrames={Math.max(1, f(len))} layout="none">
          <Audio src={staticFile('sfx/music-bed.mp3')} loop volume={volume} />
        </Sequence>,
      )
    }
  }
  return <>{cues}</>
}
