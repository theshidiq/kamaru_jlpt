/**
 * Set pieces for the flashcard word pictures: one small scene per word on a
 * 480×320 card, in the same flat, faceless style as the Lesson video
 * (Person comes from ../people). Code-drawn, per the app's convention.
 *
 * Pictures never spell the word they illustrate: the card is a hint, and
 * the word is printed beside it.
 */
import type { ReactNode } from 'react'
import { JP, Person, shade } from '../people'

export const W = 480, H = 320, FLOOR = 290
export { JP, Person }
export const C = {
  indigo: '#4f46e5', indigoL: '#a5b4fc', amber: '#f59e0b', amberL: '#fde68a', green: '#10b981', greenL: '#a7f3d0',
  rose: '#f43f5e', roseL: '#fecdd3', sky: '#38bdf8', slate: '#64748b', ink: '#1f2937', paper: '#ffffff',
  suit: '#2f3a4f', suitW: '#3a4254', cardboard: '#d6a76a', wood: '#d2b48c',
}
type PersonProps = Parameters<typeof Person>[0]

// Unique ids within one rendered file; render.tsx resets this per card.
let n = 0
export const resetIds = () => { n = 0 }
const uid = (p: string) => `${p}${++n}`

const BG: Record<string, [string, string, string]> = {
  // wall top, wall bottom, floor
  office: ['#eef2f7', '#e2e8f0', '#cbd5e1'],
  meeting: ['#f1f5f9', '#e2e8f0', '#c7cdd6'],
  store: ['#fff7ed', '#ffedd5', '#e7cfae'],
  warm: ['#fef3c7', '#fde68a', '#e5c97a'],
  cool: ['#e0f2fe', '#bae6fd', '#9ccbe6'],
  mint: ['#ecfdf5', '#d1fae5', '#a7dcc4'],
  rose: ['#fff1f2', '#ffe4e6', '#f3c4ca'],
  lilac: ['#eef2ff', '#e0e7ff', '#c3cbf0'],
  street: ['#dbeafe', '#eff6ff', '#cbd5e1'],
}

/** The card: backdrop, floor, and the scene on top. */
export function Card({ bg = 'office', floor = true, children }: { bg?: keyof typeof BG | string; floor?: boolean; children: ReactNode }) {
  const [a, b, f] = BG[bg] ?? BG.office
  const g = uid('bg')
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${g})`} />
      {floor && <rect y={FLOOR} width={W} height={H - FLOOR} fill={f} />}
      {children}
    </svg>
  )
}

// ─── People ──────────────────────────────────────────────────────────────

/** Common casts, so the same office people recur across cards. */
export const CAST = {
  boss: { hair: 'short', hairColor: '#3f3f46', top: 'suit', topColor: C.suit, bottomColor: C.suit } as Partial<PersonProps>,
  staff: { female: true, hair: 'bob', hairColor: '#3a2519', top: 'suit', topColor: C.suitW, tie: 'none', bottom: 'skirt', bottomColor: C.suitW } as Partial<PersonProps>,
  junior: { hair: 'short', hairColor: '#2b2118', top: 'suit', topColor: '#475569', bottomColor: '#334155', tie: '#2563eb' } as Partial<PersonProps>,
  client: { hair: 'receding', hairColor: '#6b6b6b', top: 'suit', topColor: '#3b3f46', bottomColor: '#3b3f46', tie: '#b45309' } as Partial<PersonProps>,
  shopper: { female: true, hair: 'long', hairColor: '#4a2f22', top: 'sweater', topColor: '#e8a0a8', bottom: 'skirt', bottomColor: '#5b6b8c' } as Partial<PersonProps>,
  clerk: { hair: 'short', hairColor: '#2b2118', top: 'shirt', topColor: '#f8fafc', bottomColor: '#334155', apron: '#16a34a' } as Partial<PersonProps>,
  driver: { hair: 'short', hairColor: '#2b2118', top: 'tshirt', topColor: '#2563eb', bottomColor: '#1e3a8a' } as Partial<PersonProps>,
}

export function P(props: PersonProps & { cast?: keyof typeof CAST }) {
  const { cast, ...rest } = props
  return <Person {...(cast ? CAST[cast] : {})} {...rest} />
}

/**
 * A bow: the upper body tilts at the hips toward +x (deg > 0) or -x.
 * Drawn as the figure twice, clipped at the hips.
 */
export function Bow({ deg = 28, ...props }: PersonProps & { cast?: keyof typeof CAST; deg?: number }) {
  const s = props.h / 100, hip = props.y - 46 * s
  const lo = uid('lo'), up = uid('up')
  return (
    <g>
      <defs>
        <clipPath id={lo}><rect x={props.x - 40 * s} y={hip} width={80 * s} height={50 * s} /></clipPath>
        <clipPath id={up}><rect x={props.x - 60 * s} y={props.y - 120 * s} width={120 * s} height={(120 - 46 + 3) * s} /></clipPath>
      </defs>
      <g clipPath={`url(#${lo})`}><P {...props} /></g>
      <g transform={`rotate(${deg} ${props.x} ${hip})`}><g clipPath={`url(#${up})`}><P {...props} /></g></g>
    </g>
  )
}

