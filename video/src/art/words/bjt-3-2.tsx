/** Word pictures for BJT 3-2 (company, sales, personnel). */
import type { ReactNode } from 'react'
import {
  Arrow, Bow, Box, Bubble, Building, C, Card, Chart, Check, Checklist, Clipboard, Coin, Desk, Doc, FLOOR, Gear, Heart,
  Laptop, Monitor, P, Phone, Sparkle, Star, Storefront, Table, Truck, Txt,
} from './kit'

const H = 170

function Magnet({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -30 -30 L -30 10 A 30 30 0 0 0 30 10 L 30 -30 L 14 -30 L 14 10 A 14 14 0 0 1 -14 10 L -14 -30 Z" fill={C.rose} />
      <rect x="-30" y="-40" width="16" height="12" fill="#e2e8f0" /><rect x="14" y="-40" width="16" height="12" fill="#e2e8f0" />
    </g>
  )
}

function Ledger({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="210" height="170" rx="6" fill="#14532d" />
      <rect x={x + 8} y={y + 6} width="194" height="158" rx="3" fill="#fff" />
      <line x1={x + 105} y1={y + 6} x2={x + 105} y2={y + 164} stroke="#cbd5e1" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <line x1={x + 14} y1={y + 34 + i * 26} x2={x + 196} y2={y + 34 + i * 26} stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x={x + 18} y={y + 18 + i * 26} width="40" height="6" rx="2" fill="#cbd5e1" /><rect x={x + 66} y={y + 18 + i * 26} width="30" height="6" rx="2" fill={C.green} opacity="0.7" />
          <rect x={x + 116} y={y + 18 + i * 26} width="40" height="6" rx="2" fill="#cbd5e1" /><rect x={x + 164} y={y + 18 + i * 26} width="30" height="6" rx="2" fill={C.rose} opacity="0.7" />
        </g>
      ))}
    </g>
  )
}

function Calculator({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-30" y="-44" width="60" height="88" rx="8" fill="#334155" />
      <rect x="-22" y="-36" width="44" height="18" rx="3" fill="#bbf7d0" />
      {Array.from({ length: 9 }, (_, i) => <rect key={i} x={-22 + (i % 3) * 16} y={-12 + Math.floor(i / 3) * 16} width="12" height="12" rx="3" fill={i === 8 ? C.amber : '#94a3b8'} />)}
    </g>
  )
}

