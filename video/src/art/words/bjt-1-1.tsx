/** Word pictures for BJT 1-1 (敬語とビジネスの基本). */
import type { ReactNode } from 'react'
import {
  Arrow, Bag, Bow, Gear, Box, Briefcase, Bubble, Building, C, Card, Cart, Coin, Counter, Desk, Doc, Envelope, FLOOR, Gift, Heart,
  Laptop, P, Plane, Register, Shelf, Sparkle, Star, Tag, Trail, Truck, Txt, Window,
} from './kit'

const H = 170 // standing figure height

const Lines = ({ n = 3, w = 70, x = 0, y = 0 }: { n?: number; w?: number; x?: number; y?: number }) => (
  <>{Array.from({ length: n }, (_, i) => <rect key={i} x={x - w / 2} y={y - (n - 1) * 6 + i * 12 - 2.5} width={w * (i === n - 1 ? 0.6 : 1)} height="5" rx="2.5" fill="#cbd5e1" />)}</>
)

export const SCENES: Record<string, () => ReactNode> = {
  敬意: () => (
    <Card bg="lilac">
      <Bow cast="junior" x={170} y={FLOOR} h={H} deg={24} armL={[4, 2]} armR={[4, 2]} />
      <P cast="client" x={330} y={FLOOR} h={H} />
      <Heart x={250} y={118} s={1.6} />
      <Sparkle x={222} y={92} r={9} /><Sparkle x={282} y={84} r={7} color={C.indigoL} />
    </Card>
  ),
  謙譲: () => (
    <Card bg="mint">
      <Bow cast="junior" x={160} y={FLOOR} h={H - 10} deg={42} />
      <P cast="client" x={330} y={FLOOR} h={H + 6} />
      <Arrow x1={72} y1={120} x2={72} y2={200} color={C.green} />
      <Arrow x1={418} y1={200} x2={418} y2={120} color={C.slate} w={4} />
    </Card>
  ),
  尊敬: () => (
    <Card bg="warm">
      <rect x={265} y={FLOOR - 40} width={130} height={40} rx="4" fill="#b08a5a" />
      <P cast="boss" x={330} y={FLOOR - 40} h={H} />
      <P cast="junior" x={140} y={FLOOR} h={H - 20} armR={[30, 10]} />
      <Star x={330} y={70} r={20} />
      <Arrow x1={190} y1={150} x2={258} y2={110} color={C.amber} />
    </Card>
  ),
  申し上げる: () => (
    <Card bg="meeting">
      <Bow cast="junior" x={150} y={FLOOR} h={H} deg={26} />
      <P cast="client" x={340} y={FLOOR} h={H} />
      <Bubble x={190} y={70} w={150} h={64} tail="l"><Lines n={3} w={110} /></Bubble>
    </Card>
  ),
  敬語: () => (
    <Card bg="lilac">
      <P cast="staff" x={140} y={FLOOR} h={H - 6} armR={[30, 60]} />
      <P cast="client" x={340} y={FLOOR} h={H} />
      <Bubble x={170} y={70} w={170} h={58} tail="l"><Txt x={0} y={1} size={26} color={C.indigo}>です・ます</Txt></Bubble>
      <Sparkle x={268} y={50} r={8} />
    </Card>
  ),
  謙譲語: () => (
    <Card bg="mint">
      <Bow cast="staff" x={150} y={FLOOR} h={H - 6} deg={30} />
      <P cast="client" x={345} y={FLOOR} h={H} />
      <Bubble x={190} y={68} w={180} h={58} tail="l">
        <Txt x={-14} y={1} size={24} color={C.green}>いたします</Txt>
        <Arrow x1={62} y1={-14} x2={62} y2={16} color={C.green} w={4} />
      </Bubble>
    </Card>
  ),
  いただく: () => (
    <Card bg="warm">
      <P cast="client" x={150} y={FLOOR} h={H} armR={[52, 88]} />
      <Bow cast="junior" x={330} y={FLOOR} h={H} deg={-18} armL={[50, 84]} />
      <Gift x={232} y={196} s={1.3} />
      <Sparkle x={232} y={130} r={9} />
    </Card>
  ),
  いただける: () => (
    <Card bg="meeting">
      <P cast="junior" x={140} y={FLOOR} h={H} armR={[40, 70]} />
      <P cast="client" x={340} y={FLOOR} h={H} armL={[52, 88]} />
      <Doc x={262} y={180} w={46} h={60} rot={8} lines={4} />
      <Bubble x={150} y={66} w={96} h={60} tail="l"><Txt x={0} y={2} size={40} color={C.indigo} weight={800}>?</Txt></Bubble>
    </Card>
  ),
  お客様: () => (
    <Card bg="store">
      <Shelf x={20} y={FLOOR} w={150} rows={3} />
      <Bow cast="clerk" x={230} y={FLOOR} h={H - 6} deg={28} />
      <P cast="shopper" x={380} y={FLOOR} h={H - 6} />
      <Star x={380} y={92} r={16} /><Sparkle x={420} y={120} r={8} /><Sparkle x={344} y={110} r={6} color={C.roseL} />
    </Card>
  ),
  伺う: () => (
    <Card bg="street">
      <Building x={250} y={FLOOR} w={210} h={230} color="#a5b4c8" sign={<Txt x={355} y={FLOOR - 230 - 12} size={14} color="#fff">CLIENT</Txt>} />
      <rect x={312} y={FLOOR - 92} width="86" height="92" fill="#64748b" />
      <rect x={318} y={FLOOR - 86} width="74" height="86" fill="#cbd5e1" />
      <P cast="junior" x={240} y={FLOOR} h={H} armR={[70, 120]} />
      <Briefcase x={214} y={FLOOR} s={1} />
      {[0, 1, 2].map(i => <path key={i} d={`M ${300 + i * 6} ${168 - i * 10} q 8 4 0 12`} stroke={C.slate} strokeWidth="3" fill="none" />)}
    </Card>
  ),
  くださる: () => (
    <Card bg="office">
      <Window x={170} y={36} w={140} h={96} />
      <P cast="boss" x={140} y={FLOOR} h={H + 10} armR={[52, 100]} />
      <P cast="junior" x={350} y={FLOOR} h={H - 14} armL={[40, 80]} />
      <Doc x={246} y={190} w={50} h={64} rot={-10} />
      <Arrow x1={170} y1={118} x2={318} y2={150} color={C.indigo} />
    </Card>
  ),
  お送り: () => (
    <Card bg="office">
      <Desk x={40} y={220} w={220} />
      <Laptop x={150} y={220} s={1.2}><rect x="-30" y="-14" width="60" height="28" rx="3" fill="#dbeafe" /></Laptop>
      <Trail x1={196} y1={140} x2={360} y2={110} />
      <Plane x={330} y={110} s={1.2} />
      <Envelope x={410} y={190} w={80} rot={6} />
    </Card>
  ),
  ビジネス: () => (
    <Card bg="office">
      <Window x={110} y={30} w={260} h={120} />
      <P cast="boss" x={180} y={FLOOR} h={H} armR={[56, 94]} />
      <P cast="client" x={300} y={FLOOR} h={H} armL={[56, 94]} />
      <Briefcase x={110} y={FLOOR} s={1.2} />
      <Briefcase x={372} y={FLOOR} s={1.2} />
    </Card>
  ),
  取引: () => (
    <Card bg="meeting">
      <P cast="staff" x={90} y={FLOOR} h={H - 6} />
      <P cast="client" x={390} y={FLOOR} h={H} />
      <Box x={196} y={150} w={70} h={50} />
      <Arrow x1={160} y1={170} x2={320} y2={170} color={C.indigo} />
      <Coin x={260} y={220} r={20} />
      <Arrow x1={320} y1={256} x2={160} y2={256} color={C.amber} />
    </Card>
  ),
  取引先: () => (
    <Card bg="street">
      <Building x={30} y={FLOOR} w={130} h={180} color="#a5b4c8" sign={<Txt x={95} y={FLOOR - 192} size={14} color="#fff">A</Txt>} />
      <Building x={320} y={FLOOR} w={130} h={200} color="#c4b5a0" signColor={C.green} sign={<Txt x={385} y={FLOOR - 212} size={14} color="#fff">B</Txt>} />
      <Arrow x1={175} y1={140} x2={305} y2={140} color={C.indigo} />
      <Arrow x1={305} y1={190} x2={175} y2={190} color={C.green} />
      <Heart x={240} y={92} s={1.1} color={C.amber} />
    </Card>
  ),
  商品: () => (
    <Card bg="store">
      <Shelf x={30} y={FLOOR} w={290} rows={4} />
      <Tag x={110} y={92} w={60} h={30} rot={-6}><Txt x={8} y={1} size={13}>¥580</Txt></Tag>
      <Tag x={250} y={140} w={60} h={30} rot={5} color={C.greenL}><Txt x={8} y={1} size={13}>¥980</Txt></Tag>
      <P cast="shopper" x={390} y={FLOOR} h={H - 6} armL={[30, 50]} />
    </Card>
  ),
  製品: () => (
    <Card bg="cool">
      <rect x={20} y={226} width={440} height="18" rx="9" fill="#475569" />
      {Array.from({ length: 10 }, (_, i) => <circle key={i} cx={36 + i * 45} cy={235} r="5" fill="#94a3b8" />)}
      <rect x={40} y={244} width="12" height={FLOOR - 244} fill="#64748b" /><rect x={428} y={244} width="12" height={FLOOR - 244} fill="#64748b" />
      {[70, 190, 310].map(bx => <Box key={bx} x={bx} y={226} w={66} h={52} color="#e2e8f0" label={<rect x={bx + 14} y={226 - 36} width="38" height="14" rx="3" fill={C.indigo} />} />)}
      <Gear x={380} y={90} r={30} /><Gear x={322} y={60} r={18} color="#b6c2d0" />
      <rect x={60} y={40} width="150" height="110" rx="6" fill="#cbd5e1" />
      <path d="M 60 40 L 100 14 L 100 40 L 140 14 L 140 40 L 180 14 L 180 40" fill="#94a3b8" />
    </Card>
  ),
  価格: () => (
    <Card bg="warm" floor={false}>
      <Tag x={250} y={150} w={270} h={120} rot={-6}><Txt x={30} y={2} size={48} weight={800}>¥12,800</Txt></Tag>
      <Coin x={90} y={250} r={22} /><Coin x={130} y={268} r={18} /><Coin x={400} y={262} r={20} />
    </Card>
  ),
  購入: () => (
    <Card bg="store">
      <P cast="clerk" x={90} y={FLOOR} h={H - 6} armR={[40, 70]} />
      <Counter x={40} y={210} w={220} />
      <Register x={176} y={210} />
      <Bag x={232} y={210} s={1} />
      <P cast="shopper" x={350} y={FLOOR} h={H - 6} armL={[50, 70]} />
      <rect x={276} y={186} width="34" height="22" rx="3" fill={C.indigo} />
      <Cart x={386} y={FLOOR} s={0.9} />
    </Card>
  ),
  新製品: () => (
    <Card bg="lilac">
      <Box x={150} y={FLOOR} w={160} h={130} color="#818cf8" label={<rect x={180} y={FLOOR - 86} width="100" height="36" rx="6" fill="#fff" />} />
      <Star x={360} y={110} r={58} color={C.rose} />
      <Txt x={360} y={113} size={24} color="#fff" weight={900}>NEW</Txt>
      <Sparkle x={140} y={110} r={12} /><Sparkle x={400} y={70} r={9} /><Sparkle x={180} y={70} r={7} color={C.indigoL} />
    </Card>
  ),
  顧客: () => (
    <Card bg="rose">
      <P cast="shopper" x={110} y={FLOOR} h={H - 10} />
      <P cast="client" x={200} y={FLOOR} h={H} />
      <P cast="clerk" x={290} y={FLOOR} h={H - 6} apron={undefined} topColor="#93c5fd" />
      <Doc x={400} y={130} w={110} h={150} rot={4} lines={0} head={C.rose}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <circle cx={-34} cy={-36 + i * 30} r="9" fill={['#e8a0a8', '#a5b4fc', '#93c5fd', '#fcd34d'][i]} />
            <rect x={-18} y={-40 + i * 30} width="56" height="8" rx="3" fill="#cbd5e1" />
          </g>
        ))}
      </Doc>
    </Card>
  ),
  広告: () => (
    <Card bg="street">
      <rect x={228} y={130} width="12" height={FLOOR - 130} fill="#64748b" />
      <rect x={120} y={36} width="230" height="110" rx="8" fill={C.rose} />
      <rect x={134} y={50} width="202" height="82" rx="4" fill="#ffe4e6" />
      <Txt x={235} y={84} size={30} color={C.rose} weight={900}>SALE</Txt>
      <rect x={180} y={106} width="110" height="10" rx="5" fill="#fda4af" />
      <P cast="shopper" x={90} y={FLOOR} h={H - 20} />
      <P cast="junior" x={390} y={FLOOR} h={H - 14} armL={[60, 100]} />
      <path d="M 330 158 L 300 146 L 300 176 L 330 164 Z" fill={C.amber} />
      {[0, 1].map(i => <path key={i} d={`M ${290 - i * 10} ${150 - i * 6} q -10 11 0 22`} stroke={C.amber} strokeWidth="3" fill="none" />)}
    </Card>
  ),
  納品: () => (
    <Card bg="street">
      <Truck x={14} y={FLOOR} s={1.05} />
      <P cast="driver" x={252} y={FLOOR} h={H - 10} armR={[40, 80]} />
      <Box x={268} y={196} w={54} h={40} />
      <P cast="staff" x={390} y={FLOOR} h={H - 10} armL={[30, 60]} />
      <Doc x={352} y={176} w={34} h={44} lines={3} rot={-6} />
    </Card>
  ),
  販売: () => (
    <Card bg="store">
      <Shelf x={14} y={FLOOR} w={110} rows={4} />
      <P cast="clerk" x={210} y={FLOOR} h={H - 6} armR={[56, 96]} />
      <Counter x={150} y={210} w={140} />
      <Bag x={300} y={174} s={1.1} color="#bfdbfe" />
      <P cast="shopper" x={390} y={FLOOR} h={H - 6} armL={[48, 80]} />
      <Coin x={350} y={130} r={14} />
    </Card>
  ),
  値引き: () => (
    <Card bg="rose" floor={false}>
      <Tag x={230} y={130} w={250} h={110} rot={-5} color="#fff">
        <Txt x={30} y={-18} size={28} color={C.slate}>¥10,000</Txt>
        <line x1={-36} y1={-16} x2={96} y2={-22} stroke={C.rose} strokeWidth="5" strokeLinecap="round" />
        <Txt x={30} y={24} size={38} color={C.rose} weight={900}>¥8,000</Txt>
      </Tag>
      <circle cx={380} cy={232} r={50} fill={C.rose} />
      <Txt x={380} y={234} size={30} color="#fff" weight={900}>−20%</Txt>
      <Arrow x1={110} y1={210} x2={110} y2={290} color={C.rose} w={8} />
    </Card>
  ),
}