// ─── Things ──────────────────────────────────────────────────────────────

export function Box({ x, y, w = 60, h = 44, color = C.cardboard, label }: { x: number; y: number; w?: number; h?: number; color?: string; label?: ReactNode }) {
  // x, y: bottom-left
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} rx="3" fill={color} />
      <rect x={x} y={y - h} width={w} height={h * 0.22} fill={shade(color, 0.88)} />
      <rect x={x + w / 2 - 5} y={y - h} width="10" height={h} fill={shade(color, 1.12)} opacity="0.7" />
      {label}
    </g>
  )
}

export function Doc({ x, y, w = 70, h = 90, rot = 0, lines = 5, color = C.paper, head = C.indigo, children }: {
  x: number; y: number; w?: number; h?: number; rot?: number; lines?: number; color?: string; head?: string; children?: ReactNode
}) {
  // x, y: centre
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-w / 2 + 3} y={-h / 2 + 4} width={w} height={h} rx="4" fill="rgba(0,0,0,0.1)" />
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx="4" fill={color} stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x={-w / 2 + 8} y={-h / 2 + 9} width={w * 0.55} height="7" rx="3" fill={head} />
      {Array.from({ length: lines }, (_, i) => (
        <rect key={i} x={-w / 2 + 8} y={-h / 2 + 24 + i * ((h - 34) / lines)} width={(w - 16) * (i % 3 === 2 ? 0.65 : 1)} height="4.5" rx="2" fill="#cbd5e1" />
      ))}
      {children}
    </g>
  )
}

export function Envelope({ x, y, w = 70, rot = 0, color = '#fff' }: { x: number; y: number; w?: number; rot?: number; color?: string }) {
  const h = w * 0.64
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx="4" fill={color} stroke="#94a3b8" strokeWidth="2" />
      <path d={`M ${-w / 2 + 2} ${-h / 2 + 2} L 0 ${h * 0.12} L ${w / 2 - 2} ${-h / 2 + 2}`} fill="none" stroke="#94a3b8" strokeWidth="2" />
      <circle cx={w * 0.3} cy={h * 0.18} r={w * 0.08} fill={C.rose} />
    </g>
  )
}

export function Plane({ x, y, s = 1, rot = -15 }: { x: number; y: number; s?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M -30 0 L 32 -18 L -8 8 Z" fill="#fff" stroke="#94a3b8" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M -8 8 L 32 -18 L 2 18 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.6" strokeLinejoin="round" />
    </g>
  )
}

/** Dashed motion trail from (x1,y1) to (x2,y2). */
export function Trail({ x1, y1, x2, y2, color = '#94a3b8' }: { x1: number; y1: number; x2: number; y2: number; color?: string }) {
  const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - 30
  return <path d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="3" strokeDasharray="6 7" strokeLinecap="round" />
}

export function Arrow({ x1, y1, x2, y2, color = C.indigo, w = 6 }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number }) {
  const a = Math.atan2(y2 - y1, x2 - x1), hl = w * 2.6
  const p = (d: number, r: number) => `${x2 - hl * Math.cos(a + d)} ${y2 - hl * Math.sin(a + d) * r}`
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2 - Math.cos(a) * hl * 0.6} y2={y2 - Math.sin(a) * hl * 0.6} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <path d={`M ${x2} ${y2} L ${p(0.5, 1)} L ${p(-0.5, 1)} Z`} fill={color} />
    </g>
  )
}

export function Bubble({ x, y, w = 120, h = 56, tail = 'l', color = '#fff', children }: {
  x: number; y: number; w?: number; h?: number; tail?: 'l' | 'r' | 'none'; color?: string; children?: ReactNode
}) {
  // x, y: centre
  const tx = tail === 'l' ? -w / 4 : w / 4
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={Math.min(18, h / 2)} fill={color} stroke="#cbd5e1" strokeWidth="2" />
      {tail !== 'none' && <path d={`M ${tx - 8} ${h / 2 - 1} L ${tx + (tail === 'l' ? -14 : 14)} ${h / 2 + 16} L ${tx + 8} ${h / 2 - 1} Z`} fill={color} stroke="#cbd5e1" strokeWidth="2" strokeLinejoin="round" />}
      {tail !== 'none' && <rect x={tx - 9} y={h / 2 - 4} width="18" height="5" fill={color} />}
      {children}
    </g>
  )
}

