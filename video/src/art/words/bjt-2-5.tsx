/** Word pictures for BJT 2-5 (general words and test terms). */
import type { ReactNode } from 'react'
import {
  Arrow, Box, Bubble, Bulb, C, Calendar, Card, Check, Doc, FLOOR, Heart, Maru, P, Pencil, Sparkle, Star, Table, Txt, Waves,
} from './kit'

const H = 170

function Flag({ x, y, color = C.rose, h = 120 }: { x: number; y: number; color?: string; h?: number }) {
  return <g><rect x={x - 3} y={y - h} width="6" height={h} fill="#475569" /><path d={`M ${x + 3} ${y - h} L ${x + 63} ${y - h + 18} L ${x + 3} ${y - h + 38} Z`} fill={color} /></g>
}

function Cloud({ x, y, s = 1, dashed }: { x: number; y: number; s?: number; dashed?: boolean }) {
  return (
    <path transform={`translate(${x} ${y}) scale(${s})`} d="M -50 20 Q -70 20 -70 0 Q -70 -22 -46 -22 Q -40 -46 -12 -44 Q 10 -60 34 -40 Q 64 -42 64 -12 Q 80 -6 74 12 Q 70 22 56 22 Z"
      fill="#fff" stroke={dashed ? '#94a3b8' : '#cbd5e1'} strokeWidth="3" strokeDasharray={dashed ? '8 6' : undefined} />
  )
}

function Link({ x, y, rot = 0, color = C.slate }: { x: number; y: number; rot?: number; color?: string }) {
  return <rect x={x - 30} y={y - 14} width="60" height="28" rx="14" fill="none" stroke={color} strokeWidth="8" transform={`rotate(${rot} ${x} ${y})`} />
}

