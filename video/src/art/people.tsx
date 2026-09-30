/**
 * Figures and shared set pieces for the flat, faceless SVG scenes (1920×1080).
 *
 * Landscape shows the whole canvas; portrait (shorts) slices the middle
 * ~1166 units (x 377–1543), so every scene keeps its story in that column
 * and uses the sides for extra set dressing.
 *
 * Code-drawn per the app's convention (no AI images): consistent across
 * episodes, sharp Japanese text on signs, and every element animatable.
 */
import type { ReactNode } from 'react'

/** `speaker` names who is talking, so the scene can mark them. */
export type SceneProps = { frame: number; speaker?: string }

export const JP = "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif"
export const MINCHO = "'Hiragino Mincho ProN', serif"
const SKIN = '#f2c9a5', SKIN2 = '#e2ad86'

export const rad = (d: number) => (d * Math.PI) / 180
/** Deterministic 0–1 noise, so every render draws the same set. */
export const rnd = (i: number) => { const v = Math.sin(i * 12.9898) * 43758.5453; return v - Math.floor(v) }
export function shade(hex: string, k = 0.8) {
  const n = parseInt(hex.slice(1), 16)
  return `rgb(${((n >> 16) & 255) * k | 0},${((n >> 8) & 255) * k | 0},${(n & 255) * k | 0})`
}

// ─── Person ──────────────────────────────────────────────────────────────
// Drawn in a local 100-unit-tall space: feet at y=0, top of head at y≈-100.

/** [upper arm, forearm] in degrees from straight down; + swings outward. */
type Arm = [number, number]
type Hair = 'short' | 'bob' | 'long' | 'ponytail' | 'bun' | 'receding'
type Top = 'shirt' | 'suit' | 'sweater' | 'blouse' | 'tshirt'

