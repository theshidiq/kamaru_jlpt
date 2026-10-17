/** Word pictures for BJT 3-4 (general words: survey, time, extent). */
import type { ReactNode } from 'react'
import {
  Arrow, Box, Bubble, C, Calendar, Card, Chart, Check, Checklist, Clipboard, Doc, FLOOR, Gift, Heart, Magnifier, P,
  PuzzlePiece, Sparkle, Star, Storefront, Txt,
} from './kit'

const H = 170

function Clock({ x, y, r = 34 }: { x: number; y: number; r?: number }) {
  return <g><circle cx={x} cy={y} r={r} fill="#fff" stroke="#475569" strokeWidth={r / 7} /><path d={`M ${x} ${y} L ${x} ${y - r * 0.65} M ${x} ${y} L ${x + r * 0.45} ${y + r * 0.2}`} stroke="#334155" strokeWidth={r / 9} strokeLinecap="round" /></g>
}

function Timeline({ now = 0.5, children }: { now?: number; children?: ReactNode }) {
  return (
    <g>
      <line x1={50} y1={180} x2={430} y2={180} stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => <circle key={i} cx={60 + i * 60} cy={180} r="7" fill="#cbd5e1" />)}
      <circle cx={50 + now * 380} cy={180} r="14" fill={C.rose} />
      {children}
    </g>
  )
}

function House({ x, color = '#fca5a5', roof = C.rose }: { x: number; color?: string; roof?: string }) {
  return <g><rect x={x} y={190} width="90" height={FLOOR - 190} fill={color} /><path d={`M ${x - 10} 194 L ${x + 45} 150 L ${x + 100} 194 Z`} fill={roof} /><rect x={x + 34} y={236} width="22" height={FLOOR - 236} fill="#7c2d12" /><rect x={x + 12} y={204} width="18" height="16" fill="#e0f2fe" /><rect x={x + 60} y={204} width="18" height="16" fill="#e0f2fe" /></g>
}

