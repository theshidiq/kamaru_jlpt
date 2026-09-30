/**
 * Business scenes for the BJT episodes, drawn on the 1920×1080 canvas.
 * Landscape shows all of it; portrait and the word panel slice the middle,
 * so the people stay inside x 377–1543.
 */
import type { ReactNode } from 'react'
import { Clouds, Frame, JP, Person, rnd, type SceneProps } from './people'

const SUIT = '#2f3a4f', SUIT_W = '#3a4254'

/** Three bouncing dots over whoever is talking. */
function Talking({ x, y, frame }: { x: number; y: number; frame: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-54" y="-34" width="108" height="60" rx="30" fill="#fff" stroke="#c7d2fe" strokeWidth="4" />
      <path d="M -10 24 L 0 44 L 10 24 Z" fill="#fff" />
      {[-26, 0, 26].map((dx, i) => (
        <circle key={dx} cx={dx} cy={-4 - Math.max(0, Math.sin(frame / 4 - i * 0.9)) * 8} r="8" fill="#6366f1" />
      ))}
    </g>
  )
}

function CitySkyline({ x, y, w, h, frame }: { x: number; y: number; w: number; h: number; frame: number }) {
  return (
    <g>
      <defs>
        <clipPath id={`win-${x}`}><rect x={x} y={y} width={w} height={h} /></clipPath>
      </defs>
      <g clipPath={`url(#win-${x})`}>
        <rect x={x} y={y} width={w} height={h} fill="#cfe4f3" />
        <Clouds frame={frame} y={y + 20} seed={x} />
        {Array.from({ length: Math.ceil(w / 90) }, (_, i) => {
          const bh = h * (0.35 + rnd(i + x) * 0.45)
          return (
            <g key={i}>
              <rect x={x + i * 90} y={y + h - bh} width="80" height={bh} fill={i % 3 ? '#b8c7d6' : '#a9bacb'} />
              {Array.from({ length: Math.floor(bh / 34) }, (_, r) => (
                <rect key={r} x={x + i * 90 + 14} y={y + h - bh + 14 + r * 34} width="52" height="10" fill="#dfe9f2" opacity="0.7" />
              ))}
            </g>
          )
        })}
      </g>
    </g>
  )
}

// ─── Office: 中村部長 at 鈴木's desk, going over the email ───────────────

