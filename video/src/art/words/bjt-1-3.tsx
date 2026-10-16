/** Word pictures for BJT 1-3 (meetings, phone & email, communication). */
import type { ReactNode } from 'react'
import {
  Anger, Arrow, Board, Books, Bow, Box, Bubble, Bulb, C, Calendar, Card, Chart, Check, Checklist, Clipboard, Cross, Desk, Doc,
  Envelope, FLOOR, Headphones, Heart, Magnifier, Monitor, P, Phone, Sparkle, Star, Sticky, Table, Txt, Waves,
} from './kit'

const H = 170
const Q = ({ x, y, size = 30, color = C.indigo }: { x: number; y: number; size?: number; color?: string }) => <Txt x={x} y={y} size={size} color={color} weight={900}>?</Txt>

export const SCENES: Record<string, () => ReactNode> = {
  検討: () => (
    <Card bg="meeting">
      <Table x={60} y={224} w={360} />
      <P cast="boss" x={110} y={FLOOR - 8} h={150} pose="chair" />
      <P cast="staff" x={370} y={FLOOR - 8} h={146} pose="chair" />
      <Doc x={200} y={204} w={60} h={30} rot={-4} lines={2} />
      <Doc x={280} y={204} w={60} h={30} rot={5} lines={2} head={C.green} />
      <Bubble x={240} y={70} w={170} h={70} tail="none">
        <rect x={-70} y={-20} width="40" height="40" rx="6" fill={C.indigoL} /><rect x={-20} y={-20} width="40" height="40" rx="6" fill={C.greenL} /><rect x={30} y={-20} width="40" height="40" rx="6" fill={C.amberL} />
        <Q x={-50} y={0} size={22} /><Q x={0} y={0} size={22} color={C.green} /><Q x={50} y={0} size={22} color={C.amber} />
      </Bubble>
      <circle cx={180} cy={130} r="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" /><circle cx={300} cy={130} r="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
    </Card>
  ),
  連絡: () => (
    <Card bg="cool">
      <P cast="junior" x={90} y={FLOOR} h={H} armR={[150, 160]} itemR={<Phone x={0} y={-10} s={0.9} />} />
      <P cast="staff" x={390} y={FLOOR} h={H - 6} armL={[150, 160]} />
      <Envelope x={240} y={90} w={70} rot={-6} />
      <Bubble x={240} y={190} w={90} h={44} tail="none"><Phone x={0} y={0} s={0.8} rot={-20} /></Bubble>
      <Arrow x1={150} y1={140} x2={320} y2={140} color={C.indigo} w={4} />
      <Arrow x1={320} y1={240} x2={150} y2={240} color={C.green} w={4} />
    </Card>
  ),
  伝言: () => (
    <Card bg="office">
      <Desk x={60} y={214} w={340} />
      <rect x={120} y={186} width="70" height="28" rx="6" fill="#334155" />
      <path d="M 116 186 q 39 -26 78 0" fill="none" stroke="#1f2937" strokeWidth="9" strokeLinecap="round" />
      <Sticky x={300} y={120} w={110} rot={5}>
        <Phone x={-30} y={-14} s={0.7} rot={-20} />
        <rect x={-6} y={-24} width="44" height="6" rx="3" fill="#a16207" opacity="0.5" />
        <rect x={-6} y={-8} width="36" height="6" rx="3" fill="#a16207" opacity="0.5" />
        <rect x={-36} y={14} width="72" height="6" rx="3" fill="#a16207" opacity="0.5" />
      </Sticky>
      <Arrow x1={210} y1={180} x2={246} y2={156} color={C.amber} w={4} />
    </Card>
  ),
  能力: () => (
    <Card bg="mint">
      <P cast="staff" x={130} y={FLOOR} h={H} armR={[150, 170]} />
      {[0, 1, 2].map(r => (
        <g key={r}>
          <rect x={240} y={70 + r * 56} width="200" height="26" rx="13" fill="#e2e8f0" />
          <rect x={240} y={70 + r * 56} width={[190, 160, 175][r]} height="26" rx="13" fill={[C.green, C.indigo, C.amber][r]} />
        </g>
      ))}
      {[0, 1, 2, 3, 4].map(i => <Star key={i} x={260 + i * 40} y={252} r={15} />)}
    </Card>
  ),
  表現: () => (
    <Card bg="lilac">
      <P cast="staff" x={240} y={FLOOR} h={H} armL={[110, 140]} armR={[110, 140]} />
      <Bubble x={100} y={80} w={100} h={60} tail="r"><Heart x={0} y={2} s={1.4} /></Bubble>
      <Bubble x={380} y={80} w={100} h={60} tail="l"><Txt x={0} y={2} size={32} color={C.amber} weight={900}>!</Txt></Bubble>
      <Bubble x={240} y={44} w={110} h={50} tail="none"><Sparkle x={-22} y={0} r={10} /><Sparkle x={8} y={0} r={8} color={C.indigoL} /><Sparkle x={32} y={0} r={6} color={C.rose} /></Bubble>
    </Card>
  ),
  内容: () => (
    <Card bg="warm" floor={false}>
      <Doc x={190} y={160} w={190} h={250} lines={9} />
      <Magnifier x={290} y={150} r={62} rot={-40}>
        {[0, 1, 2, 3].map(i => <rect key={i} x={240} y={118 + i * 20} width={i === 3 ? 60 : 100} height="9" rx="4" fill={i === 1 ? C.amber : '#94a3b8'} />)}
      </Magnifier>
    </Card>
  ),
  述べる: () => (
    <Card bg="meeting">
      <rect x={180} y={196} width="90" height={FLOOR - 196} rx="4" fill="#8f7357" />
      <rect x={172} y={190} width="106" height="12" rx="4" fill="#a8896a" />
      <rect x={220} y={166} width="4" height="26" fill="#334155" /><circle cx={222} cy={164} r="6" fill="#334155" />
      <P cast="boss" x={225} y={FLOOR} h={H} armL={[60, 120]} />
      <Bubble x={350} y={70} w={150} h={64} tail="l"><rect x="-56" y="-16" width="112" height="7" rx="3" fill="#cbd5e1" /><rect x="-56" y="0" width="90" height="7" rx="3" fill="#cbd5e1" /><rect x="-56" y="14" width="60" height="5" rx="2" fill="#e2e8f0" /></Bubble>
      {[60, 130, 400].map(bx => <P key={bx} cast="junior" back x={bx} y={FLOOR + 30} h={100} />)}
    </Card>
  ),
  場合: () => (
    <Card bg="street">
      <path d={`M 240 ${FLOOR} L 240 210 L 120 120 M 240 210 L 360 120`} fill="none" stroke="#94a3b8" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M 240 ${FLOOR} L 240 210 L 120 120 M 240 210 L 360 120`} fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="10 10" />
      <circle cx={100} cy={70} r="26" fill="#fbbf24" />
      {Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return <line key={i} x1={100 + Math.cos(a) * 34} y1={70 + Math.sin(a) * 34} x2={100 + Math.cos(a) * 44} y2={70 + Math.sin(a) * 44} stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" /> })}
      <g><ellipse cx={380} cy={66} rx="44" ry="22" fill="#94a3b8" /><ellipse cx={356} cy={58} rx="24" ry="20" fill="#94a3b8" />{[350, 372, 394].map(rx => <line key={rx} x1={rx} y1={96} x2={rx - 6} y2={112} stroke={C.sky} strokeWidth="4" strokeLinecap="round" />)}</g>
      <P cast="junior" x={240} y={FLOOR} h={130} />
    </Card>
  ),
  状況: () => (
    <Card bg="office">
      <Monitor x={60} y={36} w={280} h={170}>
        <rect x="0" y="0" width="266" height="22" fill={C.indigo} />
        <Chart x={14} y={140} w={120} h={90} bars={[0.5, 0.7, 0.4, 0.9]} />
        {[0, 1, 2].map(i => <g key={i}><circle cx={168} cy={48 + i * 32} r="9" fill={[C.green, C.amber, C.rose][i]} /><rect x={184} y={44 + i * 32} width="66" height="8" rx="3" fill="#cbd5e1" /></g>)}
      </Monitor>
      <P cast="boss" x={400} y={FLOOR} h={H} armL={[60, 100]} />
    </Card>
  ),
  示す: () => (
    <Card bg="meeting">
      <Board x={160} y={34} w={270} h={150}>
        <Chart x={30} y={130} w={200} h={100} bars={[0.3, 0.5, 0.7, 0.95]} hi={3} />
      </Board>
      <P cast="staff" x={100} y={FLOOR} h={H} armR={[120, 120]} />
      <line x1={140} y1={128} x2={350} y2={70} stroke="#7c4a24" strokeWidth="4" strokeLinecap="round" />
    </Card>
  ),
  場面: () => (
    <Card bg="rose">
      <rect x={30} y={20} width="420" height="20" fill="#9f1239" />
      <path d="M 30 40 L 120 40 Q 90 160 110 270 L 30 270 Z" fill="#be123c" />
      <path d="M 450 40 L 360 40 Q 390 160 370 270 L 450 270 Z" fill="#be123c" />
      <rect x={20} y={262} width="440" height="28" fill="#a16207" />
      <P cast="boss" x={190} y={262} h={150} armR={[50, 90]} />
      <P cast="staff" x={290} y={262} h={144} armL={[30, 60]} />
      <Bubble x={240} y={80} w={70} h={40} tail="l"><rect x="-22" y="-4" width="44" height="7" rx="3" fill="#cbd5e1" /></Bubble>
    </Card>
  ),
  課題: () => (
    <Card bg="warm" floor={false}>
      <Clipboard x={190} y={170} w={190} h={240}>
        <Checklist x={-70} y={-80} rows={6} w={140} checked={[0, 1]} hi={2} gap={30} />
      </Clipboard>
      <circle cx={370} cy={110} r="44" fill={C.rose} />
      <Txt x={370} y={112} size={56} color="#fff" weight={900}>!</Txt>
      <Pencil370 />
    </Card>
  ),
  理解: () => (
    <Card bg="mint">
      <P cast="junior" x={240} y={FLOOR} h={H} />
      <Bulb x={240} y={64} s={1.2} />
      <circle cx={340} cy={150} r="26" fill={C.green} /><Check x={340} y={150} color="#fff" s={0.9} />
      <Doc x={130} y={190} w={70} h={86} rot={-10} lines={4} />
    </Card>
  ),
  コミュニケーション: () => (
    <Card bg="lilac">
      <P cast="staff" x={110} y={FLOOR} h={H - 6} armR={[40, 70]} />
      <P cast="client" x={370} y={FLOOR} h={H} armL={[40, 70]} />
      <Bubble x={190} y={70} w={110} h={54} tail="l"><rect x="-38" y="-8" width="76" height="7" rx="3" fill={C.indigoL} /><rect x="-38" y="6" width="50" height="6" rx="3" fill="#cbd5e1" /></Bubble>
      <Bubble x={290} y={130} w={110} h={54} tail="r" color="#ecfdf5"><rect x="-38" y="-8" width="76" height="7" rx="3" fill={C.greenL} /><rect x="-38" y="6" width="50" height="6" rx="3" fill="#cbd5e1" /></Bubble>
      <Heart x={240} y={210} s={1.1} />
    </Card>
  ),
  確認: () => (
    <Card bg="mint" floor={false}>
      <Doc x={180} y={160} w={180} h={240} lines={8} />
      <circle cx={320} cy={120} r="56" fill={C.green} />
      <Check x={320} y={122} s={1.8} color="#fff" />
      <Magnifier x={350} y={240} r={30} rot={-30}><Check x={350} y={240} s={0.8} /></Magnifier>
    </Card>
  ),
  形式: () => (
    <Card bg="cool" floor={false}>
      {[110, 240, 370].map((dx, i) => (
        <Doc key={dx} x={dx} y={160} w={104} h={150} lines={0} head={[C.indigo, C.green, C.amber][i]}>
          <rect x={-40} y={-36} width="80" height="30" rx="3" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
          <rect x={-40} y={2} width="80" height="7" rx="3" fill="#cbd5e1" /><rect x={-40} y={16} width="80" height="7" rx="3" fill="#cbd5e1" />
          <rect x={-40} y={36} width="36" height="20" rx="3" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
          <rect x={4} y={36} width="36" height="20" rx="3" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 3" />
        </Doc>
      ))}
    </Card>
  ),
  適切: () => (
    <Card bg="mint" floor={false}>
      <rect x={60} y={190} width="360" height="90" rx="10" fill="#94a3b8" />
      <circle cx={130} cy={235} r="28" fill="#475569" />
      <rect x={212} y={207} width="56" height="56" fill="#475569" />
      <path d="M 340 207 L 370 263 L 310 263 Z" fill="#475569" />
      <rect x={212} y={70} width="56" height="56" rx="2" fill={C.green} />
      <Arrow x1={240} y1={134} x2={240} y2={196} color={C.green} w={5} />
      <circle cx={130} cy={110} r="24" fill="#cbd5e1" /><Cross x={130} y={110} s={0.8} />
      <circle cx={340} cy={110} r="24" fill="#cbd5e1" /><Cross x={340} y={110} s={0.8} />
      <Check x={300} y={98} s={1} />
    </Card>
  ),
  部分: () => (
    <Card bg="lilac" floor={false}>
      <circle cx={210} cy={165} r="100" fill={C.indigoL} />
      <path d="M 210 165 L 210 65 A 100 100 0 0 1 296 115 Z" fill={C.indigoL} />
      <path d="M 238 140 L 238 40 A 100 100 0 0 1 324 90 Z" fill={C.amber} stroke="#fff" strokeWidth="4" />
      {[30, 150, 230, 300].map(a => { const r = (a - 90) * Math.PI / 180; return <line key={a} x1={210} y1={165} x2={210 + Math.cos(r) * 100} y2={165 + Math.sin(r) * 100} stroke="#fff" strokeWidth="4" /> })}
      <Sparkle x={370} y={70} r={12} />
    </Card>
  ),
  かかわる: () => (
    <Card bg="cool" floor={false}>
      <Box x={200} y={190} w={80} h={66} color={C.indigo} />
      {[[80, 70], [400, 70], [70, 250], [410, 250], [240, 270]].map(([px, py], i) => (
        <g key={i}>
          <line x1={240} y1={157} x2={px} y2={py} stroke="#94a3b8" strokeWidth="3" strokeDasharray="5 5" />
          <circle cx={px} cy={py} r="26" fill="#fff" stroke={[C.amber, C.green, C.rose, C.indigo, C.sky][i]} strokeWidth="4" />
          <circle cx={px} cy={py - 6} r="8" fill={[C.amber, C.green, C.rose, C.indigo, C.sky][i]} />
          <path d={`M ${px - 13} ${py + 15} Q ${px} ${py - 2} ${px + 13} ${py + 15}`} fill={[C.amber, C.green, C.rose, C.indigo, C.sky][i]} />
        </g>
      ))}
      <Box x={200} y={190} w={80} h={66} color={C.indigo} />
    </Card>
  ),
  問いかける: () => (
    <Card bg="meeting">
      <P cast="boss" x={110} y={FLOOR} h={H} armR={[60, 100]} />
      <Bubble x={190} y={64} w={90} h={60} tail="l"><Q x={0} y={2} size={38} /></Bubble>
      {[280, 350, 420].map((bx, i) => (
        <g key={bx}>
          <P cast={i === 1 ? 'staff' : 'junior'} back x={bx} y={FLOOR + 20} h={120} />
          <circle cx={bx + 18} cy={150 - (i % 2) * 10} r="5" fill="#cbd5e1" /><circle cx={bx + 26} cy={136 - (i % 2) * 10} r="8" fill="#e2e8f0" />
        </g>
      ))}
    </Card>
  ),
  知識: () => (
    <Card bg="warm">
      <Books x={160} y={FLOOR} n={6} />
      <Books x={300} y={FLOOR} n={3} colors={['#8b5cf6', '#10b981', '#f43f5e']} />
      <Bulb x={230} y={70} s={1.2} />
      <Sparkle x={130} y={110} r={10} /><Sparkle x={340} y={160} r={8} />
    </Card>
  ),
  対応: () => (
    <Card bg="office">
      <Desk x={150} y={214} w={200} />
      <P cast="staff" x={250} y={FLOOR - 10} h={H - 20} pose="chair" armR={[40, -60]} />
      <Headphones x={250} y={FLOOR - 10 - 1.5 * 67 - 8} s={0.36} />
      <Monitor x={300} y={140} w={80} h={56}><Check x={33} y={21} s={0.7} /></Monitor>
      <Bubble x={90} y={80} w={110} h={58} tail="r" color="#ffe4e6"><Q x={-20} y={2} size={30} color={C.rose} /><Anger x={22} y={0} s={0.8} /></Bubble>
      <Arrow x1={150} y1={110} x2={210} y2={140} color={C.green} w={4} />
    </Card>
  ),
  把握: () => (
    <Card bg="cool" floor={false}>
      <rect x={50} y={40} width="380" height="240" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Chart x={80} y={250} w={150} h={140} bars={[0.4, 0.6, 0.5, 0.8]} />
      {[0, 1, 2, 3].map(i => <rect key={i} x={260} y={80 + i * 34} width={140 - (i % 2) * 30} height="12" rx="5" fill="#cbd5e1" />)}
      <rect x={60} y={50} width="360" height="220" rx="10" fill="none" stroke={C.amber} strokeWidth="6" strokeDasharray="14 10" />
      <circle cx={240} cy={160} r="30" fill={C.amber} opacity="0.9" /><Check x={240} y={160} color="#fff" />
    </Card>
  ),
  人物: () => (
    <Card bg="rose" floor={false}>
      <rect x={110} y={40} width="260" height="240" rx="14" fill="#fff" stroke="#fecdd3" strokeWidth="3" />
      <circle cx={240} cy={130} r="64" fill="#ffe4e6" />
      <P cast="client" x={240} y={280} h={230} />
      <rect x={110} y={210} width="260" height="70" rx="0" fill="#fff" />
      <rect x={110} y={270} width="260" height="10" rx="5" fill="#fff" />
      <rect x={160} y={226} width="160" height="10" rx="4" fill={C.ink} />
      <rect x={180} y={246} width="120" height="7" rx="3" fill="#cbd5e1" />
      <Star x={340} y={70} r={14} />
    </Card>
  ),
  変更: () => (
    <Card bg="lilac" floor={false}>
      <Calendar x={70} y={70} w={150} cross={[10]} />
      <Calendar x={280} y={70} w={150} ring={[17]} mark={[17]} />
      <Arrow x1={226} y1={150} x2={270} y2={150} color={C.indigo} />
    </Card>
  ),
}

function Pencil370() {
  return <g transform="translate(410 230) rotate(30)"><rect x="-6" y="-60" width="12" height="52" fill={C.amber} /><path d="M -6 -8 L 6 -8 L 0 6 Z" fill="#fcd9a8" /></g>
}
