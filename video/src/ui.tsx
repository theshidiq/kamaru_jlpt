import type { CSSProperties } from 'react'
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { SCENES } from './art/scenes'
import type { Line, Segment, Unit } from './timeline'

export const FONT = "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Noto Sans JP', sans-serif"
export const INDIGO = '#1e1b4b'

const CAST_COLOR: Record<string, string> = { boss: '#60a5fa', staff: '#f472b6' }

/** ms into the current <Sequence>, plus the frame on the episode clock. */
export function useClock(seg: Segment) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  return { frame, fps, ms: (frame / fps) * 1000, global: frame + Math.round((seg.at / 1000) * fps) }
}

export function Ruby({ units, rt, highlight }: { units: Pick<Unit, 'parts'>[]; rt: number; highlight?: (i: number) => CSSProperties }) {
  return (
    <>
      {units.map((u, i) => (
        <span key={i} style={highlight?.(i)}>
          {u.parts.map((p, k) => p.r
            ? <ruby key={k}>{p.t}<rt style={{ fontSize: rt, color: 'inherit', opacity: 0.8 }}>{p.r}</rt></ruby>
            : <span key={k}>{p.t}</span>)}
        </span>
      ))}
    </>
  )
}

/** A line with furigana, lit up unit by unit as it is spoken. */
export function Karaoke({ line, ms, size, en, dark = false }: { line: Line; ms: number; size: number; en: number; dark?: boolean }) {
  const t = ms - line.at
  const enIn = interpolate(t, [300, 700], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const base = dark ? '#111827' : '#ffffff'
  return (
    <div>
      <p style={{ fontSize: size, lineHeight: 1.9, margin: 0, fontWeight: 600, color: base }}>
        <Ruby units={line.units} rt={size * 0.46} highlight={i => {
          const u = line.units[i], done = u.end <= t, now = u.start <= t && t < u.end
          return {
            color: now ? INDIGO : base,
            opacity: done || now || t >= line.durationMs ? 1 : 0.4,
            background: now ? '#fcd34d' : 'transparent',
            borderRadius: 8, padding: now ? '0 3px' : 0,
            textDecoration: u.word ? `underline dotted ${dark ? '#818cf8' : '#a5b4fc'}` : 'none',
            textUnderlineOffset: size * 0.24, textDecorationThickness: 4,
          }
        }} />
      </p>
      <p style={{ fontSize: en, margin: `${size * 0.2}px 0 0`, lineHeight: 1.4, fontStyle: 'italic', opacity: 0.85 * enIn, color: dark ? '#4b5563' : '#e0e7ff' }}>{line.en}</p>
    </div>
  )
}

export function SpeakerChip({ line, size = 26 }: { line: Line; size?: number }) {
  if (line.sp === 'host') return null
  return (
    <span style={{ display: 'inline-block', fontSize: size, fontWeight: 700, padding: `${size * 0.2}px ${size * 0.7}px`, borderRadius: 999,
      background: CAST_COLOR[line.cast ?? ''] ?? '#a5b4fc', color: INDIGO, marginBottom: size * 0.5 }}>{line.name}</span>
  )
}

export function Chip({ children, size = 26, color = 'rgba(255,255,255,0.14)', text = 'white' }: { children: React.ReactNode; size?: number; color?: string; text?: string }) {
  return (
    <span style={{ display: 'inline-block', fontSize: size, fontWeight: 700, letterSpacing: 1, padding: `${size * 0.25}px ${size * 0.8}px`,
      borderRadius: 999, background: color, color: text, border: '2px solid rgba(255,255,255,0.18)', whiteSpace: 'nowrap' }}>{children}</span>
  )
}

/**
 * A scene filling its parent with a slow push-in. By default it is sliced to
 * the parent's shape around the middle; `focus` (canvas x) re-centres a
 * narrow window, e.g. on the people rather than the canvas midpoint.
 */
export function SceneFill({ scene, frame, speaker, zoom = true, focus, width }: {
  scene: string; frame: number; speaker?: string; zoom?: boolean; focus?: number; width?: number
}) {
  const Scene = SCENES[scene] ?? SCENES.office
  const k = zoom ? 1 + 0.04 * Math.min(1, frame / 600) : 1
  const box = focus !== undefined && width
    ? { position: 'absolute', top: 0, left: width / 2 - focus, width: 1920, height: 1080 } as const
    : { position: 'absolute', inset: 0 } as const
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div style={{ ...box, transform: `scale(${k})`, transformOrigin: '50% 60%' }}>
        <Scene frame={frame} speaker={speaker} />
      </div>
    </div>
  )
}

export function usePop(delayFrames = 0) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  return spring({ frame: frame - delayFrames, fps, config: { damping: 15, stiffness: 150 } })
}

/** Headword, reading and meaning. `scale` shrinks it for the portrait layout. */
export function WordCard({ seg, scale = 1 }: { seg: Segment; scale?: number }) {
  const pop = usePop()
  const k = (n: number) => n * scale
  const word = seg.word ?? ''
  const wordSize = k([170, 170, 170, 150, 124, 104][Math.min(word.length, 5)])
  return (
    <div style={{ background: 'white', color: '#111827', borderRadius: k(36), padding: `${k(30)}px ${k(46)}px`, display: 'flex', alignItems: 'center', gap: k(44),
      boxShadow: '0 30px 70px rgba(0,0,0,0.35)', opacity: pop, transform: `translateY(${(1 - pop) * 30}px) scale(${0.92 + 0.08 * pop})`, transformOrigin: 'left center' }}>
      <div style={{ textAlign: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
        <div style={{ fontSize: k(42), color: '#6366f1', minHeight: k(50) }}>{seg.reading}</div>
        <div style={{ fontSize: wordSize, fontWeight: 800, lineHeight: 1.08 }}>{word}</div>
      </div>
      <div style={{ borderLeft: '4px solid #e5e7eb', paddingLeft: k(40) }}>
        <div style={{ fontSize: k(24), fontWeight: 700, color: '#6366f1', letterSpacing: 3 }}>MEANING</div>
        <div style={{ fontSize: k(40), color: '#374151', marginTop: k(10), lineHeight: 1.3 }}>{seg.meaning}</div>
        {seg.alsoIn && (
          <div style={{ display: 'inline-block', marginTop: k(16), fontSize: k(22), fontWeight: 700, color: '#047857', background: '#d1fae5', borderRadius: 999, padding: `${k(4)}px ${k(16)}px` }}>
            Also JLPT {seg.alsoIn}
          </div>
        )}
      </div>
    </div>
  )
}

/** 意味 then 例文, each revealed when its line starts. */
export function WordLines({ seg, ms, size, en }: { seg: Segment; ms: number; size: number; en: number }) {
  const { fps } = useVideoConfig()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: size * 0.6 }}>
      {seg.lines.map(l => {
        const started = ms >= l.at
        const fade = interpolate(ms - l.at, [0, (8 / fps) * 1000], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
        const speaking = ms >= l.at && ms < l.at + l.durationMs
        return (
          <div key={l.id} style={{ opacity: started ? (speaking ? 1 : 0.75) * fade : 0 }}>
            <Chip size={size * 0.52} color={l.role === 'example' ? 'rgba(244,114,182,0.25)' : 'rgba(165,180,252,0.25)'}>
              {l.role === 'example' ? '例文 · Example' : '意味 · Meaning'}
            </Chip>
            <div style={{ marginTop: size * 0.3 }}><Karaoke line={l} ms={ms} size={size} en={en} /></div>
          </div>
        )
      })}
    </div>
  )
}