export function OfficeScene({ frame, speaker }: SceneProps) {
  return (
    <Frame id="office" sky={['#eef1f4', '#e1e6eb']}>
      {/* window wall */}
      <CitySkyline x={440} y={130} w={1040} h={500} frame={frame} />
      <rect x="430" y="120" width="1060" height="520" fill="none" stroke="#9aa4ae" strokeWidth="16" />
      {[700, 960, 1220].map(mx => <rect key={mx} x={mx - 5} y="128" width="10" height="504" fill="#9aa4ae" />)}
      <rect x="410" y="636" width="1100" height="20" fill="#b5bec7" />

      {/* landscape-only: whiteboard, cabinet */}
      <rect x="60" y="210" width="320" height="320" rx="8" fill="#fbfcfd" stroke="#aab3bc" strokeWidth="8" />
      <text x="90" y="270" fontSize="30" fontWeight="700" fill="#2563eb" fontFamily={JP}>今月の目標</text>
      {[0, 1, 2, 3].map(i => <rect key={i} x={100 + i * 64} y={470 - (60 + i * 36)} width="40" height={60 + i * 36} fill={['#93c5fd', '#60a5fa', '#3b82f6', '#f87171'][i]} />)}
      <line x1="90" y1="472" x2="360" y2="472" stroke="#64748b" strokeWidth="4" />
      <rect x="1580" y="320" width="300" height="560" fill="#d9dee3" />
      {[0, 1, 2].map(r => Array.from({ length: 8 }, (_, c) => (
        <rect key={`${r}${c}`} x={1596 + c * 34} y={340 + r * 180} width="26" height="150" rx="3" fill={['#3b82f6', '#64748b', '#f59e0b', '#10b981'][(r + c) % 4]} />
      )))}
      {[500, 680].map(sy => <rect key={sy} x="1580" y={sy} width="300" height="12" fill="#b3bac1" />)}
      <circle cx="960" cy="70" r="40" fill="#fff" stroke="#9aa4ae" strokeWidth="6" />
      <path d="M 960 70 L 960 44 M 960 70 L 980 80" stroke="#334155" strokeWidth="5" strokeLinecap="round" />

      <rect y="880" width="1920" height="200" fill="#c9ced4" />
      {Array.from({ length: 8 }, (_, i) => <line key={i} x1="0" x2="1920" y1={900 + i * 24} y2={900 + i * 24} stroke="#bec4ca" strokeWidth="3" />)}

      {/* plant */}
      <path d="M 470 800 L 570 800 L 556 900 L 484 900 Z" fill="#e7e2d8" />
      {[[500, 760, 44], [545, 740, 50], [520, 700, 40], [480, 720, 34]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={['#5f9a5a', '#6fae66', '#7fbd73', '#5a8f55'][i]} />)}

      {/* 鈴木, seated behind her desk; chair back first */}
      <rect x="1000" y="640" width="170" height="220" rx="30" fill="#3d4450" />
      <Person x={1085} y={1010} h={560} t={frame} pose="chair" female hair="bob" hairColor="#3a2519"
        top="suit" topColor={SUIT_W} tie="none" bottom="skirt" bottomColor={SUIT_W} armL={[35, -80]} armR={[35, -80]} />
      {/* desk, monitor showing the email, papers, mug */}
      <rect x="660" y="800" width="660" height="26" rx="6" fill="#e6d3b5" />
      <rect x="680" y="826" width="620" height="170" fill="#d2bd9c" />
      <rect x="700" y="846" width="280" height="130" rx="6" fill="#c7b08c" />
      <rect x="840" y="760" width="40" height="44" fill="#6b7280" />
      <rect x="800" y="796" width="120" height="10" rx="4" fill="#6b7280" />
      <rect x="690" y="560" width="340" height="210" rx="12" fill="#1f2937" />
      <rect x="704" y="574" width="312" height="182" rx="4" fill="#f8fafc" />
      <rect x="704" y="574" width="312" height="30" fill="#2563eb" />
      <text x="716" y="596" fontSize="17" fontWeight="700" fill="#fff" fontFamily={JP}>件名：新製品のご案内</text>
      {[622, 648].map(ly => <rect key={ly} x="718" y={ly} width={ly === 622 ? 240 : 200} height="9" rx="4" fill="#cbd5e1" />)}
      <text x="718" y="690" fontSize="19" fill="#1f2937" fontFamily={JP}>高橋様が申し上げたとおり</text>
      <path d="M 790 698 q 6 -6 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0 t 12 0" stroke="#ef4444" strokeWidth="3" fill="none" />
      {[716, 742].map(ly => <rect key={ly} x="718" y={ly} width={ly === 716 ? 260 : 180} height="9" rx="4" fill="#cbd5e1" />)}
      <rect x="1180" y="770" width="46" height="36" rx="8" fill="#f59e0b" />
      <path d="M 1226 780 q 18 8 0 20" stroke="#f59e0b" strokeWidth="6" fill="none" />
      {[0, 1, 2].map(k => <rect key={k} x={1060 - k * 4} y={794 - k * 7} width="92" height="10" fill={k % 2 ? '#fff' : '#f1f5f9'} stroke="#cbd5e1" strokeWidth="1.5" />)}

      {/* 中村部長, pointing at the screen */}
      <Person x={1400} y={1010} h={590} t={frame} hair="short" hairColor="#3f3f46" top="suit" topColor={SUIT}
        bottomColor={SUIT} armL={[64, 88]} armR={[10, 6]} />

      {speaker === 'suzuki' && <Talking x={1150} y={560} frame={frame} />}
      {speaker === 'nakamura' && <Talking x={1470} y={390} frame={frame} />}
    </Frame>
  )
}

// ─── Meeting room: exchanging business cards with the client ─────────────