export function Txt({ x, y, size = 18, color = C.ink, weight = 700, anchor = 'middle', children }: {
  x: number; y: number; size?: number; color?: string; weight?: number; anchor?: 'start' | 'middle' | 'end'; children: ReactNode
}) {
  return <text x={x} y={y} fontSize={size} fontWeight={weight} fill={color} textAnchor={anchor} dominantBaseline="central" fontFamily={JP}>{children}</text>
}

export function Sparkle({ x, y, r = 10, color = C.amber }: { x: number; y: number; r?: number; color?: string }) {
  const k = r * 0.28
  return <path d={`M ${x} ${y - r} Q ${x + k} ${y - k} ${x + r} ${y} Q ${x + k} ${y + k} ${x} ${y + r} Q ${x - k} ${y + k} ${x - r} ${y} Q ${x - k} ${y - k} ${x} ${y - r} Z`} fill={color} />
}

export function Heart({ x, y, s = 1, color = C.rose }: { x: number; y: number; s?: number; color?: string }) {
  return <path transform={`translate(${x} ${y}) scale(${s})`} d="M 0 8 C -14 -2 -12 -14 -4 -14 C 0 -14 0 -10 0 -9 C 0 -10 0 -14 4 -14 C 12 -14 14 -2 0 8 Z" fill={color} />
}

export function Star({ x, y, r = 12, color = C.amber }: { x: number; y: number; r?: number; color?: string }) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.45 : r
    return `${x + rr * Math.cos(a)},${y + rr * Math.sin(a)}`
  }).join(' ')
  return <polygon points={pts} fill={color} />
}

