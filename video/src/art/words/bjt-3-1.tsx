/** Word pictures for BJT 3-1 (keigo, trade). */
import type { ReactNode } from 'react'
import {
  Arrow, Bow, Box, Bubble, Building, C, Calendar, Card, Check, Clipboard, Coin, Counter, Doc, Envelope, FLOOR, Gear, Gift,
  Heart, Magnifier, P, Pencil, Phone, Shelf, Sparkle, Star, Tag, Truck, Txt, Waves,
} from './kit'

const H = 170

function Bouquet({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[[-12, -40, '#f472b6'], [8, -46, '#fbbf24'], [0, -30, '#f87171'], [-20, -26, '#a78bfa'], [16, -28, '#fb7185']].map(([cx, cy, c], i) => <circle key={i} cx={cx as number} cy={cy as number} r="9" fill={c as string} />)}
      <path d="M -18 -18 L 18 -18 L 6 14 L -6 14 Z" fill="#86efac" />
    </g>
  )
}

function Shield({ x, y, s = 1, color = C.green }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M 0 -60 L 50 -42 Q 50 30 0 60 Q -50 30 -50 -42 Z" fill={color} />
      <path d="M 0 -46 L 38 -32 Q 38 22 0 46 Q -38 22 -38 -32 Z" fill="#fff" opacity="0.25" />
      <Check x={0} y={2} s={1.6} color="#fff" />
    </g>
  )
}

function Umbrella({ x, y, s = 1, color = C.indigo }: { x: number; y: number; s?: number; color?: string }) {
  return <g transform={`translate(${x} ${y}) scale(${s})`}><path d="M -40 0 Q -40 -36 0 -36 Q 40 -36 40 0 Q 30 -8 20 0 Q 10 -8 0 0 Q -10 -8 -20 0 Q -30 -8 -40 0 Z" fill={color} /><line x1="0" y1="0" x2="0" y2="40" stroke="#334155" strokeWidth="3" /></g>
}