export const SCENES: Record<string, () => ReactNode> = {
  せっかく: () => (
    <Card bg="warm">
      <P cast="staff" x={180} y={FLOOR} h={H} armL={[30, 50]} armR={[30, 50]} />
      <Gift x={180} y={246} s={1.5} />
      {[[150, 110], [214, 104]].map(([dx, dy], i) => <path key={i} d={`M ${dx} ${dy} q 6 10 0 16 q -6 -6 0 -16 Z`} fill={C.sky} />)}
      <Sparkle x={260} y={140} r={12} /><Heart x={110} y={150} s={1} />
      <path d="M 300 80 q 30 -30 60 0 q 30 -20 50 10 q 20 20 -10 30 l -100 0 q -30 -10 0 -40 Z" fill="#94a3b8" />
      {[320, 350, 380].map(rx => <line key={rx} x1={rx} y1={130} x2={rx - 6} y2={150} stroke={C.sky} strokeWidth="3" strokeLinecap="round" />)}
    </Card>
  ),
  リスト: () => (
    <Card bg="lilac" floor={false}>
      <rect x={140} y={30} width="200" height="270" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      {Array.from({ length: 8 }, (_, i) => <circle key={i} cx={140} cy={56 + i * 32} r="6" fill="none" stroke="#64748b" strokeWidth="3" />)}
      {Array.from({ length: 7 }, (_, i) => <g key={i}><circle cx={174} cy={66 + i * 32} r="5" fill={C.indigo} /><rect x={188} y={62 + i * 32} width={120 - (i % 3) * 25} height="8" rx="3" fill="#cbd5e1" /></g>)}
    </Card>
  ),
  不自然: () => (
    <Card bg="rose" floor={false}>
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i} transform={`translate(${44 + (i % 4) * 104} ${50 + Math.floor(i / 4) * 130})`}>
          <rect width="84" height="110" rx="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
          {[0, 1, 2].map(j => <g key={j}><rect x="10" y={18 + j * 30} width="12" height="12" rx="2" fill="none" stroke={C.slate} strokeWidth="2" /><path d={`M 12 ${24 + j * 30} l 3 4 l 6 -8`} stroke={C.rose} strokeWidth="2.5" fill="none" /><rect x="28" y={21 + j * 30} width="44" height="6" rx="3" fill="#cbd5e1" /></g>)}
        </g>
      ))}
      <Magnifier x={360} y={200} r={40} rot={-30}><Txt x={360} y={202} size={44} color={C.rose} weight={900}>?</Txt></Magnifier>
    </Card>
  ),
  今日: () => (
    <Card bg="warm" floor={false}>
      <rect x={150} y={50} width="180" height="220" rx="14" fill="#fff" stroke="#e7cfae" strokeWidth="3" />
      <rect x={150} y={50} width="180" height="54" rx="14" fill={C.rose} /><rect x={150} y={84} width="180" height="20" fill={C.rose} />
      {[190, 290].map(rx => <rect key={rx} x={rx - 5} y={36} width="10" height="30" rx="5" fill="#475569" />)}
      <Txt x={240} y={180} size={90} color={C.ink} weight={900}>16</Txt>
      <circle cx={400} cy={80} r="30" fill="#fbbf24" />
      {Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return <line key={i} x1={400 + Math.cos(a) * 38} y1={80 + Math.sin(a) * 38} x2={400 + Math.cos(a) * 50} y2={80 + Math.sin(a) * 50} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" /> })}
    </Card>
  ),
  個人: () => (
    <Card bg="mint">
      <g opacity="0.35">{[40, 90, 140].map((bx, i) => <P key={bx} cast={['client', 'shopper', 'junior'][i] as 'staff'} x={bx} y={FLOOR} h={120} />)}</g>
      <line x1={190} y1={40} x2={190} y2={FLOOR} stroke="#a7dcc4" strokeWidth="4" strokeDasharray="10 8" />
      <P cast="staff" x={300} y={FLOOR} h={H} armL={[50, 80]} />
      <rect x={210} y={150} width="60" height="40" rx="5" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
      <circle cx={226} cy={166} r="8" fill={C.indigoL} /><rect x={240} y={160} width="22" height="5" rx="2" fill="#cbd5e1" /><rect x={240} y={170} width="16" height="5" rx="2" fill="#cbd5e1" />
      <Star x={300} y={100} r={14} />
    </Card>
  ),
  努力: () => (
    <Card bg="warm">
      <path d={`M 20 ${FLOOR} L 460 ${FLOOR - 120} L 460 ${FLOOR} Z`} fill="#e5c97a" />
      <circle cx={300} cy={FLOOR - 120} r="58" fill="#94a3b8" />
      <circle cx={280} cy={FLOOR - 140} r="10" fill="#cbd5e1" />
      <P cast="junior" x={210} y={FLOOR - 50} h={H - 20} armR={[80, 70]} armL={[80, 70]} />
      {[[190, 90], [230, 80], [170, 120]].map(([dx, dy], i) => <path key={i} d={`M ${dx} ${dy} q 6 10 0 16 q -6 -6 0 -16 Z`} fill={C.sky} />)}
      <Arrow x1={330} y1={100} x2={400} y2={70} color={C.amber} w={4} />
    </Card>
  ),
  合わせる: () => (
    <Card bg="cool" floor={false}>
      <PuzzlePiece x={170} y={160} s={1.8} color={C.indigo} />
      <PuzzlePiece x={300} y={160} s={1.8} color={C.amber} rot={180} />
      <Arrow x1={90} y1={270} x2={150} y2={270} color={C.slate} w={4} />
      <Arrow x1={390} y1={270} x2={330} y2={270} color={C.slate} w={4} />
      <Sparkle x={236} y={60} r={14} />
    </Card>
  ),
  向上: () => (
    <Card bg="mint">
      {[0, 1, 2, 3, 4].map(i => <rect key={i} x={40 + i * 84} y={FLOOR - (i + 1) * 38} width="84" height={(i + 1) * 38} fill={['#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a'][i]} />)}
      <P cast="staff" x={250} y={FLOOR - 114} h={110} armR={[150, 170]} />
      <Arrow x1={60} y1={170} x2={420} y2={40} color={C.green} w={6} />
      <Star x={440} y={60} r={16} />
    </Card>
  ),
  実施: () => (
    <Card bg="street">
      <P cast="staff" x={170} y={FLOOR} h={H} armR={[50, 70]} />
      <Clipboard x={226} y={176} w={48} h={62} rot={-10}><Checklist x={-14} y={-18} rows={3} w={30} checked={[0]} gap={12} /></Clipboard>
      <P cast="shopper" x={330} y={FLOOR} h={H - 10} armL={[30, 50]} />
      <Bubble x={330} y={70} w={80} h={48} tail="r"><Check x={0} y={2} s={0.9} /></Bubble>
      <Doc x={70} y={110} w={70} h={86} rot={-6} lines={4} head={C.indigo} />
      <Arrow x1={110} y1={150} x2={140} y2={180} color={C.amber} w={4} />
    </Card>
  ),
  持ち出す: () => (
    <Card bg="street">
      <Storefront x={20} y={FLOOR} w={200} h={200} />
      <P cast="clerk" x={290} y={FLOOR} h={H - 6} armL={[30, 40]} armR={[30, 40]} />
      <Box x={256} y={240} w={68} h={50} />
      <rect x={370} y={220} width="90" height="10" rx="3" fill="#a16207" /><rect x={378} y={230} width="6" height={FLOOR - 230} fill="#a16207" /><rect x={446} y={230} width="6" height={FLOOR - 230} fill="#a16207" />
      {[384, 414].map(bx => <rect key={bx} x={bx} y={200} width="24" height="20" rx="3" fill={bx % 2 ? C.amber : C.rose} />)}
      <Arrow x1={210} y1={120} x2={330} y2={120} color={C.green} w={6} />
    </Card>
  ),
  日時: () => (
    <Card bg="lilac" floor={false}>
      <Calendar x={50} y={60} w={200} ring={[16]} mark={[16]} />
      <Clock x={350} y={150} r={80} />
      <Txt x={350} y={260} size={26} color={C.indigo} weight={900}>14:00</Txt>
    </Card>
  ),
  普通: () => (
    <Card bg="street">
      <House x={30} color="#e2e8f0" roof="#94a3b8" />
      <House x={190} color="#e2e8f0" roof="#94a3b8" />
      <House x={350} color="#e2e8f0" roof="#94a3b8" />
      <P cast="junior" x={150} y={FLOOR} h={120} /><P cast="shopper" x={310} y={FLOOR} h={116} />
    </Card>
  ),
  決定: () => (
    <Card bg="mint" floor={false}>
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={40 + i * 140} y={80} width="120" height="150" rx="14" fill="#fff" stroke={i === 1 ? C.green : '#cbd5e1'} strokeWidth={i === 1 ? 6 : 2} opacity={i === 1 ? 1 : 0.6} />
          <circle cx={100 + i * 140} cy={130} r="26" fill={[C.indigoL, C.greenL, C.amberL][i]} />
          <rect x={66 + i * 140} y={176} width="68" height="8" rx="3" fill="#cbd5e1" />
        </g>
      ))}
      <circle cx={240} cy={56} r="30" fill={C.green} /><Check x={240} y={58} color="#fff" />
      <Arrow x1={240} y1={290} x2={240} y2={240} color={C.green} w={6} />
    </Card>
  ),
  現在: () => (
    <Card bg="cool" floor={false}>
      <Timeline now={0.5}>
        <path d="M 240 152 m -14 -16 a 14 14 0 1 1 28 0 q 0 14 -14 28 q -14 -14 -14 -28 Z" fill={C.rose} />
        <Txt x={240} y={100} size={28} color={C.rose} weight={900}>NOW</Txt>
        <g opacity="0.4"><Arrow x1={200} y1={230} x2={70} y2={230} color={C.slate} w={4} /></g>
        <g opacity="0.4"><Arrow x1={280} y1={230} x2={410} y2={230} color={C.slate} w={4} /></g>
      </Timeline>
    </Card>
  ),
  的確: () => (
    <Card bg="lilac" floor={false}>
      <rect x={60} y={40} width="360" height="240" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      {Array.from({ length: 7 }, (_, i) => <line key={i} x1={60 + i * 60} y1={40} x2={60 + i * 60} y2={280} stroke="#f1f5f9" strokeWidth="2" />)}
      <circle cx={300} cy={130} r="10" fill={C.rose} />
      <circle cx={300} cy={130} r="40" fill="none" stroke={C.indigo} strokeWidth="4" />
      <path d="M 300 76 L 300 104 M 300 156 L 300 184 M 246 130 L 274 130 M 326 130 L 354 130" stroke={C.indigo} strokeWidth="4" />
      <Check x={400} y={240} s={1.2} />
    </Card>
  ),
  調査: () => (
    <Card bg="mint">
      <P cast="staff" x={140} y={FLOOR} h={H} armR={[60, 100]} armL={[40, 60]} />
      <Magnifier x={250} y={140} r={44} rot={-40}><Chart x={220} y={164} w={60} h={50} bars={[0.4, 0.8, 0.6]} axis={false} /></Magnifier>
      <Clipboard x={380} y={170} w={110} h={150}><Checklist x={-40} y={-44} rows={4} w={80} checked={[0, 1]} gap={26} /></Clipboard>
    </Card>
  ),
  過去: () => (
    <Card bg="warm" floor={false}>
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${70 + i * 110} ${80 + (i % 2) * 20}) rotate(${(i - 1) * 6})`}>
          <rect width="100" height="90" rx="4" fill="#fef3c7" stroke="#d6a76a" strokeWidth="4" opacity={0.5 + i * 0.2} />
          <rect x="10" y="10" width="80" height="54" fill="#e7cfae" opacity={0.6 + i * 0.15} />
          <circle cx="50" cy="34" r="12" fill="#c99a5c" opacity={0.6 + i * 0.15} />
        </g>
      ))}
      <Arrow x1={400} y1={250} x2={80} y2={250} color={C.amber} w={6} />
      <Clock x={420} y={100} r={34} />
      <path d="M 392 72 A 40 40 0 0 0 382 112" fill="none" stroke={C.amber} strokeWidth="5" />
    </Card>
  ),
  達成: () => (
    <Card bg="cool">
      <path d={`M 20 ${FLOOR} L 240 70 L 460 ${FLOOR} Z`} fill="#94a3b8" />
      <path d="M 200 120 L 240 70 L 280 120 L 260 110 L 240 124 L 220 110 Z" fill="#fff" />
      <P cast="junior" x={240} y={76} h={70} armL={[160, 170]} armR={[160, 170]} />
      <rect x={270} y={10} width="4" height="62" fill="#475569" /><path d="M 274 10 L 314 22 L 274 34 Z" fill={C.rose} />
      <Sparkle x={160} y={60} r={14} /><Sparkle x={340} y={80} r={10} /><Star x={380} y={40} r={14} />
    </Card>
  ),
  ある程度: () => (
    <Card bg="cool" floor={false}>
      <path d="M 150 60 L 170 280 L 310 280 L 330 60 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="5" strokeLinejoin="round" />
      <path d="M 159 160 L 170 280 L 310 280 L 321 160 Z" fill="#60a5fa" opacity="0.85" />
      <path d="M 159 160 Q 240 150 321 160" fill="none" stroke="#93c5fd" strokeWidth="4" />
      {[0, 1, 2, 3].map(i => <line key={i} x1={340} y1={80 + i * 50} x2={360} y2={80 + i * 50} stroke={C.slate} strokeWidth="3" />)}
      <Txt x={410} y={160} size={26} color={C.indigo} weight={900}>~60%</Txt>
    </Card>
  ),
  おおむね: () => (
    <Card bg="mint" floor={false}>
      <circle cx={160} cy={160} r="100" fill="#e2e8f0" />
      <path d={`M 160 160 L 160 60 A 100 100 0 1 1 ${160 - 95.1} ${160 - 30.9} Z`} fill={C.green} />
      <Txt x={170} y={180} size={36} color="#fff" weight={900}>80%</Txt>
      <Clipboard x={370} y={170} w={130} h={170}><Checklist x={-46} y={-56} rows={5} w={92} checked={[0, 1, 2, 3]} gap={26} /></Clipboard>
    </Card>
  ),
  ことに: () => (
    <Card bg="warm" floor={false}>
      {[0, 1, 3, 4].map(i => <rect key={i} x={30 + i * 90} y={170} width="70" height="70" rx="10" fill="#e2e8f0" />)}
      <path d="M 240 0 L 290 0 L 320 260 L 160 260 Z" fill="#fef9c3" opacity="0.9" />
      <rect x={196} y={140} width="90" height="100" rx="12" fill={C.amber} />
      <Star x={241} y={190} r={26} color="#fff" />
      <Sparkle x={320} y={110} r={14} /><Sparkle x={170} y={110} r={10} />
    </Card>
  ),
  なにやら: () => (
    <Card bg="lilac">
      <Box x={250} y={FLOOR} w={150} h={110} color="#a78bfa" />
      {[[270, 150, 18], [330, 120, 26], [380, 160, 16], [300, 90, 14]].map(([cx, cy, sz], i) => <Txt key={i} x={cx} y={cy} size={sz} color={C.indigo} weight={900}>?</Txt>)}
      <path d="M 280 170 q 10 -20 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="#c4b5fd" strokeWidth="4" />
      <P cast="junior" x={130} y={FLOOR} h={H} armR={[150, 175]} />
      <Txt x={160} y={90} size={26} color={C.slate} weight={900}>?</Txt>
    </Card>
  ),
  グラフ: () => (
    <Card bg="cool" floor={false}>
      <rect x={50} y={30} width="380" height="260" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <line x1={80} y1={260} x2={410} y2={260} stroke={C.slate} strokeWidth="3" /><line x1={80} y1={60} x2={80} y2={260} stroke={C.slate} strokeWidth="3" />
      <Chart x={100} y={258} w={300} h={150} bars={[0.35, 0.55, 0.45, 0.7, 0.85]} axis={false} />
      <path d="M 130 190 L 190 150 L 250 168 L 310 110 L 370 76" fill="none" stroke={C.rose} strokeWidth="5" strokeLinejoin="round" />
      {[[130, 190], [190, 150], [250, 168], [310, 110], [370, 76]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="6" fill="#fff" stroke={C.rose} strokeWidth="3" />)}
    </Card>
  ),
  予測: () => (
    <Card bg="lilac" floor={false}>
      <rect x={50} y={40} width="380" height="230" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 80 220 L 140 190 L 200 200 L 250 150" fill="none" stroke={C.indigo} strokeWidth="6" strokeLinejoin="round" />
      <path d="M 250 150 L 310 120 L 400 80" fill="none" stroke={C.indigo} strokeWidth="6" strokeDasharray="10 9" />
      <path d="M 250 150 L 400 60 L 400 110 Z" fill={C.indigoL} opacity="0.35" />
      <line x1={250} y1={50} x2={250} y2={250} stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" />
      <circle cx={400} cy={80} r="10" fill={C.amber} />
      <Txt x={330} y={240} size={18} color={C.slate}>?</Txt>
    </Card>
  ),
  互いに: () => (
    <Card bg="mint">
      <P cast="staff" x={110} y={FLOOR} h={H - 6} armR={[56, 90]} />
      <P cast="junior" x={370} y={FLOOR} h={H} armL={[56, 90]} />
      <path d="M 170 120 C 220 70 260 70 310 120" fill="none" stroke={C.indigo} strokeWidth="5" />
      <path d="M 310 120 l -14 -2 m 14 2 l -4 -14" stroke={C.indigo} strokeWidth="5" strokeLinecap="round" />
      <path d="M 310 220 C 260 270 220 270 170 220" fill="none" stroke={C.green} strokeWidth="5" />
      <path d="M 170 220 l 14 2 m -14 -2 l 4 14" stroke={C.green} strokeWidth="5" strokeLinecap="round" />
      <Heart x={240} y={170} s={1.4} />
    </Card>
  ),
}
