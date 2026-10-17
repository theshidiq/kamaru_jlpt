/** Word pictures for BJT 3-5 (general words: events, schedules, plans). */
import type { ReactNode } from 'react'
import {
  Arrow, Bow, Box, Bubble, Bulb, C, Calendar, Card, Check, Clipboard, Cross, Desk, Doc, FLOOR, Gear, Heart, Laptop, P,
  Phone, Plant, Sparkle, Star, Txt,
} from './kit'

const H = 170

function Umbrella({ x, y, s = 1, color = C.indigo }: { x: number; y: number; s?: number; color?: string }) {
  return <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M -40 0 Q -40 -36 0 -36 Q 40 -36 40 0 Q 30 -8 20 0 Q 10 -8 0 0 Q -10 -8 -20 0 Q -30 -8 -40 0 Z" fill={color} /><line x1="0" y1="0" x2="0" y2="40" stroke="#334155" strokeWidth="3" /></g>
}
function Rain({ xs, y = 60 }: { xs: number[]; y?: number }) {
  return <>{xs.map((rx, i) => <line key={i} x1={rx} y1={y + (i % 3) * 30} x2={rx - 6} y2={y + 18 + (i % 3) * 30} stroke={C.sky} strokeWidth="3" strokeLinecap="round" />)}</>
}
function Clock({ x, y, r = 30 }: { x: number; y: number; r?: number }) {
  return <g><circle cx={x} cy={y} r={r} fill="#fff" stroke="#475569" strokeWidth={r / 7} /><path d={`M ${x} ${y} L ${x} ${y - r * 0.65} M ${x} ${y} L ${x + r * 0.45} ${y + r * 0.2}`} stroke="#334155" strokeWidth={r / 9} strokeLinecap="round" /></g>
}
function Pin({ x, y, color = C.rose, r = 18 }: { x: number; y: number; color?: string; r?: number }) {
  return <g><path d={`M ${x} ${y} q ${-r} ${-r * 1.2} ${-r} ${-r * 2} a ${r} ${r} 0 1 1 ${r * 2} 0 q 0 ${r * 0.8} ${-r} ${r * 2} Z`} fill={color} /><circle cx={x} cy={y - r * 2} r={r * 0.4} fill="#fff" /></g>
}
function Flame({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M 0 -60 C 30 -30 34 -10 30 6 C 26 24 -26 24 -30 6 C -34 -14 -14 -24 -10 -40 C -4 -30 4 -30 0 -60 Z" fill="#f97316" /><path d="M 0 -30 C 14 -14 16 0 12 10 C 8 18 -10 18 -12 8 C -14 -4 -4 -10 0 -30 Z" fill="#fde047" /></g>
}

export const SCENES: Record<string, () => ReactNode> = {
  他人: () => (
    <Card bg="lilac">
      <P cast="junior" x={130} y={FLOOR} h={H} />
      <g opacity="0.55"><P x={360} y={FLOOR} h={H - 6} hair="short" hairColor="#64748b" top="sweater" topColor="#94a3b8" bottomColor="#64748b" back /></g>
      <Txt x={360} y={90} size={40} color={C.slate} weight={900}>?</Txt>
      <line x1={240} y1={60} x2={240} y2={FLOOR} stroke="#c3cbf0" strokeWidth="4" strokeDasharray="10 8" />
    </Card>
  ),
  体験: () => (
    <Card bg="mint">
      <P x={170} y={FLOOR} h={H - 10} hair="bun" hairColor="#e5e7eb" female top="blouse" topColor="#a78bfa" bottom="skirt" bottomColor="#4b5563" armR={[60, 120]} itemR={<Phone x={4} y={-6} s={1.1} />} />
      <P cast="staff" x={340} y={FLOOR} h={H - 6} armL={[60, 100]} />
      <Sparkle x={220} y={100} r={12} /><Sparkle x={250} y={130} r={7} color={C.indigoL} /><Heart x={200} y={70} s={1} />
    </Card>
  ),
  作業: () => (
    <Card bg="warm">
      <rect x={60} y={210} width="300" height="14" rx="4" fill="#a16207" /><rect x={74} y={224} width="14" height={FLOOR - 224} fill="#a16207" /><rect x={332} y={224} width="14" height={FLOOR - 224} fill="#a16207" />
      <P cast="driver" x={210} y={FLOOR} h={H} topColor="#f97316" armL={[50, 100]} armR={[50, 100]} />
      <Gear x={150} y={190} r={20} /><Box x={250} y={210} w={60} h={40} color="#94a3b8" />
      <g transform="translate(400 150) rotate(30)"><rect x="-5" y="-50" width="10" height="70" rx="3" fill="#64748b" /><path d="M -14 -50 a 14 14 0 1 1 28 0 l -8 0 l 0 -8 l -12 0 l 0 8 Z" fill="#64748b" /></g>
    </Card>
  ),
  公式: () => (
    <Card bg="cool" floor={false}>
      <rect x={60} y={40} width="360" height="240" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      <rect x={60} y={40} width="360" height="40" rx="12" fill={C.indigo} /><rect x={60} y={66} width="360" height="14" fill={C.indigo} />
      <rect x={84} y={100} width="180" height="16" rx="5" fill={C.ink} />
      {[0, 1, 2].map(i => <rect key={i} x={84} y={136 + i * 24} width={220 - i * 40} height="8" rx="3" fill="#cbd5e1" />)}
      <circle cx={350} cy={190} r="44" fill={C.sky} />
      {Array.from({ length: 12 }, (_, i) => { const a = (i / 12) * 2 * Math.PI; return <circle key={i} cx={350 + Math.cos(a) * 44} cy={190 + Math.sin(a) * 44} r="10" fill={C.sky} /> })}
      <Check x={350} y={192} s={1.3} color="#fff" />
    </Card>
  ),
  取り組む: () => (
    <Card bg="mint">
      <Gear x={250} y={150} r={80} color="#94a3b8" />
      <P cast="junior" x={110} y={FLOOR} h={H} armR={[80, 80]} />
      <P cast="staff" x={170} y={FLOOR} h={H - 10} armR={[80, 80]} />
      <P cast="boss" x={400} y={FLOOR} h={H + 4} armL={[80, 80]} />
      <Arrow x1={140} y1={60} x2={200} y2={46} color={C.green} w={4} />
    </Card>
  ),
  対策: () => (
    <Card bg="cool">
      <path d="M 120 40 q 40 -30 90 0 q 50 -20 90 10 q 40 20 0 40 l -170 0 q -40 -20 -10 -50 Z" fill="#94a3b8" />
      <Rain xs={[110, 150, 190, 230, 270, 310, 350, 390, 80, 420]} y={100} />
      <Umbrella x={240} y={180} s={2.4} color={C.indigo} />
      <P cast="staff" x={210} y={FLOOR} h={110} /><P cast="client" x={270} y={FLOOR} h={116} />
    </Card>
  ),
  引き受ける: () => (
    <Card bg="warm">
      <P cast="boss" x={110} y={FLOOR} h={H + 6} armR={[56, 96]} />
      <Box x={180} y={190} w={70} h={56} />
      <P cast="staff" x={330} y={FLOOR} h={H - 6} armL={[50, 80]} />
      <Bubble x={350} y={70} w={80} h={50} tail="r" color="#ecfdf5"><Check x={0} y={2} s={0.9} /></Bubble>
      <Arrow x1={260} y1={170} x2={300} y2={170} color={C.amber} w={4} />
    </Card>
  ),
  得る: () => (
    <Card bg="lilac">
      <P cast="junior" x={240} y={FLOOR} h={H} armL={[150, 140]} armR={[150, 140]} />
      <Star x={240} y={60} r={30} />
      <Sparkle x={190} y={40} r={10} /><Sparkle x={300} y={70} r={8} />
      <path d="M 236 100 L 236 112 M 244 100 L 244 112" stroke={C.amber} strokeWidth="3" strokeLinecap="round" />
    </Card>
  ),
  指定: () => (
    <Card bg="meeting">
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <rect x={40 + i * 86} y={150} width="64" height="80" rx="12" fill={i === 2 ? C.indigo : '#94a3b8'} />
          <rect x={34 + i * 86} y={224} width="76" height="16" rx="5" fill={i === 2 ? '#3730a3' : '#64748b'} />
          <rect x={42 + i * 86} y={240} width="8" height={FLOOR - 240} fill="#64748b" /><rect x={94 + i * 86} y={240} width="8" height={FLOOR - 240} fill="#64748b" />
        </g>
      ))}
      <rect x={210} y={170} width="44" height="26" rx="4" fill="#fff" />
      <Star x={232} y={183} r={9} />
      <Pin x={232} y={136} />
    </Card>
  ),
  新た: () => (
    <Card bg="mint">
      <circle cx={360} cy={FLOOR} r="80" fill="#fde68a" />
      <circle cx={360} cy={FLOOR} r="54" fill="#fbbf24" />
      <path d={`M 180 ${FLOOR} L 180 180`} stroke="#16a34a" strokeWidth="8" />
      <path d="M 180 200 Q 120 190 120 140 Q 170 140 180 200 Z" fill="#22c55e" />
      <path d="M 180 186 Q 240 170 236 120 Q 186 130 180 186 Z" fill="#4ade80" />
      <path d={`M 140 ${FLOOR} L 220 ${FLOOR} L 210 ${FLOOR - 26} L 150 ${FLOOR - 26} Z`} fill="#c2410c" />
      <Sparkle x={250} y={90} r={14} /><Sparkle x={110} y={100} r={10} /><Sparkle x={290} y={150} r={7} color={C.indigoL} />
    </Card>
  ),
  日常的: () => (
    <Card bg="cool" floor={false}>
      {Array.from({ length: 7 }, (_, i) => (
        <g key={i}>
          <rect x={30 + i * 62} y={90} width="54" height="130" rx="8" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
          <rect x={30 + i * 62} y={90} width="54" height="22" rx="8" fill={i > 4 ? C.rose : C.sky} /><rect x={30 + i * 62} y={104} width="54" height="8" fill={i > 4 ? C.rose : C.sky} />
          <Phone x={57 + i * 62} y={166} s={0.8} />
        </g>
      ))}
      <path d="M 60 250 L 420 250" stroke={C.indigo} strokeWidth="5" strokeDasharray="12 8" />
      <path d="M 420 250 l -12 -8 m 12 8 l -12 8" stroke={C.indigo} strokeWidth="5" strokeLinecap="round" />
    </Card>
  ),
  日程: () => (
    <Card bg="lilac" floor={false}>
      <rect x={40} y={40} width="400" height="240" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      {Array.from({ length: 5 }, (_, i) => <g key={i}><rect x={100 + i * 66} y={50} width="56" height="20" rx="4" fill="#e0e7ff" /><line x1={96 + i * 66} y1={80} x2={96 + i * 66} y2={270} stroke="#f1f5f9" strokeWidth="2" /></g>)}
      {Array.from({ length: 5 }, (_, i) => <rect key={i} x={50} y={90 + i * 36} width="36" height="10" rx="3" fill="#cbd5e1" />)}
      <rect x={102} y={90} width="120" height="28" rx="6" fill={C.indigo} />
      <rect x={234} y={130} width="54" height="64" rx="6" fill={C.green} />
      <rect x={300} y={196} width="120" height="28" rx="6" fill={C.amber} />
      <rect x={168} y={232} width="54" height="28" rx="6" fill={C.rose} />
    </Card>
  ),
  早める: () => (
    <Card bg="warm" floor={false}>
      <rect x={40} y={110} width="400" height="90" rx="12" fill="#fff" stroke="#e7cfae" strokeWidth="2" />
      {Array.from({ length: 7 }, (_, i) => <line key={i} x1={40 + (i + 1) * 57} y1={110} x2={40 + (i + 1) * 57} y2={200} stroke="#f1f5f9" strokeWidth="3" />)}
      <rect x={326} y={126} width="96" height="58" rx="8" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />
      <rect x={212} y={126} width="96" height="58" rx="8" fill={C.amber} />
      <Star x={260} y={155} r={14} color="#fff" />
      <Arrow x1={360} y1={240} x2={250} y2={240} color={C.rose} w={7} />
      <Clock x={90} y={60} r={34} />
      <path d="M 120 40 A 36 36 0 0 0 64 34" fill="none" stroke={C.rose} strokeWidth="5" />
    </Card>
  ),
  本日: () => (
    <Card bg="rose">
      <rect x={130} y={40} width="220" height="150" rx="10" fill="#fff" stroke="#fecdd3" strokeWidth="3" />
      <circle cx={240} cy={100} r="34" fill="#fbbf24" />
      {Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return <line key={i} x1={240 + Math.cos(a) * 42} y1={100 + Math.sin(a) * 42} x2={240 + Math.cos(a) * 52} y2={100 + Math.sin(a) * 52} stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" /> })}
      <rect x={180} y={156} width="120" height="12" rx="5" fill={C.rose} />
      <rect x={232} y={190} width="16" height={FLOOR - 190} fill="#94a3b8" />
      <Bow cast="staff" x={110} y={FLOOR} h={H - 30} deg={20} />
      <Bow cast="junior" x={380} y={FLOOR} h={H - 24} deg={-20} />
    </Card>
  ),
  流れ: () => (
    <Card bg="cool" floor={false}>
      <path d="M -10 230 C 80 180 120 280 220 220 C 320 160 360 260 490 200 L 490 320 L -10 320 Z" fill="#7dd3fc" />
      <path d="M 20 250 C 100 210 140 290 230 240 C 320 190 360 270 470 220" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="14 12" />
      {['1', '2', '3'].map((t, i) => (
        <g key={t}><circle cx={90 + i * 150} cy={110} r="34" fill={[C.indigo, C.green, C.amber][i]} /><Txt x={90 + i * 150} y={110} size={30} color="#fff" weight={900}>{t}</Txt>
          {i < 2 && <Arrow x1={130 + i * 150} y1={110} x2={196 + i * 150} y2={110} color={C.slate} w={5} />}</g>
      ))}
    </Card>
  ),
  現地: () => (
    <Card bg="street">
      <rect x={40} y={170} width="400" height={FLOOR - 170} fill="#bbf7d0" />
      <rect x={150} y={150} width="180" height="80" rx="8" fill="#fff" stroke="#86efac" strokeWidth="3" />
      <rect x={170} y={164} width="140" height="14" rx="5" fill={C.green} />
      <Pin x={240} y={120} r={26} />
      <P cast="staff" x={110} y={FLOOR} h={H - 10} />
      <P cast="junior" x={380} y={FLOOR} h={H - 6} />
    </Card>
  ),
  矛盾: () => (
    <Card bg="rose" floor={false}>
      <Doc x={130} y={160} w={160} h={210} lines={0} head={C.indigo}>
        <circle cx={0} cy={-30} r="30" fill="#fbbf24" />
        <rect x={-50} y={30} width="100" height="10" rx="4" fill="#cbd5e1" /><Txt x={0} y={66} size={22} color={C.ink} weight={900}>10/16</Txt>
      </Doc>
      <Doc x={350} y={160} w={160} h={210} lines={0} head={C.rose}>
        <path d="M -30 -30 q 0 -20 24 -20 q 10 -16 30 -4 q 20 4 10 24 Z" fill="#94a3b8" />
        <rect x={-50} y={30} width="100" height="10" rx="4" fill="#cbd5e1" /><Txt x={0} y={66} size={22} color={C.rose} weight={900}>10/15</Txt>
      </Doc>
      <path d="M 250 60 L 222 140 L 248 140 L 226 230 L 270 120 L 244 120 Z" fill={C.amber} />
    </Card>
  ),
  要素: () => (
    <Card bg="lilac" floor={false}>
      <circle cx={90} cy={100} r="36" fill={C.indigo} />
      <path d="M 90 190 L 130 260 L 50 260 Z" fill={C.amber} />
      <rect x={160} y={70} width="66" height="66" rx="6" fill={C.green} />
      <rect x={160} y={200} width="66" height="66" rx="33" fill={C.rose} />
      <Arrow x1={250} y1={165} x2={300} y2={165} color={C.slate} w={5} />
      <g>
        <rect x={330} y={170} width="100" height="90" rx="6" fill={C.green} />
        <path d="M 320 172 L 380 110 L 440 172 Z" fill={C.amber} />
        <circle cx={380} cy={208} r="20" fill={C.indigo} />
        <rect x={392} y={226} width="26" height="34" rx="13" fill={C.rose} />
      </g>
    </Card>
  ),
  避ける: () => (
    <Card bg="street">
      <ellipse cx={250} cy={FLOOR - 6} rx="70" ry="16" fill="#60a5fa" opacity="0.7" />
      <path d={`M 60 ${FLOOR - 20} C 160 ${FLOOR - 20} 180 ${FLOOR - 90} 250 ${FLOOR - 90} C 320 ${FLOOR - 90} 340 ${FLOOR - 20} 440 ${FLOOR - 20}`} fill="none" stroke={C.green} strokeWidth="5" strokeDasharray="12 9" />
      <path d={`M 440 ${FLOOR - 20} l -14 -8 m 14 8 l -14 8`} stroke={C.green} strokeWidth="5" strokeLinecap="round" />
      <P cast="junior" x={250} y={FLOOR - 92} h={110} />
      <Cross x={250} y={FLOOR - 6} s={0.6} w={5} />
    </Card>
  ),
  限る: () => (
    <Card bg="warm" floor={false}>
      <g transform="translate(150 160)">
        <rect x="-50" y="-100" width="100" height="10" rx="3" fill="#a16207" /><rect x="-50" y="90" width="100" height="10" rx="3" fill="#a16207" />
        <path d="M -38 -90 L 38 -90 L 6 0 L 38 90 L -38 90 L -6 0 Z" fill="#e0f2fe" stroke="#94a3b8" strokeWidth="3" />
        <path d="M -22 -50 L 22 -50 L 2 -4 L -2 -4 Z M -30 86 L 30 86 L 0 54 Z" fill="#fbbf24" />
      </g>
      <Txt x={330} y={130} size={64} color={C.rose} weight={900}>30</Txt>
      <Txt x={330} y={186} size={24} color={C.slate}>min</Txt>
      <line x1={260} y1={230} x2={420} y2={230} stroke={C.rose} strokeWidth="8" strokeLinecap="round" />
      <line x1={420} y1={210} x2={420} y2={250} stroke={C.rose} strokeWidth="8" strokeLinecap="round" />
    </Card>
  ),
  高齢: () => (
    <Card bg="warm">
      <P x={200} y={FLOOR} h={H - 14} hair="receding" hairColor="#e5e7eb" top="sweater" topColor="#a3a3a3" bottomColor="#57534e" armR={[20, 6]} />
      <path d={`M 220 ${FLOOR - 84} L 226 ${FLOOR} M 214 ${FLOOR - 84} q 6 -10 12 0`} fill="none" stroke="#7c4a24" strokeWidth="5" strokeLinecap="round" />
      <P x={300} y={FLOOR} h={H - 20} hair="bun" hairColor="#e5e7eb" female top="blouse" topColor="#c4b5fd" bottom="skirt" bottomColor="#57534e" />
      <Heart x={250} y={80} s={1.3} />
      <Plant x={420} y={FLOOR} s={0.8} />
    </Card>
  ),
  いわば: () => (
    <Card bg="mint" floor={false}>
      <circle cx={120} cy={160} r="70" fill="#fff" stroke={C.green} strokeWidth="4" />
      {[[100, 140], [140, 140], [120, 180]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="14" fill={[C.indigo, C.rose, C.amber][i]} />)}
      <path d="M 100 140 L 140 140 L 120 180 Z" fill="none" stroke="#94a3b8" strokeWidth="3" />
      <path d="M 210 150 q 15 -12 30 0 t 30 0 M 210 172 q 15 -12 30 0 t 30 0" fill="none" stroke={C.slate} strokeWidth="5" strokeLinecap="round" />
      <circle cx={360} cy={160} r="70" fill="#fff" stroke={C.green} strokeWidth="4" />
      <Heart x={360} y={166} s={2.6} />
    </Card>
  ),
  そのもの: () => (
    <Card bg="lilac" floor={false}>
      <g opacity="0.3">{[80, 400].map(cx => <rect key={cx} x={cx - 34} y={140} width="68" height="68" rx="10" fill="#94a3b8" />)}</g>
      <circle cx={240} cy={170} r="84" fill="none" stroke={C.indigo} strokeWidth="5" />
      <Heart x={240} y={180} s={3.6} />
      <Arrow x1={240} y1={40} x2={240} y2={80} color={C.indigo} w={6} />
      <Sparkle x={320} y={100} r={12} />
    </Card>
  ),
  とりかかる: () => (
    <Card bg="office">
      <Desk x={60} y={214} w={260} />
      <P cast="staff" x={190} y={FLOOR - 10} h={150} pose="chair" armR={[150, 170]} armL={[30, -60]} />
      <Laptop x={250} y={214} s={0.9} />
      <g transform="translate(390 120)">
        <rect x="-8" y="-60" width="16" height="12" rx="3" fill="#475569" />
        <circle r="46" fill="#fff" stroke={C.green} strokeWidth="7" />
        <path d="M 0 0 L 0 -30" stroke={C.ink} strokeWidth="5" strokeLinecap="round" />
        <path d="M -8 18 L 10 26 L -8 34 Z" fill={C.green} />
      </g>
      <Sparkle x={300} y={80} r={10} />
    </Card>
  ),
  どうしても: () => (
    <Card bg="rose">
      <Flame x={240} y={150} s={2.2} />
      <P cast="junior" x={240} y={FLOOR} h={H} armR={[160, 170]} armL={[30, 60]} />
      <Star x={380} y={70} r={20} />
      <Arrow x1={300} y1={140} x2={360} y2={90} color={C.rose} w={5} />
    </Card>
  ),
}