export function Tag({ x, y, w = 96, h = 50, rot = -8, color = C.amber, children }: { x: number; y: number; w?: number; h?: number; rot?: number; color?: string; children?: ReactNode }) {
  // a price tag, centre x, y; hole on the left
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M ${-w / 2} 0 L ${-w / 2 + h / 2} ${-h / 2} L ${w / 2} ${-h / 2} L ${w / 2} ${h / 2} L ${-w / 2 + h / 2} ${h / 2} Z`} fill={color} stroke={shade(color, 0.8)} strokeWidth="2" strokeLinejoin="round" />
      <circle cx={-w / 2 + h / 2 - 4} cy="0" r="5" fill="#fff" stroke={shade(color, 0.8)} strokeWidth="2" />
      {children}
    </g>
  )
}

export function Coin({ x, y, r = 14 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
      <Txt x={x} y={y + 1} size={r * 1.1} color="#92400e" weight={800}>¥</Txt>
    </g>
  )
}

export function Building({ x, y, w = 110, h = 150, color = '#94a3b8', win = '#e0f2fe', sign, signColor = C.indigo }: {
  x: number; y: number; w?: number; h?: number; color?: string; win?: string; sign?: ReactNode; signColor?: string
}) {
  // x, y: bottom-left
  const cols = Math.max(2, Math.round(w / 30)), rows = Math.max(2, Math.round((h - 40) / 30))
  return (
    <g>
      <rect x={x} y={y - h} width={w} height={h} fill={color} />
      <rect x={x} y={y - h} width={w} height="8" fill={shade(color, 0.85)} />
      {Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => (
        <rect key={`${r}-${c}`} x={x + 10 + c * ((w - 20) / cols)} y={y - h + 20 + r * 30} width={(w - 20) / cols - 8} height="18" rx="2" fill={win} />
      )))}
      <rect x={x + w / 2 - 14} y={y - 34} width="28" height="34" fill={shade(color, 0.7)} />
      {sign && (
        <g>
          <rect x={x + 8} y={y - h - 22} width={w - 16} height="20" rx="4" fill={signColor} />
          {sign}
        </g>
      )}
    </g>
  )
}

export function Desk({ x, y, w = 200 }: { x: number; y: number; w?: number }) {
  // x: left, y: top of the desk
  return (
    <g>
      <rect x={x} y={y} width={w} height="12" rx="3" fill="#e6d3b5" />
      <rect x={x + 10} y={y + 12} width={w - 20} height={FLOOR - y - 12} fill="#d2bd9c" />
    </g>
  )
}

export function Laptop({ x, y, s = 1, screen = '#f8fafc', children }: { x: number; y: number; s?: number; screen?: string; children?: ReactNode }) {
  // x: centre, y: desk top
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-44" y="-62" width="88" height="58" rx="5" fill="#334155" />
      <rect x="-39" y="-57" width="78" height="48" rx="2" fill={screen} />
      <path d="M -54 -4 L 54 -4 L 60 0 L -60 0 Z" fill="#475569" />
      <g transform="translate(0 -33)">{children}</g>
    </g>
  )
}

export function Phone({ x, y, s = 1, rot = 0 }: { x: number; y: number; s?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <rect x="-11" y="-20" width="22" height="40" rx="4" fill="#1f2937" />
      <rect x="-8.5" y="-15" width="17" height="28" rx="1.5" fill="#93c5fd" />
    </g>
  )
}

export function Briefcase({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -8 -26 L -8 -32 L 8 -32 L 8 -26" fill="none" stroke="#5b3a1e" strokeWidth="3.5" />
      <rect x="-22" y="-26" width="44" height="28" rx="4" fill="#7c4a24" />
      <rect x="-22" y="-16" width="44" height="3" fill="#5b3a1e" />
    </g>
  )
}

export function Shelf({ x, y, w = 170, rows = 3, items = ['#f87171', '#60a5fa', '#fbbf24', '#34d399', '#a78bfa'] }: { x: number; y: number; w?: number; rows?: number; items?: string[] }) {
  // x, y: bottom-left
  const rh = 46
  return (
    <g>
      <rect x={x} y={y - rows * rh - 8} width={w} height={rows * rh + 8} fill="#e7d7bd" />
      {Array.from({ length: rows }, (_, r) => (
        <g key={r}>
          <rect x={x} y={y - r * rh - 8} width={w} height="8" fill="#b08a5a" />
          {Array.from({ length: Math.floor((w - 10) / 30) }, (_, i) => {
            const col = items[(i + r * 2) % items.length], hh = 22 + ((i * 7 + r * 5) % 12)
            return <rect key={i} x={x + 8 + i * 30} y={y - r * rh - 8 - hh} width="22" height={hh} rx="3" fill={col} />
          })}
        </g>
      ))}
    </g>
  )
}

export function Counter({ x, y, w = 160 }: { x: number; y: number; w?: number }) {
  // x: left, y: counter top
  return (
    <g>
      <rect x={x} y={y} width={w} height="10" rx="3" fill="#a16207" />
      <rect x={x + 6} y={y + 10} width={w - 12} height={FLOOR - y - 10} fill="#ca8a04" />
      <rect x={x + 18} y={y + 22} width={w - 36} height={FLOOR - y - 40} rx="4" fill="#eab308" opacity="0.5" />
    </g>
  )
}

export function Register({ x, y }: { x: number; y: number }) {
  // x: centre, y: counter top
  return (
    <g>
      <rect x={x - 26} y={y - 30} width="52" height="30" rx="4" fill="#475569" />
      <rect x={x - 20} y={y - 44} width="40" height="16" rx="3" fill="#1e293b" />
      <rect x={x - 16} y={y - 41} width="32" height="10" fill="#4ade80" />
    </g>
  )
}

export function Truck({ x, y, s = 1, color = C.indigo, label }: { x: number; y: number; s?: number; color?: string; label?: ReactNode }) {
  // x: left, y: ground
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="0" y="-78" width="120" height="66" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="0" y="-38" width="120" height="10" fill={color} />
      <path d="M 120 -58 L 150 -58 L 168 -36 L 168 -12 L 120 -12 Z" fill={color} />
      <path d="M 128 -52 L 148 -52 L 160 -37 L 128 -37 Z" fill="#bae6fd" />
      {[30, 140].map(cx => (
        <g key={cx}><circle cx={cx} cy="-10" r="13" fill="#1f2937" /><circle cx={cx} cy="-10" r="5" fill="#94a3b8" /></g>
      ))}
      {label}
    </g>
  )
}

export function Cart({ x, y, s = 1, full = true }: { x: number; y: number; s?: number; full?: boolean }) {
  // x: left, y: ground
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {full && [['#f87171', 8], ['#60a5fa', 26], ['#fbbf24', 44]].map(([c, bx]) => <rect key={bx as number} x={bx as number} y="-58" width="16" height="22" rx="3" fill={c as string} />)}
      <path d="M -14 -64 L 0 -64 L 8 -20 L 62 -20 L 70 -56 L 4 -56" fill="none" stroke="#475569" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="14" cy="-8" r="6" fill="#475569" /><circle cx="56" cy="-8" r="6" fill="#475569" />
    </g>
  )
}

export function Bag({ x, y, s = 1, color = '#fde68a' }: { x: number; y: number; s?: number; color?: string }) {
  // x: centre, y: bottom
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -8 -34 Q -8 -46 0 -46 Q 8 -46 8 -34" fill="none" stroke="#92400e" strokeWidth="2.5" />
      <path d="M -16 -34 L 16 -34 L 19 0 L -19 0 Z" fill={color} stroke={shade(color, 0.8)} strokeWidth="1.5" />
    </g>
  )
}

export function Gift({ x, y, s = 1, color = C.rose }: { x: number; y: number; s?: number; color?: string }) {
  // x: centre, y: bottom
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-18" y="-30" width="36" height="30" rx="3" fill={color} />
      <rect x="-21" y="-36" width="42" height="9" rx="2" fill={shade(color, 0.9)} />
      <rect x="-3.5" y="-36" width="7" height="36" fill="#fde68a" />
      <path d="M 0 -36 Q -14 -50 -12 -38 Z M 0 -36 Q 14 -50 12 -38 Z" fill="#fde68a" />
    </g>
  )
}

export function Window({ x, y, w = 160, h = 110 }: { x: number; y: number; w?: number; h?: number }) {
  // the office window with a city behind; x, y: top-left
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#dbeafe" />
      {[0.08, 0.3, 0.55, 0.78].map((fx, i) => {
        const bh = h * (0.35 + ((i * 37) % 40) / 100)
        return <rect key={i} x={x + w * fx} y={y + h - bh} width={w * 0.17} height={bh} fill={['#b6c6dc', '#a5b7d0', '#c3d1e4', '#9fb2cc'][i]} />
      })}
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="#94a3b8" strokeWidth="6" />
      <rect x={x + w / 2 - 2} y={y} width="4" height={h} fill="#94a3b8" />
    </g>
  )
}

// ─── More set pieces (chapter 1-2 … 1-5) ─────────────────────────────────

export function Chart({ x, y, w = 140, h = 100, bars = [0.4, 0.6, 0.5, 0.85], colors, hi, axis = true }: {
  x: number; y: number; w?: number; h?: number; bars?: number[]; colors?: string[]; hi?: number; axis?: boolean
}) {
  // bar chart; x, y: bottom-left of the plot
  const bw = w / bars.length
  return (
    <g>
      {bars.map((b, i) => (
        <rect key={i} x={x + i * bw + bw * 0.18} y={y - b * h} width={bw * 0.64} height={b * h} rx="3"
          fill={colors?.[i] ?? (i === hi ? C.rose : ['#93c5fd', '#60a5fa', '#3b82f6', '#2563eb'][i % 4])} />
      ))}
      {axis && <line x1={x - 4} y1={y} x2={x + w + 4} y2={y} stroke={C.slate} strokeWidth="3" strokeLinecap="round" />}
    </g>
  )
}

export function Magnifier({ x, y, r = 30, rot = 40, children }: { x: number; y: number; r?: number; rot?: number; children?: ReactNode }) {
  // x, y: lens centre
  const cid = uid('lens')
  return (
    <g>
      <defs><clipPath id={cid}><circle cx={x} cy={y} r={r} /></clipPath></defs>
      <circle cx={x} cy={y} r={r} fill="#f0f9ff" opacity="0.92" />
      <g clipPath={`url(#${cid})`}>{children}</g>
      <rect x={x - 6} y={y + r} width="12" height={r * 1.3} rx="5" fill="#7c4a24" transform={`rotate(${-rot} ${x} ${y})`} />
      <circle cx={x} cy={y} r={r} fill="none" stroke="#475569" strokeWidth="6" />
    </g>
  )
}

