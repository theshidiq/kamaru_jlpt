/** Word pictures for BJT 1-2 (workplace, documents, meetings). */
import type { ReactNode } from 'react'
import {
  Anger, Arrow, Board, Bow, Box, Bubble, Building, Bulb, C, Calendar, Card, Check, Checklist, Clipboard, Coin, Counter, Cross,
  Desk, Doc, FLOOR, Heart, Laptop, Org, P, Pencil, Plant, Sparkle, Star, Table, Txt, Window,
} from './kit'

const H = 170

function Globe({ x, y, r = 34 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#7dd3fc" />
      <path d={`M ${x - r * 0.5} ${y - r * 0.6} q ${r * 0.4} ${r * 0.2} ${r * 0.2} ${r * 0.6} q ${-r * 0.3} ${r * 0.3} ${r * 0.1} ${r * 0.7} M ${x + r * 0.2} ${y - r * 0.8} q ${r * 0.5} ${r * 0.3} ${r * 0.4} ${r * 0.9}`} fill="none" stroke="#22c55e" strokeWidth={r * 0.35} strokeLinecap="round" />
      <ellipse cx={x} cy={y} rx={r} ry={r * 0.35} fill="none" stroke="#fff" strokeWidth="2" opacity="0.6" />
      <circle cx={x} cy={y} r={r} fill="none" stroke="#0284c7" strokeWidth="3" />
    </g>
  )
}

function Badge({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  // a staff ID card on a lanyard, hanging at a figure's chest
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -8 -26 L 0 -6 L 8 -26" fill="none" stroke={C.indigo} strokeWidth="2.5" />
      <rect x="-9" y="-6" width="18" height="22" rx="2" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
      <circle cx="0" cy="2" r="4" fill="#94a3b8" /><rect x="-6" y="9" width="12" height="3" rx="1" fill="#cbd5e1" />
    </g>
  )
}

function Seal({ x, y, r = 18 }: { x: number; y: number; r?: number }) {
  return <g><circle cx={x} cy={y} r={r} fill="none" stroke="#dc2626" strokeWidth="3" /><circle cx={x} cy={y} r={r * 0.55} fill="#dc2626" opacity="0.8" /></g>
}