export function MeetingScene({ frame }: SceneProps) {
  const card = <rect x="-5" y="-4.5" width="10" height="6" rx="0.6" fill="#fff" stroke="#94a3b8" strokeWidth="0.4" />
  return (
    <Frame id="meeting" sky={['#f3f0ea', '#e8e3da']}>
      {/* wall: screen with a chart, glass partition on the right */}
      <rect x="560" y="160" width="520" height="300" rx="10" fill="#1f2937" />
      <rect x="574" y="174" width="492" height="272" rx="4" fill="#f8fafc" />
      <text x="596" y="216" fontSize="28" fontWeight="700" fill="#0f172a" fontFamily={JP}>取引実績</text>
      {[0, 1, 2, 3, 4].map(i => <rect key={i} x={610 + i * 86} y={420 - (50 + i * 32)} width="52" height={50 + i * 32} fill={i === 4 ? '#10b981' : '#93c5fd'} />)}
      <rect x="1180" y="120" width="420" height="700" fill="#dbe7ef" opacity="0.7" />
      {[1320, 1460].map(gx => <rect key={gx} x={gx} y="120" width="8" height="700" fill="#b8c5cf" />)}
      <rect x="1200" y="420" width="380" height="40" fill="#fff" opacity="0.55" />
      <rect x="1230" y="180" width="150" height="54" rx="6" fill="#334155" />
      <text x="1305" y="218" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily={JP}>会議室A</text>
      {/* landscape-only: coat stand and plant */}
      <rect x="200" y="300" width="14" height="560" fill="#6b4a32" />
      {[[160, 330], [250, 350]].map(([cx, cy], i) => <ellipse key={i} cx={cx} cy={cy + 60} rx="40" ry="90" fill={i ? '#334155' : '#7c2d12'} />)}
      <path d="M 1700 790 L 1800 790 L 1786 880 L 1714 880 Z" fill="#e7e2d8" />
      {[[1730, 740, 46], [1775, 715, 52], [1750, 670, 40]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={['#5f9a5a', '#6fae66', '#7fbd73'][i]} />)}

      <rect y="860" width="1920" height="220" fill="#b9a58c" />
      {/* the table and chairs behind the people */}
      {[640, 860, 1080].map(cx => <rect key={cx} x={cx} y="600" width="140" height="190" rx="24" fill="#475569" />)}
      <rect x="520" y="740" width="900" height="30" rx="6" fill="#8a6a4a" />
      <rect x="560" y="770" width="820" height="110" fill="#6b4f36" />
      {[620, 700].map(cx => <rect key={cx} x={cx} y="712" width="40" height="30" rx="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />)}
      <rect x="1180" y="722" width="120" height="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

      <Person x={760} y={1010} h={580} t={frame} hair="short" hairColor="#3f3f46" top="suit" topColor={SUIT}
        bottomColor={SUIT} armR={[62, 84]} armL={[10, 6]} itemR={card} />
      <Person x={1160} y={1010} h={575} t={frame + 20} flip hair="receding" hairColor="#9ca3af" top="suit" topColor="#1e3a5f"
        tie="#1d4ed8" bottomColor="#1e3a5f" armR={[62, 84]} armL={[10, 6]} itemR={card} />
    </Frame>
  )
}

// ─── Showroom: new product, price, discount, ad ──────────────────────────

export function StoreScene({ frame }: SceneProps) {
  const box = (x: number, y: number, w: number, h: number, c: string, k: number) => (
    <g key={k}>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={c} />
      <rect x={x + w * 0.15} y={y + h * 0.3} width={w * 0.7} height={h * 0.34} rx="3" fill="#fff" opacity="0.8" />
    </g>
  )
  const palette = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#0ea5e9']
  const glow = 0.5 + 0.5 * Math.sin(frame / 10)
  return (
    <Frame id="store" sky={['#fff7ed', '#fdecd8']}>
      {/* back shelves of boxed products */}
      {[300, 480, 660].map((sy, r) => (
        <g key={sy}>
          {Array.from({ length: 14 }, (_, i) => box(400 + i * 82, sy - 70 - (i % 3) * 10, 64, 70 + (i % 3) * 10, palette[(i + r) % 6], i))}
          <rect x="380" y={sy} width="1160" height="14" fill="#94a3b8" />
        </g>
      ))}
      {/* 新製品 banner */}
      <rect x="640" y="60" width="640" height="110" rx="14" fill="#dc2626" />
      <text x="960" y="138" textAnchor="middle" fontSize="68" fontWeight="900" fill="#fff" fontFamily={JP}>新製品</text>
      <path d="M 1230 40 l 16 32 l 36 5 l -26 25 l 6 36 l -32 -17 l -32 17 l 6 -36 l -26 -25 l 36 -5 Z" fill="#facc15" opacity={0.7 + 0.3 * glow} />
      {/* 全品2割引 hanging sign */}
      <line x1="470" y1="0" x2="470" y2="200" stroke="#475569" strokeWidth="3" />
      <rect x="400" y="200" width="140" height="190" rx="10" fill="#facc15" />
      {'全品'.split('').map((ch, i) => <text key={i} x="470" y={250 + i * 46} textAnchor="middle" fontSize="40" fontWeight="900" fill="#b91c1c" fontFamily={JP}>{ch}</text>)}
      <text x="470" y="370" textAnchor="middle" fontSize="36" fontWeight="900" fill="#b91c1c" fontFamily={JP}>2割引</text>
      {/* landscape-only: ad poster and a register */}
      <rect x="1600" y="200" width="260" height="380" rx="8" fill="#1e293b" />
      <text x="1730" y="270" textAnchor="middle" fontSize="44" fontWeight="900" fill="#facc15" fontFamily="sans-serif">NEW</text>
      <rect x="1680" y="310" width="100" height="160" rx="30" fill="#e2e8f0" />
      <circle cx="1730" cy="360" r="26" fill="#475569" /><circle cx="1730" cy="430" r="16" fill="#475569" />
      <text x="1730" y="540" textAnchor="middle" fontSize="28" fontWeight="700" fill="#fff" fontFamily={JP}>好評発売中</text>
      <rect x="60" y="640" width="280" height="240" fill="#e2e8f0" />
      <path d="M 120 640 L 280 640 L 260 560 L 140 560 Z" fill="#475569" />

      <rect y="880" width="1920" height="200" fill="#e7e5e4" />
      {Array.from({ length: 12 }, (_, i) => <line key={i} x1={i * 170} y1="880" x2={i * 170 - 80} y2="1080" stroke="#d6d3d1" strokeWidth="3" />)}

      {/* pedestal with the new product and its price */}
      <path d={`M 860 610 L 1060 610 L 1180 980 L 740 980 Z`} fill="#fef3c7" opacity={0.25 + 0.15 * glow} />
      <rect x="860" y="740" width="200" height="200" fill="#f8fafc" />
      <rect x="850" y="728" width="220" height="20" rx="4" fill="#e2e8f0" />
      <rect x="920" y="600" width="80" height="128" rx="26" fill="#334155" />
      <circle cx="960" cy="642" r="18" fill="#94a3b8" /><circle cx="960" cy="694" r="12" fill="#94a3b8" />
      <rect x="880" y="790" width="160" height="80" rx="8" fill="#fff" stroke="#dc2626" strokeWidth="4" />
      <text x="960" y="832" textAnchor="middle" fontSize="34" fontWeight="900" fill="#dc2626" fontFamily={JP}>¥3,000</text>
      <text x="960" y="860" textAnchor="middle" fontSize="18" fontWeight="700" fill="#475569" fontFamily={JP}>（税込）</text>

      {/* staff presenting, customer with a shopping bag */}
      <Person x={680} y={1010} h={560} t={frame} female hair="ponytail" hairColor="#3a2519" top="suit" topColor={SUIT_W}
        tie="none" bottom="skirt" bottomColor={SUIT_W} armR={[78, 104]} armL={[8, 4]} />
      <Person x={1250} y={1010} h={570} t={frame + 30} hair="short" hairColor="#2b2118" top="sweater" topColor="#0f766e"
        bottomColor="#334155" armL={[10, 6]} armR={[14, 8]}
        itemR={<g><rect x="-7" y="0" width="14" height="16" rx="1.5" fill="#dc2626" /><path d="M -3 0 Q 0 -5 3 0" stroke="#7f1d1d" strokeWidth="1" fill="none" /><rect x="-4" y="6" width="8" height="3" fill="#fff" /></g>} />
    </Frame>
  )
}

export const SCENES: Record<string, (p: SceneProps) => ReactNode> = {
  office: OfficeScene, meeting: MeetingScene, store: StoreScene,
}
/** Which scene sits behind each block of words. */
export const BLOCK_SCENE: Record<string, string> = { keigo: 'office', trade: 'meeting', sales: 'store', quiz: 'office' }
/** Canvas x to centre a narrow window on, so it frames the people. */
export const FOCUS: Record<string, number> = { office: 1170, meeting: 960, store: 980 }