export function Bulb({ x, y, s = 1, on = true }: { x: number; y: number; s?: number; on?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {on && Array.from({ length: 7 }, (_, i) => {
        const a = (-90 + (i - 3) * 30) * Math.PI / 180
        return <line key={i} x1={Math.cos(a) * 30} y1={-6 + Math.sin(a) * 30} x2={Math.cos(a) * 40} y2={-6 + Math.sin(a) * 40} stroke={C.amber} strokeWidth="4" strokeLinecap="round" />
      })}
      <path d="M -18 -8 A 20 20 0 1 1 18 -8 Q 12 4 10 14 L -10 14 Q -12 4 -18 -8 Z" fill={on ? '#fde047' : '#e5e7eb'} stroke={on ? '#eab308' : '#9ca3af'} strokeWidth="2" />
      <rect x="-10" y="14" width="20" height="10" rx="2" fill="#94a3b8" />
    </g>
  )
}

export function Check({ x, y, s = 1, color = C.green }: { x: number; y: number; s?: number; color?: string }) {
  return <path transform={`translate(${x} ${y}) scale(${s})`} d="M -16 0 L -5 11 L 17 -12" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
}

export function Cross({ x, y, s = 1, color = C.rose, w = 7 }: { x: number; y: number; s?: number; color?: string; w?: number }) {
  return <path transform={`translate(${x} ${y}) scale(${s})`} d="M -13 -13 L 13 13 M 13 -13 L -13 13" fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" />
}

/** The Japanese ◯ (right) mark. */
export function Maru({ x, y, r = 30, color = C.rose, w = 8 }: { x: number; y: number; r?: number; color?: string; w?: number }) {
  return <circle cx={x} cy={y} r={r} fill="none" stroke={color} strokeWidth={w} />
}

