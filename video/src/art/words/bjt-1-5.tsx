/** Word pictures for BJT 1-5 (general words and test terms). */
import type { ReactNode } from 'react'
import {
  Anger, Arrow, Books, Box, Bubble, Bulb, C, Card, Chart, Check, Cone, Cross, Desk, Doc, FLOOR, Headphones, Helmet,
  Laptop, Magnifier, Maru, Monitor, P, Pencil, Phone, Plant, Sparkle, Speaker, Target, Txt, Waves,
} from './kit'

const H = 170
const Q = ({ x, y, size = 30, color = C.indigo }: { x: number; y: number; size?: number; color?: string }) => <Txt x={x} y={y} size={size} color={color} weight={900}>?</Txt>

/** An answer sheet: rows of four bubbles; `fill` maps row -> filled choice. */
function Sheet({ x, y, w = 150, h = 190, rows = 5, fill = {}, rot = 0, children }: { x: number; y: number; w?: number; h?: number; rows?: number; fill?: Record<number, number>; rot?: number; children?: ReactNode }) {
  return (
    <Doc x={x} y={y} w={w} h={h} lines={0} head={C.ink} rot={rot}>
      {Array.from({ length: rows }, (_, r) => (
        <g key={r}>
          <Txt x={-w / 2 + 16} y={-h / 2 + 40 + r * ((h - 54) / rows)} size={11} color={C.slate}>{r + 1}</Txt>
          {[0, 1, 2, 3].map(c => (
            <circle key={c} cx={-w / 2 + 38 + c * ((w - 50) / 4)} cy={-h / 2 + 40 + r * ((h - 54) / rows)} r="7"
              fill={fill[r] === c ? C.ink : '#fff'} stroke="#94a3b8" strokeWidth="1.5" />
          ))}
        </g>
      ))}
      {children}
    </Doc>
  )
}

/** A sentence strip of word blocks; `blank` is an empty box, `hi` highlighted. */
function Sentence({ x, y, widths, blank, hi = [], color = C.indigoL }: { x: number; y: number; widths: number[]; blank?: number; hi?: number[]; color?: string }) {
  let cx = x
  return <>{widths.map((w, i) => {
    const el = i === blank
      ? <rect key={i} x={cx} y={y - 18} width={w} height="36" rx="5" fill="#fff" stroke={C.rose} strokeWidth="3" strokeDasharray="6 4" />
      : <rect key={i} x={cx} y={y - 9} width={w} height="18" rx="5" fill={hi.includes(i) ? color : '#cbd5e1'} />
    cx += w + 10
    return el
  })}</>
}

