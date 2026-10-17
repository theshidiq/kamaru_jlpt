import { createContext, useContext } from 'react'
import { AbsoluteFill, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import type { Episode, Segment } from './timeline'

/**
 * Real-footage backgrounds, for the MP4s and the app's interactive lesson.
 * Clips are free Pexels stock: public/bg/ (1080p, for renders, not committed)
 * and public/bg-web/ (960×540, ~7 MB in all, uploaded to R2 audio/bg/ for the app). Each place's
 * clips play in turn, slowed, with a crossfade, so a long block never shows
 * one short clip on repeat.
 */
export type BgMode = 'svg' | 'video'
export const BgContext = createContext<BgMode>('svg')
export const useBg = () => useContext(BgContext)
/** Where a clip is loaded from: the local files when rendering MP4s; the app
 *  passes its R2 copies (see AppEpisode). */
export type BgSrc = (clip: string) => string
const localSrc: BgSrc = clip => staticFile(`bg/${clip}.mp4`)
const BgSrcContext = createContext<BgSrc>(localSrc)

const RATE = 0.75 // slower reads calmer behind text, and stretches 6–8 s clips
const XFADE = 15 // frames
// Seconds, measured with ffprobe. Keep in step with public/bg/.
const CLIPS: Record<string, [string, number][]> = {
  office: [['office-1', 7.8], ['office-3', 12.97], ['office-2', 6.43], ['office-4', 7.9], ['office-5', 8.9], ['office-6', 20.14], ['office-7', 22.53], ['office-8', 17.92], ['office-9', 7.11]],
  meeting: [['meeting-1', 8.77], ['meeting-3', 10.53], ['meeting-2', 5.7], ['meeting-4', 7.33], ['meeting-5', 11.1], ['meeting-6', 13.76], ['meeting-7', 14.0], ['meeting-8', 19.08], ['meeting-9', 13.52]],
  cafe: [['cafe-1', 17.08], ['cafe-5', 6], ['cafe-2', 16.76], ['cafe-6', 30.02], ['cafe-7', 38.46], ['cafe-8', 10.28], ['cafe-9', 7.6]],
  store: [['store-1', 23.85], ['store-3', 8.09], ['store-2', 10.2], ['store-4', 3.8], ['store-5', 7.67], ['store-6', 11.37], ['store-7', 7.87], ['store-8', 15.0], ['store-9', 14.91]],
  training: [['training-1', 9.04], ['training-3', 10.63], ['training-2', 8.57], ['training-4', 11.36], ['training-5', 16.63], ['training-6', 7.84], ['training-7', 11.6], ['training-8', 19.88], ['training-9', 7.08]],
  station: [['station-1', 12.36], ['station-3', 21.8], ['station-2', 21.6], ['station-4', 12.6], ['station-5', 28.1], ['station-6', 13.08], ['station-7', 28.39], ['station-8', 15.0], ['station-9', 38.75]],
}

/** The place a segment shows, and the group it belongs to (one run each). */
function placeOf(s: Segment, ep: Episode): [string, string] {
  if (s.type === 'scene') return [s.ambience ?? s.scene ?? 'office', 'scene']
  if (s.type === 'bridge' || s.type === 'word') return [ep.blocks[s.block ?? '']?.scene ?? 'office', `block-${s.block}`]
  if (s.type === 'quiz') return [ep.blocks.quiz?.scene ?? 'office', 'block-quiz']
  return ['office', s.type]
}

type Run = { place: string; from: number; dur: number; offset: number }

function runs(ep: Episode, f: (ms: number) => number): Run[] {
  const out: (Run & { group: string })[] = []
  // Start each lesson at a different clip, so videos posted side by side
  // don't all open on the same shot.
  const seed = [...ep.id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7)
  const used: Record<string, number> = {}
  for (const s of ep.segments) {
    const [place, group] = placeOf(s, ep)
    const last = out[out.length - 1]
    if (last && last.group === group && last.place === place) { last.dur = f(s.at + s.dur) - last.from; continue }
    // the next clip of this place, so back-to-back runs of one place differ
    out.push({ place, group, from: f(s.at), dur: f(s.at + s.dur) - f(s.at), offset: (used[place] ?? 0) + seed })
    used[place] = (used[place] ?? 0) + 1
  }
  return out
}

function RunTrack({ run }: { run: Run }) {
  const { fps } = useVideoConfig()
  const srcOf = useContext(BgSrcContext)
  const frame = useCurrentFrame()
  const clips = CLIPS[run.place] ?? CLIPS.office
  // tile the run with clips, each overlapping the previous by XFADE
  const tiles: { file: string; from: number; dur: number }[] = []
  for (let t = 0, i = run.offset; t < run.dur; i++) {
    const [file, sec] = clips[i % clips.length]
    const dur = Math.floor((sec / RATE) * fps) - 2
    tiles.push({ file, from: t, dur })
    t += dur - XFADE
  }
  return (
    <>
      {tiles.map((c, i) => (
        <Sequence key={i} from={c.from} durationInFrames={c.dur} premountFor={30}>
          <OffthreadVideo src={srcOf(c.file)} muted playbackRate={RATE}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
              opacity: i === 0 ? 1 : interpolate(frame - c.from, [0, XFADE], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} />
        </Sequence>
      ))}
    </>
  )
}

/** The whole episode's background, under every segment. */
export function BgTrack({ ep, src = localSrc }: { ep: Episode; src?: BgSrc }) {
  const { fps } = useVideoConfig()
  const f = (ms: number) => Math.round((ms / 1000) * fps)
  return (
    <BgSrcContext.Provider value={src}>
    <AbsoluteFill style={{ filter: 'blur(2px) saturate(0.9)' }}>
      {runs(ep, f).map((r, i) => (
        <Sequence key={i} from={r.from} durationInFrames={r.dur}>
          <RunTrack run={r} />
        </Sequence>
      ))}
      {/* a constant tint, so white text reads on any footage */}
      <AbsoluteFill style={{ background: 'rgba(30,27,75,0.35)' }} />
    </AbsoluteFill>
    </BgSrcContext.Provider>
  )
}
