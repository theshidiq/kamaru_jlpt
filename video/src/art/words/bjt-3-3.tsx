/** Word pictures for BJT 3-3 (documents, meetings, negotiation). */
import type { ReactNode } from 'react'
import {
  Anger, Arrow, Board, Bow, Box, Bubble, Bulb, C, Calendar, Card, Chart, Check, Cross, Doc, FLOOR, Heart, Laptop, Maru, P,
  Pencil, Sparkle, Star, Table, Tag, Txt, Waves,
} from './kit'

const H = 170
const Lines = ({ n = 2, w = 60 }: { n?: number; w?: number }) => <>{Array.from({ length: n }, (_, i) => <rect key={i} x={-w / 2} y={-((n - 1) * 7) + i * 14 - 3} width={w * (i === n - 1 ? 0.6 : 1)} height="6" rx="3" fill="#cbd5e1" />)}</>

function Flag({ x, y, color = C.rose, h = 80 }: { x: number; y: number; color?: string; h?: number }) {
  return <g><rect x={x - 3} y={y - h} width="6" height={h} fill="#475569" /><path d={`M ${x + 3} ${y - h} L ${x + 53} ${y - h + 14} L ${x + 3} ${y - h + 30} Z`} fill={color} /></g>
}

export const SCENES: Record<string, () => ReactNode> = {
  申込: () => (
    <Card bg="mint">
      <P cast="shopper" x={130} y={FLOOR} h={H - 6} armR={[60, 90]} />
      <Doc x={218} y={150} w={50} h={64} rot={-14} lines={3} head={C.green} />
      <rect x={290} y={120} width="140" height={FLOOR - 120} rx="8" fill={C.green} />
      <rect x={312} y={146} width="96" height="12" rx="6" fill="#065f46" />
      <Arrow x1={250} y1={130} x2={310} y2={148} color={C.amber} w={4} />
      <Check x={360} y={210} s={1.6} color="#fff" />
    </Card>
  ),
  訂正: () => (
    <Card bg="rose" floor={false}>
      <Doc x={210} y={160} w={260} h={230} lines={0} head={C.slate}>
        <rect x={-110} y={-64} width="150" height="10" rx="4" fill="#cbd5e1" />
        <rect x={-110} y={-26} width="150" height="10" rx="4" fill={C.roseL} />
        <line x1={-114} y1={-21} x2={44} y2={-21} stroke="#dc2626" strokeWidth="4" />
        <Cross x={84} y={-21} s={0.6} color="#dc2626" w={5} />
        <rect x={-110} y={14} width="150" height="10" rx="4" fill={C.greenL} />
        <Maru x={84} y={19} r={13} color={C.green} w={4} />
        <Arrow x1={-130} y1={-18} x2={-130} y2={16} color={C.green} w={4} />
        <rect x={-110} y={54} width="120" height="10" rx="4" fill="#cbd5e1" />
      </Doc>
      <g transform="translate(400 240) rotate(-30)"><rect x="-14" y="-30" width="28" height="44" rx="5" fill="#f9a8d4" /><rect x="-14" y="-30" width="28" height="14" rx="5" fill="#60a5fa" /></g>
    </Card>
  ),
  記書き: () => (
    <Card bg="lilac" floor={false}>
      <Doc x={240} y={160} w={260} h={270} lines={0} head="transparent">
        {[0, 1].map(i => <rect key={i} x={-110} y={-114 + i * 16} width={i ? 140 : 220} height="6" rx="3" fill="#cbd5e1" />)}
        <rect x={-26} y={-66} width="52" height="18" rx="4" fill={C.indigo} />
        {[0, 1, 2].map(i => <g key={i}><Txt x={-90} y={-22 + i * 36} size={16} color={C.ink} weight={900}>{i + 1}.</Txt><rect x={-70} y={-26 + i * 36} width={150 - i * 30} height="8" rx="3" fill={C.ink} opacity="0.55" /></g>)}
        <Txt x={86} y={104} size={16} color={C.slate}>以上</Txt>
      </Doc>
    </Card>
  ),
  趣旨: () => (
    <Card bg="warm" floor={false}>
      <Doc x={120} y={160} w={150} h={230} lines={9} />
      <path d="M 210 90 L 300 140 L 300 180 L 210 230 Z" fill={C.amberL} />
      <Arrow x1={300} y1={160} x2={340} y2={160} color={C.amber} />
      <circle cx={400} cy={160} r="50" fill="#fff" stroke={C.amber} strokeWidth="5" />
      <Star x={400} y={160} r={28} />
    </Card>
  ),
  件名: () => (
    <Card bg="cool" floor={false}>
      <rect x={50} y={40} width="380" height="240" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      <rect x={50} y={40} width="380" height="34" rx="12" fill={C.indigo} /><rect x={50} y={60} width="380" height="14" fill={C.indigo} />
      {[0, 1, 2].map(i => <circle key={i} cx={74 + i * 20} cy={57} r="5" fill="#fff" />)}
      <rect x={70} y={90} width="340" height="24" rx="4" fill="#f1f5f9" /><rect x={80} y={98} width="90" height="8" rx="3" fill="#cbd5e1" />
      <rect x={66} y={124} width="348" height="34" rx="6" fill={C.amberL} stroke={C.amber} strokeWidth="4" />
      <rect x={80} y={135} width="200" height="12" rx="4" fill={C.ink} />
      {[0, 1, 2, 3].map(i => <rect key={i} x={80} y={178 + i * 22} width={i % 2 ? 220 : 300} height="7" rx="3" fill="#cbd5e1" />)}
      <Arrow x1={460} y1={141} x2={426} y2={141} color={C.amber} w={4} />
    </Card>
  ),
  図表: () => (
    <Card bg="mint" floor={false}>
      <Doc x={240} y={160} w={320} h={250} lines={0} head={C.green}>
        <Chart x={-140} y={20} w={130} h={100} bars={[0.4, 0.7, 0.55, 0.9]} />
        {[0, 1, 2, 3].map(r => [0, 1, 2].map(c => <rect key={`${r}${c}`} x={10 + c * 42} y={-80 + r * 26} width="38" height="22" fill={r === 0 ? C.greenL : '#f1f5f9'} stroke="#cbd5e1" />))}
        <circle cx={-60} cy={74} r="30" fill={C.indigoL} /><path d="M -60 74 L -60 44 A 30 30 0 0 1 -32 84 Z" fill={C.indigo} />
        {[0, 1].map(i => <rect key={i} x={0} y={56 + i * 18} width={120 - i * 30} height="7" rx="3" fill="#cbd5e1" />)}
      </Doc>
    </Card>
  ),
  提案書: () => (
    <Card bg="warm" floor={false}>
      <rect x={146} y={46} width="200" height="250" rx="6" fill="#cbd5e1" />
      <rect x={136} y={36} width="200" height="250" rx="6" fill={C.indigo} />
      <rect x={136} y={36} width="16" height="250" fill="#3730a3" />
      <rect x={170} y={70} width="140" height="14" rx="5" fill="#fff" /><rect x={170} y={94} width="100" height="8" rx="4" fill={C.indigoL} />
      <Bulb x={240} y={190} s={1.2} />
      <Sparkle x={380} y={70} r={12} />
    </Card>
  ),
  申込書: () => (
    <Card bg="cool" floor={false}>
      <Doc x={240} y={160} w={260} h={270} lines={0} head={C.ink}>
        <rect x={60} y={-96} width="50" height="62" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx={85} cy={-74} r="10" fill="#cbd5e1" /><path d={`M 70 -42 Q 85 -60 100 -42 Z`} fill="#cbd5e1" />
        {[0, 1, 2, 3].map(i => <g key={i}><rect x={-110} y={-94 + i * 34} width="40" height="7" rx="3" fill="#94a3b8" /><rect x={-64} y={-100 + i * 34} width={i < 2 ? 116 : 172} height="20" rx="3" fill="#fff" stroke="#cbd5e1" strokeWidth="2" /></g>)}
        <line x1={-110} y1={96} x2={20} y2={96} stroke={C.ink} strokeWidth="2" />
        <circle cx={60} cy={92} r="14" fill="none" stroke="#dc2626" strokeWidth="3" />
      </Doc>
    </Card>
  ),
  要求: () => (
    <Card bg="rose">
      <P cast="client" x={130} y={FLOOR} h={H + 6} armR={[100, 110]} />
      <Bubble x={290} y={110} w={210} h={150} tail="l">
        {[0, 1, 2].map(i => <g key={i}><Txt x={-74} y={-40 + i * 38} size={24} color={C.rose} weight={900}>!</Txt><rect x={-56} y={-45 + i * 38} width={120 - i * 20} height="10" rx="4" fill="#cbd5e1" /></g>)}
      </Bubble>
      <Anger x={170} y={70} />
    </Card>
  ),
  話し合う: () => (
    <Card bg="meeting">
      <Table x={60} y={230} w={360} />
      <P cast="staff" x={110} y={FLOOR - 8} h={146} pose="chair" armR={[50, 70]} />
      <P cast="boss" x={240} y={FLOOR - 8} h={150} pose="chair" />
      <P cast="client" x={370} y={FLOOR - 8} h={150} pose="chair" armL={[50, 70]} />
      <Bubble x={120} y={60} w={80} h={42} tail="r"><Lines /></Bubble>
      <Bubble x={240} y={40} w={80} h={42} tail="none" color="#ecfdf5"><Lines /></Bubble>
      <Bubble x={360} y={60} w={80} h={42} tail="l" color="#eef2ff"><Lines /></Bubble>
    </Card>
  ),
  難色: () => (
    <Card bg="lilac">
      <P cast="junior" x={110} y={FLOOR} h={H} armR={[56, 96]} />
      <Doc x={196} y={170} w={52} h={66} rot={-6} lines={3} head={C.amber} />
      <P cast="client" x={360} y={FLOOR} h={H} armL={[90, 100]} armR={[40, 120]} />
      <Bubble x={360} y={66} w={120} h={58} tail="r" color="#f1f5f9"><path d="M -40 2 q 10 -10 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke={C.slate} strokeWidth="4" /></Bubble>
      <path d="M 400 104 q 6 10 0 16 q -6 -6 0 -16 Z" fill={C.sky} />
      <Arrow x1={300} y1={210} x2={240} y2={210} color={C.slate} w={4} />
    </Card>
  ),
  くだす: () => (
    <Card bg="warm">
      <P cast="boss" x={150} y={FLOOR} h={H + 10} armR={[110, 160]} />
      <g transform="translate(290 120)">
        <rect x="-10" y="-40" width="20" height="40" rx="4" fill="#7c2d12" /><rect x="-26" y="0" width="52" height="16" rx="4" fill="#dc2626" />
      </g>
      <Arrow x1={290} y1={146} x2={290} y2={190} color={C.rose} w={5} />
      <Doc x={290} y={236} w={130} h={60} lines={2} head={C.ink}><circle cx={40} cy={10} r="12" fill="none" stroke="#dc2626" strokeWidth="3" /></Doc>
      <Sparkle x={360} y={180} r={10} />
    </Card>
  ),
  一致: () => (
    <Card bg="mint">
      <P cast="junior" x={110} y={FLOOR} h={H} />
      <P cast="client" x={370} y={FLOOR} h={H} />
      <Bubble x={150} y={70} w={90} h={60} tail="l"><Star x={0} y={2} r={18} /></Bubble>
      <Bubble x={330} y={70} w={90} h={60} tail="r"><Star x={0} y={2} r={18} /></Bubble>
      <rect x={220} y={60} width="40" height="8" rx="4" fill={C.green} /><rect x={220} y={78} width="40" height="8" rx="4" fill={C.green} />
      <circle cx={240} cy={190} r="28" fill={C.green} /><Check x={240} y={192} color="#fff" />
    </Card>
  ),
  交渉: () => (
    <Card bg="meeting">
      <Table x={60} y={230} w={360} />
      <P cast="junior" x={110} y={FLOOR - 8} h={150} pose="chair" armR={[50, 70]} />
      <P cast="client" x={370} y={FLOOR - 8} h={156} pose="chair" armL={[50, 70]} />
      <Tag x={210} y={90} w={90} h={40} rot={-6}><Txt x={10} y={1} size={16}>¥100</Txt></Tag>
      <Tag x={290} y={150} w={90} h={40} rot={6} color={C.greenL}><Txt x={10} y={1} size={16}>¥90</Txt></Tag>
      <path d="M 200 120 C 170 160 260 190 270 172" fill="none" stroke={C.indigo} strokeWidth="4" strokeDasharray="6 5" />
      <path d="M 300 120 C 330 80 240 60 240 70" fill="none" stroke={C.amber} strokeWidth="4" strokeDasharray="6 5" />
    </Card>
  ),
  結論: () => (
    <Card bg="cool" floor={false}>
      {[60, 160, 260].map((y, i) => <g key={y}><rect x={50} y={y - 24} width="110" height="48" rx="8" fill={[C.indigoL, C.greenL, C.amberL][i]} /><Arrow x1={164} y1={y} x2={268} y2={160} color="#94a3b8" w={3} /></g>)}
      <rect x={280} y={110} width="160" height="100" rx="14" fill={C.indigo} />
      <Check x={360} y={162} s={1.6} color="#fff" />
      <Star x={430} y={100} r={14} />
    </Card>
  ),
  こぎつける: () => (
    <Card bg="mint">
      <path d={`M 20 ${FLOOR} L 120 ${FLOOR - 60} L 200 ${FLOOR - 90} L 300 ${FLOOR - 170} L 380 ${FLOOR - 200} L 460 ${FLOOR - 200} L 460 ${FLOOR} Z`} fill="#a7dcc4" />
      <Flag x={420} y={FLOOR - 200} color={C.rose} />
      <Doc x={444} y={FLOOR - 230} w={30} h={36} lines={2} head={C.ink} />
      <P cast="junior" x={300} y={FLOOR - 170} h={120} armR={[150, 160]} />
      <path d="M 330 70 q 6 10 0 16 q -6 -6 0 -16 Z" fill={C.sky} />
      {[[80, 290], [160, 240], [240, 210]].map(([fx, fy], i) => <ellipse key={i} cx={fx} cy={fy - 10} rx="8" ry="4" fill="#5f9a5a" opacity="0.6" />)}
    </Card>
  ),
  プレゼンテーション: () => (
    <Card bg="meeting">
      <rect x={170} y={24} width="280" height="150" rx="6" fill="#1f2937" />
      <rect x={178} y={32} width="264" height="134" rx="3" fill="#e0f2fe" />
      <Chart x={200} y={150} w={110} h={90} bars={[0.4, 0.6, 0.85]} />
      <Bulb x={380} y={96} s={0.8} />
      <P cast="staff" x={100} y={FLOOR} h={H} armR={[110, 120]} itemR={<rect x="-4" y="-10" width="10" height="16" rx="3" fill="#1f2937" />} />
      {[230, 310, 390].map((bx, i) => <P key={bx} cast={i % 2 ? 'client' : 'junior'} back x={bx} y={FLOOR + 30} h={104} />)}
    </Card>
  ),
  指摘: () => (
    <Card bg="rose">
      <Doc x={290} y={150} w={200} h={220} lines={0} head={C.slate}>
        {Array.from({ length: 6 }, (_, i) => <rect key={i} x={-80} y={-64 + i * 26} width={i % 3 === 2 ? 110 : 160} height="7" rx="3" fill="#cbd5e1" />)}
        <ellipse cx={-10} cy={-9} rx="70" ry="16" fill="none" stroke="#dc2626" strokeWidth="4" />
      </Doc>
      <P cast="boss" x={110} y={FLOOR} h={H + 6} armR={[100, 100]} />
      <circle cx={420} cy={60} r="24" fill={C.rose} /><Txt x={420} y={62} size={30} color="#fff" weight={900}>!</Txt>
    </Card>
  ),
  総会: () => (
    <Card bg="lilac">
      <rect x={140} y={20} width="200" height="34" rx="6" fill={C.indigo} />
      <rect x={170} y={32} width="140" height="10" rx="4" fill="#fff" />
      <rect x={200} y={120} width="80" height="70" rx="4" fill="#8f7357" /><rect x={192} y={114} width="96" height="10" rx="4" fill="#a8896a" />
      <P cast="boss" x={240} y={130} h={80} />
      {[0, 1].map(r => Array.from({ length: 7 }, (_, i) => (
        <P key={`${r}${i}`} cast={['junior', 'staff', 'client', 'shopper'][(i + r) % 4] as 'staff'} back x={50 + i * 64 + r * 30} y={FLOOR + 30 - r * 34} h={96 - r * 10} />
      )))}
    </Card>
  ),
  議事: () => (
    <Card bg="office">
      <Board x={60} y={30} w={360} h={160}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <circle cx={50 + i * 86} cy={70} r="20" fill={i < 2 ? C.green : i === 2 ? C.amber : '#e2e8f0'} />
            {i < 2 ? <Check x={50 + i * 86} y={72} s={0.6} color="#fff" /> : <Txt x={50 + i * 86} y={70} size={16} color={i === 2 ? '#fff' : C.slate}>{i + 1}</Txt>}
            {i < 3 && <rect x={72 + i * 86} y={67} width="42" height="6" rx="3" fill="#cbd5e1" />}
            <rect x={28 + i * 86} y={104} width="44" height="6" rx="3" fill="#cbd5e1" />
          </g>
        ))}
        <path d="M 222 40 l 0 -14 l 12 6 Z" fill={C.rose} />
      </Board>
      <P cast="boss" x={420} y={FLOOR} h={H - 20} armL={[90, 120]} />
    </Card>
  ),
  議事録: () => (
    <Card bg="cool">
      <Laptop x={330} y={240} s={1.2}><rect x="-30" y="-14" width="44" height="5" rx="2" fill="#cbd5e1" /><rect x="-30" y="-4" width="56" height="5" rx="2" fill="#cbd5e1" /><rect x="-30" y="6" width="30" height="5" rx="2" fill={C.indigo} /></Laptop>
      <rect x={240} y={240} width="200" height="10" rx="4" fill="#e6d3b5" /><rect x={250} y={250} width="180" height={FLOOR - 250} fill="#d2bd9c" />
      <Doc x={130} y={150} w={170} h={220} lines={0} head={C.indigo}>
        <Txt x={44} y={-92} size={11} color={C.slate}>10/16</Txt>
        {[0, 1, 2].map(i => <circle key={i} cx={-60 + i * 22} cy={-62} r="9" fill={[C.indigoL, C.greenL, C.amberL][i]} />)}
        {[0, 1, 2, 3, 4].map(i => <g key={i}><circle cx={-66} cy={-26 + i * 26} r="4" fill={C.ink} /><rect x={-56} y={-30 + i * 26} width={120 - (i % 2) * 30} height="7" rx="3" fill="#cbd5e1" /></g>)}
      </Doc>
    </Card>
  ),
  開催: () => (
    <Card bg="warm">
      <path d="M 20 40 Q 120 70 240 40 Q 360 70 460 40" fill="none" stroke="#94a3b8" strokeWidth="2" />
      {Array.from({ length: 12 }, (_, i) => { const x = 36 + i * 38, y = 40 + Math.sin((i / 11) * Math.PI) * 24; return <path key={i} d={`M ${x - 12} ${y} L ${x + 12} ${y} L ${x} ${y + 22} Z`} fill={[C.rose, C.amber, C.green, C.indigo][i % 4]} /> })}
      <rect x={120} y={110} width="240" height="120" rx="8" fill="#fff" stroke="#e5c97a" strokeWidth="3" />
      <rect x={150} y={136} width="180" height="16" rx="6" fill={C.amber} />
      <Calendar x={196} y={164} w={88} ring={[10]} />
      <P cast="shopper" x={70} y={FLOOR} h={H - 30} />
      <P cast="client" x={410} y={FLOOR} h={H - 20} />
    </Card>
  ),
  復唱: () => (
    <Card bg="mint">
      <P cast="client" x={100} y={FLOOR} h={H} armR={[40, 70]} />
      <P cast="staff" x={420} y={FLOOR} h={H - 6} armL={[40, 70]} />
      <Bubble x={170} y={66} w={130} h={52} tail="l"><rect x="-46" y="-10" width="38" height="8" rx="3" fill={C.indigo} /><rect x="-2" y="-10" width="48" height="8" rx="3" fill={C.green} /><rect x="-46" y="4" width="70" height="7" rx="3" fill="#cbd5e1" /></Bubble>
      <Bubble x={300} y={160} w={130} h={52} tail="r" color="#ecfdf5"><rect x="-46" y="-10" width="38" height="8" rx="3" fill={C.indigo} /><rect x="-2" y="-10" width="48" height="8" rx="3" fill={C.green} /><rect x="-46" y="4" width="70" height="7" rx="3" fill="#cbd5e1" /></Bubble>
      <path d="M 240 92 C 290 96 300 118 296 128" fill="none" stroke={C.green} strokeWidth="4" />
      <path d="M 296 128 l -10 -4 m 10 4 l 4 -10" stroke={C.green} strokeWidth="4" strokeLinecap="round" />
    </Card>
  ),
  記念: () => (
    <Card bg="rose">
      <rect x={160} y={190} width="160" height={FLOOR - 190} rx="8" fill="#fbcfe8" />
      <rect x={180} y={140} width="120" height="54" rx="8" fill="#fde68a" />
      <rect x={160} y={190} width="160" height="14" fill="#f9a8d4" />
      {[200, 240, 280].map(cx => <g key={cx}><rect x={cx - 3} y={110} width="6" height="30" fill="#93c5fd" /><path d={`M ${cx} 96 q 6 8 0 14 q -6 -6 0 -14 Z`} fill={C.amber} /></g>)}
      <Txt x={240} y={238} size={34} color={C.rose} weight={900}>30</Txt>
      {[[60, 60, C.amber], [110, 120, C.indigo], [380, 70, C.green], [420, 140, C.rose], [80, 200, C.green], [400, 220, C.amber]].map(([x, y, c], i) => <rect key={i} x={x as number} y={y as number} width="10" height="16" rx="2" fill={c as string} transform={`rotate(${i * 30} ${x} ${y})`} />)}
    </Card>
  ),
  うわさ: () => (
    <Card bg="lilac">
      <P cast="staff" x={170} y={FLOOR} h={H - 6} armR={[110, 150]} />
      <P cast="junior" x={260} y={FLOOR} h={H} />
      <P cast="shopper" x={400} y={FLOOR} h={H - 14} back />
      <Bubble x={190} y={70} w={80} h={44} tail="r" color="#f1f5f9"><Txt x={0} y={1} size={20} color={C.slate}>…</Txt></Bubble>
      {[0, 1, 2].map(i => <circle key={i} cx={300 + i * 26} cy={100 - i * 6} r={4 + i * 2} fill="none" stroke="#94a3b8" strokeWidth="2" />)}
      <Bubble x={380} y={60} w={70} h={44} tail="none" color="#fff"><Txt x={0} y={2} size={24} color={C.indigo} weight={900}>?!</Txt></Bubble>
    </Card>
  ),
}
