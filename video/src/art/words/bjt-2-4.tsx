/** Word pictures for BJT 2-4 (general words: analysis, method, area). */
import type { ReactNode } from 'react'
import {
  Arrow, Books, Box, Bubble, Bulb, C, Card, Chart, Check, Counter, Cross, Desk, Doc, FLOOR, Gear, Magnifier, Monitor, P,
  Pencil, Sparkle, Star, Sticky, Target, Txt,
} from './kit'

const H = 170

function Pin({ x, y, color = C.rose, r = 14 }: { x: number; y: number; color?: string; r?: number }) {
  return <g><path d={`M ${x} ${y} q ${-r} ${-r * 1.2} ${-r} ${-r * 2} a ${r} ${r} 0 1 1 ${r * 2} 0 q 0 ${r * 0.8} ${-r} ${r * 2} Z`} fill={color} /><circle cx={x} cy={y - r * 2} r={r * 0.4} fill="#fff" /></g>
}

/** A soft map with a few regions; `hi` lights one. */
function MapRegions({ hi, children }: { hi?: number; children?: ReactNode }) {
  const regions = [
    'M 60 70 L 190 50 L 220 140 L 140 170 L 70 150 Z',
    'M 190 50 L 330 60 L 340 150 L 220 140 Z',
    'M 330 60 L 430 90 L 420 200 L 340 150 Z',
    'M 70 150 L 140 170 L 160 270 L 80 260 Z',
    'M 140 170 L 220 140 L 340 150 L 330 260 L 160 270 Z',
    'M 340 150 L 420 200 L 410 270 L 330 260 Z',
  ]
  return (
    <g>
      {regions.map((d, i) => <path key={i} d={d} fill={i === hi ? C.green : ['#d1fae5', '#a7f3d0', '#bbf7d0', '#ccfbf1', '#dcfce7', '#a7f3d0'][i]} stroke="#fff" strokeWidth="4" strokeLinejoin="round" />)}
      {children}
    </g>
  )
}

function Toggle({ x, y, on }: { x: number; y: number; on: boolean }) {
  return <g><rect x={x} y={y - 12} width="48" height="24" rx="12" fill={on ? C.green : '#cbd5e1'} /><circle cx={on ? x + 36 : x + 12} cy={y} r="9" fill="#fff" /></g>
}