export const SCENES: Record<string, () => ReactNode> = {
  商事: () => (
    <Card bg="cool">
      <Building x={40} y={FLOOR} w={150} h={200} color="#a5b4c8" sign={<rect x={60} y={FLOOR - 216} width="110" height="8" rx="3" fill="#fff" />} />
      <Globe x={300} y={110} r={50} />
      <Arrow x1={210} y1={70} x2={250} y2={90} color={C.amber} w={4} />
      <Arrow x1={360} y1={160} x2={400} y2={190} color={C.amber} w={4} />
      <Box x={230} y={FLOOR} w={70} h={50} /><Box x={310} y={FLOOR} w={70} h={50} color="#c99a5c" /><Box x={270} y={FLOOR - 50} w={70} h={46} />
    </Card>
  ),
  追加: () => (
    <Card bg="mint" floor={false}>
      <Doc x={200} y={160} w={190} h={240} lines={0}>
        <Checklist x={-78} y={-82} rows={5} w={150} checked={[0, 1, 2, 3]} hi={4} gap={30} />
      </Doc>
      <circle cx={360} cy={226} r={44} fill={C.green} />
      <path d="M 360 202 L 360 250 M 336 226 L 384 226" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
      <Arrow x1={330} y1={210} x2={296} y2={208} color={C.green} w={5} />
    </Card>
  ),
  クレーム: () => (
    <Card bg="store">
      <Counter x={170} y={210} w={140} />
      <Bow cast="clerk" x={240} y={FLOOR - 30} h={H - 40} deg={30} />
      <P cast="client" x={390} y={FLOOR} h={H} armL={[70, 110]} />
      <Bubble x={380} y={60} w={120} h={60} tail="r" color="#ffe4e6"><Anger x={-24} y={0} s={1.2} /><Txt x={22} y={2} size={34} color={C.rose} weight={900}>!!</Txt></Bubble>
      <Anger x={420} y={130} />
    </Card>
  ),
  予算: () => (
    <Card bg="warm" floor={false}>
      <rect x={70} y={70} width="130" height="180" rx="12" fill="#334155" />
      <rect x={84} y={84} width="102" height="40" rx="4" fill="#bbf7d0" />
      <Txt x={135} y={105} size={16} color="#166534">¥500,000</Txt>
      {Array.from({ length: 12 }, (_, i) => <rect key={i} x={86 + (i % 3) * 34} y={136 + Math.floor(i / 3) * 27} width="28" height="21" rx="4" fill={i === 11 ? C.amber : '#cbd5e1'} />)}
      {[0, 1, 2, 3, 4].map(i => <Coin key={i} x={300} y={260 - i * 16} r={26} />)}
      {[0, 1, 2].map(i => <Coin key={i} x={370} y={260 - i * 16} r={26} />)}
    </Card>
  ),
  上司: () => (
    <Card bg="lilac" floor={false}>
      <Org x={240} y={70} rows={[1, 2, 3]} hi={[0, 0]} gapX={90} gapY={95} />
      <Star x={240} y={30} r={12} />
    </Card>
  ),
  部下: () => (
    <Card bg="lilac" floor={false}>
      <Org x={240} y={60} rows={[1, 2, 3]} hi={[2, 1]} gapX={90} gapY={95} />
      <Arrow x1={240} y1={104} x2={240} y2={124} color={C.amber} w={3} />
    </Card>
  ),
  社員: () => (
    <Card bg="street">
      <Building x={240} y={FLOOR} w={210} h={230} color="#a5b4c8" />
      <P cast="junior" x={140} y={FLOOR} h={H + 10} />
      <Badge x={140} y={FLOOR - 0.6 * (H + 10)} s={1.5} />
    </Card>
  ),
  講師: () => (
    <Card bg="meeting">
      <Board x={150} y={40} w={230} h={130}>
        <rect x={24} y={24} width="120" height="10" rx="4" fill={C.indigo} />
        <rect x={24} y={50} width="170" height="7" rx="3" fill="#cbd5e1" /><rect x={24} y={70} width="140" height="7" rx="3" fill="#cbd5e1" />
      </Board>
      <P cast="boss" x={110} y={FLOOR} h={H + 6} armR={[100, 130]} />
      <Star x={110} y={90} r={14} />
      {[260, 330, 400].map((bx, i) => <P key={bx} cast={i === 1 ? 'staff' : 'junior'} back x={bx} y={FLOOR + 26} h={110} />)}
    </Card>
  ),
  研修: () => (
    <Card bg="meeting">
      <Board x={40} y={30} w={180} h={110}>
        <rect x={20} y={22} width="90" height="10" rx="4" fill={C.green} />
        <Checklist x={20} y={46} rows={2} w={130} checked={[0]} />
      </Board>
      <P cast="boss" x={250} y={FLOOR} h={H - 20} armL={[80, 110]} />
      <Table x={290} y={232} w={180} />
      <P cast="junior" x={330} y={FLOOR - 10} h={150} pose="chair" armR={[30, -60]} />
      <P cast="staff" x={420} y={FLOOR - 10} h={146} pose="chair" armL={[30, -60]} />
      <Doc x={372} y={224} w={36} h={14} lines={0} head="#cbd5e1" />
    </Card>
  ),
  立場: () => (
    <Card bg="lilac">
      <ellipse cx={120} cy={FLOOR} rx="60" ry="14" fill="#cbd5e1" />
      <ellipse cx={240} cy={FLOOR} rx="60" ry="14" fill={C.amber} />
      <ellipse cx={360} cy={FLOOR} rx="60" ry="14" fill="#cbd5e1" />
      <path d={`M 190 20 L 290 20 L 300 ${FLOOR} L 180 ${FLOOR} Z`} fill="#fef9c3" opacity="0.7" />
      <P cast="client" x={120} y={FLOOR} h={H - 10} />
      <P cast="junior" x={240} y={FLOOR} h={H} />
      <P cast="shopper" x={360} y={FLOOR} h={H - 14} />
    </Card>
  ),
  株式会社: () => (
    <Card bg="cool">
      <Building x={30} y={FLOOR} w={170} h={230} color="#94a3b8" sign={<Txt x={115} y={FLOOR - 242} size={13} color="#fff">Co., Ltd.</Txt>} />
      <Doc x={320} y={150} w={170} h={200} lines={4} head={C.amber}><Seal x={52} y={66} /></Doc>
      <Sparkle x={420} y={50} r={10} />
    </Card>
  ),
  担当: () => (
    <Card bg="office">
      <Doc x={130} y={120} w={130} h={150} lines={0} head={C.indigo}>
        <Checklist x={-50} y={-40} rows={4} w={100} hi={1} checked={[0]} />
      </Doc>
      <Arrow x1={196} y1={112} x2={290} y2={150} color={C.amber} />
      <P cast="staff" x={350} y={FLOOR} h={H} armL={[20, 40]} />
      <circle cx={350} cy={86} r="14" fill={C.amber} /><Check x={350} y={86} s={0.55} color="#fff" />
    </Card>
  ),
  待遇: () => (
    <Card bg="mint" floor={false}>
      <Doc x={160} y={160} w={170} h={220} lines={0} head={C.green}>
        <Txt x={0} y={-50} size={30} color={C.ink} weight={800}>¥</Txt>
        <Checklist x={-60} y={-14} rows={4} w={120} checked={[0, 1, 2, 3]} />
      </Doc>
      <Heart x={350} y={100} s={2.4} color={C.green} />
      <Coin x={320} y={230} r={26} /><Coin x={378} y={248} r={22} />
      <Calendar x={400} y={130} w={70} mark={[5, 6, 12, 13, 19, 20]} />
    </Card>
  ),
  担当者: () => (
    <Card bg="office">
      <path d={`M 200 0 L 280 0 L 300 ${FLOOR} L 180 ${FLOOR} Z`} fill="#fef9c3" opacity="0.8" />
      <P cast="junior" x={90} y={FLOOR} h={H - 14} />
      <P cast="staff" x={240} y={FLOOR} h={H} armR={[40, 80]} />
      <P cast="client" x={390} y={FLOOR} h={H - 10} />
      <Clipboard x={300} y={170} w={40} h={52} />
      <path d="M 240 70 m -12 -24 a 12 12 0 1 1 24 0 q 0 12 -12 24 q -12 -12 -12 -24 Z" fill={C.rose} />
    </Card>
  ),
  管理: () => (
    <Card bg="office">
      <rect x={40} y={60} width="200" height={FLOOR - 60} fill="#d9dee3" />
      {[0, 1, 2].map(r => Array.from({ length: 6 }, (_, c) => (
        <rect key={`${r}${c}`} x={50 + c * 31} y={70 + r * 72} width="24" height="62" rx="3" fill={['#3b82f6', '#64748b', '#f59e0b', '#10b981'][(r + c) % 4]} />
      )))}
      {[134, 206].map(sy => <rect key={sy} x={40} y={sy} width="200" height="6" fill="#b3bac1" />)}
      <P cast="boss" x={340} y={FLOOR} h={H} armL={[30, 70]} />
      <Clipboard x={296} y={170} w={46} h={60} rot={-8}><Checklist x={-14} y={-16} rows={3} w={28} checked={[0, 1, 2]} gap={12} /></Clipboard>
      <Check x={410} y={110} s={1.2} />
    </Card>
  ),
  課長: () => (
    <Card bg="lilac" floor={false}>
      <Org x={240} y={60} rows={[1, 2, 4]} hi={[1, 0]} gapX={80} gapY={95} />
    </Card>
  ),
  資料: () => (
    <Card bg="office">
      <Table x={40} y={210} w={400} />
      <Doc x={140} y={160} w={90} h={110} rot={-8} lines={4} />
      <Doc x={240} y={150} w={90} h={110} rot={3} lines={0} head={C.green}>
        <g transform="translate(-30 30)"><rect x="0" y="-8" width="10" height="8" fill="#93c5fd" /><rect x="14" y="-22" width="10" height="22" fill="#60a5fa" /><rect x="28" y="-34" width="10" height="34" fill="#3b82f6" /><rect x="42" y="-26" width="10" height="26" fill={C.rose} /></g>
      </Doc>
      <Doc x={340} y={160} w={90} h={110} rot={10} lines={4} head={C.amber} />
    </Card>
  ),
  文書: () => (
    <Card bg="warm" floor={false}>
      <Doc x={240} y={160} w={200} h={260} lines={8} head={C.ink}>
        <Seal x={66} y={102} r={20} />
      </Doc>
      <Pencil x={360} y={250} rot={30} s={1.2} />
    </Card>
  ),
  作成: () => (
    <Card bg="office">
      <Desk x={60} y={214} w={250} />
      <P cast="staff" x={110} y={FLOOR} h={H - 20} pose="chair" armR={[40, -50]} />
      <Laptop x={220} y={214} s={1.05}><rect x="-30" y="-16" width="40" height="5" rx="2" fill="#cbd5e1" /><rect x="-30" y="-6" width="56" height="5" rx="2" fill="#cbd5e1" /><rect x="-30" y="4" width="24" height="5" rx="2" fill={C.indigo} /></Laptop>
      <Doc x={380} y={140} w={100} h={130} rot={6} lines={4} />
      <Arrow x1={250} y1={150} x2={320} y2={140} color={C.indigo} w={5} />
      <Sparkle x={420} y={60} r={12} /><Sparkle x={340} y={60} r={7} />
    </Card>
  ),
  項目: () => (
    <Card bg="lilac" floor={false}>
      <Doc x={240} y={160} w={260} h={250} lines={0} head={C.indigo}>
        {[0, 1, 2, 3, 4].map(i => (
          <g key={i}>
            <rect x={-110} y={-80 + i * 38} width="220" height="30" rx="5" fill={i === 2 ? C.amberL : '#f1f5f9'} />
            <circle cx={-92} cy={-65 + i * 38} r="8" fill={i === 2 ? C.amber : C.indigoL} />
            <Txt x={-92} y={-65 + i * 38} size={11} color="#fff">{i + 1}</Txt>
            <rect x={-74} y={-68 + i * 38} width={150 - (i % 2) * 40} height="7" rx="3" fill="#cbd5e1" />
          </g>
        ))}
      </Doc>
    </Card>
  ),
  省略: () => (
    <Card bg="mint" floor={false}>
      <Doc x={130} y={160} w={150} h={230} lines={0} head={C.slate}>
        {Array.from({ length: 8 }, (_, i) => <rect key={i} x={-60} y={-80 + i * 22} width={i % 3 === 2 ? 80 : 120} height="7" rx="3" fill={i >= 3 && i <= 5 ? C.roseL : '#cbd5e1'} />)}
        <line x1={-66} y1={-14} x2={66} y2={30} stroke={C.rose} strokeWidth="4" />
        <line x1={-66} y1={30} x2={66} y2={-14} stroke={C.rose} strokeWidth="4" />
      </Doc>
      <Arrow x1={220} y1={160} x2={280} y2={160} color={C.green} />
      <Doc x={370} y={160} w={130} h={150} lines={0} head={C.slate}>
        {Array.from({ length: 5 }, (_, i) => <rect key={i} x={-50} y={-40 + i * 22} width={i === 2 ? 30 : 100} height="7" rx="3" fill={i === 2 ? C.green : '#cbd5e1'} />)}
      </Doc>
    </Card>
  ),
  発言: () => (
    <Card bg="meeting">
      <Table x={30} y={232} w={420} />
      <P cast="client" x={90} y={FLOOR - 10} h={146} pose="chair" />
      <P cast="junior" x={240} y={FLOOR} h={H} armR={[150, 170]} />
      <P cast="staff" x={390} y={FLOOR - 10} h={140} pose="chair" />
      <Bubble x={330} y={56} w={140} h={60} tail="l"><rect x="-50" y="-12" width="100" height="7" rx="3" fill="#cbd5e1" /><rect x="-50" y="4" width="70" height="7" rx="3" fill="#cbd5e1" /></Bubble>
    </Card>
  ),
  提案: () => (
    <Card bg="office">
      <P cast="junior" x={130} y={FLOOR} h={H} armR={[52, 96]} />
      <Doc x={212} y={170} w={56} h={70} rot={-6} lines={3} head={C.amber} />
      <P cast="boss" x={360} y={FLOOR} h={H + 6} armL={[20, 40]} />
      <Bulb x={150} y={70} s={1.1} />
    </Card>
  ),
  会議室: () => (
    <Card bg="meeting">
      <rect x={150} y={30} width="180" height="100" rx="6" fill="#1f2937" />
      <rect x={158} y={38} width="164" height="84" rx="3" fill="#e0f2fe" />
      <rect x={176} y={56} width="60" height="8" rx="3" fill={C.indigo} /><rect x={176} y={74} width="120" height="6" rx="3" fill="#94a3b8" />
      <Window x={30} y={40} w={100} h={100} />
      {[70, 150, 230, 310, 390].map(cx => <rect key={cx} x={cx - 18} y={180} width="36" height="60" rx="10" fill="#3d4450" />)}
      <Table x={40} y={222} w={400} />
      <Plant x={448} y={FLOOR} s={0.9} />
    </Card>
  ),
  依頼: () => (
    <Card bg="warm">
      <Bow cast="staff" x={140} y={FLOOR} h={H - 6} deg={24} armR={[60, 90]} />
      <Doc x={244} y={176} w={50} h={64} rot={6} lines={3} />
      <P cast="junior" x={350} y={FLOOR} h={H} armL={[50, 80]} />
      <Bubble x={150} y={60} w={176} h={56} tail="l"><Txt x={0} y={1} size={20} color={C.amber}>お願いします</Txt></Bubble>
    </Card>
  ),
}
