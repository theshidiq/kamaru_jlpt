/** Word pictures for BJT 2-1 (keigo, products, trade shows). */
import type { ReactNode } from 'react'
import {
  Arrow, Board, Bow, Box, Bubble, Building, Bulb, C, Calendar, Card, Check, Checklist, Clipboard, Counter, Cross, Desk, Doc,
  FLOOR, Gear, Gift, Laptop, Monitor, P, Pencil, Phone, Plant, Shelf, Sparkle, Star, Sticky, Storefront, Table, Tag, Truck, Txt,
} from './kit'

const H = 170

function Clock({ x, y, r = 30, wedge }: { x: number; y: number; r?: number; wedge?: [number, number] }) {
  const pt = (m: number, k = 1) => [x + Math.sin((m / 60) * 2 * Math.PI) * r * k, y - Math.cos((m / 60) * 2 * Math.PI) * r * k]
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#fff" stroke="#475569" strokeWidth={r / 7} />
      {wedge && (() => { const [a, b] = [pt(wedge[0], 0.86), pt(wedge[1], 0.86)]; return <path d={`M ${x} ${y} L ${a[0]} ${a[1]} A ${r * 0.86} ${r * 0.86} 0 0 1 ${b[0]} ${b[1]} Z`} fill={C.amberL} /> })()}
      <path d={`M ${x} ${y} L ${x} ${y - r * 0.7} M ${x} ${y} L ${x + r * 0.5} ${y + r * 0.2}`} stroke="#334155" strokeWidth={r / 9} strokeLinecap="round" />
    </g>
  )
}

function Hourglass({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-22" y="-44" width="44" height="6" rx="2" fill="#a16207" /><rect x="-22" y="38" width="44" height="6" rx="2" fill="#a16207" />
      <path d="M -16 -38 L 16 -38 L 2 0 L 16 38 L -16 38 L -2 0 Z" fill="#e0f2fe" stroke="#94a3b8" strokeWidth="2" />
      <path d="M -9 -20 L 9 -20 L 1 -2 L -1 -2 Z M -13 36 L 13 36 L 0 22 Z" fill="#fbbf24" />
    </g>
  )
}

function Seal({ x, y, r = 16 }: { x: number; y: number; r?: number }) {
  return <g><circle cx={x} cy={y} r={r} fill="none" stroke="#dc2626" strokeWidth="3" /><circle cx={x} cy={y} r={r * 0.55} fill="#dc2626" opacity="0.8" /></g>
}

function Booth({ x, w = 130, color }: { x: number; w?: number; color: string }) {
  return (
    <g>
      <rect x={x} y={70} width={w} height="30" rx="4" fill={color} />
      <rect x={x + 4} y={100} width="6" height={FLOOR - 100} fill="#94a3b8" /><rect x={x + w - 10} y={100} width="6" height={FLOOR - 100} fill="#94a3b8" />
      <rect x={x + 14} y={110} width={w - 28} height="70" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <rect x={x + 10} y={FLOOR - 56} width={w - 20} height="56" rx="3" fill={color} opacity="0.85" />
    </g>
  )
}

