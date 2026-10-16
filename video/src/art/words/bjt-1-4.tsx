/** Word pictures for BJT 1-4 (general words). */
import type { ReactNode } from 'react'
import {
  Arrow, Bow, Box, Bubble, Bulb, C, Calendar, Card, Chart, Check, Checklist, Coin, Doc, FLOOR, Gear, Heart, Magnifier,
  Maru, P, Phone, PuzzlePiece, Scales, Sparkle, Star, Txt, Window,
} from './kit'

const H = 170
const Q = ({ x, y, size = 30, color = C.indigo }: { x: number; y: number; size?: number; color?: string }) => <Txt x={x} y={y} size={size} color={color} weight={900}>?</Txt>
const Dots = ({ x, y }: { x: number; y: number }) => <><circle cx={x} cy={y} r="5" fill="#fff" stroke="#cbd5e1" strokeWidth="2" /><circle cx={x + 10} cy={y - 16} r="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" /></>

export const SCENES: Record<string, () => ReactNode> = {
  推測: () => (
    <Card bg="lilac">
      <P cast="junior" x={110} y={FLOOR} h={H} armR={[150, 175]} />
      <Dots x={140} y={110} />
      <Bubble x={210} y={58} w={120} h={60} tail="none"><Box x={-20} y={22} w={40} h={36} /><Q x={34} y={2} size={26} /></Bubble>
      <Box x={300} y={FLOOR} w={110} h={90} color="#c4b5fd" label={<Q x={355} y={FLOOR - 42} size={48} color="#fff" />} />
      {[[250, 270], [270, 254], [232, 252]].map(([fx, fy], i) => <ellipse key={i} cx={fx} cy={fy} rx="7" ry="4" fill="#94a3b8" />)}
    </Card>
  ),
  解く: () => (
    <Card bg="mint" floor={false}>
      <PuzzlePiece x={150} y={120} s={1.4} color={C.indigo} />
      <PuzzlePiece x={234} y={120} s={1.4} color={C.green} rot={90} />
      <PuzzlePiece x={150} y={204} s={1.4} color={C.amber} rot={-90} />
      <PuzzlePiece x={330} y={236} s={1.4} color={C.rose} rot={180} />
      <Arrow x1={300} y1={240} x2={270} y2={214} color={C.slate} w={4} />
      <Sparkle x={380} y={80} r={14} />
    </Card>
  ),
  読み取る: () => (
    <Card bg="cool" floor={false}>
      <rect x={50} y={50} width="270" height="200" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 70 220 L 120 180 L 160 196 L 210 130 L 250 150 L 300 80" fill="none" stroke={C.indigo} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      <Magnifier x={250} y={140} r={44} rot={-40}>
        <path d="M 210 130 L 250 150 L 300 80" fill="none" stroke={C.rose} strokeWidth="8" strokeLinejoin="round" />
      </Magnifier>
      <Bulb x={400} y={100} s={1.1} />
    </Card>
  ),
  当てはまる: () => (
    <Card bg="mint">
      <P cast="shopper" x={110} y={FLOOR} h={H - 6} />
      <Doc x={320} y={150} w={170} h={200} lines={0} head={C.green}>
        <Checklist x={-64} y={-56} rows={4} w={128} checked={[0, 1, 2, 3]} gap={32} />
      </Doc>
      <Arrow x1={160} y1={150} x2={226} y2={150} color={C.green} />
    </Card>
  ),
  求める: () => (
    <Card bg="warm">
      <rect x={250} y={60} width="200" height="10" fill="#b08a5a" />
      <Star x={350} y={36} r={24} />
      <P cast="junior" x={300} y={FLOOR} h={H} armR={[160, 175]} armL={[20, 10]} />
      <Arrow x1={330} y1={130} x2={348} y2={74} color={C.amber} w={4} />
      <P cast="shopper" x={110} y={FLOOR} h={H - 10} armR={[150, 170]} />
      <Bubble x={160} y={66} w={86} h={50} tail="l"><Star x={0} y={0} r={14} /></Bubble>
    </Card>
  ),
  行為: () => (
    <Card bg="rose">
      <Bow cast="junior" x={170} y={FLOOR} h={H} deg={40} armR={[10, 10]} />
      <P cast="client" x={340} y={FLOOR} h={H} />
      <Doc x={250} y={274} w={60} h={22} lines={0} rot={8} />
      <Doc x={290} y={280} w={50} h={18} lines={0} rot={-14} head={C.green} />
      <Heart x={250} y={110} s={1.4} />
    </Card>
  ),
  判断: () => (
    <Card bg="lilac">
      <Scales x={240} y={FLOOR} tilt={12} />
      <circle cx={160} cy={100} r="20" fill={C.green} /><Check x={160} y={102} color="#fff" s={0.7} />
      <circle cx={320} cy={130} r="20" fill={C.rose} /><path d="M 312 122 L 328 138 M 328 122 L 312 138" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <P cast="boss" x={420} y={FLOOR} h={H - 20} armL={[30, 60]} />
    </Card>
  ),
  さらに: () => (
    <Card bg="mint">
      {[0, 1, 2].map(i => <Box key={i} x={150 + i * 2} y={FLOOR - i * 50} w={110} h={48} color={['#93c5fd', '#60a5fa', '#3b82f6'][i]} />)}
      <Box x={156} y={FLOOR - 150 - 30} w={110} h={48} color={C.green} />
      <Arrow x1={211} y1={60} x2={211} y2={86} color={C.green} />
      <circle cx={340} cy={110} r="36" fill={C.green} />
      <path d="M 340 90 L 340 130 M 320 110 L 360 110" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
    </Card>
  ),
  人間: () => (
    <Card bg="warm">
      <P cast="boss" x={80} y={FLOOR} h={H} />
      <P cast="shopper" x={170} y={FLOOR} h={H - 14} />
      <P cast="driver" x={260} y={FLOOR} h={H - 4} />
      <P x={340} y={FLOOR} h={110} child hair="ponytail" top="tshirt" topColor="#f97316" bottom="shorts" bottomColor="#334155" />
      <P x={420} y={FLOOR} h={H - 10} hair="bun" hairColor="#e5e7eb" female top="blouse" topColor="#a78bfa" bottom="skirt" bottomColor="#4b5563" />
      <Heart x={240} y={60} s={1.6} />
    </Card>
  ),
  条件: () => (
    <Card bg="cool" floor={false}>
      <Doc x={200} y={160} w={210} h={250} lines={0} head={C.ink}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <circle cx={-80} cy={-70 + i * 44} r="10" fill={C.indigo} /><Txt x={-80} y={-70 + i * 44} size={12} color="#fff">{i + 1}</Txt>
            <rect x={-60} y={-76 + i * 44} width={140 - (i % 2) * 30} height="8" rx="3" fill="#cbd5e1" />
            <rect x={-60} y={-62 + i * 44} width={100} height="6" rx="3" fill="#e2e8f0" />
          </g>
        ))}
      </Doc>
      <g transform="translate(380 220) rotate(30)"><rect x="-7" y="-80" width="14" height="70" rx="3" fill="#1f2937" /><path d="M -7 -10 L 7 -10 L 0 6 Z" fill="#64748b" /></g>
      <rect x={300} y={240} width="110" height="6" rx="3" fill={C.indigo} />
    </Card>
  ),
  結果: () => (
    <Card bg="warm">
      <Chart x={60} y={FLOOR} w={250} h={200} bars={[0.3, 0.45, 0.6, 0.9]} hi={3} />
      <g transform="translate(380 110)">
        <path d="M -30 -40 L 30 -40 L 26 0 Q 0 26 -26 0 Z" fill="#fbbf24" />
        <path d="M -30 -32 Q -52 -30 -36 -6 M 30 -32 Q 52 -30 36 -6" fill="none" stroke="#fbbf24" strokeWidth="6" />
        <rect x="-6" y="14" width="12" height="26" fill="#d97706" /><rect x="-26" y="40" width="52" height="12" rx="3" fill="#a16207" />
        <Star x={0} y={-16} r={12} color="#fff" />
      </g>
    </Card>
  ),
  実際: () => (
    <Card bg="lilac">
      <Bubble x={130} y={110} w={170} h={150} tail="r" color="#f8fafc">
        <rect x={-50} y={-30} width="100" height="70" rx="6" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />
        <path d="M -60 -26 L 0 -62 L 60 -26" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />
      </Bubble>
      <g>
        <rect x={290} y={170} width="130" height={FLOOR - 170} fill="#fca5a5" />
        <path d="M 274 176 L 355 110 L 436 176 Z" fill={C.rose} />
        <rect x={340} y={230} width="30" height={FLOOR - 230} fill="#7c2d12" />
        <rect x={304} y={196} width="28" height="24" fill="#e0f2fe" /><rect x={378} y={196} width="28" height="24" fill="#e0f2fe" />
      </g>
      <circle cx={440} cy={100} r="22" fill={C.green} /><Check x={440} y={102} color="#fff" s={0.75} />
    </Card>
  ),
  表す: () => (
    <Card bg="cool" floor={false}>
      <Doc x={110} y={160} w={130} h={180} lines={0} head={C.slate}>
        {['12', '18', '25', '40'].map((n, i) => <Txt key={n} x={0} y={-44 + i * 32} size={24} color={C.ink}>{n}</Txt>)}
      </Doc>
      <Arrow x1={190} y1={160} x2={250} y2={160} color={C.indigo} />
      <rect x={260} y={60} width="190" height="200" rx="10" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <Chart x={280} y={240} w={150} h={160} bars={[0.3, 0.45, 0.62, 1]} />
    </Card>
  ),
  最も: () => (
    <Card bg="warm">
      <rect x={60} y={FLOOR - 70} width="110" height="70" fill="#cbd5e1" />
      <rect x={180} y={FLOOR - 130} width="120" height="130" fill="#fbbf24" />
      <rect x={310} y={FLOOR - 50} width="110" height="50" fill="#d6a76a" />
      <Txt x={115} y={FLOOR - 36} size={36} color="#fff" weight={900}>2</Txt>
      <Txt x={240} y={FLOOR - 66} size={52} color="#fff" weight={900}>1</Txt>
      <Txt x={365} y={FLOOR - 26} size={32} color="#fff" weight={900}>3</Txt>
      <P cast="staff" x={240} y={FLOOR - 130} h={130} armL={[150, 170]} armR={[150, 170]} />
      <Star x={240} y={22} r={18} />
    </Card>
  ),
  踏まえる: () => (
    <Card bg="mint">
      {[0, 1, 2].map(i => <Doc key={i} x={180 + i * 4} y={FLOOR - 14 - i * 28} w={160} h={26} lines={0} head={[C.indigo, C.green, C.amber][i]} />)}
      <P cast="junior" x={182} y={FLOOR - 98} h={150} armR={[50, 60]} />
      <Arrow x1={290} y1={170} x2={380} y2={110} color={C.green} />
      <Star x={410} y={90} r={22} />
    </Card>
  ),
  セリフ: () => (
    <Card bg="rose">
      <Doc x={110} y={150} w={140} h={190} lines={0} head={C.rose}>
        {[0, 1, 2, 3].map(i => <g key={i}><circle cx={-50} cy={-46 + i * 36} r="7" fill={i % 2 ? C.indigoL : C.roseL} /><rect x={-36} y={-50 + i * 36} width={88 - (i % 2) * 20} height="7" rx="3" fill="#cbd5e1" /></g>)}
      </Doc>
      <P cast="boss" x={330} y={FLOOR} h={H} armL={[70, 110]} />
      <Bubble x={380} y={64} w={130} h={58} tail="l"><rect x="-46" y="-10" width="92" height="7" rx="3" fill={C.roseL} /><rect x="-46" y="5" width="64" height="7" rx="3" fill="#cbd5e1" /></Bubble>
    </Card>
  ),
  行動: () => (
    <Card bg="street">
      <P cast="junior" x={240} y={FLOOR} h={H} armL={[30, 50]} armR={[-30, -40]} />
      {[0, 1, 2].map(i => <rect key={i} x={110 - i * 18} y={140 + i * 30} width={70 + i * 10} height="6" rx="3" fill="#94a3b8" />)}
      <Arrow x1={300} y1={200} x2={430} y2={200} color={C.indigo} w={8} />
      {[[300, 286], [340, 280], [380, 286]].map(([fx, fy], i) => <ellipse key={i} cx={fx} cy={fy} rx="10" ry="4" fill="#94a3b8" opacity={0.5 + i * 0.2} />)}
    </Card>
  ),
  今回: () => (
    <Card bg="lilac" floor={false}>
      {[0, 1, 2].map(i => (
        <g key={i} opacity={i === 2 ? 1 : 0.45}>
          <rect x={40 + i * 140} y={90} width="120" height="140" rx="12" fill={i === 2 ? '#fff' : '#e2e8f0'} stroke={i === 2 ? C.indigo : '#cbd5e1'} strokeWidth={i === 2 ? 5 : 2} />
          <Txt x={100 + i * 140} y={160} size={44} color={i === 2 ? C.indigo : C.slate} weight={900}>{i + 1}</Txt>
        </g>
      ))}
      <path d="M 380 26 m -16 -10 a 16 16 0 1 1 32 0 q 0 16 -16 32 q -16 -16 -16 -32 Z" fill={C.rose} transform="translate(0 30)" />
      <Arrow x1={170} y1={270} x2={360} y2={270} color={C.slate} w={4} />
    </Card>
  ),
  可能: () => (
    <Card bg="mint">
      <P cast="staff" x={240} y={FLOOR} h={H - 20} armL={[150, 170]} armR={[150, 170]} />
      <Maru x={240} y={70} r={50} w={14} />
    </Card>
  ),
  基本: () => (
    <Card bg="warm">
      {[0, 1, 2, 3].map(i => <rect key={i} x={70 + i * 86} y={FLOOR - 46} width="80" height="44" rx="4" fill={C.amber} stroke="#d97706" strokeWidth="2" />)}
      {[0, 1, 2].map(i => <rect key={i} x={113 + i * 86} y={FLOOR - 92} width="80" height="44" rx="4" fill="#fde68a" stroke="#eab308" strokeWidth="2" />)}
      {[0, 1].map(i => <rect key={i} x={156 + i * 86} y={FLOOR - 138} width="80" height="44" rx="4" fill="#fef3c7" stroke="#eab308" strokeWidth="2" />)}
      <path d="M 186 152 L 240 100 L 294 152 Z" fill="#fca5a5" />
      <rect x={60} y={FLOOR - 50} width="356" height="52" rx="6" fill="none" stroke={C.rose} strokeWidth="5" strokeDasharray="12 8" />
    </Card>
  ),
  日常: () => (
    <Card bg="cool">
      <Window x={240} y={40} w={190} h={130} />
      <circle cx={300} cy={90} r="20" fill="#fbbf24" />
      <P cast="junior" x={150} y={FLOOR} h={H} top="sweater" topColor="#93c5fd" tie="none" armR={[40, 120]} itemR={<g><rect x="-6" y="-14" width="14" height="16" rx="3" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" /><path d="M 8 -10 q 6 2 0 8" stroke="#94a3b8" strokeWidth="1.5" fill="none" /></g>} />
      <Calendar x={300} y={196} w={110} mark={Array.from({ length: 28 }, (_, i) => i)} />
      <Phone x={60} y={240} s={1} />
    </Card>
  ),
  異なる: () => (
    <Card bg="lilac" floor={false}>
      {[0, 1, 2, 3, 4].map(i => i === 3
        ? <rect key={i} x={50 + i * 80} y={130} width="60" height="60" rx="8" fill={C.rose} />
        : <circle key={i} cx={80 + i * 80} cy={160} r="30" fill={C.indigoL} />)}
      <Sparkle x={316} y={104} r={12} />
      <Arrow x1={290} y1={260} x2={290} y2={210} color={C.rose} />
    </Card>
  ),
  話題: () => (
    <Card bg="warm">
      <P cast="staff" x={110} y={FLOOR} h={H - 6} armR={[40, 70]} />
      <P cast="junior" x={240} y={FLOOR} h={H} />
      <P cast="shopper" x={370} y={FLOOR} h={H - 10} armL={[40, 70]} />
      <Bubble x={240} y={60} w={150} h={70} tail="none" color="#fff">
        <Box x={-40} y={24} w={44} h={40} color="#818cf8" />
        <Txt x={30} y={0} size={18} color={C.rose} weight={900}>NEW</Txt>
      </Bubble>
      {[160, 320].map(dx => <circle key={dx} cx={dx} cy={110} r="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />)}
    </Card>
  ),
  ポイント: () => (
    <Card bg="warm" floor={false}>
      <Doc x={210} y={160} w={240} h={250} lines={0} head={C.slate}>
        {Array.from({ length: 7 }, (_, i) => (
          <g key={i}>
            {i === 3 && <rect x={-100} y={-84 + i * 30} width="200" height="16" rx="3" fill="#fde047" />}
            <rect x={-94} y={-80 + i * 30} width={i % 3 === 2 ? 120 : 180} height="7" rx="3" fill={i === 3 ? C.ink : '#cbd5e1'} />
          </g>
        ))}
      </Doc>
      <path d="M 380 128 m -24 -20 a 24 24 0 1 1 48 0 q 0 24 -24 48 q -24 -24 -24 -48 Z" fill={C.rose} />
      <circle cx={380} cy={108} r="9" fill="#fff" />
      <Arrow x1={348} y1={150} x2={318} y2={154} color={C.rose} w={4} />
    </Card>
  ),
  処理: () => (
    <Card bg="cool">
      <rect x={170} y={110} width="140" height={FLOOR - 110} rx="10" fill="#64748b" />
      <rect x={186} y={126} width="108" height="40" rx="4" fill="#1e293b" />
      <rect x={196} y={140} width="60" height="10" rx="3" fill="#4ade80" />
      <Gear x={240} y={220} r={30} color="#94a3b8" />
      {[0, 1, 2].map(i => <Doc key={i} x={80 + i * 8} y={150 - i * 8} w={70} h={86} rot={-8 + i * 6} lines={3} />)}
      <Arrow x1={130} y1={200} x2={166} y2={200} color={C.amber} w={5} />
      {[0, 1].map(i => <Doc key={i} x={390} y={140 + i * 70} w={80} h={56} lines={2} head={[C.green, C.indigo][i]} />)}
      <Arrow x1={314} y1={200} x2={346} y2={200} color={C.green} w={5} />
      <Check x={440} y={92} />
    </Card>
  ),
}