export function Person({
  x, y, h, t = 0, hair = 'short', hairColor = '#2b2118', skin = SKIN,
  top = 'shirt', topColor = '#4f6d8f', bottom = 'pants', bottomColor = '#2f3542',
  apron, tie = '#9b2f3a', armL = [8, 4], armR = [8, 4], pose = 'stand',
  child = false, female = false, flip = false, shoes = '#2a2a2e', held, itemR,
}: {
  x: number; y: number; h: number; t?: number; hair?: Hair; hairColor?: string; skin?: string
  top?: Top; topColor?: string; bottom?: 'pants' | 'skirt' | 'shorts'; bottomColor?: string
  apron?: string; tie?: string; armL?: Arm; armR?: Arm; pose?: 'stand' | 'seiza' | 'chair'
  child?: boolean; female?: boolean; flip?: boolean; shoes?: string
  /** drawn over the chest, under the arms (a newspaper the hands hold) */
  held?: ReactNode
  /** drawn at the right hand */
  itemR?: ReactNode
}) {
  const s = h / 100
  const sx = female ? 0.88 : 1
  const breathe = Math.sin(t / 24 + x) * 0.35
  const drop = pose === 'seiza' ? 35 : pose === 'chair' ? 22 : 0
  const hem = top === 'suit' ? -43 : -47
  const headT = child ? 'translate(0 -80) scale(1.28) translate(0 80)' : undefined
  const hairHi = shade(hairColor, 1.25)

  const arm = (side: 1 | -1, [u, f]: Arm) => {
    const x0 = side * 10 * sx, y0 = -74
    const ex = x0 + side * 15 * Math.sin(rad(u)), ey = y0 + 15 * Math.cos(rad(u))
    const hx = ex + side * 14 * Math.sin(rad(f)), hy = ey + 14 * Math.cos(rad(f))
    const whole = `M ${x0} ${y0} L ${ex} ${ey} L ${hx} ${hy}`
    // Short sleeves: the forearm is bare skin.
    const sleeve = top === 'tshirt' ? `M ${x0} ${y0} L ${(x0 + ex * 2) / 3} ${(y0 + ey * 2) / 3}` : whole
    return (
      <g>
        <path d={whole} stroke="rgba(0,0,0,0.16)" strokeWidth={7.6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {top === 'tshirt' && <path d={whole} stroke={skin} strokeWidth={5.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        <path d={sleeve} stroke={topColor} strokeWidth={6.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {top === 'suit' && <circle cx={hx - side * 0.6 * Math.sin(rad(f))} cy={hy - 0.6 * Math.cos(rad(f))} r={2.9} fill="#f4f4f4" />}
        <circle cx={hx} cy={hy} r={3.1} fill={skin} stroke="rgba(0,0,0,0.12)" strokeWidth={0.6} />
        {side === 1 && itemR && <g transform={`translate(${hx} ${hy})`}>{itemR}</g>}
      </g>
    )
  }

  const torso = `M -10 -77.5 C -12.5 -77 -13 -74 -12.6 -70 L -10.8 ${hem} L 10.8 ${hem} L 12.6 -70 C 13 -74 12.5 -77 10 -77.5 Z`
  const torsoShade = `M 4.5 -77.5 L 10 -77.5 C 12.5 -77 13 -74 12.6 -70 L 10.8 ${hem} L 4.5 ${hem} Z`

  const hairBack = {
    bob: <path d="M -8.7 -90 Q -9.8 -99.8 0 -99.9 Q 9.8 -99.8 8.7 -90 L 9.1 -82.6 Q 6.4 -81.2 5.6 -83.2 L -5.6 -83.2 Q -6.4 -81.2 -9.1 -82.6 Z" fill={hairColor} />,
    long: <path d="M -8.7 -90 Q -9.8 -99.8 0 -99.9 Q 9.8 -99.8 8.7 -90 L 10.4 -65 Q 5 -63 0 -65 Q -5 -63 -10.4 -65 Z" fill={hairColor} />,
    ponytail: <ellipse cx="9" cy="-86" rx="3.2" ry="7.5" transform="rotate(18 9 -86)" fill={hairColor} />,
    bun: <circle cx="0" cy="-99.4" r="4.3" fill={hairColor} />,
  } as Partial<Record<Hair, ReactNode>>

  const capSmooth = 'M -7.5 -88 Q -8.3 -99.3 0 -99.5 Q 8.3 -99.3 7.5 -88 Q 5 -94.6 0 -94.6 Q -5 -94.6 -7.5 -88 Z'
  const hairFront = {
    short: 'M -7.5 -87 Q -8.3 -99.2 0 -99.5 Q 8.3 -99.2 7.5 -87 Q 6.6 -93 1.2 -94.3 Q -4 -94.8 -5.6 -91.2 Q -6.9 -90 -7.5 -87 Z',
    bob: 'M -7.7 -88 Q -8.5 -99.3 0 -99.5 Q 8.5 -99.3 7.7 -88 Q 7 -92.6 3 -93.1 L 2 -91.3 L 0.5 -93.1 Q -5 -93.6 -7.7 -88 Z',
    long: 'M -7.7 -88 Q -8.5 -99.3 0 -99.5 Q 8.5 -99.3 7.7 -88 Q 7 -92.6 3 -93.1 L 2 -91.3 L 0.5 -93.1 Q -5 -93.6 -7.7 -88 Z',
    ponytail: capSmooth,
    bun: capSmooth,
    receding: 'M -7.4 -85.5 Q -8.1 -92 -6.3 -95.2 Q -4.6 -92.4 -5.6 -86 Z M 7.4 -85.5 Q 8.1 -92 6.3 -95.2 Q 4.6 -92.4 5.6 -86 Z',
  }[hair]

  const legs = pose === 'chair' ? (
    <>
      {[-1, 1].map(d => <path key={d} d={`M ${d * 5.4} -24 L ${d * 5.6} -4`} stroke={bottom === 'skirt' ? skin : bottomColor} strokeWidth={bottom === 'skirt' ? 5.4 : 8.6} strokeLinecap="round" />)}
      <rect x="-12" y="-30" width="24" height="9" rx="4" fill={bottomColor} />
    </>
  ) : pose === 'seiza' ? (
    <path d="M -15.5 0 Q -16.5 -16 0 -15.5 Q 16.5 -16 16 0 Z" fill={bottomColor} />
  ) : bottom === 'skirt' ? (
    <>
      {[-1, 1].map(d => <path key={d} d={`M ${d * 4} -36 L ${d * 4.3} -4`} stroke={skin} strokeWidth={5.4} strokeLinecap="round" />)}
      <path d="M -10.3 -49 L 10.3 -49 L 14 -26 Q 0 -24 -14 -26 Z" fill={bottomColor} />
      <path d="M 3 -49 L 10.3 -49 L 14 -26 Q 8 -25 5 -25.4 Z" fill="rgba(0,0,0,0.1)" />
    </>
  ) : (
    <>
      {[-1, 1].map(d => <path key={d} d={`M ${d * 5} -46 L ${d * 5.4} -4`} stroke={bottom === 'shorts' ? skin : bottomColor} strokeWidth={bottom === 'shorts' ? 7 : 8.6} strokeLinecap="round" />)}
      {bottom === 'shorts' && [-1, 1].map(d => <path key={d} d={`M ${d * 5} -46 L ${d * 5.2} -30`} stroke={bottomColor} strokeWidth={9.4} strokeLinecap="butt" />)}
      <rect x="-10.8" y="-50" width="21.6" height="9" rx="2" fill={bottomColor} />
      <path d="M 1.5 -45 L 1.5 -32" stroke="rgba(0,0,0,0.12)" strokeWidth={0.8} />
    </>
  )

  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <ellipse cx="0" cy="0.5" rx={pose === 'seiza' ? 21 : 17} ry="2.6" fill="rgba(0,0,0,0.13)" />
      {legs}
      {pose !== 'seiza' && [-1, 1].map(d => (
        <path key={d} d={`M ${d * 5.4 - 4.6} 0 Q ${d * 5.4 - 4.6} -4.6 ${d * 5.4} -4.6 Q ${d * 5.4 + 5} -4.6 ${d * 5.4 + 5.6} 0 Z`} fill={shoes} />
      ))}
      <g transform={`translate(0 ${drop + breathe})`}>
        <g transform={headT}>{hairBack[hair]}</g>
        <rect x="-2.7" y="-83" width="5.4" height="7" fill={SKIN2} />
        <g transform={`scale(${sx} 1)`}>
          <path d={torso} fill={topColor} />
          <path d={torsoShade} fill="rgba(0,0,0,0.1)" />
          {top === 'suit' && (
            <>
              <path d="M -3.8 -77.5 L 3.8 -77.5 L 0 -62 Z" fill="#f6f6f4" />
              {tie !== 'none' && <path d="M -1.2 -76.4 L 1.2 -76.4 L 1.9 -64.5 L 0 -61.4 L -1.9 -64.5 Z" fill={tie} />}
              <path d="M -3.8 -77.5 L -0.6 -61 M 3.8 -77.5 L 0.6 -61" stroke={shade(topColor, 0.7)} strokeWidth={1.1} fill="none" />
              <circle cx="0" cy="-55" r="0.9" fill={shade(topColor, 0.6)} /><circle cx="0" cy="-49.5" r="0.9" fill={shade(topColor, 0.6)} />
            </>
          )}
          {top === 'shirt' && (
            <>
              <path d="M -4.2 -77.6 L 0 -73.6 L -1.4 -70.6 L -5.4 -75.4 Z M 4.2 -77.6 L 0 -73.6 L 1.4 -70.6 L 5.4 -75.4 Z" fill={shade(topColor, 1.18)} />
              {[-67, -61, -55, -50].map(cy => <circle key={cy} cx="0" cy={cy} r="0.7" fill={shade(topColor, 0.6)} />)}
            </>
          )}
          {top === 'tshirt' && <path d="M -3.6 -77.6 Q 0 -73.4 3.6 -77.6 Z" fill={SKIN2} />}
          {top === 'blouse' && <path d="M -4.4 -77.6 Q 0 -70.5 4.4 -77.6 Q 0 -75 -4.4 -77.6 Z" fill="#fbf7f0" />}
          {top === 'sweater' && (
            <>
              <path d="M -3.8 -77.6 Q 0 -74 3.8 -77.6" stroke={shade(topColor, 0.7)} strokeWidth={1.4} fill="none" />
              <rect x="-10.8" y="-49.4" width="21.6" height="2.4" fill={shade(topColor, 0.75)} />
            </>
          )}
          {(top === 'shirt' || top === 'tshirt') && bottom === 'pants' && !apron && pose === 'stand' && (
            <rect x="-10.8" y="-48.4" width="21.6" height="2" fill={shade(bottomColor, 0.6)} />
          )}
          {apron && (
            <>
              <path d="M -6 -79 L -5.4 -71.5 M 6 -79 L 5.4 -71.5" stroke={shade(apron, 0.8)} strokeWidth={1.1} />
              <path d="M -6 -72 L 6 -72 L 6.5 -58 L 9.6 -57 L 10 -29 Q 0 -27.5 -10 -29 L -9.6 -57 L -6.5 -58 Z" fill={apron} />
              <rect x="-5" y="-46" width="10" height="7" rx="1" fill="none" stroke={shade(apron, 1.3)} strokeWidth={0.8} />
            </>
          )}
        </g>
        {held}
        <g transform={headT}>
          <ellipse cx="-7.1" cy="-88.3" rx="1.6" ry="2.4" fill={SKIN2} />
          <ellipse cx="7.1" cy="-88.3" rx="1.6" ry="2.4" fill={SKIN2} />
          <ellipse cx="0" cy="-89" rx="7.2" ry="8.4" fill={skin} />
          <path d="M 3 -83 Q 5.6 -85 6.6 -89 Q 6 -84 3 -83 Z" fill="rgba(0,0,0,0.06)" />
          <path d={hairFront} fill={hairColor} />
          {hair !== 'receding' && <path d="M -4.2 -97.2 Q 0 -98.8 4.2 -97.2" stroke={hairHi} strokeWidth={1.1} fill="none" strokeLinecap="round" opacity={0.5} />}
          {hair === 'long' && <path d="M 5.4 -86 Q 9.6 -84 10 -69 L 6.8 -68.4 Q 7 -80 5.2 -84 Z M -5.4 -86 Q -9.6 -84 -10 -69 L -6.8 -68.4 Q -7 -80 -5.2 -84 Z" fill={hairColor} />}
          {hair === 'ponytail' && <rect x="6.2" y="-93" width="2.4" height="2.4" rx="1" fill="#e2574c" />}
        </g>
        {arm(-1, armL)}
        {arm(1, armR)}
      </g>
    </g>
  )
}

// ─── Shared set pieces ──────────────────────────────────────────────────

export function Frame({ id, sky, children }: { id: string; sky: [string, string]; children: ReactNode }) {
  // Gradient ids are per scene: two scenes share the DOM while crossfading.
  return (
    <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} /><stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill={`url(#sky-${id})`} />
      {children}
    </svg>
  )
}

export function Clouds({ frame, y = 120, seed = 0 }: { frame: number; y?: number; seed?: number }) {
  return (
    <g fill="#ffffff" opacity="0.85">
      {[0, 1, 2, 3].map(i => {
        const cx = ((rnd(i + seed) * 1920 + frame * (0.25 + i * 0.08)) % 2200) - 140
        const cy = y + rnd(i + seed + 9) * 160, k = 0.7 + rnd(i + seed + 3) * 0.6
        return (
          <g key={i} transform={`translate(${cx} ${cy}) scale(${k})`}>
            <ellipse cx="0" cy="0" rx="90" ry="30" /><circle cx="-30" cy="-18" r="34" /><circle cx="22" cy="-26" r="42" />
          </g>
        )
      })}
    </g>
  )
}

export function Lantern({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y - 60} x2={x} y2={y - 38} stroke="#3b2415" strokeWidth="3" />
      <rect x={x - 16} y={y - 40} width="32" height="8" rx="2" fill="#2b2118" />
      <ellipse cx={x} cy={y} rx="26" ry="34" fill="#d9483b" />
      {[-20, -8, 4, 16].map(dy => <path key={dy} d={`M ${x - 24} ${y + dy} Q ${x} ${y + dy + 4} ${x + 24} ${y + dy}`} stroke="#b33a2f" strokeWidth="2" fill="none" />)}
      <rect x={x - 16} y={y + 32} width="32" height="8" rx="2" fill="#2b2118" />
      <text x={x} y={y + 10} textAnchor="middle" fontSize="26" fontWeight="800" fill="#2b2118" fontFamily={MINCHO}>商</text>
    </g>
  )
}

export function Blossoms({ cx, cy, rx, ry, n, seed }: { cx: number; cy: number; rx: number; ry: number; n: number; seed: number }) {
  const pinks = ['#f7c6d4', '#f4b3c7', '#fbd9e3', '#f09db6']
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const a = rnd(i + seed) * Math.PI * 2, d = Math.sqrt(rnd(i + seed + 50))
        return <circle key={i} cx={cx + Math.cos(a) * rx * d} cy={cy + Math.sin(a) * ry * d} r={34 + rnd(i + seed + 90) * 30} fill={pinks[i % 4]} />
      })}
    </g>
  )
}