export const SCENES: Record<string, () => ReactNode> = {
  現場: () => (
    <Card bg="warm">
      <rect x={300} y={40} width="10" height={FLOOR - 40} fill="#f59e0b" />
      <rect x={200} y={40} width="220" height="10" fill="#f59e0b" />
      <line x1={400} y1={50} x2={400} y2={140} stroke="#334155" strokeWidth="2" />
      <Box x={384} y={170} w={32} h={30} />
      <P cast="driver" x={170} y={FLOOR} h={H} topColor="#f97316" armR={[40, 80]} itemR={<rect x="-4" y="-22" width="22" height="28" rx="2" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />} />
      <Helmet x={170} y={FLOOR} s={H / 100} />
      <Cone x={70} y={FLOOR} s={1.2} /><Cone x={430} y={FLOOR} s={1.1} />
      <rect x={250} y={FLOOR - 40} width="120" height="40" fill="#d6a76a" /><rect x={250} y={FLOOR - 40} width="120" height="8" fill="#b08a5a" />
    </Card>
  ),
  画面: () => (
    <Card bg="office">
      <Monitor x={90} y={30} w={300} h={190}>
        <rect x="0" y="0" width="286" height="24" fill={C.indigo} />
        <circle cx={14} cy={12} r="4" fill="#fff" /><circle cx={28} cy={12} r="4" fill="#fff" />
        <rect x="14" y="38" width="120" height="80" rx="6" fill="#dbeafe" />
        <rect x="148" y="40" width="120" height="10" rx="4" fill="#cbd5e1" /><rect x="148" y="60" width="96" height="10" rx="4" fill="#cbd5e1" />
        <rect x="148" y="90" width="70" height="26" rx="8" fill={C.green} />
        <rect x="14" y="134" width="254" height="30" rx="6" fill="#f1f5f9" />
      </Monitor>
      <Sparkle x={420} y={60} r={12} />
    </Card>
  ),
  認識: () => (
    <Card bg="lilac" floor={false}>
      <path d="M 70 160 Q 200 40 330 160 Q 200 280 70 160 Z" fill="#fff" stroke={C.indigo} strokeWidth="6" />
      <circle cx={200} cy={160} r="48" fill={C.indigo} /><circle cx={200} cy={160} r="20" fill="#1e1b4b" /><circle cx={214} cy={146} r="8" fill="#fff" />
      <circle cx={390} cy={160} r="42" fill={C.green} /><Check x={390} y={162} color="#fff" s={1.3} />
    </Card>
  ),
  重要: () => (
    <Card bg="rose" floor={false}>
      <Doc x={190} y={160} w={200} h={250} lines={7} head={C.rose} />
      <g transform="translate(330 120) rotate(-12)">
        <rect x="-64" y="-34" width="128" height="68" rx="10" fill="none" stroke="#dc2626" strokeWidth="6" />
        <Txt x={0} y={2} size={48} color="#dc2626" weight={900}>!!</Txt>
      </g>
      <Star380 />
    </Card>
  ),
  不適切: () => (
    <Card bg="rose">
      <P cast="junior" x={120} y={FLOOR} h={H} armR={[40, 70]} />
      <P cast="client" x={360} y={FLOOR} h={H} />
      <Bubble x={190} y={70} w={150} h={64} tail="l"><rect x="-54" y="-12" width="108" height="8" rx="3" fill="#cbd5e1" /><rect x="-54" y="6" width="80" height="8" rx="3" fill="#cbd5e1" /></Bubble>
      <circle cx={262} cy={42} r="22" fill={C.rose} /><Cross x={262} y={42} color="#fff" s={0.6} w={6} />
      <Anger x={400} y={110} s={1.2} />
    </Card>
  ),
  大幅: () => (
    <Card bg="mint">
      <Chart x={80} y={FLOOR} w={300} h={230} bars={[0.18, 0.22, 0.2, 0.95]} hi={3} />
      <path d="M 120 220 Q 260 210 330 70" fill="none" stroke={C.green} strokeWidth="7" strokeLinecap="round" />
      <path d="M 330 70 L 312 82 M 330 70 L 336 92" stroke={C.green} strokeWidth="7" strokeLinecap="round" />
      <Txt x={420} y={80} size={30} color={C.green} weight={900}>×4</Txt>
    </Card>
  ),
  当然: () => (
    <Card bg="mint">
      <g transform="translate(130 120) rotate(-25)">
        <path d="M -40 -20 L 30 -20 L 40 20 L -40 20 Z" fill={C.sky} />
        <path d="M 30 -10 L 80 -30" stroke={C.sky} strokeWidth="10" strokeLinecap="round" />
        <path d="M -40 -20 Q -60 0 -40 20" fill="none" stroke="#0284c7" strokeWidth="6" />
      </g>
      {[[220, 150], [234, 176], [212, 196]].map(([dx, dy], i) => <path key={i} d={`M ${dx} ${dy} q 6 10 0 14 q -6 -4 0 -14 Z`} fill={C.sky} />)}
      <path d={`M 300 ${FLOOR} C 300 230 300 200 300 170`} stroke="#16a34a" strokeWidth="8" />
      <path d="M 300 200 Q 250 180 260 140 Q 300 160 300 200 Z" fill="#22c55e" />
      <path d="M 300 180 Q 350 160 346 120 Q 300 140 300 180 Z" fill="#4ade80" />
      <circle cx={300} cy={146} r="22" fill="#f472b6" /><circle cx={300} cy={146} r="9" fill="#fde047" />
      <path d={`M 260 ${FLOOR} L 340 ${FLOOR} L 330 ${FLOOR - 30} L 270 ${FLOOR - 30} Z`} fill="#c2410c" />
      <circle cx={410} cy={100} r="26" fill={C.green} /><Check x={410} y={102} color="#fff" s={0.9} />
    </Card>
  ),
  応じる: () => (
    <Card bg="cool">
      <P cast="shopper" x={110} y={FLOOR} h={H - 6} armR={[150, 170]} />
      <Bubble x={170} y={70} w={90} h={56} tail="l"><Q x={0} y={2} size={34} /></Bubble>
      <Arrow x1={180} y1={170} x2={290} y2={170} color={C.green} w={5} />
      <P cast="clerk" x={360} y={FLOOR} h={H - 6} armL={[50, 80]} />
      <Bubble x={330} y={70} w={90} h={56} tail="r" color="#ecfdf5"><Check x={0} y={2} s={1} /></Bubble>
    </Card>
  ),
  正確: () => (
    <Card bg="rose" floor={false}>
      <Target x={240} y={160} r={110} />
      <Sparkle x={400} y={60} r={14} /><Sparkle x={90} y={250} r={10} />
    </Card>
  ),
  測る: () => (
    <Card bg="warm">
      <Box x={120} y={FLOOR} w={170} h={120} />
      <rect x={110} y={140} width="190" height="24" rx="3" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
      {Array.from({ length: 19 }, (_, i) => <line key={i} x1={116 + i * 10} y1={140} x2={116 + i * 10} y2={i % 5 === 0 ? 156 : 148} stroke="#92400e" strokeWidth="2" />)}
      <path d="M 320 170 L 320 290 M 312 178 L 320 170 L 328 178 M 312 282 L 320 290 L 328 282" fill="none" stroke={C.indigo} strokeWidth="4" strokeLinecap="round" />
      <Txt x={380} y={230} size={28} color={C.indigo} weight={900}>30cm</Txt>
    </Card>
  ),
  通じる: () => (
    <Card bg="cool">
      <P cast="junior" x={100} y={FLOOR} h={H} armR={[150, 160]} itemR={<Phone x={0} y={-10} s={0.9} />} />
      <P cast="client" x={380} y={FLOOR} h={H} armL={[150, 160]} />
      <Waves x={150} y={110} color={C.indigo} />
      <Waves x={330} y={110} color={C.green} dir={-1} />
      <circle cx={240} cy={110} r="30" fill={C.green} /><Check x={240} y={112} color="#fff" s={1} />
      <path d="M 196 110 L 210 110 M 270 110 L 284 110" stroke={C.green} strokeWidth="4" strokeLinecap="round" />
    </Card>
  ),
  正解: () => (
    <Card bg="mint" floor={false}>
      <Sheet x={200} y={160} w={200} h={250} fill={{ 0: 1, 1: 3, 2: 0, 3: 2, 4: 1 }} />
      <Maru x={250} y={160} r={90} w={12} />
    </Card>
  ),
  選択肢: () => (
    <Card bg="lilac" floor={false}>
      <rect x={60} y={30} width="360" height="56" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x={80} y={52} width="220" height="10" rx="4" fill="#94a3b8" /><Q x={380} y={58} size={28} />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x={60 + (i % 2) * 184} y={110 + Math.floor(i / 2) * 90} width="176" height="74" rx="12" fill="#fff" stroke={C.indigoL} strokeWidth="3" />
          <circle cx={92 + (i % 2) * 184} cy={147 + Math.floor(i / 2) * 90} r="18" fill={C.indigo} />
          <Txt x={92 + (i % 2) * 184} y={147 + Math.floor(i / 2) * 90} size={18} color="#fff">{i + 1}</Txt>
          <rect x={120 + (i % 2) * 184} y={142 + Math.floor(i / 2) * 90} width="96" height="10" rx="4" fill="#cbd5e1" />
        </g>
      ))}
    </Card>
  ),
  音声: () => (
    <Card bg="cool" floor={false}>
      <Speaker x={180} y={160} s={3} />
      <g transform="translate(360 220)">
        {[18, 40, 28, 56, 34, 22, 46, 30].map((h, i) => <rect key={i} x={-60 + i * 16} y={-h / 2} width="10" height={h} rx="5" fill={C.indigo} />)}
      </g>
    </Card>
  ),
  解答: () => (
    <Card bg="warm" floor={false}>
      <Sheet x={200} y={160} w={210} h={260} fill={{ 0: 2, 1: 0, 2: 3 }} rows={6} />
      <Pencil x={250} y={200} s={1.4} rot={35} />
    </Card>
  ),
  受験: () => (
    <Card bg="meeting">
      <rect x={170} y={30} width="140" height="12" rx="4" fill="#94a3b8" />
      <circle cx={400} cy={70} r="34" fill="#fff" stroke="#475569" strokeWidth="5" />
      <path d="M 400 70 L 400 48 M 400 70 L 416 80" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      {[110, 260].map((dx, i) => (
        <g key={dx}>
          <P cast={i ? 'staff' : 'junior'} x={dx + 50} y={FLOOR - 8} h={150} pose="chair" armL={[30, -60]} armR={[30, -60]} />
          <Desk x={dx} y={216} w={110} />
          <rect x={dx + 26} y={206} width="56" height="12" rx="2" fill="#fff" stroke="#cbd5e1" />
          <rect x={dx + 84} y={212} width="20" height="4" rx="2" fill={C.amber} />
        </g>
      ))}
    </Card>
  ),
  模擬: () => (
    <Card bg="lilac" floor={false}>
      <Sheet x={180} y={170} w={200} h={240} fill={{ 0: 1, 1: 2 }} rows={5} rot={-4} />
      <g transform="translate(340 100) rotate(10)">
        <rect x="-78" y="-26" width="156" height="52" rx="10" fill={C.amber} />
        <Txt x={0} y={2} size={22} color="#fff" weight={900}>PRACTICE</Txt>
      </g>
      <circle cx={380} cy={230} r="40" fill="#fff" stroke="#475569" strokeWidth="5" />
      <path d="M 380 230 L 380 204 M 380 230 L 398 240" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <path d="M 344 206 A 40 40 0 0 1 380 190" fill="none" stroke={C.amber} strokeWidth="6" />
    </Card>
  ),
  出題: () => (
    <Card bg="meeting">
      <rect x={160} y={30} width="290" height="170" rx="6" fill="#14532d" stroke="#a16207" strokeWidth="8" />
      {['Q1', 'Q2', 'Q3'].map((t, i) => (
        <g key={t}>
          <Txt x={200} y={68 + i * 46} size={24} color="#fff" weight={800}>{t}</Txt>
          <rect x={236} y={63 + i * 46} width={150 - i * 30} height="8" rx="3" fill="#bbf7d0" opacity="0.8" />
        </g>
      ))}
      <P cast="boss" x={100} y={FLOOR} h={H} armR={[110, 130]} itemR={<rect x="-2" y="-12" width="5" height="14" rx="2" fill="#fff" />} />
    </Card>
  ),
  不正解: () => (
    <Card bg="rose" floor={false}>
      <Sheet x={200} y={160} w={200} h={250} fill={{ 0: 1, 1: 3, 2: 0, 3: 2, 4: 1 }} />
      <Cross x={250} y={160} s={4.2} w={6} />
    </Card>
  ),
  聴読解: () => (
    <Card bg="cool">
      <Monitor x={190} y={40} w={250} h={160}>
        <Chart x={20} y={130} w={110} h={100} bars={[0.4, 0.7, 0.5, 0.85]} />
        {[0, 1, 2, 3].map(i => <rect key={i} x={146} y={20 + i * 26} width={80 - (i % 2) * 20} height="9" rx="3" fill="#cbd5e1" />)}
      </Monitor>
      <P cast="staff" x={110} y={FLOOR} h={H} />
      <Headphones x={110} y={FLOOR - 1.7 * 89 - 10} s={0.42} />
      <Waves x={130} y={110} color={C.indigo} />
    </Card>
  ),
  読解: () => (
    <Card bg="warm" floor={false}>
      <path d="M 240 80 Q 160 60 70 80 L 70 260 Q 160 240 240 260 Z" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      <path d="M 240 80 Q 320 60 410 80 L 410 260 Q 320 240 240 260 Z" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      <line x1={240} y1={80} x2={240} y2={260} stroke="#cbd5e1" strokeWidth="3" />
      {Array.from({ length: 6 }, (_, i) => <g key={i}><rect x={90} y={104 + i * 24} width={i === 5 ? 80 : 130} height="7" rx="3" fill="#94a3b8" /><rect x={260} y={104 + i * 24} width={i === 2 ? 90 : 130} height="7" rx="3" fill="#94a3b8" /></g>)}
      <Magnifier x={350} y={150} r={34} rot={-35}><rect x={300} y={146} width="130" height="9" rx="3" fill={C.indigo} /></Magnifier>
    </Card>
  ),
  聴解: () => (
    <Card bg="lilac">
      <P cast="junior" x={240} y={FLOOR} h={H} />
      <Headphones x={240} y={FLOOR - 1.7 * 89 - 10} s={0.42} />
      <Waves x={262} y={136} color={C.indigo} />
      <Waves x={218} y={136} color={C.indigo} dir={-1} />
      <Speaker x={100} y={110} s={1.4} />
    </Card>
  ),
  文脈: () => (
    <Card bg="mint" floor={false}>
      <rect x={30} y={110} width="420" height="100" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Sentence x={50} y={160} widths={[60, 44, 70, 60, 50, 46]} blank={3} hi={[1, 2, 4]} color={C.greenL} />
      {[[127, 290], [184, 290], [344, 290]].map(([sx], i) => <path key={i} d={`M ${sx + 20} 148 Q ${(sx + 20 + 284) / 2} 70 284 140`} fill="none" stroke={C.green} strokeWidth="3" strokeDasharray="5 5" />)}
      <Q x={284} y={160} size={22} color={C.rose} />
      <Bulb x={410} y={60} s={0.8} />
    </Card>
  ),
  空欄: () => (
    <Card bg="rose" floor={false}>
      <rect x={30} y={100} width="420" height="120" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Txt x={110} y={160} size={30} color={C.ink}>今日は</Txt>
      <rect x={180} y={128} width="110" height="64" rx="6" fill="#fff1f2" stroke={C.rose} strokeWidth="4" strokeDasharray="8 6" />
      <Txt x={360} y={160} size={30} color={C.ink}>です。</Txt>
      <Pencil x={250} y={200} s={1} rot={160} />
    </Card>
  ),
  語句: () => (
    <Card bg="warm" floor={false}>
      {['お', 'し', 'ご', 'と', 'か', 'い', 'ぎ'].map((k, i) => {
        const x = 70 + (i % 4) * 100 + (i >= 4 ? 50 : 0), y = i < 4 ? 110 : 210
        return (
          <g key={i} transform={`rotate(${(i % 3 - 1) * 6} ${x} ${y})`}>
            <rect x={x - 38} y={y - 38} width="76" height="76" rx="10" fill={i < 4 ? '#fef3c7' : '#e0e7ff'} stroke={i < 4 ? '#d97706' : C.indigo} strokeWidth="3" />
            <Txt x={x} y={y + 2} size={40} color={C.ink} weight={800}>{k}</Txt>
          </g>
        )
      })}
    </Card>
  ),
}

function Star380() {
  return <g><Sparkle x={420} y={230} r={14} color={C.rose} /><Sparkle x={380} y={260} r={8} color={C.amber} /></g>
}