export function Board({ x, y, w = 180, h = 110, children }: { x: number; y: number; w?: number; h?: number; children?: ReactNode }) {
  // whiteboard on legs; x, y: top-left
  return (
    <g>
      <rect x={x + 14} y={y + h} width="6" height={FLOOR - y - h} fill="#94a3b8" />
      <rect x={x + w - 20} y={y + h} width="6" height={FLOOR - y - h} fill="#94a3b8" />
      <rect x={x} y={y} width={w} height={h} rx="6" fill="#fbfcfd" stroke="#94a3b8" strokeWidth="6" />
      <rect x={x + 10} y={y + h - 2} width={w - 20} height="6" rx="2" fill="#94a3b8" />
      <g transform={`translate(${x} ${y})`}>{children}</g>
    </g>
  )
}

export function Monitor({ x, y, w = 160, h = 104, children }: { x: number; y: number; w?: number; h?: number; children?: ReactNode }) {
  // desktop monitor; x, y: top-left of the frame; children in screen space
  return (
    <g>
      <rect x={x + w / 2 - 8} y={y + h} width="16" height="22" fill="#6b7280" />
      <rect x={x + w / 2 - 34} y={y + h + 20} width="68" height="8" rx="4" fill="#6b7280" />
      <rect x={x} y={y} width={w} height={h} rx="8" fill="#1f2937" />
      <rect x={x + 7} y={y + 7} width={w - 14} height={h - 14} rx="3" fill="#f8fafc" />
      <g transform={`translate(${x + 7} ${y + 7})`}>{children}</g>
    </g>
  )
}

export function Headphones({ x, y, s = 1, color = C.indigo }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -30 6 A 30 30 0 0 1 30 6" fill="none" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
      <rect x="-40" y="0" width="18" height="30" rx="7" fill={color} />
      <rect x="22" y="0" width="18" height="30" rx="7" fill={color} />
    </g>
  )
}

export function Waves({ x, y, n = 3, color = C.indigo, dir = 1 }: { x: number; y: number; n?: number; color?: string; dir?: 1 | -1 }) {
  return <>{Array.from({ length: n }, (_, i) => (
    <path key={i} d={`M ${x + dir * (10 + i * 12)} ${y - 10 - i * 6} Q ${x + dir * (18 + i * 14)} ${y} ${x + dir * (10 + i * 12)} ${y + 10 + i * 6}`} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" opacity={1 - i * 0.2} />
  ))}</>
}

export function Speaker({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -24 -12 L -10 -12 L 8 -28 L 8 28 L -10 12 L -24 12 Z" fill="#334155" />
      <Waves x={6} y={0} />
    </g>
  )
}

export function Pencil({ x, y, s = 1, rot = 40 }: { x: number; y: number; s?: number; rot?: number }) {
  // x, y: the tip
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M 0 0 L 6 -14 L -6 -14 Z" fill="#fcd9a8" /><path d="M 0 0 L 2 -5 L -2 -5 Z" fill="#334155" />
      <rect x="-6" y="-74" width="12" height="60" fill={C.amber} />
      <rect x="-6" y="-84" width="12" height="10" rx="2" fill="#f9a8d4" />
    </g>
  )
}

export function Clipboard({ x, y, w = 70, h = 92, rot = 0, children }: { x: number; y: number; w?: number; h?: number; rot?: number; children?: ReactNode }) {
  // x, y: centre
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx="6" fill="#a16207" />
      <rect x={-w / 2 + 6} y={-h / 2 + 10} width={w - 12} height={h - 16} rx="2" fill="#fff" />
      <rect x={-14} y={-h / 2 - 5} width="28" height="12" rx="3" fill="#94a3b8" />
      {children}
    </g>
  )
}

/** A checklist: rows of boxes, `checked` ticked, `hi` highlighted. */
export function Checklist({ x, y, rows = 4, w = 90, checked = [], hi, gap = 22 }: { x: number; y: number; rows?: number; w?: number; checked?: number[]; hi?: number; gap?: number }) {
  // x, y: top-left of the first box
  return <>{Array.from({ length: rows }, (_, i) => (
    <g key={i}>
      {i === hi && <rect x={x - 6} y={y + i * gap - 5} width={w + 12} height={gap - 2} rx="4" fill={C.amberL} />}
      <rect x={x} y={y + i * gap} width="12" height="12" rx="2" fill="#fff" stroke={C.slate} strokeWidth="2" />
      {checked.includes(i) && <path d={`M ${x + 2} ${y + i * gap + 6} l 3 4 l 7 -9`} fill="none" stroke={C.green} strokeWidth="3" strokeLinecap="round" />}
      <rect x={x + 20} y={y + i * gap + 3} width={w - 20 - (i % 2) * 14} height="6" rx="3" fill="#cbd5e1" />
    </g>
  ))}</>
}

