/** Word pictures for BJT 2-2 (workplace, documents, procedures). */
import type { ReactNode } from 'react'
import {
  Arrow, Board, Bow, Box, Bubble, Building, Bulb, C, Calendar, Card, Chart, Check, Clipboard, Coin, Desk, Doc, Envelope,
  FLOOR, Gear, Monitor, P, Pencil, Plant, Sparkle, Sticky, Table, Target, Txt, Window,
} from './kit'

const H = 170

function Receipt({ x, y, h = 120, rot = 0 }: { x: number; y: number; h?: number; rot?: number }) {
  const zz = Array.from({ length: 7 }, (_, i) => `l 5 ${i % 2 ? -6 : 6}`).join(' ')
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M -20 ${-h / 2} L 20 ${-h / 2} L 20 ${h / 2} ${zz.replace(/l 5/g, 'l -5')} Z`} fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
      {Array.from({ length: Math.floor(h / 18) - 1 }, (_, i) => <rect key={i} x={-14} y={-h / 2 + 10 + i * 16} width={i % 2 ? 18 : 26} height="4" rx="2" fill="#cbd5e1" />)}
      <rect x={-14} y={h / 2 - 22} width="28" height="6" rx="2" fill={C.ink} />
    </g>
  )
}

function Sakura({ x, y, r = 7 }: { x: number; y: number; r?: number }) {
  return <g>{[0, 72, 144, 216, 288].map(a => <ellipse key={a} cx={x} cy={y - r * 0.8} rx={r * 0.55} ry={r * 0.85} fill="#fbcfe8" transform={`rotate(${a} ${x} ${y})`} />)}<circle cx={x} cy={y} r={r * 0.3} fill="#f472b6" /></g>
}

function Car({ x, y, s = 1, color = '#334155' }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M 0 -18 L 14 -40 L 70 -40 L 90 -18 L 110 -14 L 110 -6 L 0 -6 Z" fill={color} />
      <path d="M 20 -36 L 44 -36 L 44 -20 L 12 -20 Z M 50 -36 L 68 -36 L 82 -20 L 50 -20 Z" fill="#bae6fd" />
      {[24, 86].map(cx => <circle key={cx} cx={cx} cy="-6" r="10" fill="#1f2937" />)}
    </g>
  )
}

export const SCENES: Record<string, () => ReactNode> = {
  先方: () => (
    <Card bg="meeting">
      <path d={`M 290 0 L 390 0 L 420 232 L 260 232 Z`} fill="#fef9c3" opacity="0.8" />
      <P cast="client" x={340} y={FLOOR} h={H} />
      <Table x={40} y={222} w={400} />
      <P cast="junior" x={110} y={FLOOR + 20} h={H} back />
      <Arrow x1={160} y1={110} x2={290} y2={110} color={C.amber} />
    </Card>
  ),
  産業: () => (
    <Card bg="cool">
      <rect x={20} y={150} width="120" height={FLOOR - 150} fill="#94a3b8" />
      {[40, 80, 110].map((cx, i) => <rect key={cx} x={cx} y={90 + i * 14} width="16" height={60 - i * 14} fill="#64748b" />)}
      <rect x={160} y={120} width="140" height={FLOOR - 120} fill="#a5b4c8" />
      <path d="M 160 120 L 195 96 L 195 120 L 230 96 L 230 120 L 265 96 L 265 120 L 300 96 L 300 120" fill="#7c8ba1" />
      <rect x={330} y={60} width="8" height={FLOOR - 60} fill={C.amber} /><rect x={300} y={60} width="150" height="8" fill={C.amber} />
      <line x1={430} y1={68} x2={430} y2={140} stroke="#334155" strokeWidth="2" /><Box x={414} y={168} w={32} h={28} />
      <Gear x={230} y={200} r={26} color="#e2e8f0" />
    </Card>
  ),
  精算: () => (
    <Card bg="warm">
      <Receipt x={120} y={140} h={170} rot={-6} />
      <Receipt x={170} y={150} h={130} rot={8} />
      <Arrow x1={220} y1={170} x2={300} y2={170} color={C.green} />
      {[0, 1, 2].map(i => <Coin key={i} x={340} y={150 - i * 12} r={22} />)}
      <P cast="junior" x={420} y={FLOOR} h={H - 10} armL={[40, 70]} />
    </Card>
  ),
  運用: () => (
    <Card bg="office">
      <Monitor x={60} y={50} w={220} h={140}>
        <path d="M 10 100 L 50 80 L 90 88 L 130 60 L 170 64 L 200 40" fill="none" stroke={C.green} strokeWidth="4" />
        <circle cx={190} cy={18} r="8" fill={C.green} />
      </Monitor>
      <Gear x={350} y={110} r={34} /><Gear x={404} y={168} r={22} color="#b6c2d0" />
      <path d="M 320 220 A 50 50 0 1 0 390 230" fill="none" stroke={C.indigo} strokeWidth="5" />
      <path d="M 390 230 l -4 -14 l 14 6 Z" fill={C.indigo} />
      <P cast="staff" x={300} y={FLOOR} h={H - 40} armL={[60, 100]} />
    </Card>
  ),
  前年: () => (
    <Card bg="lilac" floor={false}>
      <Calendar x={60} y={70} w={150} mark={[3, 10, 17]} />
      <Txt x={135} y={60} size={26} color={C.indigo} weight={900}>2025</Txt>
      <rect x={52} y={36} width="166" height="220" rx="12" fill="none" stroke={C.amber} strokeWidth="5" />
      <g opacity="0.45"><Calendar x={280} y={70} w={150} /><Txt x={355} y={60} size={26} color={C.slate} weight={900}>2026</Txt></g>
      <Arrow x1={276} y1={280} x2={226} y2={280} color={C.amber} />
    </Card>
  ),
  広告案: () => (
    <Card bg="rose">
      <Board x={110} y={26} w={260} h={170}>
        <rect x={30} y={22} width="200" height="120" rx="6" fill="none" stroke={C.rose} strokeWidth="3" strokeDasharray="8 6" />
        <circle cx={80} cy={70} r="24" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="5 4" />
        <rect x={120} y={50} width="90" height="10" rx="4" fill="#fda4af" /><rect x={120} y={72} width="60" height="8" rx="4" fill="#cbd5e1" />
        <rect x={60} y={108} width="140" height="18" rx="6" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="5 4" />
      </Board>
      <P cast="staff" x={410} y={FLOOR} h={H - 10} armL={[90, 120]} />
      <Sticky x={60} y={120} w={64} rot={-8} color={C.amberL}><Bulb x={0} y={6} s={0.5} /></Sticky>
    </Card>
  ),
  常務: () => (
    <Card bg="warm">
      <Window x={60} y={30} w={360} h={130} />
      <rect x={196} y={130} width="88" height="110" rx="16" fill="#7c2d12" />
      <P cast="client" x={240} y={FLOOR - 16} h={160} pose="chair" />
      <rect x={90} y={226} width="300" height="14" rx="4" fill="#78350f" />
      <rect x={100} y={240} width="280" height={FLOOR - 240} fill="#92400e" />
      <rect x={200} y={206} width="80" height="20" rx="3" fill="#fbbf24" />
      <rect x={210} y={213} width="60" height="5" rx="2" fill="#78350f" />
    </Card>
  ),
  新入: () => (
    <Card bg="rose">
      <Building x={270} y={FLOOR} w={190} h={220} color="#a5b4c8" />
      <P cast="junior" x={170} y={FLOOR} h={H} topColor="#1e293b" bottomColor="#1e293b" armL={[10, 6]} />
      {[[60, 60], [110, 40], [200, 70], [90, 130], [230, 30], [40, 190], [140, 100]].map(([sx, sy], i) => <Sakura key={i} x={sx} y={sy} r={8} />)}
      <Sparkle x={210} y={130} r={10} />
    </Card>
  ),
  社内: () => (
    <Card bg="street">
      <rect x={60} y={50} width="360" height={FLOOR - 50} fill="#e2e8f0" stroke="#94a3b8" strokeWidth="6" />
      <rect x={60} y={170} width="360" height="6" fill="#94a3b8" />
      <P cast="staff" x={130} y={168} h={100} /><P cast="junior" x={220} y={168} h={104} /><P cast="boss" x={330} y={168} h={106} />
      <P cast="client" x={160} y={FLOOR} h={104} /><P cast="shopper" x={300} y={FLOOR} h={98} />
      <rect x={72} y={60} width="336" height={FLOOR - 70} rx="8" fill="none" stroke={C.indigo} strokeWidth="4" strokeDasharray="12 8" />
    </Card>
  ),
  部長: () => (
    <Card bg="office">
      {[230, 300, 370, 440].map((bx, i) => <P key={bx} cast={i % 2 ? 'staff' : 'junior'} x={bx} y={FLOOR - 30} h={110} />)}
      <Table x={200} y={FLOOR - 60} w={270} />
      <P cast="boss" x={110} y={FLOOR} h={H + 10} armR={[40, 70]} />
      <rect x={60} y={30} width="100" height="40" rx="6" fill={C.indigo} />
      <Txt x={110} y={51} size={18} color="#fff">Dept.</Txt>
    </Card>
  ),
  支店: () => (
    <Card bg="mint" floor={false}>
      <path d="M 40 280 Q 120 200 200 230 T 440 180" fill="none" stroke="#a7dcc4" strokeWidth="40" strokeLinecap="round" />
      <Building x={190} y={200} w={100} h={150} color="#64748b" />
      {[[70, 270], [390, 120], [400, 280]].map(([bx, by], i) => (
        <g key={i}><line x1={240} y1={140} x2={bx + 26} y2={by - 30} stroke={C.green} strokeWidth="3" strokeDasharray="6 5" /><Building x={bx} y={by} w={52} h={70} color="#94a3b8" /></g>
      ))}
      <Building x={190} y={200} w={100} h={150} color="#64748b" />
    </Card>
  ),
  スタッフ: () => (
    <Card bg="mint">
      <P cast="clerk" x={120} y={FLOOR} h={H - 6} />
      <P cast="clerk" x={240} y={FLOOR} h={H} female hair="ponytail" bottom="skirt" />
      <P cast="clerk" x={360} y={FLOOR} h={H - 10} hairColor="#6b4f3a" />
      {[120, 240, 360].map(bx => <rect key={bx} x={bx - 8} y={FLOOR - 0.68 * H} width="16" height="10" rx="2" fill="#fff" stroke="#94a3b8" />)}
    </Card>
  ),
  企業: () => (
    <Card bg="street">
      <Building x={20} y={FLOOR} w={100} h={170} color="#94a3b8" sign={<circle cx={70} cy={FLOOR - 182} r="6" fill="#fff" />} />
      <Building x={130} y={FLOOR} w={110} h={240} color="#64748b" signColor={C.green} sign={<rect x={160} y={FLOOR - 256} width="50" height="8" rx="3" fill="#fff" />} />
      <Building x={250} y={FLOOR} w={100} h={200} color="#a5b4c8" signColor={C.amber} sign={<path d={`M 300 ${FLOOR - 220} l 8 8 l -8 8 l -8 -8 Z`} fill="#fff" />} />
      <Building x={360} y={FLOOR} w={100} h={150} color="#7c8ba1" signColor={C.rose} sign={<rect x={392} y={FLOOR - 166} width="36" height="8" rx="3" fill="#fff" />} />
    </Card>
  ),
  総務: () => (
    <Card bg="warm">
      <P cast="staff" x={150} y={FLOOR} h={H} armL={[30, 40]} armR={[30, 40]} />
      <Box x={100} y={236} w={100} h={56} />
      <rect x={112} y={166} width="16" height="16" rx="2" fill="#fff" stroke="#94a3b8" /><rect x={164} y={162} width="20" height="20" rx="2" fill="#93c5fd" />
      <Bulb x={320} y={90} s={0.9} />
      <g transform="translate(400 120)"><circle cx="0" cy="0" r="14" fill="none" stroke="#a16207" strokeWidth="6" /><rect x="10" y="-4" width="34" height="8" fill="#a16207" /><rect x="34" y="4" width="6" height="8" fill="#a16207" /></g>
      <Clipboard x={350} y={220} w={60} h={80}><rect x={-20} y={-20} width="40" height="5" rx="2" fill="#cbd5e1" /><rect x={-20} y={-6} width="30" height="5" rx="2" fill="#cbd5e1" /></Clipboard>
    </Card>
  ),
  総務部: () => (
    <Card bg="office">
      <rect x={150} y={70} width="180" height={FLOOR - 70} fill="#cbd5e1" />
      <rect x={164} y={84} width="152" height={FLOOR - 84} fill="#e6d3b5" />
      <circle cx={296} cy={190} r="6" fill="#a16207" />
      <rect x={130} y={22} width="220" height="40" rx="6" fill={C.indigo} />
      <rect x={146} y={32} width="20" height="20" rx="3" fill="#fde68a" />
      <rect x={176} y={32} width="20" height="20" rx="3" fill="#a7f3d0" />
      <rect x={206} y={36} width="128" height="12" rx="4" fill="#fff" />
      <Plant x={90} y={FLOOR} s={0.9} />
      <P cast="staff" x={390} y={FLOOR} h={H - 10} />
    </Card>
  ),
  案内状: () => (
    <Card bg="rose" floor={false}>
      <rect x={110} y={150} width="260" height="140" rx="6" fill="#fda4af" />
      <rect x={140} y={50} width="200" height="170" rx="6" fill="#fff" stroke="#fecdd3" strokeWidth="3" />
      <rect x={180} y={80} width="120" height="10" rx="4" fill={C.rose} />
      {[0, 1, 2].map(i => <rect key={i} x={170} y={106 + i * 18} width={140 - i * 30} height="6" rx="3" fill="#cbd5e1" />)}
      <path d="M 110 150 L 240 230 L 370 150 L 370 290 L 110 290 Z" fill="#fb7185" />
      <circle cx={240} cy={238} r="16" fill="#be123c" />
      <Sparkle x={400} y={70} r={12} />
    </Card>
  ),
  標題: () => (
    <Card bg="lilac" floor={false}>
      <Doc x={240} y={160} w={240} h={260} lines={0} head="transparent">
        <rect x={-100} y={-112} width="200" height="40" rx="6" fill={C.amberL} stroke={C.amber} strokeWidth="3" />
        <rect x={-76} y={-98} width="152" height="12" rx="5" fill={C.ink} />
        {Array.from({ length: 7 }, (_, i) => <rect key={i} x={-96} y={-52 + i * 22} width={i % 3 === 2 ? 120 : 192} height="6" rx="3" fill="#cbd5e1" />)}
      </Doc>
      <Arrow x1={420} y1={60} x2={366} y2={60} color={C.amber} />
    </Card>
  ),
  日付: () => (
    <Card bg="cool" floor={false}>
      <Doc x={200} y={170} w={250} h={260} lines={8} head={C.slate}>
        <rect x={36} y={-118} width="84" height="22" rx="4" fill={C.amberL} />
        <Txt x={78} y={-107} size={13} color={C.ink}>2026.10.16</Txt>
      </Doc>
      <Calendar x={360} y={150} w={100} ring={[15]} />
      <Arrow x1={350} y1={80} x2={330} y2={64} color={C.amber} w={4} />
    </Card>
  ),
  マニュアル: () => (
    <Card bg="mint" floor={false}>
      <rect x={120} y={40} width="240" height="250" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      {Array.from({ length: 10 }, (_, i) => <circle key={i} cx={120} cy={60 + i * 24} r="6" fill="none" stroke="#64748b" strokeWidth="3" />)}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <circle cx={164} cy={86 + i * 70} r="16" fill={C.green} /><Txt x={164} y={86 + i * 70} size={16} color="#fff">{i + 1}</Txt>
          <rect x={196} y={68 + i * 70} width="70" height="40" rx="4" fill="#e0f2fe" />
          <rect x={276} y={78 + i * 70} width="64" height="6" rx="3" fill="#cbd5e1" /><rect x={276} y={92 + i * 70} width="44" height="6" rx="3" fill="#cbd5e1" />
        </g>
      ))}
    </Card>
  ),
  精算書: () => (
    <Card bg="warm" floor={false}>
      <Doc x={200} y={160} w={230} h={260} lines={0} head={C.green}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <rect x={-96} y={-74 + i * 32} width="100" height="6" rx="3" fill="#cbd5e1" />
            <Txt x={70} y={-71 + i * 32} size={14} color={C.ink}>{['¥1,200', '¥3,400', '¥580', '¥760'][i]}</Txt>
            <line x1={-96} y1={-58 + i * 32} x2={96} y2={-58 + i * 32} stroke="#e2e8f0" strokeWidth="1.5" />
          </g>
        ))}
        <rect x={-96} y={64} width="192" height="30" rx="4" fill={C.greenL} />
        <Txt x={60} y={79} size={18} color={C.ink} weight={900}>¥5,940</Txt>
      </Doc>
      <Receipt x={380} y={150} h={140} rot={10} />
      <rect x={348} y={86} width="16" height="6" fill="#94a3b8" transform="rotate(10 380 150)" />
    </Card>
  ),
  修正: () => (
    <Card bg="rose" floor={false}>
      <Doc x={210} y={160} w={250} h={250} lines={0} head={C.slate}>
        {Array.from({ length: 7 }, (_, i) => <rect key={i} x={-104} y={-80 + i * 28} width={i % 3 === 2 ? 130 : 200} height="7" rx="3" fill="#cbd5e1" />)}
        <line x1={-60} y1={-21} x2={20} y2={-21} stroke="#dc2626" strokeWidth="4" />
        <path d="M 30 -16 l 8 -14 l 8 14" fill="none" stroke="#dc2626" strokeWidth="3" />
        <path d="M 10 -44 q 20 -14 40 0" fill="none" stroke="#dc2626" strokeWidth="3" />
        <circle cx={-20} cy={63} r="18" fill="none" stroke="#dc2626" strokeWidth="3" />
      </Doc>
      <g transform="translate(400 230) rotate(30)"><rect x="-8" y="-100" width="16" height="90" rx="3" fill="#dc2626" /><path d="M -8 -10 L 8 -10 L 0 8 Z" fill="#7f1d1d" /></g>
    </Card>
  ),
  文言: () => (
    <Card bg="lilac" floor={false}>
      <rect x={40} y={60} width="400" height="200" rx="14" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Txt x={80} y={120} size={70} color={C.indigo} weight={900}>「</Txt>
      <Txt x={400} y={200} size={70} color={C.indigo} weight={900}>」</Txt>
      <rect x={120} y={120} width="240" height="16" rx="6" fill={C.indigoL} />
      <rect x={120} y={156} width="190" height="16" rx="6" fill="#cbd5e1" />
      <rect x={120} y={192} width="150" height="16" rx="6" fill="#cbd5e1" />
      <Pencil x={360} y={130} s={0.9} rot={30} />
    </Card>
  ),
  見送る: () => (
    <Card bg="street">
      <Building x={20} y={FLOOR} w={150} h={210} color="#a5b4c8" />
      <Bow cast="staff" x={210} y={FLOOR} h={H - 10} deg={30} />
      <Car x={300} y={FLOOR} s={1.4} />
      {[0, 1, 2].map(i => <rect key={i} x={460 - i * 4} y={FLOOR - 60 + i * 16} width={14 + i * 4} height="5" rx="2" fill="#94a3b8" />)}
      <Arrow x1={300} y1={150} x2={440} y2={150} color={C.slate} w={4} />
    </Card>
  ),
  意図: () => (
    <Card bg="mint">
      <P cast="boss" x={130} y={FLOOR} h={H} armR={[150, 175]} />
      {[[168, 112, 5], [184, 96, 8]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" stroke="#cbd5e1" strokeWidth="2" />)}
      <Bubble x={300} y={110} w={210} h={150} tail="none">
        <Target x={0} y={4} r={56} />
      </Bubble>
    </Card>
  ),
  セミナー: () => (
    <Card bg="meeting">
      <rect x={140} y={24} width="300" height="130" rx="6" fill="#1f2937" />
      <rect x={148} y={32} width="284" height="114" rx="3" fill="#e0f2fe" />
      <Chart x={170} y={130} w={110} h={80} bars={[0.4, 0.6, 0.8, 0.5]} />
      {[0, 1, 2].map(i => <rect key={i} x={300} y={56 + i * 22} width={110 - i * 20} height="8" rx="4" fill="#94a3b8" />)}
      <P cast="boss" x={90} y={FLOOR} h={H} armR={[90, 120]} />
      {[200, 270, 340, 410].map((bx, i) => <P key={bx} cast={i % 2 ? 'staff' : 'junior'} back x={bx} y={FLOOR + 30} h={104} />)}
      {[200, 270, 340, 410].map(bx => <rect key={bx} x={bx - 20} y={FLOOR - 26} width="40" height="26" rx="4" fill="#475569" />)}
    </Card>
  ),
}