export const SCENES: Record<string, () => ReactNode> = {
  前年割れ: () => (
    <Card bg="rose">
      <Chart x={90} y={FLOOR} w={300} h={220} bars={[0.85, 0.6]} colors={['#94a3b8', C.rose]} />
      <Txt x={165} y={FLOOR + 14} size={16} color={C.slate}>2025</Txt><Txt x={315} y={FLOOR + 14} size={16} color={C.rose} weight={900}>2026</Txt>
      <line x1={90} y1={FLOOR - 187} x2={400} y2={FLOOR - 187} stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />
      <Arrow x1={420} y1={FLOOR - 180} x2={420} y2={FLOOR - 130} color={C.rose} w={7} />
    </Card>
  ),
  取り引き: () => (
    <Card bg="cool">
      <Building x={20} y={FLOOR} w={120} h={170} color="#a5b4c8" sign={<Txt x={80} y={FLOOR - 182} size={13} color="#fff">A</Txt>} />
      <Building x={340} y={FLOOR} w={120} h={170} color="#c4b5a0" signColor={C.green} sign={<Txt x={400} y={FLOOR - 182} size={13} color="#fff">B</Txt>} />
      <Doc x={240} y={110} w={80} h={100} lines={3} head={C.ink}><circle cx={18} cy={30} r="9" fill="none" stroke="#dc2626" strokeWidth="2.5" /></Doc>
      <Box x={206} y={FLOOR} w={66} h={50} />
      <Arrow x1={150} y1={200} x2={190} y2={200} color={C.indigo} w={4} />
      <Arrow x1={330} y1={240} x2={290} y2={240} color={C.amber} w={4} />
      <Coin x={310} y={200} r={14} />
    </Card>
  ),
  大型: () => (
    <Card bg="street">
      <Truck x={150} y={FLOOR} s={1.7} color={C.indigo} />
      <Truck x={30} y={FLOOR} s={0.6} color="#94a3b8" />
      <path d="M 150 60 L 440 60" stroke={C.amber} strokeWidth="4" />
      <path d="M 150 50 L 150 70 M 440 50 L 440 70" stroke={C.amber} strokeWidth="4" />
      <Txt x={295} y={40} size={20} color={C.amber} weight={900}>XL</Txt>
    </Card>
  ),
  株主: () => (
    <Card bg="mint">
      <P cast="client" x={130} y={FLOOR} h={H} armR={[56, 96]} />
      <Doc x={214} y={174} w={80} h={56} rot={-6} lines={0} head={C.amber}>
        <circle cx={0} cy={6} r="14" fill={C.indigoL} /><path d="M 0 6 L 0 -8 A 14 14 0 0 1 13 10 Z" fill={C.indigo} />
      </Doc>
      <rect x={290} y={50} width="160" height="130" rx="10" fill="#fff" stroke="#a7dcc4" strokeWidth="2" />
      <path d="M 306 160 L 340 140 L 370 150 L 400 100 L 432 70" fill="none" stroke={C.green} strokeWidth="5" />
      <Building x={330} y={FLOOR} w={100} h={80} color="#94a3b8" />
    </Card>
  ),
  特長: () => (
    <Card bg="lilac">
      <rect x={180} y={110} width="120" height="150" rx="16" fill={C.indigo} />
      <rect x={196} y={126} width="88" height="70" rx="8" fill="#e0e7ff" />
      <circle cx={240} cy={226} r="14" fill={C.indigoL} />
      {[[110, 90, 'star'], [380, 90, 'check'], [100, 230, 'bolt'], [390, 230, 'heart']].map(([bx, by, k], i) => (
        <g key={i}>
          <line x1={240} y1={180} x2={bx as number} y2={by as number} stroke="#c7d2fe" strokeWidth="3" strokeDasharray="5 5" />
          <circle cx={bx as number} cy={by as number} r="30" fill="#fff" stroke={C.indigoL} strokeWidth="3" />
          {k === 'star' && <Star x={bx as number} y={by as number} r={16} />}
          {k === 'check' && <Check x={bx as number} y={(by as number) + 2} s={0.9} />}
          {k === 'bolt' && <path d={`M ${(bx as number) + 4} ${(by as number) - 18} L ${(bx as number) - 10} ${(by as number) + 2} L ${(bx as number) + 2} ${(by as number) + 2} L ${(bx as number) - 4} ${(by as number) + 18} L ${(bx as number) + 10} ${(by as number) - 4} L ${(bx as number) - 2} ${(by as number) - 4} Z`} fill={C.amber} />}
          {k === 'heart' && <Heart x={bx as number} y={(by as number) + 2} s={1} />}
        </g>
      ))}
    </Card>
  ),
  納入: () => (
    <Card bg="cool">
      <rect x={250} y={70} width="210" height={FLOOR - 70} fill="#cbd5e1" />
      <rect x={290} y={150} width="140" height={FLOOR - 150} fill="#475569" />
      {[0, 1].map(i => <Box key={i} x={300 + i * 60} y={FLOOR} w={50} h={40} />)}
      <Box x={70} y={FLOOR} w={60} h={46} /><Box x={140} y={FLOOR} w={60} h={46} color="#c99a5c" /><Box x={104} y={FLOOR - 46} w={60} h={44} />
      <Arrow x1={200} y1={160} x2={280} y2={180} color={C.green} w={6} />
      <Clipboard x={420} y={110} w={50} h={64}><Checklist x={-14} y={-18} rows={3} w={30} checked={[0, 1, 2]} gap={12} /></Clipboard>
    </Card>
  ),
  販売数: () => (
    <Card bg="warm" floor={false}>
      <rect x={60} y={50} width="360" height="110" rx="14" fill="#1e293b" />
      <Txt x={240} y={106} size={64} color="#4ade80" weight={900}>1,250</Txt>
      {Array.from({ length: 8 }, (_, i) => <Box key={i} x={60 + (i % 4) * 92} y={290 - Math.floor(i / 4) * 54} w={80} h={50} color={i % 2 ? '#c99a5c' : '#d6a76a'} />)}
      <Arrow x1={440} y1={240} x2={440} y2={180} color={C.green} w={6} />
    </Card>
  ),
  集客: () => (
    <Card bg="store">
      <Storefront x={250} y={FLOOR} w={210} h={190} />
      <Magnet x={300} y={70} s={0.9} />
      <P cast="shopper" x={70} y={FLOOR} h={H - 30} />
      <P cast="client" x={140} y={FLOOR} h={H - 20} />
      <P cast="junior" x={205} y={FLOOR} h={H - 26} />
      {[0, 1, 2].map(i => <path key={i} d={`M ${230 - i * 18} ${120 + i * 10} q 20 -10 40 0`} fill="none" stroke={C.rose} strokeWidth="3" opacity={1 - i * 0.25} />)}
    </Card>
  ),
  配置: () => (
    <Card bg="office" floor={false}>
      <rect x={50} y={40} width="380" height="240" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      {[0, 1, 2].map(r => [0, 1, 2, 3].map(c => {
        const x = 90 + c * 90, y = 80 + r * 74, on = (r * 4 + c) % 3 !== 1
        return (
          <g key={`${r}${c}`}>
            <rect x={x - 30} y={y} width="60" height="34" rx="4" fill="#e6d3b5" />
            {on && <><circle cx={x} cy={y - 8} r="10" fill={[C.indigo, C.green, C.amber, C.rose][(r + c) % 4]} /><path d={`M ${x - 12} ${y + 6} Q ${x} ${y - 6} ${x + 12} ${y + 6} Z`} fill={[C.indigo, C.green, C.amber, C.rose][(r + c) % 4]} /></>}
          </g>
        )
      }))}
      <Arrow x1={440} y1={250} x2={392} y2={226} color={C.amber} w={4} />
    </Card>
  ),
  外出: () => (
    <Card bg="street">
      <Building x={20} y={FLOOR} w={190} h={230} color="#a5b4c8" />
      <rect x={90} y={FLOOR - 70} width="50" height="70" fill="#334155" />
      <P cast="junior" x={280} y={FLOOR} h={H} armR={[20, 10]} />
      <g transform={`translate(306 ${FLOOR})`}><path d="M -8 -26 L -8 -32 L 8 -32 L 8 -26" fill="none" stroke="#5b3a1e" strokeWidth="3.5" /><rect x="-22" y="-26" width="44" height="28" rx="4" fill="#7c4a24" /></g>
      <Arrow x1={320} y1={130} x2={440} y2={130} color={C.indigo} w={6} />
      <rect x={350} y={170} width="80" height="40" rx="8" fill={C.amber} /><Txt x={390} y={190} size={20} color="#fff" weight={900}>OUT</Txt>
    </Card>
  ),
  当社: () => (
    <Card bg="cool">
      <Building x={140} y={FLOOR} w={200} h={230} color="#c7d2e0" />
      <rect x={236} y={20} width="4" height="40" fill="#475569" /><path d="M 240 20 L 280 30 L 240 42 Z" fill={C.indigo} />
      {[[80, 'staff'], [400, 'junior']].map(([x, cast]) => <P key={x as number} cast={cast as 'staff'} x={x as number} y={FLOOR} h={H - 10} />)}
      <P cast="boss" x={240} y={FLOOR} h={H} armL={[90, 150]} armR={[90, 150]} />
    </Card>
  ),
  採用: () => (
    <Card bg="mint">
      <Doc x={140} y={150} w={150} h={190} lines={0} head={C.green}>
        <circle cx={-36} cy={-44} r="22" fill={C.indigoL} /><circle cx={-36} cy={-50} r="9" fill={C.indigo} /><path d="M -52 -30 Q -36 -44 -20 -30 Z" fill={C.indigo} />
        {[0, 1, 2, 3].map(i => <rect key={i} x={-56} y={-6 + i * 20} width={i % 2 ? 80 : 112} height="7" rx="3" fill="#cbd5e1" />)}
      </Doc>
      <g transform="translate(200 220) rotate(-14)"><circle r="40" fill="none" stroke={C.green} strokeWidth="6" /><Check x={0} y={2} s={1.4} /></g>
      <P cast="junior" x={370} y={FLOOR} h={H} armL={[40, 70]} />
      <Sparkle x={420} y={80} r={12} />
    </Card>
  ),
  社外: () => (
    <Card bg="street">
      <rect x={30} y={60} width="240" height={FLOOR - 60} fill="#e2e8f0" stroke="#94a3b8" strokeWidth="6" />
      <P cast="staff" x={100} y={FLOOR} h={110} /><P cast="junior" x={190} y={FLOOR} h={114} />
      <rect x={40} y={70} width="220" height={FLOOR - 80} rx="8" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="12 8" />
      <ellipse cx={380} cy={FLOOR} rx="56" ry="12" fill={C.amber} />
      <P cast="client" x={380} y={FLOOR} h={H} />
      <Arrow x1={290} y1={120} x2={340} y2={120} color={C.amber} w={4} />
    </Card>
  ),
  適材適所: () => (
    <Card bg="lilac" floor={false}>
      {[['gear', C.indigo], ['chart', C.green], ['phone', C.amber]].map(([k, c], i) => (
        <g key={i}>
          <rect x={50 + i * 140} y={40} width="100" height="90" rx="12" fill="#fff" stroke={c} strokeWidth="4" />
          {k === 'gear' && <Gear x={100} y={85} r={22} color={c} />}
          {k === 'chart' && <Chart x={214} y={112} w={72} h={56} bars={[0.4, 0.7, 1]} colors={[c, c, c]} axis={false} />}
          {k === 'phone' && <Phone x={380} y={85} s={1.2} />}
          <Arrow x1={100 + i * 140} y1={226} x2={100 + i * 140} y2={146} color={c} w={5} />
          <circle cx={100 + i * 140} cy={246} r="20" fill={c} /><path d={`M ${80 + i * 140} ${290} Q ${100 + i * 140} ${262} ${120 + i * 140} ${290} Z`} fill={c} />
        </g>
      ))}
    </Card>
  ),
  事務: () => (
    <Card bg="office">
      <Desk x={40} y={214} w={400} />
      <Monitor x={90} y={104} w={130} h={84}><rect x="10" y="10" width="100" height="8" rx="3" fill={C.indigoL} /><rect x="10" y="26" width="80" height="6" rx="3" fill="#cbd5e1" /></Monitor>
      {[0, 1, 2, 3, 4].map(i => <rect key={i} x={250 + (i % 2) * 3} y={206 - i * 8} width="80" height="8" fill={i % 2 ? '#fff' : '#f1f5f9'} stroke="#cbd5e1" strokeWidth="1.5" />)}
      <rect x={350} y={196} width="50" height="18" rx="4" fill="#475569" /><rect x={348} y={188} width="54" height="10" rx="4" fill="#64748b" />
      <rect x={410} y={184} width="14" height="30" rx="3" fill="#dc2626" /><circle cx={417} cy={182} r="8" fill="#7f1d1d" />
    </Card>
  ),
  先輩: () => (
    <Card bg="warm">
      <P cast="boss" x={180} y={FLOOR} h={H + 10} armR={[70, 100]} />
      <P cast="junior" x={320} y={FLOOR} h={H - 24} topColor="#1e293b" bottomColor="#1e293b" />
      <Star x={180} y={86} r={14} />
      <Bubble x={250} y={60} w={110} h={50} tail="l"><Check x={0} y={2} s={0.9} /></Bubble>
      <Arrow x1={240} y1={150} x2={290} y2={170} color={C.amber} w={4} />
    </Card>
  ),
  創立: () => (
    <Card bg="warm">
      <Building x={140} y={FLOOR} w={200} h={220} color="#a5b4c8" />
      <rect x={110} y={FLOOR - 50} width="260" height="50" rx="4" fill="#a16207" />
      <Txt x={240} y={FLOOR - 25} size={26} color="#fef3c7" weight={900}>EST. 1996</Txt>
      <Sparkle x={100} y={60} r={14} /><Sparkle x={390} y={80} r={10} /><Star x={240} y={36} r={16} />
    </Card>
  ),
  同僚: () => (
    <Card bg="mint">
      <P cast="junior" x={190} y={FLOOR} h={H} armR={[150, 160]} />
      <P cast="staff" x={290} y={FLOOR} h={H - 6} armL={[150, 160]} />
      <Sparkle x={240} y={60} r={14} /><Sparkle x={210} y={80} r={7} color={C.indigoL} /><Sparkle x={272} y={82} r={8} color={C.roseL} />
      <rect x={100} y={FLOOR - 4} width="280" height="4" fill="#86efac" />
    </Card>
  ),
  慣習: () => (
    <Card bg="warm">
      <circle cx={400} cy={70} r="30" fill="#fbbf24" />
      {[90, 180, 270].map((bx, i) => <Bow key={bx} cast={['boss', 'staff', 'junior'][i] as 'staff'} x={bx} y={FLOOR} h={H - 20} deg={24} />)}
      <path d="M 320 200 A 50 50 0 1 1 420 210" fill="none" stroke={C.indigo} strokeWidth="5" />
      <path d="M 420 210 l -4 -16 l 16 6 Z" fill={C.indigo} />
      <path d="M 340 220 A 30 30 0 1 0 400 214" fill="none" stroke={C.indigoL} strokeWidth="4" />
    </Card>
  ),
  業務: () => (
    <Card bg="cool" floor={false}>
      {['#e2e8f0', C.amberL, C.greenL].map((bg, i) => (
        <g key={i}>
          <rect x={30 + i * 145} y={40} width="130" height="240" rx="10" fill={bg} />
          <rect x={44 + i * 145} y={54} width="60" height="10" rx="4" fill={['#94a3b8', C.amber, C.green][i]} />
          {Array.from({ length: [3, 2, 2][i] }, (_, j) => (
            <g key={j}><rect x={42 + i * 145} y={80 + j * 60} width="106" height="48" rx="6" fill="#fff" />
              <rect x={52 + i * 145} y={92 + j * 60} width="70" height="6" rx="3" fill="#cbd5e1" /><rect x={52 + i * 145} y={106 + j * 60} width="50" height="6" rx="3" fill="#e2e8f0" />
              {i === 2 && <Check x={134 + i * 145} y={104 + j * 60} s={0.5} />}</g>
          ))}
        </g>
      ))}
    </Card>
  ),
  経理: () => (
    <Card bg="mint" floor={false}>
      <Ledger x={50} y={70} />
      <Calculator x={340} y={150} s={1.4} />
      <Coin x={420} y={250} r={20} /><Coin x={380} y={266} r={16} />
    </Card>
  ),
  経理部: () => (
    <Card bg="office">
      <rect x={60} y={24} width="200" height="44" rx="6" fill={C.green} />
      <circle cx={88} cy={46} r="14" fill="#fbbf24" /><Txt x={88} y={47} size={14} color="#92400e" weight={900}>¥</Txt>
      <rect x={110} y={40} width="130" height="12" rx="4" fill="#fff" />
      <Table x={40} y={222} w={400} />
      <P cast="staff" x={120} y={FLOOR - 10} h={146} pose="chair" armR={[30, -50]} />
      <P cast="junior" x={330} y={FLOOR - 10} h={150} pose="chair" armL={[30, -50]} />
      <Calculator x={200} y={204} s={0.5} />
      <Laptop x={270} y={222} s={0.7} />
    </Card>
  ),
  面接: () => (
    <Card bg="meeting">
      <P cast="boss" x={80} y={FLOOR - 10} h={150} pose="chair" />
      <P cast="staff" x={170} y={FLOOR - 10} h={146} pose="chair" />
      <Table x={30} y={224} w={210} />
      <Doc x={130} y={214} w={44} h={18} lines={0} />
      <rect x={350} y={150} width="64" height="78" rx="12" fill="#475569" />
      <P cast="junior" x={382} y={FLOOR - 10} h={150} pose="chair" topColor="#1e293b" bottomColor="#1e293b" />
      <rect x={346} y={222} width="72" height="14" rx="5" fill="#64748b" />
      <rect x={354} y={236} width="6" height={FLOOR - 236} fill="#64748b" /><rect x={404} y={236} width="6" height={FLOOR - 236} fill="#64748b" />
      <Bubble x={240} y={60} w={80} h={50} tail="l"><Txt x={0} y={2} size={28} color={C.indigo} weight={900}>?</Txt></Bubble>
    </Card>
  ),
  下記: () => (
    <Card bg="lilac" floor={false}>
      <Doc x={240} y={160} w={260} h={260} lines={0} head={C.ink}>
        {[0, 1].map(i => <rect key={i} x={-110} y={-84 + i * 18} width={i ? 150 : 220} height="7" rx="3" fill="#cbd5e1" />)}
        <Arrow x1={0} y1={-42} x2={0} y2={-6} color={C.indigo} w={6} />
        <line x1={-110} y1={4} x2={110} y2={4} stroke={C.indigoL} strokeWidth="3" />
        {[0, 1, 2].map(i => <g key={i}><circle cx={-90} cy={30 + i * 30} r="9" fill={C.indigo} /><Txt x={-90} y={30 + i * 30} size={11} color="#fff">{i + 1}</Txt><rect x={-72} y={26 + i * 30} width={150 - i * 24} height="8" rx="3" fill={C.ink} opacity="0.6" /></g>)}
      </Doc>
    </Card>
  ),
  事項: () => (
    <Card bg="warm" floor={false}>
      <rect x={60} y={30} width="360" height="260" rx="12" fill="#fff" stroke="#e7cfae" strokeWidth="3" />
      <rect x={60} y={30} width="360" height="40" rx="12" fill={C.amber} /><rect x={60} y={56} width="360" height="14" fill={C.amber} />
      <rect x={84} y={44} width="120" height="12" rx="4" fill="#fff" />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={84} y={90 + i * 64} width="312" height="50" rx="8" fill="#fef3c7" />
          <circle cx={110} cy={115 + i * 64} r="14" fill={C.amber} /><Txt x={110} y={115 + i * 64} size={14} color="#fff">{i + 1}</Txt>
          <rect x={134} y={106 + i * 64} width={200 - i * 40} height="8" rx="3" fill="#cbd5e1" /><rect x={134} y={120 + i * 64} width={140} height="6" rx="3" fill="#e2e8f0" />
          <path d={`M 372 ${102 + i * 64} m -8 -6 a 8 8 0 1 1 16 0 q 0 8 -8 16 q -8 -8 -8 -16 Z`} fill={C.rose} />
        </g>
      ))}
    </Card>
  ),
}