export const SCENES: Record<string, () => ReactNode> = {
  尊敬語: () => (
    <Card bg="lilac">
      <P cast="staff" x={130} y={FLOOR} h={H - 6} armR={[40, 70]} />
      <P cast="client" x={350} y={FLOOR} h={H} />
      <Bubble x={190} y={64} w={170} h={58} tail="l"><Txt x={-14} y={1} size={22} color={C.indigo}>おっしゃる</Txt><Arrow x1={62} y1={14} x2={62} y2={-16} color={C.indigo} w={4} /></Bubble>
      <Star x={350} y={96} r={14} />
    </Card>
  ),
  お待ち: () => (
    <Card bg="office">
      <rect x={88} y={150} width="64" height="70" rx="12" fill="#475569" />
      <P cast="client" x={120} y={FLOOR - 4} h={150} pose="chair" armL={[30, -40]} />
      <rect x={84} y={214} width="72" height="14" rx="5" fill="#64748b" />
      <rect x={92} y={228} width="6" height={FLOOR - 228} fill="#64748b" /><rect x={142} y={228} width="6" height={FLOOR - 228} fill="#64748b" />
      <Clock x={300} y={90} r={42} />
      <Hourglass x={400} y={200} s={1.3} />
      <Bow cast="staff" x={290} y={FLOOR} h={H - 30} deg={20} />
    </Card>
  ),
  よろしい: () => (
    <Card bg="mint">
      <P cast="junior" x={130} y={FLOOR} h={H} armR={[52, 96]} />
      <Doc x={214} y={174} w={52} h={66} rot={-6} lines={3} />
      <P cast="client" x={350} y={FLOOR} h={H} armL={[30, 50]} />
      <Bubble x={140} y={64} w={84} h={52} tail="l"><Txt x={0} y={2} size={30} color={C.indigo} weight={900}>?</Txt></Bubble>
      <Bubble x={350} y={66} w={84} h={52} tail="r" color="#ecfdf5"><Check x={0} y={2} s={1} /></Bubble>
    </Card>
  ),
  丁寧: () => (
    <Card bg="warm">
      <Bow cast="staff" x={150} y={FLOOR} h={H - 6} deg={24} armR={[60, 84]} armL={[60, 84]} />
      <Gift x={244} y={210} s={1.2} />
      <P cast="client" x={360} y={FLOOR} h={H} armL={[40, 70]} />
      <Sparkle x={244} y={130} r={12} /><Sparkle x={210} y={150} r={7} color={C.indigoL} /><Sparkle x={280} y={146} r={8} color={C.rose} />
    </Card>
  ),
  いたす: () => (
    <Card bg="office">
      <Bow cast="junior" x={140} y={FLOOR} h={H} deg={22} />
      <Clipboard x={330} y={150} w={140} h={180}><Checklist x={-50} y={-50} rows={4} w={100} checked={[0, 1, 2]} gap={28} /></Clipboard>
      <Gear x={420} y={70} r={20} />
      <Bubble x={190} y={60} w={90} h={52} tail="l"><Check x={0} y={2} /></Bubble>
    </Card>
  ),
  ご来場: () => (
    <Card bg="street">
      <rect x={260} y={40} width="14" height={FLOOR - 40} fill="#64748b" /><rect x={446} y={40} width="14" height={FLOOR - 40} fill="#64748b" />
      <rect x={250} y={36} width="220" height="40" rx="6" fill={C.indigo} />
      <rect x={290} y={50} width="140" height="12" rx="5" fill="#fff" />
      <P cast="shopper" x={90} y={FLOOR} h={H - 14} />
      <P cast="client" x={170} y={FLOOR} h={H} />
      <P cast="junior" x={360} y={FLOOR} h={H - 6} back />
      <Arrow x1={210} y1={240} x2={300} y2={240} color={C.green} w={6} />
    </Card>
  ),
  ご注文: () => (
    <Card bg="store">
      <Counter x={170} y={210} w={140} />
      <P cast="clerk" x={240} y={FLOOR - 40} h={130} armR={[50, 80]} />
      <Clipboard x={300} y={150} w={40} h={54}><Checklist x={-12} y={-14} rows={3} w={26} checked={[0, 1]} gap={11} /></Clipboard>
      <P cast="shopper" x={400} y={FLOOR} h={H - 6} armL={[60, 100]} />
      <Doc x={70} y={130} w={90} h={130} rot={-6} lines={0} head={C.amber}>
        {[0, 1, 2, 3].map(i => <g key={i}><circle cx={-26} cy={-34 + i * 24} r="7" fill={['#f87171', '#fbbf24', '#34d399', '#60a5fa'][i]} /><rect x={-14} y={-37 + i * 24} width="44" height="6" rx="3" fill="#cbd5e1" /></g>)}
      </Doc>
    </Card>
  ),
  ご記入: () => (
    <Card bg="cool" floor={false}>
      <Doc x={210} y={160} w={230} h={250} lines={0} head={C.indigo}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <rect x={-96} y={-74 + i * 48} width="50" height="8" rx="3" fill="#94a3b8" />
            <rect x={-96} y={-60 + i * 48} width="192" height="22" rx="4" fill="#fff" stroke={i === 2 ? C.amber : '#cbd5e1'} strokeWidth={i === 2 ? 3 : 2} />
            {i < 2 && <rect x={-90} y={-53 + i * 48} width={90 - i * 30} height="8" rx="3" fill={C.ink} opacity="0.6" />}
          </g>
        ))}
      </Doc>
      <Pencil x={240} y={186} s={1.3} rot={35} />
    </Card>
  ),
  マナー: () => (
    <Card bg="meeting">
      <Bow cast="junior" x={150} y={FLOOR} h={H} deg={18} armR={[64, 92]} />
      <Bow cast="client" x={330} y={FLOOR} h={H} deg={-14} armL={[64, 92]} />
      <rect x={226} y={164} width="30" height="20" rx="2" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-6 241 174)" />
      <rect x={232} y={170} width="14" height="3" fill={C.indigo} transform="rotate(-6 241 174)" />
      <Sparkle x={240} y={110} r={10} /><Sparkle x={210} y={130} r={6} color={C.indigoL} />
    </Card>
  ),
  使い分け: () => (
    <Card bg="lilac">
      <P cast="junior" x={240} y={FLOOR} h={H} armL={[50, 80]} armR={[50, 80]} />
      <P cast="boss" x={420} y={FLOOR} h={H - 10} />
      <P x={60} y={FLOOR} h={H - 20} hair="short" top="tshirt" topColor="#f97316" bottomColor="#334155" />
      <Bubble x={120} y={70} w={110} h={52} tail="r" color="#fff7ed"><Txt x={0} y={1} size={20} color="#c2410c">うん!</Txt></Bubble>
      <Bubble x={350} y={70} w={150} h={52} tail="l" color="#eef2ff"><Txt x={0} y={1} size={20} color={C.indigo}>承知しました</Txt></Bubble>
    </Card>
  ),
  少々: () => (
    <Card bg="warm" floor={false}>
      <Clock x={160} y={160} r={96} wedge={[0, 5]} />
      <Txt x={360} y={130} size={48} color={C.amber} weight={900}>5</Txt>
      <Txt x={360} y={180} size={22} color={C.slate}>min</Txt>
      <circle cx={360} cy={250} r="6" fill={C.amber} /><circle cx={384} cy={250} r="4" fill={C.amberL} /><circle cx={340} cy={250} r="4" fill={C.amberL} />
    </Card>
  ),
  弊社: () => (
    <Card bg="street">
      <Building x={210} y={FLOOR} w={230} h={230} color="#a5b4c8" sign={<rect x={240} y={FLOOR - 244} width="170" height="8" rx="3" fill="#fff" />} />
      <Bow cast="junior" x={120} y={FLOOR} h={H} deg={18} armR={[70, 110]} />
      <Arrow x1={160} y1={130} x2={200} y2={150} color={C.amber} w={4} />
    </Card>
  ),
  契約: () => (
    <Card bg="mint" floor={false}>
      <Doc x={200} y={160} w={210} h={260} lines={6} head={C.ink}>
        <rect x={-80} y={70} width="80" height="3" fill="#94a3b8" /><rect x={20} y={70} width="80" height="3" fill="#94a3b8" />
        <Seal x={-40} y={96} r={14} /><Seal x={60} y={96} r={14} />
      </Doc>
      <g transform="translate(380 220) rotate(30)"><rect x="-7" y="-90" width="14" height="80" rx="3" fill="#1f2937" /><path d="M -7 -10 L 7 -10 L 0 6 Z" fill={C.amber} /></g>
      <circle cx={380} cy={90} r="34" fill={C.green} /><Check x={380} y={92} color="#fff" s={1.1} />
    </Card>
  ),
  展示: () => (
    <Card bg="lilac">
      <path d="M 200 0 L 280 0 L 330 220 L 150 220 Z" fill="#fef9c3" opacity="0.8" />
      <rect x={180} y={220} width="120" height={FLOOR - 220} fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
      <rect x={176} y={212} width="128" height="10" rx="3" fill="#cbd5e1" />
      <rect x={190} y={110} width="100" height="102" fill="#e0f2fe" opacity="0.6" stroke="#94a3b8" strokeWidth="3" />
      <rect x={210} y={150} width="60" height="60" rx="8" fill={C.indigo} /><circle cx={240} cy={180} r="14" fill={C.indigoL} />
      <Sparkle x={320} y={110} r={12} /><Sparkle x={160} y={140} r={8} />
      <P cast="shopper" x={70} y={FLOOR} h={H - 20} />
      <P cast="client" x={410} y={FLOOR} h={H - 10} />
    </Card>
  ),
  生産: () => (
    <Card bg="cool">
      <rect x={30} y={90} width="180" height={FLOOR - 90} fill="#94a3b8" />
      <path d="M 30 90 L 75 60 L 75 90 L 120 60 L 120 90 L 165 60 L 165 90 L 210 60 L 210 90" fill="#64748b" />
      <rect x={60} y={30} width="20" height="40" fill="#64748b" /><circle cx={78} cy={18} r="10" fill="#e2e8f0" /><circle cx={94} cy={8} r="7" fill="#e2e8f0" />
      <rect x={90} y={200} width="60" height={FLOOR - 200} fill="#475569" />
      <rect x={200} y={236} width="270" height="14" rx="7" fill="#475569" />
      {[220, 280, 340, 400].map(bx => <Box key={bx} x={bx} y={236} w={44} h={36} />)}
      <Arrow x1={230} y1={180} x2={440} y2={180} color={C.amber} w={5} />
    </Card>
  ),
  開発: () => (
    <Card bg="cool">
      <Desk x={40} y={214} w={250} />
      <rect x={60} y={176} width="130" height="40" fill="#1d4ed8" transform="rotate(-4 125 196)" />
      {[0, 1, 2].map(i => <line key={i} x1={70} y1={186 + i * 10} x2={180} y2={182 + i * 10} stroke="#bfdbfe" strokeWidth="1.5" />)}
      <Gear x={232} y={186} r={20} />
      <P cast="junior" x={340} y={FLOOR} h={H} armL={[60, 100]} />
      <Bulb x={150} y={80} s={1.1} />
      <Sparkle x={250} y={60} r={10} />
    </Card>
  ),
  在庫: () => (
    <Card bg="warm">
      {[0, 1, 2].map(r => (
        <g key={r}>
          <rect x={30} y={FLOOR - 4 - r * 74} width="300" height="8" fill="#94a3b8" />
          {[0, 1, 2, 3, 4].map(c => <Box key={c} x={40 + c * 58} y={FLOOR - 4 - r * 74} w={50} h={(r + c) % 3 ? 52 : 40} color={(r + c) % 2 ? '#d6a76a' : '#c99a5c'} />)}
        </g>
      ))}
      <rect x={30} y={60} width="8" height={FLOOR - 60} fill="#64748b" /><rect x={322} y={60} width="8" height={FLOOR - 60} fill="#64748b" />
      <P cast="staff" x={410} y={FLOOR} h={H - 6} armL={[30, 60]} />
      <Clipboard x={372} y={176} w={36} h={48} rot={-6}><Checklist x={-10} y={-14} rows={3} w={22} checked={[0, 1, 2]} gap={10} /></Clipboard>
    </Card>
  ),
  出荷: () => (
    <Card bg="street">
      <rect x={20} y={70} width="150" height={FLOOR - 70} fill="#cbd5e1" />
      <rect x={40} y={130} width="110" height={FLOOR - 130} fill="#64748b" />
      {[0, 1].map(i => <Box key={i} x={60 + i * 44} y={FLOOR} w={40} h={34} />)}
      <Box x={82} y={FLOOR - 34} w={40} h={32} />
      <Truck x={240} y={FLOOR} s={1.1} />
      <Box x={262} y={FLOOR - 50} w={40} h={30} /><Box x={306} y={FLOOR - 50} w={40} h={30} color="#c99a5c" />
      <Arrow x1={300} y1={120} x2={440} y2={120} color={C.green} w={7} />
    </Card>
  ),
  導入: () => (
    <Card bg="office">
      <Desk x={60} y={214} w={240} />
      <Monitor x={110} y={100} w={140} h={92}><rect x="10" y="10" width="106" height="16" rx="3" fill={C.indigo} /><Gear x={63} y={52} r={14} color={C.indigoL} /></Monitor>
      <Box x={340} y={FLOOR} w={100} h={80} color="#818cf8" label={<Txt x={390} y={FLOOR - 36} size={20} color="#fff" weight={900}>NEW</Txt>} />
      <Arrow x1={330} y1={190} x2={262} y2={160} color={C.green} w={5} />
      <Sparkle x={300} y={70} r={12} />
    </Card>
  ),
  展示会: () => (
    <Card bg="meeting">
      <Booth x={20} color={C.indigo} />
      <Booth x={175} color={C.green} />
      <Booth x={330} color={C.amber} />
      <P cast="shopper" x={150} y={FLOOR + 10} h={140} back />
      <P cast="client" x={310} y={FLOOR + 10} h={150} back />
    </Card>
  ),
  改定: () => (
    <Card bg="rose" floor={false}>
      <Doc x={220} y={160} w={250} h={240} lines={0} head={C.ink}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <rect x={-104} y={-66 + i * 42} width="80" height="8" rx="3" fill="#cbd5e1" />
            <Txt x={2} y={-62 + i * 42} size={15} color={C.slate}>{['¥800', '¥1,200', '¥500', '¥2,000'][i]}</Txt>
            <line x1={-26} y1={-62 + i * 42} x2={30} y2={-62 + i * 42} stroke={C.rose} strokeWidth="3" />
            <Txt x={80} y={-62 + i * 42} size={17} color={C.rose} weight={900}>{['¥850', '¥1,300', '¥550', '¥2,100'][i]}</Txt>
          </g>
        ))}
      </Doc>
      <Calendar x={380} y={30} w={86} ring={[0]} />
    </Card>
  ),
  機器: () => (
    <Card bg="cool">
      <Desk x={30} y={214} w={420} />
      <Monitor x={60} y={100} w={130} h={88}><rect x="10" y="10" width="96" height="10" rx="3" fill={C.indigoL} /></Monitor>
      <rect x={230} y={160} width="110" height="54" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <rect x={244} y={150} width="82" height="12" rx="2" fill="#fff" stroke="#cbd5e1" />
      <rect x={250} y={190} width="70" height="6" rx="3" fill="#475569" /><circle cx={326} cy={174} r="4" fill={C.green} />
      <rect x={370} y={150} width="56" height="64" rx="6" fill="#1f2937" /><rect x={376} y={156} width="44" height="52" rx="3" fill="#93c5fd" />
      <Phone x={410} y={120} s={0.8} />
    </Card>
  ),
  企画: () => (
    <Card bg="warm">
      <Board x={140} y={30} w={300} h={160}>
        <Sticky x={50} y={50} w={50} rot={-6} /><Sticky x={110} y={60} w={50} rot={4} color={C.greenL} /><Sticky x={170} y={50} w={50} rot={-3} color={C.roseL} />
        <Arrow x1={70} y1={110} x2={130} y2={120} color={C.slate} w={3} /><Arrow x1={150} y1={120} x2={210} y2={110} color={C.slate} w={3} />
        <circle cx={250} cy={110} r="18" fill={C.amber} /><Star x={250} y={110} r={10} color="#fff" />
      </Board>
      <P cast="staff" x={80} y={FLOOR} h={H} armR={[100, 130]} />
      <Bulb x={80} y={70} s={0.8} />
    </Card>
  ),
  店舗: () => (
    <Card bg="street">
      <Storefront x={120} y={FLOOR} w={240} h={200} />
      <Plant x={90} y={FLOOR} s={0.8} /><Plant x={390} y={FLOOR} s={0.8} />
    </Card>
  ),
  新店舗: () => (
    <Card bg="street">
      <Storefront x={120} y={FLOOR} w={240} h={200} color={C.rose} open />
      <line x1={100} y1={FLOOR - 70} x2={380} y2={FLOOR - 70} stroke="#dc2626" strokeWidth="6" />
      <path d="M 240 220 l -18 -12 l 0 24 Z M 240 220 l 18 -12 l 0 24 Z" fill="#dc2626" />
      {[[70, 80, C.amber], [100, 50, C.indigo], [400, 60, C.green], [430, 90, C.rose]].map(([bx, by, col], i) => (
        <g key={i}><line x1={bx as number} y1={(by as number) + 24} x2={(bx as number) + 4} y2={(by as number) + 90} stroke="#94a3b8" strokeWidth="1.5" /><ellipse cx={bx as number} cy={by as number} rx="16" ry="20" fill={col as string} /></g>
      ))}
      <Txt x={240} y={36} size={26} color={C.rose} weight={900}>OPEN</Txt>
    </Card>
  ),
}