export const SCENES: Record<string, () => ReactNode> = {
  希望: () => (
    <Card bg="warm">
      <circle cx={360} cy={FLOOR} r="90" fill="#fde68a" />
      <circle cx={360} cy={FLOOR} r="60" fill="#fbbf24" />
      {Array.from({ length: 7 }, (_, i) => { const a = Math.PI + (i + 1) * Math.PI / 8; return <line key={i} x1={360 + Math.cos(a) * 104} y1={FLOOR + Math.sin(a) * 104} x2={360 + Math.cos(a) * 128} y2={FLOOR + Math.sin(a) * 128} stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" /> })}
      <P cast="junior" x={150} y={FLOOR} h={H} back />
      <Star x={320} y={60} r={18} /><Sparkle x={250} y={90} r={10} /><Sparkle x={420} y={70} r={8} />
    </Card>
  ),
  挙げる: () => (
    <Card bg="meeting">
      <Table x={30} y={232} w={420} />
      <P cast="client" x={90} y={FLOOR - 10} h={146} pose="chair" />
      <P cast="staff" x={240} y={FLOOR - 10} h={146} pose="chair" armR={[170, 178]} />
      <P cast="junior" x={390} y={FLOOR - 10} h={146} pose="chair" />
      <Sparkle x={290} y={50} r={10} />
    </Card>
  ),
  現実: () => (
    <Card bg="lilac">
      <Cloud x={150} y={90} s={1.4} dashed />
      <g opacity="0.5">
        <path d="M 130 96 L 150 70 L 170 96 Z M 120 96 L 180 96 L 176 120 L 124 120 Z" fill={C.amber} />
        <Star x={150} y={56} r={10} />
      </g>
      <Arrow x1={190} y1={150} x2={260} y2={190} color={C.slate} w={4} />
      <rect x={270} y={206} width="160" height="12" rx="4" fill="#a8896a" /><rect x={280} y={218} width="140" height={FLOOR - 218} fill="#8f7357" />
      {[0, 1, 2, 3].map(i => <Doc key={i} x={340 + (i % 2) * 4} y={198 - i * 10} w={90} h={12} lines={0} head="#cbd5e1" />)}
      <P cast="junior" x={420} y={FLOOR} h={H - 20} armL={[30, 50]} />
    </Card>
  ),
  留意点: () => (
    <Card bg="warm" floor={false}>
      <Doc x={210} y={160} w={260} h={250} lines={0} head={C.slate}>
        {Array.from({ length: 6 }, (_, i) => <rect key={i} x={-110} y={-80 + i * 24} width={i % 3 === 2 ? 140 : 220} height="7" rx="3" fill="#cbd5e1" />)}
        <rect x={-116} y={68} width="232" height="40" rx="6" fill={C.amberL} />
        <Txt x={-94} y={88} size={28} color={C.rose} weight={900}>※</Txt>
        <rect x={-70} y={84} width="160" height="8" rx="3" fill={C.ink} />
      </Doc>
      <circle cx={400} cy={80} r="30" fill={C.rose} /><Txt x={400} y={82} size={38} color="#fff" weight={900}>!</Txt>
    </Card>
  ),
  登場: () => (
    <Card bg="rose">
      <rect x={20} y={20} width="440" height="20" fill="#9f1239" />
      <path d="M 20 40 L 170 40 Q 120 160 150 262 L 20 262 Z" fill="#be123c" />
      <path d="M 460 40 L 310 40 Q 360 160 330 262 L 460 262 Z" fill="#be123c" />
      <path d="M 200 40 L 280 40 L 320 262 L 160 262 Z" fill="#fef9c3" opacity="0.8" />
      <rect x={10} y={262} width="460" height="28" fill="#a16207" />
      <P cast="boss" x={240} y={262} h={160} armL={[100, 140]} armR={[100, 140]} />
      <Sparkle x={180} y={90} r={12} /><Sparkle x={300} y={80} r={10} />
    </Card>
  ),
  解決: () => (
    <Card bg="mint" floor={false}>
      <path d="M 50 160 C 80 60 140 260 120 140 C 100 40 60 240 160 180 C 220 140 120 100 170 150" fill="none" stroke={C.rose} strokeWidth="6" strokeLinecap="round" />
      <Arrow x1={200} y1={160} x2={260} y2={160} color={C.slate} w={6} />
      <line x1={280} y1={160} x2={440} y2={160} stroke={C.green} strokeWidth="8" strokeLinecap="round" />
      <circle cx={360} cy={90} r="30" fill={C.green} /><Check x={360} y={92} color="#fff" />
    </Card>
  ),
  開始: () => (
    <Card bg="street">
      <rect x={20} y={FLOOR - 10} width="440" height="10" fill="#fff" />
      <rect x={190} y={40} width="10" height={FLOOR - 40} fill="#64748b" /><rect x={420} y={40} width="10" height={FLOOR - 40} fill="#64748b" />
      <rect x={180} y={30} width="260" height="46" rx="8" fill={C.green} />
      <Txt x={310} y={54} size={28} color="#fff" weight={900}>START</Txt>
      <P cast="junior" x={110} y={FLOOR} h={H - 10} armR={[150, 170]} />
      <Arrow x1={240} y1={220} x2={380} y2={220} color={C.green} w={8} />
    </Card>
  ),
  関連: () => (
    <Card bg="cool" floor={false}>
      {[[110, 90, C.indigo], [370, 90, C.green], [110, 240, C.amber], [370, 240, C.rose]].map(([x, y, c], i) => (
        <g key={i}><line x1={240} y1={165} x2={x as number} y2={y as number} stroke="#94a3b8" strokeWidth="4" />
          <circle cx={x as number} cy={y as number} r="34" fill={c as string} /></g>
      ))}
      <Link x={175} y={128} rot={30} /><Link x={305} y={202} rot={30} />
      <circle cx={240} cy={165} r="40" fill="#fff" stroke={C.slate} strokeWidth="5" />
      <Link x={240} y={165} rot={-20} color={C.indigo} />
    </Card>
  ),
  一般的: () => (
    <Card bg="lilac" floor={false}>
      <path d="M 40 260 C 140 260 170 70 240 70 C 310 70 340 260 440 260 Z" fill={C.indigoL} />
      <path d="M 180 260 C 200 170 216 74 240 70 C 264 74 280 170 300 260 Z" fill={C.indigo} />
      <line x1={30} y1={262} x2={450} y2={262} stroke={C.slate} strokeWidth="4" />
      <line x1={240} y1={40} x2={240} y2={262} stroke={C.amber} strokeWidth="4" strokeDasharray="8 6" />
    </Card>
  ),
  与える: () => (
    <Card bg="warm">
      <P cast="boss" x={140} y={FLOOR} h={H + 6} armR={[52, 96]} />
      <circle cx={232} cy={168} r="22" fill={C.amber} /><Star x={232} y={168} r={13} color="#fff" />
      <path d="M 222 188 L 216 214 L 232 204 L 248 214 L 242 188 Z" fill={C.rose} />
      <P cast="junior" x={350} y={FLOOR} h={H - 14} armL={[40, 70]} />
      <Arrow x1={190} y1={120} x2={300} y2={120} color={C.amber} w={5} />
      <Sparkle x={350} y={80} r={10} />
    </Card>
  ),
  中心: () => (
    <Card bg="mint">
      {[[90, 'client'], [160, 'shopper'], [320, 'junior'], [390, 'staff']].map(([x, cast]) => <P key={x as number} cast={cast as 'staff'} x={x as number} y={FLOOR} h={140} />)}
      <ellipse cx={240} cy={FLOOR} rx="50" ry="12" fill={C.amber} />
      <P cast="boss" x={240} y={FLOOR} h={H} />
      <Arrow x1={120} y1={90} x2={200} y2={120} color={C.green} w={4} />
      <Arrow x1={360} y1={90} x2={280} y2={120} color={C.green} w={4} />
    </Card>
  ),
  今後: () => (
    <Card bg="street">
      <path d={`M 160 ${FLOOR} L 230 120 L 250 120 L 330 ${FLOOR} Z`} fill="#94a3b8" />
      <path d={`M 244 ${FLOOR} L 241 120`} stroke="#fff" strokeWidth="4" strokeDasharray="12 10" />
      <circle cx={240} cy={110} r="34" fill="#fde68a" />
      <P cast="junior" x={150} y={FLOOR} h={H - 20} back />
      <Arrow x1={240} y1={250} x2={240} y2={160} color={C.green} w={7} />
      <Calendar x={360} y={60} w={90} mark={[20, 21, 22, 23, 24, 25, 26, 27]} />
    </Card>
  ),
  候補: () => (
    <Card bg="lilac" floor={false}>
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={40 + i * 145} y={60} width="125" height="200" rx="12" fill="#fff" stroke={i === 1 ? C.amber : '#cbd5e1'} strokeWidth={i === 1 ? 5 : 2} />
          <circle cx={102 + i * 145} cy={120} r="32" fill={[C.indigoL, C.amberL, C.greenL][i]} />
          <circle cx={102 + i * 145} cy={112} r="12" fill={[C.indigo, C.amber, C.green][i]} /><path d={`M ${80 + i * 145} ${146} Q ${102 + i * 145} ${118} ${124 + i * 145} ${146} Z`} fill={[C.indigo, C.amber, C.green][i]} />
          <rect x={66 + i * 145} y={172} width="72" height="8" rx="3" fill="#cbd5e1" /><rect x={66 + i * 145} y={190} width="52" height="8" rx="3" fill="#e2e8f0" />
          <Txt x={102 + i * 145} y={232} size={28} color={C.slate} weight={900}>?</Txt>
        </g>
      ))}
    </Card>
  ),
  具体: () => (
    <Card bg="cool" floor={false}>
      <Cloud x={130} y={160} s={1.3} dashed />
      <Txt x={130} y={160} size={34} color="#94a3b8" weight={900}>…</Txt>
      <Arrow x1={230} y1={160} x2={290} y2={160} color={C.indigo} w={6} />
      <path d="M 320 120 L 380 96 L 440 120 L 440 210 L 380 234 L 320 210 Z" fill={C.indigo} />
      <path d="M 320 120 L 380 144 L 440 120 L 380 96 Z" fill={C.indigoL} />
      <path d="M 380 144 L 380 234 L 440 210 L 440 120 Z" fill="#3730a3" />
    </Card>
  ),
  具体的: () => (
    <Card bg="mint">
      <P cast="junior" x={90} y={FLOOR} h={H - 10} armR={[40, 70]} />
      <Bubble x={300} y={130} w={280} h={190} tail="l">
        <g transform="translate(-110 -60)">
          <circle cx="16" cy="12" r="14" fill="#fff" stroke="#475569" strokeWidth="3" /><path d="M 16 12 L 16 4 M 16 12 L 22 15" stroke="#334155" strokeWidth="2.5" />
          <Txt x={110} y={12} size={22} color={C.ink} weight={800}>10:00</Txt>
        </g>
        <g transform="translate(-110 -6)">
          <path d="M 16 24 q -12 -14 -12 -22 a 12 12 0 1 1 24 0 q 0 8 -12 22 Z" fill={C.rose} />
          <rect x={40} y={2} width="130" height="10" rx="4" fill="#cbd5e1" />
        </g>
        <g transform="translate(-110 48)">
          <circle cx="16" cy="10" r="13" fill="#fbbf24" /><Txt x={16} y={11} size={14} color="#92400e" weight={800}>¥</Txt>
          <Txt x={110} y={10} size={22} color={C.ink} weight={800}>3,000</Txt>
        </g>
      </Bubble>
    </Card>
  ),
  同様: () => (
    <Card bg="lilac" floor={false}>
      <rect x={70} y={100} width="120" height="120" rx="20" fill={C.indigo} /><circle cx={130} cy={160} r="28" fill={C.indigoL} />
      <rect x={290} y={100} width="120" height="120" rx="20" fill="#6366f1" /><circle cx={350} cy={160} r="28" fill={C.indigoL} />
      <rect x={214} y={140} width="52" height="10" rx="5" fill={C.slate} /><rect x={214} y={170} width="52" height="10" rx="5" fill={C.slate} />
    </Card>
  ),
  基本的: () => (
    <Card bg="warm">
      {[['A', C.rose, 110], ['B', C.indigo, 200], ['C', C.green, 290]].map(([t, c, x]) => (
        <g key={t as string}>
          <rect x={(x as number) - 40} y={FLOOR - 80} width="80" height="80" rx="8" fill={c as string} />
          <rect x={(x as number) - 30} y={FLOOR - 70} width="60" height="60" rx="6" fill="#fff" opacity="0.25" />
          <Txt x={x as number} y={FLOOR - 38} size={44} color="#fff" weight={900}>{t}</Txt>
        </g>
      ))}
      <rect x={160} y={FLOOR - 162} width="80" height="80" rx="8" fill={C.amber} />
      <Txt x={200} y={FLOOR - 120} size={44} color="#fff" weight={900}>1</Txt>
      <P cast="junior" x={410} y={FLOOR} h={H - 20} armL={[40, 70]} />
    </Card>
  ),
  好ましい: () => (
    <Card bg="rose" floor={false}>
      <rect x={60} y={70} width="240" height="180" rx="16" fill="#fff" stroke="#fecdd3" strokeWidth="3" />
      {[0, 1, 2, 3, 4].map(i => <Star key={i} x={94 + i * 43} y={120} r={18} />)}
      <rect x={90} y={160} width="180" height="10" rx="4" fill="#cbd5e1" /><rect x={90} y={182} width="140" height="10" rx="4" fill="#cbd5e1" />
      <Heart x={380} y={140} s={3.2} />
      <Sparkle x={430} y={70} r={10} />
    </Card>
  ),
  想像: () => (
    <Card bg="lilac">
      <P cast="staff" x={120} y={FLOOR} h={H} armR={[150, 175]} />
      {[[156, 112, 6], [174, 92, 10]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" stroke="#cbd5e1" strokeWidth="2" />)}
      <Cloud x={320} y={110} s={1.9} />
      <path d="M 300 150 L 300 90 L 316 70 L 332 90 L 332 150 Z" fill={C.indigoL} />
      <path d="M 300 120 L 284 150 L 300 150 Z M 332 120 L 348 150 L 332 150 Z" fill={C.rose} />
      <circle cx={316} cy={100} r="7" fill="#fff" />
      <Star x={380} y={78} r={10} /><Sparkle x={260} y={80} r={8} />
    </Card>
  ),
  手段: () => (
    <Card bg="mint" floor={false}>
      <circle cx={70} cy={160} r="26" fill={C.indigo} />
      <Flag x={420} y={220} color={C.rose} h={100} />
      <path d="M 96 160 C 200 40 300 60 410 150" fill="none" stroke={C.amber} strokeWidth="6" strokeDasharray="12 8" />
      <path d="M 96 160 L 410 170" fill="none" stroke={C.indigo} strokeWidth="6" strokeDasharray="12 8" />
      <path d="M 96 160 C 200 280 300 270 410 190" fill="none" stroke={C.green} strokeWidth="6" strokeDasharray="12 8" />
      <circle cx={240} cy={78} r="18" fill={C.amber} /><circle cx={240} cy={166} r="18" fill={C.indigo} /><circle cx={240} cy={252} r="18" fill={C.green} />
      <Txt x={240} y={79} size={16} color="#fff">1</Txt><Txt x={240} y={167} size={16} color="#fff">2</Txt><Txt x={240} y={253} size={16} color="#fff">3</Txt>
    </Card>
  ),
  活動: () => (
    <Card bg="mint">
      <P cast="junior" x={110} y={FLOOR} h={H - 10} top="tshirt" topColor="#22c55e" tie="none" armR={[150, 170]} itemR={<g><line x1="0" y1="0" x2="0" y2="-40" stroke="#475569" strokeWidth="2" /><path d="M 0 -40 L 26 -32 L 0 -24 Z" fill={C.amber} /></g>} />
      <P cast="staff" x={240} y={FLOOR} h={H - 14} top="tshirt" topColor="#22c55e" armL={[40, 70]} armR={[40, 70]} />
      <Box x={212} y={210} w={56} h={40} color="#86efac" />
      <P x={370} y={FLOOR} h={H - 10} hair="ponytail" female top="tshirt" topColor="#22c55e" bottom="shorts" bottomColor="#334155" armL={[150, 160]} />
      {[[60, 80], [430, 70], [300, 60]].map(([sx, sy], i) => <Sparkle key={i} x={sx} y={sy} r={10} />)}
    </Card>
  ),
  程度: () => (
    <Card bg="cool" floor={false}>
      <rect x={90} y={40} width="50" height="210" rx="25" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
      <rect x={100} y={110} width="30" height="134" rx="15" fill={C.rose} />
      <circle cx={115} cy={262} r="36" fill={C.rose} stroke="#94a3b8" strokeWidth="3" />
      {[0, 1, 2, 3, 4].map(i => <line key={i} x1={146} y1={60 + i * 40} x2={164} y2={60 + i * 40} stroke={C.slate} strokeWidth="3" />)}
      <rect x={230} y={150} width="210" height="16" rx="8" fill="#e2e8f0" />
      <rect x={230} y={150} width="140" height="16" rx="8" fill={C.indigo} />
      <circle cx={370} cy={158} r="18" fill="#fff" stroke={C.indigo} strokeWidth="5" />
      <Txt x={370} y={116} size={22} color={C.indigo} weight={900}>70%</Txt>
    </Card>
  ),
  設問: () => (
    <Card bg="warm" floor={false}>
      <Doc x={230} y={160} w={270} h={260} lines={0} head={C.ink}>
        {['問1', '問2', '問3'].map((t, i) => (
          <g key={t}>
            <rect x={-118} y={-86 + i * 70} width="50" height="30" rx="6" fill={i === 1 ? C.amber : C.indigoL} />
            <Txt x={-93} y={-71 + i * 70} size={16} color="#fff">{t}</Txt>
            <rect x={-58} y={-80 + i * 70} width="140" height="8" rx="3" fill="#cbd5e1" /><rect x={-58} y={-64 + i * 70} width="100" height="8" rx="3" fill="#e2e8f0" />
          </g>
        ))}
      </Doc>
      <Txt x={420} y={80} size={60} color={C.amber} weight={900}>?</Txt>
    </Card>
  ),
  採点: () => (
    <Card bg="rose" floor={false}>
      <Doc x={200} y={160} w={230} h={260} lines={0} head={C.ink}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <rect x={-90} y={-60 + i * 40} width="120" height="8" rx="3" fill="#cbd5e1" />
            {i === 2 ? <path d={`M 50 ${-62 + i * 40} l 14 14 M 64 ${-62 + i * 40} l -14 14`} stroke="#dc2626" strokeWidth="3" /> : <circle cx={57} cy={-56 + i * 40} r="9" fill="none" stroke="#dc2626" strokeWidth="3" />}
          </g>
        ))}
      </Doc>
      <circle cx={340} cy={80} r="46" fill="none" stroke="#dc2626" strokeWidth="5" />
      <Txt x={340} y={82} size={40} color="#dc2626" weight={900}>75</Txt>
      <g transform="translate(410 250) rotate(30)"><rect x="-7" y="-80" width="14" height="70" rx="3" fill="#dc2626" /><path d="M -7 -10 L 7 -10 L 0 6 Z" fill="#7f1d1d" /></g>
    </Card>
  ),
  発話: () => (
    <Card bg="lilac">
      <P cast="boss" x={120} y={FLOOR} h={H} armR={[60, 100]} />
      <Waves x={150} y={110} color={C.indigo} n={3} />
      <g transform="translate(320 120)">
        {[16, 40, 26, 58, 36, 64, 30, 46, 20, 34].map((h, i) => <rect key={i} x={-80 + i * 16} y={-h / 2} width="10" height={h} rx="5" fill={C.indigo} />)}
      </g>
      <Bubble x={320} y={220} w={170} h={50} tail="none"><rect x="-60" y="-4" width="120" height="8" rx="4" fill="#cbd5e1" /></Bubble>
    </Card>
  ),
}