export const SCENES: Record<string, () => ReactNode> = {
  学習: () => (
    <Card bg="warm">
      <Desk x={90} y={216} w={300} />
      <P cast="junior" x={240} y={FLOOR - 10} h={150} pose="chair" top="sweater" topColor="#93c5fd" tie="none" armL={[30, -60]} armR={[30, -60]} />
      <Books x={140} y={216} n={4} />
      <rect x={250} y={204} width="70" height="14" rx="2" fill="#fff" stroke="#cbd5e1" /><rect x={286} y={204} width="2" height="14" fill="#cbd5e1" />
      <Pencil x={340} y={214} s={0.6} rot={60} />
      <Bulb x={360} y={80} s={0.9} />
    </Card>
  ),
  当てはめる: () => (
    <Card bg="lilac" floor={false}>
      <rect x={180} y={30} width="120" height="90" rx="10" fill="#fff" stroke={C.indigo} strokeWidth="4" strokeDasharray="8 6" />
      <path d={(() => { const pts = Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 13 : 30; return `${240 + r * Math.cos(a)},${75 + r * Math.sin(a)}` }); return 'M ' + pts.join(' L ') + ' Z' })()} fill="none" stroke={C.indigo} strokeWidth="3" />
      {[100, 240, 380].map((cx, i) => (
        <g key={cx}>
          <Arrow x1={240} y1={124} x2={cx} y2={186} color="#94a3b8" w={3} />
          <rect x={cx - 44} y={194} width="88" height="80" rx="10" fill={[C.amberL, C.greenL, C.roseL][i]} />
          <Star x={cx} y={234} r={28} color={[C.amber, C.green, C.rose][i]} />
        </g>
      ))}
    </Card>
  ),
  方式: () => (
    <Card bg="cool" floor={false}>
      {['A', 'B', 'C'].map((t, i) => (
        <g key={t}>
          <rect x={40 + i * 150} y={110} width="100" height="80" rx="12" fill={[C.indigo, C.sky, C.green][i]} />
          <Txt x={90 + i * 150} y={150} size={36} color="#fff" weight={900}>{t}</Txt>
          {i < 2 && <Arrow x1={146 + i * 150} y1={150} x2={184 + i * 150} y2={150} color={C.slate} w={5} />}
        </g>
      ))}
      <Gear x={240} y={60} r={24} />
      <path d="M 90 200 Q 90 260 240 260 Q 390 260 390 200" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 6" />
      <path d="M 90 200 l -8 14 m 8 -14 l 8 14" stroke="#94a3b8" strokeWidth="4" />
    </Card>
  ),
  明らか: () => (
    <Card bg="warm">
      <rect x={60} y={50} width="270" height="220" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Chart x={80} y={250} w={230} h={180} bars={[0.25, 0.3, 0.95, 0.28]} hi={2} />
      <circle cx={400} cy={90} r="34" fill="#fbbf24" />
      {Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return <line key={i} x1={400 + Math.cos(a) * 42} y1={90 + Math.sin(a) * 42} x2={400 + Math.cos(a) * 54} y2={90 + Math.sin(a) * 54} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" /> })}
      <Txt x={240} y={52} size={34} color={C.rose} weight={900}>!</Txt>
    </Card>
  ),
  測定: () => (
    <Card bg="cool" floor={false}>
      <path d="M 70 230 A 110 110 0 0 1 290 230" fill="none" stroke="#e2e8f0" strokeWidth="26" />
      <path d="M 70 230 A 110 110 0 0 1 240 132" fill="none" stroke={C.green} strokeWidth="26" />
      {Array.from({ length: 9 }, (_, i) => { const a = Math.PI + (i * Math.PI) / 8; return <line key={i} x1={180 + Math.cos(a) * 86} y1={230 + Math.sin(a) * 86} x2={180 + Math.cos(a) * 74} y2={230 + Math.sin(a) * 74} stroke={C.slate} strokeWidth="3" /> })}
      <line x1={180} y1={230} x2={240} y2={160} stroke={C.ink} strokeWidth="6" strokeLinecap="round" /><circle cx={180} cy={230} r="10" fill={C.ink} />
      <g transform="translate(380 160)">
        <rect x="-8" y="-62" width="16" height="12" rx="3" fill="#475569" />
        <circle r="50" fill="#fff" stroke="#475569" strokeWidth="7" />
        <path d="M 0 0 L 0 -34" stroke={C.rose} strokeWidth="5" strokeLinecap="round" /><path d="M 0 -42 A 42 42 0 0 1 36 -21 L 0 0 Z" fill={C.roseL} opacity="0.7" />
      </g>
    </Card>
  ),
  特定: () => (
    <Card bg="lilac" floor={false}>
      {Array.from({ length: 15 }, (_, i) => {
        const cx = 70 + (i % 5) * 85, cy = 70 + Math.floor(i / 5) * 90
        return <g key={i} opacity={i === 7 ? 1 : 0.5}><circle cx={cx} cy={cy - 8} r="13" fill={i === 7 ? C.rose : '#94a3b8'} /><path d={`M ${cx - 22} ${cy + 30} Q ${cx} ${cy - 2} ${cx + 22} ${cy + 30} Z`} fill={i === 7 ? C.rose : '#94a3b8'} /></g>
      })}
      <circle cx={240} cy={170} r="44" fill="none" stroke={C.rose} strokeWidth="4" />
      <path d="M 240 116 L 240 138 M 240 202 L 240 224 M 186 170 L 208 170 M 272 170 L 294 170" stroke={C.rose} strokeWidth="4" />
    </Card>
  ),
  留意: () => (
    <Card bg="warm">
      <Monitor x={60} y={50} w={220} h={140}><Chart x={20} y={110} w={120} h={80} bars={[0.5, 0.7, 0.4, 0.8]} /></Monitor>
      <Sticky x={262} y={76} w={74} rot={8}><Txt x={0} y={6} size={36} color={C.rose} weight={900}>!</Txt></Sticky>
      <path d="M 390 120 L 440 210 L 340 210 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="5" strokeLinejoin="round" />
      <Txt x={390} y={182} size={40} color={C.ink} weight={900}>!</Txt>
    </Card>
  ),
  それぞれ: () => (
    <Card bg="mint">
      {[[110, 'staff', C.rose], [240, 'junior', C.amber], [370, 'client', C.indigo]].map(([x, cast, col]) => (
        <g key={x as number}>
          <P cast={cast as 'staff'} x={x as number} y={FLOOR} h={H - 10} armR={[40, 60]} />
          <Box x={(x as number) + 14} y={190} w={40} h={36} color={col as string} />
          <circle cx={x as number} cy={56} r="14" fill={col as string} />
        </g>
      ))}
    </Card>
  ),
  ふさわしい: () => (
    <Card bg="office">
      <P cast="junior" x={150} y={FLOOR} h={H} />
      <P x={330} y={FLOOR} h={H} hair="short" top="tshirt" topColor="#f97316" bottom="shorts" bottomColor="#334155" />
      <circle cx={150} cy={66} r="26" fill={C.green} /><Check x={150} y={68} color="#fff" />
      <circle cx={330} cy={66} r="26" fill={C.rose} /><Cross x={330} y={66} color="#fff" s={0.7} w={6} />
      <Briefcase150 />
    </Card>
  ),
  一般: () => (
    <Card bg="street">
      {[[50, 'shopper', 130], [110, 'driver', 140], [170, 'client', 146], [230, 'staff', 136], [290, 'junior', 144], [350, 'shopper', 128], [410, 'boss', 142]].map(([x, cast, h], i) => (
        <P key={i} cast={cast as 'staff'} x={x as number} y={FLOOR} h={h as number} topColor={i === 5 ? '#93c5fd' : undefined} />
      ))}
    </Card>
  ),
  事柄: () => (
    <Card bg="lilac" floor={false}>
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(${70 + (i % 2) * 180} ${50 + Math.floor(i / 2) * 120})`}>
          <path d="M 0 10 L 0 100 L 160 100 L 160 10 L 70 10 L 60 0 L 0 0 Z" fill={[C.amberL, C.indigoL, C.greenL, C.roseL][i]} />
          <rect x="14" y="30" width="40" height="40" rx="6" fill="#fff" />
          {i === 0 && <Txt x={34} y={50} size={22} color={C.amber} weight={900}>¥</Txt>}
          {i === 1 && <Gear x={34} y={50} r={12} color={C.indigo} />}
          {i === 2 && <Check x={34} y={52} s={0.7} />}
          {i === 3 && <Txt x={34} y={50} size={22} color={C.rose} weight={900}>!</Txt>}
          <rect x="66" y="38" width="80" height="8" rx="3" fill="#fff" /><rect x="66" y="56" width="56" height="8" rx="3" fill="#fff" />
        </g>
      ))}
    </Card>
  ),
  前半: () => (
    <Card bg="cool" floor={false}>
      <rect x={40} y={130} width="400" height="50" rx="25" fill="#e2e8f0" />
      <rect x={40} y={130} width="200" height="50" rx="25" fill={C.indigo} />
      <rect x={200} y={130} width="40" height="50" fill={C.indigo} />
      <line x1={240} y1={110} x2={240} y2={200} stroke={C.ink} strokeWidth="4" strokeDasharray="6 5" />
      <Txt x={140} y={156} size={24} color="#fff" weight={900}>1</Txt>
      <Txt x={340} y={156} size={24} color={C.slate} weight={900}>2</Txt>
      <Arrow x1={60} y1={230} x2={226} y2={230} color={C.indigo} />
    </Card>
  ),
  可能性: () => (
    <Card bg="lilac">
      <rect x={170} y={60} width="140" height={FLOOR - 60} fill="#fef3c7" />
      {Array.from({ length: 5 }, (_, i) => <path key={i} d={`M 240 ${FLOOR} L ${120 + i * 60} ${FLOOR} L 240 120 Z`} fill="#fde68a" opacity="0.3" />)}
      <path d={`M 170 60 L 240 76 L 240 ${FLOOR + 4} L 170 ${FLOOR}`} fill="#7c4a24" />
      <rect x={160} y={52} width="160" height="10" fill="#94a3b8" />
      <circle cx={230} cy={180} r="5" fill="#fbbf24" />
      <Sparkle x={290} y={110} r={14} /><Sparkle x={350} y={160} r={9} /><Sparkle x={130} y={140} r={8} color={C.indigoL} />
      <P cast="junior" x={390} y={FLOOR} h={H - 20} armL={[40, 60]} />
    </Card>
  ),
  学ぶ: () => (
    <Card bg="mint">
      <P cast="staff" x={240} y={FLOOR} h={H} armL={[40, 100]} armR={[40, 100]} />
      <path d="M 200 160 L 240 170 L 280 160 L 280 196 L 240 206 L 200 196 Z" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
      <line x1={240} y1={170} x2={240} y2={206} stroke="#94a3b8" strokeWidth="2" />
      <g transform={`translate(240 ${FLOOR - 0.97 * H})`}>
        <path d="M -30 0 L 0 -12 L 30 0 L 0 12 Z" fill="#1f2937" /><rect x="-14" y="2" width="28" height="10" fill="#1f2937" />
        <path d="M 22 4 L 22 22" stroke={C.amber} strokeWidth="3" /><circle cx={22} cy={24} r="4" fill={C.amber} />
      </g>
      <Sparkle x={340} y={80} r={12} /><Sparkle x={140} y={100} r={9} />
    </Card>
  ),
  対象: () => (
    <Card bg="rose">
      {[50, 110, 170, 230, 290, 350, 410].map((x, i) => <P key={x} cast={['junior', 'shopper', 'client', 'staff', 'boss', 'shopper', 'driver'][i] as 'staff'} x={x} y={FLOOR} h={130} />)}
      <rect x={196} y={110} width="180" height="186" rx="20" fill="none" stroke={C.rose} strokeWidth="5" strokeDasharray="12 8" />
      <Target x={286} y={60} r={30} dart={false} />
    </Card>
  ),
  尋ねる: () => (
    <Card bg="cool">
      <P cast="staff" x={285} y={FLOOR} h={H - 10} />
      <Counter x={200} y={210} w={170} />
      <circle cx={340} cy={70} r="24" fill={C.sky} /><Txt x={340} y={72} size={30} color="#fff" weight={900}>i</Txt>
      <P cast="shopper" x={110} y={FLOOR} h={H - 6} armR={[60, 100]} />
      <Bubble x={160} y={66} w={80} h={52} tail="l"><Txt x={0} y={2} size={32} color={C.indigo} weight={900}>?</Txt></Bubble>
    </Card>
  ),
  指す: () => (
    <Card bg="warm">
      <rect x={220} y={40} width="230" height="180" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      {[0, 1, 2].map(i => <circle key={i} cx={270 + i * 66} cy={120} r="22" fill={i === 1 ? C.amber : '#e2e8f0'} />)}
      <P cast="junior" x={120} y={FLOOR} h={H} armR={[100, 100]} />
      <line x1={152} y1={124} x2={300} y2={120} stroke="#7c4a24" strokeWidth="4" strokeLinecap="round" />
      <Sparkle x={336} y={84} r={10} />
    </Card>
  ),
  生じる: () => (
    <Card bg="rose">
      <Box x={150} y={FLOOR} w={180} h={110} color="#94a3b8" />
      {[[200, 150, 6], [240, 120, 10], [290, 140, 8], [250, 80, 14]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#cbd5e1" />)}
      <path d="M 240 90 L 252 40 L 266 70 L 290 30" fill="none" stroke={C.amber} strokeWidth="5" strokeLinejoin="round" />
      <circle cx={320} cy={70} r="28" fill={C.rose} /><Txt x={320} y={72} size={36} color="#fff" weight={900}>!</Txt>
      <Arrow x1={180} y1={170} x2={180} y2={110} color={C.rose} w={4} />
      <Arrow x1={300} y1={170} x2={300} y2={120} color={C.rose} w={4} />
    </Card>
  ),
  移動: () => (
    <Card bg="mint">
      <path d="M 70 230 Q 240 120 410 200" fill="none" stroke="#94a3b8" strokeWidth="5" strokeDasharray="10 9" />
      <Pin x={70} y={240} color={C.indigo} /><Pin x={410} y={210} color={C.rose} />
      <P cast="junior" x={240} y={FLOOR} h={H - 20} />
      <Arrow x1={276} y1={150} x2={360} y2={176} color={C.green} w={6} />
    </Card>
  ),
  箇所: () => (
    <Card bg="cool" floor={false}>
      <Doc x={240} y={160} w={300} h={250} lines={0} head={C.slate}>
        {Array.from({ length: 8 }, (_, i) => <rect key={i} x={-130} y={-90 + i * 25} width={i % 3 === 2 ? 180 : 260} height="8" rx="3" fill="#cbd5e1" />)}
        {[[-70, -61], [40, -11], [-20, 64]].map(([cx, cy], i) => <ellipse key={i} cx={cx} cy={cy} rx="40" ry="14" fill="none" stroke={C.rose} strokeWidth="4" />)}
      </Doc>
    </Card>
  ),
  設定: () => (
    <Card bg="office" floor={false}>
      <rect x={120} y={30} width="240" height="260" rx="18" fill="#fff" stroke="#cbd5e1" strokeWidth="3" />
      <Gear x={150} y={64} r={14} color={C.slate} />
      <rect x={174} y={58} width="80" height="12" rx="4" fill={C.ink} />
      {[0, 1, 2].map(i => <g key={i}><rect x={146} y={110 + i * 44} width="110" height="10" rx="4" fill="#cbd5e1" /><Toggle x={286} y={115 + i * 44} on={i !== 1} /></g>)}
      <rect x={146} y={250} width="186" height="6" rx="3" fill="#e2e8f0" /><rect x={146} y={250} width="110" height="6" rx="3" fill={C.indigo} /><circle cx={256} cy={253} r="10" fill={C.indigo} />
    </Card>
  ),
  全体: () => (
    <Card bg="lilac" floor={false}>
      {Array.from({ length: 6 }, (_, i) => {
        const a0 = (i / 6) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / 6) * 2 * Math.PI - Math.PI / 2
        return <path key={i} d={`M 240 160 L ${240 + Math.cos(a0) * 110} ${160 + Math.sin(a0) * 110} A 110 110 0 0 1 ${240 + Math.cos(a1) * 110} ${160 + Math.sin(a1) * 110} Z`} fill={['#818cf8', '#a5b4fc', '#6366f1', '#c7d2fe', '#4f46e5', '#a5b4fc'][i]} stroke="#fff" strokeWidth="3" />
      })}
      <circle cx={240} cy={160} r="130" fill="none" stroke={C.amber} strokeWidth="6" />
      <Txt x={410} y={60} size={28} color={C.amber} weight={900}>100%</Txt>
    </Card>
  ),
  分析: () => (
    <Card bg="cool" floor={false}>
      <rect x={40} y={40} width="250" height="230" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Chart x={60} y={160} w={110} h={100} bars={[0.5, 0.8, 0.4, 0.65]} />
      <circle cx={230} cy={110} r="40" fill={C.indigoL} /><path d="M 230 110 L 230 70 A 40 40 0 0 1 268 122 Z" fill={C.indigo} />
      <path d="M 60 240 L 110 200 L 160 220 L 210 180 L 260 196" fill="none" stroke={C.green} strokeWidth="4" />
      <Magnifier x={350} y={140} r={56} rot={-35}>
        <path d="M 300 160 L 330 130 L 360 150 L 400 110" fill="none" stroke={C.rose} strokeWidth="5" />
      </Magnifier>
    </Card>
  ),
  単に: () => (
    <Card bg="mint" floor={false}>
      <g opacity="0.35">
        <Gear x={360} y={80} r={22} color="#94a3b8" /><Chart x={320} y={250} w={110} h={90} bars={[0.5, 0.8, 0.6]} colors={['#94a3b8', '#94a3b8', '#94a3b8']} />
        <rect x={300} y={130} width="140" height="14" rx="5" fill="#94a3b8" />
      </g>
      <line x1={290} y1={40} x2={290} y2={290} stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 6" />
      <circle cx={150} cy={160} r="58" fill={C.green} />
      <Txt x={150} y={162} size={52} color="#fff" weight={900}>1</Txt>
    </Card>
  ),
  地域: () => (
    <Card bg="mint" floor={false}>
      <MapRegions hi={4}><Pin x={250} y={220} color={C.rose} /></MapRegions>
    </Card>
  ),
}

function Briefcase150() {
  return <g transform={`translate(196 ${FLOOR})`}><path d="M -8 -26 L -8 -32 L 8 -32 L 8 -26" fill="none" stroke="#5b3a1e" strokeWidth="3.5" /><rect x="-22" y="-26" width="44" height="28" rx="4" fill="#7c4a24" /></g>
}