export function Calendar({ x, y, w = 110, mark = [], cross = [], ring = [] }: { x: number; y: number; w?: number; mark?: number[]; cross?: number[]; ring?: number[] }) {
  // x, y: top-left; 4 weeks of 7 days, days numbered 0–27
  const cw = (w - 12) / 7, h = 28 + cw * 4 + 8
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x={x} y={y} width={w} height="22" rx="6" fill={C.rose} /><rect x={x} y={y + 14} width={w} height="8" fill={C.rose} />
      {Array.from({ length: 28 }, (_, d) => {
        const cx = x + 6 + (d % 7) * cw + cw / 2, cy = y + 28 + Math.floor(d / 7) * cw + cw / 2
        return (
          <g key={d}>
            <rect x={cx - cw * 0.32} y={cy - cw * 0.32} width={cw * 0.64} height={cw * 0.64} rx="2" fill={mark.includes(d) ? C.indigoL : '#e2e8f0'} />
            {cross.includes(d) && <Cross x={cx} y={cy} s={cw / 40} w={5} />}
            {ring.includes(d) && <circle cx={cx} cy={cy} r={cw * 0.55} fill="none" stroke={C.rose} strokeWidth="3" />}
          </g>
        )
      })}
    </g>
  )
}

/** An org chart of heads: rows of 1, 2, 3…; `hi` is [row, index]. */
export function Org({ x, y, rows = [1, 2, 3], hi, gapX = 70, gapY = 72 }: { x: number; y: number; rows?: number[]; hi?: [number, number]; gapX?: number; gapY?: number }) {
  // x: centre, y: top row centre
  const pos = rows.map((n, r) => Array.from({ length: n }, (_, i) => [x + (i - (n - 1) / 2) * gapX, y + r * gapY] as const))
  return (
    <g>
      {pos.slice(1).map((row, r) => row.map(([cx, cy], i) => {
        const parent = pos[r][Math.min(pos[r].length - 1, Math.floor((i * pos[r].length) / row.length))]
        return <path key={`${r}-${i}`} d={`M ${parent[0]} ${parent[1] + 22} L ${parent[0]} ${(parent[1] + cy) / 2} L ${cx} ${(parent[1] + cy) / 2} L ${cx} ${cy - 22}`} fill="none" stroke="#94a3b8" strokeWidth="3" />
      }))}
      {pos.map((row, r) => row.map(([cx, cy], i) => {
        const on = hi && hi[0] === r && hi[1] === i
        return (
          <g key={`${r}-${i}`}>
            <circle cx={cx} cy={cy} r="22" fill={on ? C.amber : '#fff'} stroke={on ? '#d97706' : '#cbd5e1'} strokeWidth="3" />
            <circle cx={cx} cy={cy - 5} r="7" fill={on ? '#fff' : '#94a3b8'} />
            <path d={`M ${cx - 12} ${cy + 13} Q ${cx} ${cy - 2} ${cx + 12} ${cy + 13}`} fill={on ? '#fff' : '#94a3b8'} />
          </g>
        )
      }))}
    </g>
  )
}

export function Books({ x, y, n = 4, colors = ['#3b82f6', '#f43f5e', '#10b981', '#f59e0b', '#8b5cf6'] }: { x: number; y: number; n?: number; colors?: string[] }) {
  // a stack; x: centre, y: bottom
  return <>{Array.from({ length: n }, (_, i) => (
    <g key={i}>
      <rect x={x - 46 + (i % 2) * 6} y={y - (i + 1) * 18} width="92" height="16" rx="3" fill={colors[i % colors.length]} />
      <rect x={x - 40 + (i % 2) * 6} y={y - (i + 1) * 18 + 3} width="80" height="3" fill="rgba(255,255,255,0.5)" />
    </g>
  ))}</>
}

export function PuzzlePiece({ x, y, s = 1, color = C.indigo, rot = 0 }: { x: number; y: number; s?: number; color?: string; rot?: number }) {
  return (
    <path transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} fill={color} stroke={shade(color, 0.8)} strokeWidth="2"
      d="M -30 -30 L -8 -30 A 9 9 0 1 1 8 -30 L 30 -30 L 30 -8 A 9 9 0 1 1 30 8 L 30 30 L -30 30 Z" />
  )
}