export const SCENES: Record<string, () => ReactNode> = {
  貴社: () => (
    <Card bg="cool">
      <Doc x={130} y={160} w={150} h={190} lines={5} head={C.indigo}>
        <rect x={-58} y={-62} width="70" height="14" rx="4" fill={C.amberL} />
      </Doc>
      <Pencil x={180} y={210} rot={30} s={0.9} />
      <Arrow x1={216} y1={130} x2={290} y2={130} color={C.amber} />
      <Building x={300} y={FLOOR} w={160} h={210} color="#c4b5a0" signColor={C.amber} sign={<Star x={380} y={FLOOR - 222} r={8} color="#fff" />} />
    </Card>
  ),
  おっしゃる: () => (
    <Card bg="lilac">
      <P cast="client" x={130} y={FLOOR} h={H + 6} armR={[50, 90]} />
      <Bubble x={200} y={66} w={150} h={60} tail="l"><rect x="-52" y="-12" width="104" height="8" rx="3" fill={C.indigoL} /><rect x="-52" y="4" width="70" height="8" rx="3" fill="#cbd5e1" /></Bubble>
      <Star x={130} y={104} r={14} />
      <Bow cast="junior" x={360} y={FLOOR} h={H - 10} deg={-14} />
      <Waves x={330} y={140} color={C.indigo} dir={-1} n={2} />
    </Card>
  ),
  お世話: () => (
    <Card bg="warm">
      <P cast="boss" x={190} y={FLOOR} h={H + 8} armR={[60, 40]} />
      <P cast="junior" x={290} y={FLOOR} h={H - 20} armL={[30, 60]} />
      <Doc x={340} y={200} w={44} h={56} lines={3} rot={8} />
      <Heart x={240} y={70} s={1.6} />
      <Sparkle x={190} y={60} r={8} /><Sparkle x={300} y={56} r={6} color={C.roseL} />
    </Card>
  ),
  存じる: () => (
    <Card bg="mint">
      <Bow cast="staff" x={170} y={FLOOR} h={H - 6} deg={22} />
      <P cast="client" x={360} y={FLOOR} h={H} armL={[40, 70]} />
      <Bubble x={210} y={64} w={110} h={58} tail="l"><Check x={-18} y={2} s={0.9} /><Txt x={26} y={2} size={22} color={C.green} weight={900}>!</Txt></Bubble>
      <Bubble x={360} y={70} w={70} h={48} tail="r"><Txt x={0} y={2} size={26} color={C.indigo} weight={900}>?</Txt></Bubble>
    </Card>
  ),
  申す: () => (
    <Card bg="meeting">
      <Bow cast="junior" x={150} y={FLOOR} h={H} deg={20} armR={[64, 92]} />
      <g transform="translate(240 168) rotate(-4)">
        <rect x="-26" y="-17" width="52" height="34" rx="3" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="-20" y="-10" width="28" height="5" fill={C.ink} /><rect x="-20" y="0" width="38" height="4" fill="#cbd5e1" /><rect x="-20" y="8" width="20" height="4" fill="#cbd5e1" />
      </g>
      <P cast="client" x={350} y={FLOOR} h={H} armL={[50, 80]} />
      <Bubble x={180} y={64} w={150} h={56} tail="l"><circle cx={-48} cy={0} r="12" fill={C.indigoL} /><rect x="-28" y="-6" width="80" height="12" rx="4" fill={C.ink} /></Bubble>
    </Card>
  ),
  お呼び: () => (
    <Card bg="office">
      {[260, 330, 400].map(cx => <rect key={cx} x={cx - 28} y={150} width="56" height="70" rx="12" fill="#475569" />)}
      <P cast="client" x={330} y={FLOOR - 4} h={150} pose="chair" />
      <P cast="shopper" x={400} y={FLOOR - 4} h={140} pose="chair" />
      {[260, 330, 400].map(cx => <rect key={cx} x={cx - 32} y={214} width="64" height="14" rx="5" fill="#64748b" />)}
      <P cast="staff" x={100} y={FLOOR} h={H} armR={[60, 100]} />
      <Waves x={130} y={110} color={C.indigo} n={3} />
      <rect x={180} y={50} width="80" height="40" rx="6" fill="#1e293b" /><Txt x={220} y={70} size={22} color="#4ade80" weight={900}>No.12</Txt>
      <rect x={312} y={170} width="22" height="14" rx="2" fill="#fff" stroke="#94a3b8" />
    </Card>
  ),
  ござる: () => (
    <Card bg="store">
      <Bow cast="clerk" x={130} y={FLOOR} h={H - 6} deg={16} armR={[70, 80]} />
      <rect x={240} y={210} width="180" height={FLOOR - 210} fill="#e7d7bd" />
      <rect x={232} y={202} width="196" height="12" rx="4" fill="#b08a5a" />
      <path d="M 300 0 L 360 0 L 400 202 L 260 202 Z" fill="#fef9c3" opacity="0.7" />
      <Box x={290} y={202} w={80} h={70} color={C.indigo} label={<rect x={306} y={150} width="48" height="16" rx="4" fill="#fff" />} />
      <Sparkle x={400} y={120} r={12} /><Sparkle x={270} y={110} r={8} />
    </Card>
  ),
  ご連絡: () => (
    <Card bg="cool">
      <Bow cast="staff" x={110} y={FLOOR} h={H - 6} deg={16} armR={[60, 90]} />
      <Envelope x={240} y={110} w={74} rot={-8} />
      <Phone x={250} y={190} s={1.1} rot={10} />
      <Arrow x1={290} y1={150} x2={340} y2={150} color={C.indigo} />
      <P cast="client" x={400} y={FLOOR} h={H} />
      <Sparkle x={240} y={60} r={10} />
    </Card>
  ),
  さしあげる: () => (
    <Card bg="rose">
      <Bow cast="junior" x={150} y={FLOOR} h={H} deg={24} armR={[70, 110]} armL={[70, 110]} />
      <Gift x={246} y={162} s={1.3} />
      <Arrow x1={246} y1={110} x2={300} y2={80} color={C.rose} w={4} />
      <P cast="client" x={370} y={FLOOR} h={H + 6} armL={[40, 70]} />
    </Card>
  ),
  なにぶん: () => (
    <Card bg="lilac">
      <Bow cast="boss" x={180} y={FLOOR} h={H} deg={46} />
      <P cast="client" x={360} y={FLOOR} h={H} />
      <Bubble x={160} y={60} w={160} h={52} tail="r"><Txt x={0} y={1} size={20} color={C.indigo}>よろしく…</Txt></Bubble>
      <Heart x={290} y={130} s={1} /><Sparkle x={270} y={100} r={7} />
    </Card>
  ),
  わざわざ: () => (
    <Card bg="street">
      {[[130, 150], [220, 60], [300, 170], [380, 90]].map(([cx, cy], i) => <line key={i} x1={cx} y1={cy} x2={cx - 8} y2={cy + 20} stroke={C.sky} strokeWidth="3" strokeLinecap="round" />)}
      <path d={`M 20 ${FLOOR} C 80 230 40 190 120 200 C 200 210 170 160 250 170 C 320 180 300 240 360 ${FLOOR}`} fill="none" stroke="#94a3b8" strokeWidth="10" strokeDasharray="14 10" strokeLinecap="round" />
      <Building x={380} y={FLOOR} w={90} h={150} color="#a5b4c8" />
      <P cast="junior" x={250} y={170} h={120} armR={[150, 170]} armL={[40, 70]} />
      <Umbrella x={262} y={44} s={1} />
      <Doc x={222} y={124} w={26} h={32} lines={2} rot={-10} />
    </Card>
  ),
  御社: () => (
    <Card bg="meeting">
      <P cast="junior" x={110} y={FLOOR} h={H} armR={[100, 110]} />
      <Bubble x={190} y={60} w={120} h={52} tail="l"><Waves x={-30} y={0} n={3} color={C.indigo} /></Bubble>
      <Arrow x1={180} y1={130} x2={270} y2={150} color={C.green} />
      <Building x={290} y={FLOOR} w={170} h={200} color="#c4b5a0" signColor={C.green} sign={<Star x={375} y={FLOOR - 212} r={8} color="#fff" />} />
    </Card>
  ),
  感謝: () => (
    <Card bg="warm">
      <P cast="staff" x={150} y={FLOOR} h={H - 6} armR={[56, 94]} />
      <Bouquet x={232} y={178} s={1.3} />
      <P cast="boss" x={340} y={FLOOR} h={H + 6} armL={[40, 70]} />
      <Heart x={240} y={80} s={1.8} /><Sparkle x={200} y={60} r={9} /><Sparkle x={290} y={54} r={7} color={C.roseL} />
    </Card>
  ),
  承知: () => (
    <Card bg="mint">
      <P cast="boss" x={120} y={FLOOR} h={H + 6} armR={[60, 100]} />
      <Doc x={196} y={170} w={50} h={64} rot={-8} lines={3} />
      <P cast="junior" x={340} y={FLOOR} h={H - 10} armL={[30, 60]} />
      <Bubble x={360} y={70} w={90} h={56} tail="r" color="#ecfdf5"><Check x={0} y={2} s={1.1} /></Bubble>
    </Card>
  ),
  謝罪: () => (
    <Card bg="rose">
      <Bow cast="boss" x={160} y={FLOOR} h={H} deg={60} />
      <Bow cast="junior" x={250} y={FLOOR} h={H - 10} deg={60} />
      <P cast="client" x={400} y={FLOOR} h={H} />
      <path d="M 300 100 q 6 10 0 16 q -6 -6 0 -16 Z" fill={C.sky} />
      <path d="M 210 92 q 6 10 0 16 q -6 -6 0 -16 Z" fill={C.sky} />
    </Card>
  ),
  お電話: () => (
    <Card bg="office">
      <rect x={60} y={214} width="200" height="12" rx="4" fill="#e6d3b5" /><rect x={70} y={226} width="180" height={FLOOR - 226} fill="#d2bd9c" />
      <rect x={100} y={186} width="70" height="28" rx="6" fill="#334155" />
      <path d="M 96 186 q 39 -26 78 0" fill="none" stroke="#1f2937" strokeWidth="9" strokeLinecap="round" />
      <Waves x={170} y={170} color={C.rose} n={3} />
      <Bow cast="staff" x={330} y={FLOOR} h={H} deg={24} armR={[150, 160]} itemR={<Phone x={0} y={-10} s={0.9} />} />
      <Sparkle x={380} y={70} r={10} />
    </Card>
  ),
  ご確認: () => (
    <Card bg="cool">
      <Bow cast="staff" x={120} y={FLOOR} h={H - 6} deg={18} armR={[60, 90]} />
      <Doc x={230} y={160} w={90} h={116} rot={4} lines={5} />
      <Magnifier x={262} y={148} r={30} rot={-30}><Check x={262} y={150} s={0.8} /></Magnifier>
      <P cast="client" x={380} y={FLOOR} h={H} armL={[50, 80]} />
    </Card>
  ),
  ご質問: () => (
    <Card bg="meeting">
      <rect x={300} y={22} width="160" height="90" rx="6" fill="#1f2937" /><rect x={308} y={30} width="144" height="74" rx="3" fill="#e0f2fe" />
      <Bow cast="staff" x={380} y={FLOOR} h={H - 10} deg={-12} />
      {[90, 180].map((bx, i) => <P key={bx} cast={i ? 'shopper' : 'client'} x={bx} y={FLOOR + 10} h={150} back armR={i ? [170, 178] : [8, 4]} />)}
      <Bubble x={200} y={60} w={70} h={50} tail="l"><Txt x={0} y={2} size={30} color={C.indigo} weight={900}>?</Txt></Bubble>
    </Card>
  ),
  費用: () => (
    <Card bg="warm" floor={false}>
      <Doc x={180} y={160} w={210} h={250} lines={0} head={C.ink}>
        {['¥12,000', '¥8,500', '¥3,500'].map((t, i) => (
          <g key={t}><rect x={-86} y={-66 + i * 34} width="80" height="7" rx="3" fill="#cbd5e1" /><Txt x={56} y={-62 + i * 34} size={16} color={C.ink}>{t}</Txt></g>
        ))}
        <line x1={-86} y1={44} x2={86} y2={44} stroke={C.ink} strokeWidth="2" />
        <Txt x={0} y={74} size={30} color={C.rose} weight={900}>¥24,000</Txt>
      </Doc>
      {[0, 1, 2, 3].map(i => <Coin key={i} x={380} y={250 - i * 14} r={28} />)}
    </Card>
  ),
  値上がり: () => (
    <Card bg="rose" floor={false}>
      <Tag x={140} y={210} w={170} h={70} rot={-4} color="#fff"><Txt x={24} y={1} size={26} color={C.slate}>¥100</Txt></Tag>
      <Tag x={330} y={110} w={190} h={80} rot={-4} color={C.amber}><Txt x={26} y={1} size={32} color={C.ink} weight={900}>¥120</Txt></Tag>
      <Arrow x1={200} y1={160} x2={260} y2={130} color={C.rose} w={7} />
      <Arrow x1={440} y1={260} x2={440} y2={180} color={C.rose} w={8} />
    </Card>
  ),
  売れ行き: () => (
    <Card bg="store">
      <Shelf x={20} y={FLOOR} w={200} rows={3} items={['#f87171', '#e7d7bd', '#60a5fa', '#e7d7bd', '#34d399']} />
      <Tag x={110} y={60} w={80} h={36} rot={-6} color={C.rose}><Txt x={10} y={1} size={14} color="#fff" weight={900}>SOLD</Txt></Tag>
      <rect x={250} y={60} width="200" height="160" rx="10" fill="#fff" stroke="#e7cfae" strokeWidth="2" />
      <path d="M 270 200 L 310 170 L 350 180 L 390 120 L 430 80" fill="none" stroke={C.green} strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M 430 80 l -16 2 m 16 -2 l -2 16" stroke={C.green} strokeWidth="6" strokeLinecap="round" />
    </Card>
  ),
  納期: () => (
    <Card bg="lilac">
      <Calendar x={50} y={40} w={170} ring={[18]} mark={[18]} />
      <g transform="translate(320 90)"><circle r="40" fill="#fff" stroke="#475569" strokeWidth="6" /><path d="M 0 0 L 0 -26 M 0 0 L 18 10" stroke="#334155" strokeWidth="5" strokeLinecap="round" /></g>
      <Truck x={220} y={FLOOR} s={1.1} />
      <Arrow x1={180} y1={160} x2={240} y2={200} color={C.rose} w={4} />
    </Card>
  ),
  アンケート: () => (
    <Card bg="mint" floor={false}>
      <Clipboard x={200} y={165} w={220} h={270}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <rect x={-86} y={-90 + i * 50} width="120" height="7" rx="3" fill="#cbd5e1" />
            {[0, 1, 2].map(j => {
              const cx = -60 + j * 50, cy = -64 + i * 50, on = (i + j) % 3 === 0
              return <g key={j}><circle cx={cx} cy={cy} r="12" fill={on ? ['#fde68a', '#bbf7d0', '#fecaca'][j] : '#fff'} stroke="#94a3b8" strokeWidth="1.5" /><circle cx={cx - 4} cy={cy - 2} r="1.6" fill="#475569" /><circle cx={cx + 4} cy={cy - 2} r="1.6" fill="#475569" /><path d={j === 0 ? `M ${cx - 5} ${cy + 3} q 5 5 10 0` : j === 1 ? `M ${cx - 5} ${cy + 5} l 10 0` : `M ${cx - 5} ${cy + 6} q 5 -5 10 0`} stroke="#475569" strokeWidth="1.6" fill="none" /></g>
            })}
          </g>
        ))}
      </Clipboard>
      <Pencil x={330} y={210} rot={30} s={1.2} />
    </Card>
  ),
  メーカー: () => (
    <Card bg="cool">
      <rect x={40} y={110} width="230" height={FLOOR - 110} fill="#94a3b8" />
      <path d="M 40 110 L 97 76 L 97 110 L 154 76 L 154 110 L 211 76 L 211 110 L 270 76 L 270 110" fill="#64748b" />
      <rect x={70} y={160} width="80" height="40" rx="4" fill="#e0f2fe" /><rect x={170} y={160} width="70" height="40" rx="4" fill="#e0f2fe" />
      <rect x={120} y={226} width="60" height={FLOOR - 226} fill="#475569" />
      <Gear x={250} y={60} r={24} />
      <Box x={310} y={FLOOR} w={120} h={100} color="#a5b4fc" label={<g><rect x={330} y={FLOOR - 70} width="80" height="24" rx="4" fill={C.indigo} /><Star x={370} y={FLOOR - 58} r={8} color="#fff" /></g>} />
    </Card>
  ),
  保障: () => (
    <Card bg="mint">
      <P cast="junior" x={330} y={FLOOR} h={H - 10} />
      <rect x={60} y={190} width="150" height={FLOOR - 190} fill="#fca5a5" />
      <path d="M 44 196 L 135 130 L 226 196 Z" fill={C.rose} />
      <rect x={118} y={236} width="34" height={FLOOR - 236} fill="#7c2d12" />
      <Shield x={240} y={100} s={1.2} />
      <path d="M 40 120 Q 240 -20 440 120" fill="none" stroke={C.green} strokeWidth="5" strokeDasharray="10 8" />
    </Card>
  ),
}