export function Scales({ x, y, tilt = 0 }: { x: number; y: number; tilt?: number }) {
  // x: centre, y: ground; tilt > 0 drops the right pan
  const a = (tilt * Math.PI) / 180, L = 80, dx = Math.cos(a) * L, dy = Math.sin(a) * L
  const pan = (px: number, py: number) => (
    <g>
      <line x1={px} y1={py} x2={px - 22} y2={py + 40} stroke="#94a3b8" strokeWidth="2" /><line x1={px} y1={py} x2={px + 22} y2={py + 40} stroke="#94a3b8" strokeWidth="2" />
      <path d={`M ${px - 30} ${py + 40} L ${px + 30} ${py + 40} Q ${px} ${py + 58} ${px - 30} ${py + 40} Z`} fill="#fbbf24" />
    </g>
  )
  return (
    <g>
      <rect x={x - 5} y={y - 170} width="10" height="160" fill="#a16207" />
      <rect x={x - 36} y={y - 12} width="72" height="12" rx="4" fill="#a16207" />
      <line x1={x - dx} y1={y - 165 - dy} x2={x + dx} y2={y - 165 + dy} stroke="#a16207" strokeWidth="8" strokeLinecap="round" />
      <circle cx={x} cy={y - 168} r="9" fill="#ca8a04" />
      {pan(x - dx, y - 165 - dy)}{pan(x + dx, y - 165 + dy)}
    </g>
  )
}

export function Target({ x, y, r = 60, dart = true }: { x: number; y: number; r?: number; dart?: boolean }) {
  return (
    <g>
      {[1, 0.75, 0.5, 0.25].map((k, i) => <circle key={k} cx={x} cy={y} r={r * k} fill={i % 2 ? '#fff' : C.rose} />)}
      {dart && (
        <g transform={`translate(${x} ${y}) rotate(-35)`}>
          <rect x="0" y="-3" width="70" height="6" rx="2" fill="#334155" />
          <path d="M 62 0 L 82 -12 L 78 0 L 82 12 Z" fill={C.amber} />
        </g>
      )}
    </g>
  )
}

export function Plant({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  // x: centre, y: floor
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[[-12, -58, 18], [10, -64, 20], [0, -80, 16], [-18, -74, 14]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={['#5f9a5a', '#6fae66', '#7fbd73', '#5a8f55'][i]} />)}
      <path d="M -20 -40 L 20 -40 L 15 0 L -15 0 Z" fill="#e7e2d8" />
    </g>
  )
}

/** A sticky note; x, y: centre. */
export function Sticky({ x, y, w = 70, rot = -4, color = '#fde68a', children }: { x: number; y: number; w?: number; rot?: number; color?: string; children?: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-w / 2 + 3} y={-w / 2 + 4} width={w} height={w} fill="rgba(0,0,0,0.08)" />
      <rect x={-w / 2} y={-w / 2} width={w} height={w} fill={color} />
      <rect x={-w / 2} y={-w / 2} width={w} height="10" fill={shade(color, 0.92)} />
      {children}
    </g>
  )
}

export function Helmet({ x, y, s = 1, color = '#facc15' }: { x: number; y: number; s?: number; color?: string }) {
  // on a Person of height 100·s standing at (x, y)
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -9.5 -92 A 9.5 9.5 0 0 1 9.5 -92 L 10.5 -91 L -10.5 -91 Z" fill={color} />
      <rect x="-12" y="-92.5" width="24" height="2.6" rx="1.2" fill={shade(color, 0.85)} />
    </g>
  )
}

export function Cone({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -6 -40 L 6 -40 L 16 -4 L -16 -4 Z" fill="#f97316" />
      <path d="M -9 -26 L 9 -26 L 11 -18 L -11 -18 Z" fill="#fff" />
      <rect x="-20" y="-5" width="40" height="5" rx="1" fill="#ea580c" />
    </g>
  )
}

/** A meeting table seen from the front; x: left, y: table top. */
export function Table({ x, y, w = 260 }: { x: number; y: number; w?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="12" rx="4" fill="#a8896a" />
      <rect x={x + 8} y={y + 12} width={w - 16} height={FLOOR - y - 12} fill="#8f7357" />
    </g>
  )
}

/** Anger mark (💢), for complaints; x, y: centre. */
export function Anger({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={C.rose} strokeWidth="4" strokeLinecap="round" fill="none">
      <path d="M -12 -4 Q -4 -4 -4 -12 M 4 -12 Q 4 -4 12 -4 M 12 4 Q 4 4 4 12 M -4 12 Q -4 4 -12 4" />
    </g>
  )
}

export function Gear({ x, y, r = 26, color = '#94a3b8' }: { x: number; y: number; r?: number; color?: string }) {
  return (
    <g>
      {Array.from({ length: 8 }, (_, i) => <rect key={i} x={x - 6} y={y - r - 7} width="12" height="14" rx="2" fill={color} transform={`rotate(${i * 45} ${x} ${y})`} />)}
      <circle cx={x} cy={y} r={r} fill={color} /><circle cx={x} cy={y} r={r * 0.38} fill="#e0f2fe" />
    </g>
  )
}
