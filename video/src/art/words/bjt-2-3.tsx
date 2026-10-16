/** Word pictures for BJT 2-3 (meetings, systems, general). */
import type { ReactNode } from 'react'
import {
  Arrow, Bow, Box, Bubble, Building, Bulb, C, Calendar, Card, Chart, Check, Checklist, Clipboard, Coin, Desk, Doc, FLOOR,
  Gear, Heart, Laptop, Magnifier, Monitor, P, Phone, Plant, Scales, Sparkle, Star, Table, Txt, Waves,
} from './kit'

const H = 170

function Cloud({ x, y, s = 1, color = '#e0f2fe' }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={color} stroke="#93c5fd" strokeWidth="2">
      <path d="M -50 20 Q -70 20 -70 0 Q -70 -22 -46 -22 Q -40 -46 -12 -44 Q 10 -60 34 -40 Q 64 -42 64 -12 Q 80 -6 74 12 Q 70 22 56 22 Z" />
    </g>
  )
}

function Bowl({ x, y, color = '#fff' }: { x: number; y: number; color?: string }) {
  return <g><path d={`M ${x - 22} ${y} Q ${x} ${y + 26} ${x + 22} ${y} Z`} fill={color} stroke="#cbd5e1" strokeWidth="2" /><ellipse cx={x} cy={y} rx="22" ry="5" fill="#fde68a" /></g>
}

function Steps({ x, y, n = 4, w = 70, h = 34, hi }: { x: number; y: number; n?: number; w?: number; h?: number; hi?: number }) {
  return <>{Array.from({ length: n }, (_, i) => (
    <g key={i}>
      <rect x={x + i * w} y={y - (i + 1) * h} width={w} height={(i + 1) * h} fill={i === hi ? C.amber : ['#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1'][i % 4]} />
      <Txt x={x + i * w + w / 2} y={y - (i + 1) * h + 18} size={18} color="#fff" weight={900}>{i + 1}</Txt>
    </g>
  ))}</>
}

export const SCENES: Record<string, () => ReactNode> = {
  提示: () => (
    <Card bg="meeting">
      <P cast="junior" x={140} y={FLOOR} h={H} armR={[110, 150]} />
      <Doc x={210} y={96} w={80} h={100} rot={8} lines={0} head={C.indigo}>
        <Txt x={0} y={4} size={20} color={C.ink} weight={900}>¥</Txt>
        <rect x={-26} y={24} width="52" height="6" rx="3" fill="#cbd5e1" />
      </Doc>
      <P cast="client" x={370} y={FLOOR} h={H} />
      <Arrow x1={260} y1={110} x2={330} y2={110} color={C.amber} w={4} />
    </Card>
  ),
  商談: () => (
    <Card bg="meeting">
      <P cast="junior" x={110} y={FLOOR - 8} h={150} pose="chair" armR={[50, 70]} />
      <P cast="client" x={370} y={FLOOR - 8} h={156} pose="chair" armL={[50, 70]} />
      <Table x={60} y={226} w={360} />
      <Doc x={200} y={214} w={60} h={24} lines={0} rot={-4} /><Doc x={280} y={214} w={60} h={24} lines={0} rot={5} head={C.green} />
      <Bubble x={240} y={70} w={150} h={64} tail="none">
        <Coin x={-36} y={0} r={18} /><path d="M -10 0 L 10 0 M 4 -6 L 10 0 L 4 6 M 10 0 L -10 0 M -4 6 L -10 0 L -4 -6" stroke={C.slate} strokeWidth="3" fill="none" /><Box x={22} y={18} w={36} h={34} />
      </Bubble>
    </Card>
  ),
  会食: () => (
    <Card bg="warm">
      <P cast="boss" x={100} y={FLOOR - 8} h={150} pose="chair" armR={[50, 70]} />
      <P cast="client" x={380} y={FLOOR - 8} h={156} pose="chair" armL={[50, 70]} />
      <Table x={60} y={226} w={360} />
      <Bowl x={190} y={214} /><Bowl x={290} y={214} color="#fecaca" />
      <ellipse cx={240} cy={220} rx="26" ry="6" fill="#fff" stroke="#cbd5e1" />
      <path d="M 232 214 q 8 -12 16 0" fill="#f97316" />
      {[340, 150].map(gx => <g key={gx}><path d={`M ${gx - 8} 190 L ${gx + 8} 190 L ${gx + 5} 216 L ${gx - 5} 216 Z`} fill="#fef3c7" stroke="#cbd5e1" strokeWidth="1.5" /><rect x={gx - 6} y={200} width="12" height="14" fill="#fbbf24" opacity="0.7" /></g>)}
      <line x1={196} y1={206} x2={222} y2={196} stroke="#7c4a24" strokeWidth="2.5" />
    </Card>
  ),
  打ち合わせ: () => (
    <Card bg="office">
      <rect x={180} y={196} width="120" height="10" rx="4" fill="#a8896a" /><rect x={234} y={206} width="12" height={FLOOR - 206} fill="#8f7357" />
      <Laptop x={240} y={196} s={0.8} />
      <P cast="junior" x={130} y={FLOOR} h={H} armR={[56, 90]} />
      <P cast="staff" x={350} y={FLOOR} h={H - 6} armL={[50, 80]} />
      <Bubble x={150} y={60} w={80} h={44} tail="r"><rect x="-26" y="-4" width="52" height="7" rx="3" fill="#cbd5e1" /></Bubble>
      <Bubble x={330} y={70} w={80} h={44} tail="l"><rect x="-26" y="-4" width="52" height="7" rx="3" fill="#cbd5e1" /></Bubble>
    </Card>
  ),
  疎通: () => (
    <Card bg="lilac">
      <P cast="staff" x={110} y={FLOOR} h={H - 6} />
      <P cast="client" x={370} y={FLOOR} h={H} />
      <path d="M 120 110 C 180 40 300 40 360 110" fill="none" stroke={C.indigo} strokeWidth="5" strokeDasharray="10 8" />
      <path d="M 120 140 C 180 200 300 200 360 140" fill="none" stroke={C.green} strokeWidth="5" strokeDasharray="10 8" />
      <circle cx={240} cy={125} r="28" fill={C.green} /><Check x={240} y={127} color="#fff" />
    </Card>
  ),
  ダウンロード: () => (
    <Card bg="cool">
      <Cloud x={240} y={70} s={1.2} />
      <Arrow x1={240} y1={80} x2={240} y2={170} color={C.indigo} w={9} />
      <Desk x={130} y={250} w={220} />
      <Laptop x={240} y={250} s={1.3}>
        <rect x="-30" y="-6" width="60" height="10" rx="5" fill="#e2e8f0" /><rect x="-30" y="-6" width="40" height="10" rx="5" fill={C.green} />
      </Laptop>
    </Card>
  ),
  至急: () => (
    <Card bg="rose">
      <path d="M 200 120 Q 200 60 240 60 Q 280 60 280 120 Z" fill="#ef4444" />
      <rect x={190} y={118} width="100" height="16" rx="4" fill="#475569" />
      {[-60, -30, 0, 30, 60].map(a => { const r = (a - 90) * Math.PI / 180; return <line key={a} x1={240 + Math.cos(r) * 74} y1={110 + Math.sin(r) * 74} x2={240 + Math.cos(r) * 94} y2={110 + Math.sin(r) * 94} stroke="#ef4444" strokeWidth="6" strokeLinecap="round" /> })}
      <P cast="junior" x={120} y={FLOOR} h={H - 10} armR={[150, 160]} itemR={<Phone x={0} y={-10} s={0.9} />} />
      <Waves x={150} y={110} color={C.rose} />
      <g transform="translate(380 200)"><circle r="44" fill="#fff" stroke="#ef4444" strokeWidth="6" /><path d="M 0 0 L 0 -28 M 0 0 L 22 10" stroke="#334155" strokeWidth="5" strokeLinecap="round" /></g>
      <Txt x={380} y={120} size={44} color="#ef4444" weight={900}>!</Txt>
    </Card>
  ),
  入力: () => (
    <Card bg="office" floor={false}>
      <rect x={60} y={180} width="360" height="110" rx="10" fill="#334155" />
      {Array.from({ length: 33 }, (_, i) => <rect key={i} x={74 + (i % 11) * 31} y={194 + Math.floor(i / 11) * 30} width="25" height="24" rx="4" fill={i === 15 ? C.amber : '#64748b'} />)}
      <rect x={110} y={30} width="260" height="120" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x={130} y={54} width="220" height="26" rx="4" fill="#f1f5f9" stroke={C.indigo} strokeWidth="3" />
      <rect x={140} y={62} width="90" height="10" rx="3" fill={C.ink} /><rect x={236} y={58} width="3" height="18" fill={C.indigo} />
      <rect x={130} y={96} width="220" height="26" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
    </Card>
  ),
  用件: () => (
    <Card bg="warm">
      <P cast="staff" x={120} y={FLOOR} h={H} armR={[150, 160]} itemR={<Phone x={0} y={-10} s={0.9} />} />
      <Bubble x={300} y={110} w={190} h={130} tail="l">
        <Doc x={0} y={0} w={90} h={100} lines={0} head={C.amber}>
          <circle cx={-24} cy={-14} r="8" fill={C.indigoL} /><rect x={-10} y={-18} width="44" height="8" rx="3" fill="#cbd5e1" />
          <rect x={-30} y={4} width="60" height="6" rx="3" fill="#cbd5e1" /><rect x={-30} y={18} width="44" height="6" rx="3" fill="#cbd5e1" />
        </Doc>
        <path d="M 46 -56 m -10 -8 a 10 10 0 1 1 20 0 q 0 10 -10 20 q -10 -10 -10 -20 Z" fill={C.rose} />
      </Bubble>
    </Card>
  ),
  レベル: () => (
    <Card bg="lilac">
      <Steps x={60} y={FLOOR} n={4} w={90} h={44} hi={1} />
      <P cast="junior" x={195} y={FLOOR - 88} h={130} />
      <Star x={375} y={90} r={18} />
    </Card>
  ),
  一部: () => (
    <Card bg="mint" floor={false}>
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x={70 + (i % 4) * 90} y={60 + Math.floor(i / 4) * 70} width="76" height="56" rx="8" fill={[1, 2, 5].includes(i) ? C.green : '#d1fae5'} stroke={[1, 2, 5].includes(i) ? '#059669' : '#a7dcc4'} strokeWidth="2" />
      ))}
      <path d="M 154 52 L 326 52 L 326 124 L 236 124 L 236 186 L 154 186 Z" fill="none" stroke={C.amber} strokeWidth="5" strokeDasharray="10 6" strokeLinejoin="round" />
    </Card>
  ),
  効果: () => (
    <Card bg="mint">
      <Plant x={110} y={FLOOR} s={0.6} />
      <Arrow x1={170} y1={210} x2={270} y2={210} color={C.green} w={7} />
      <Plant x={360} y={FLOOR} s={1.6} />
      <Sparkle x={300} y={70} r={14} /><Sparkle x={430} y={110} r={10} /><Sparkle x={400} y={50} r={7} color={C.indigoL} />
    </Card>
  ),
  報告: () => (
    <Card bg="office">
      <P cast="boss" x={340} y={FLOOR - 10} h={150} pose="chair" armL={[50, 80]} />
      <Desk x={260} y={220} w={200} />
      <P cast="junior" x={130} y={FLOOR} h={H} armR={[56, 96]} />
      <Doc x={222} y={168} w={64} h={84} rot={-8} lines={0} head={C.indigo}>
        <g transform="translate(-20 30)"><rect x="0" y="-10" width="10" height="10" fill="#93c5fd" /><rect x="14" y="-22" width="10" height="22" fill="#60a5fa" /><rect x="28" y="-32" width="10" height="32" fill="#2563eb" /></g>
      </Doc>
    </Card>
  ),
  見学: () => (
    <Card bg="cool">
      <rect x={20} y={60} width="440" height="120" fill="#cbd5e1" />
      <Gear x={80} y={110} r={26} /><Gear x={400} y={110} r={30} color="#b6c2d0" />
      <rect x={140} y={150} width="200" height="14" rx="7" fill="#475569" />
      {[160, 230, 300].map(bx => <Box key={bx} x={bx} y={150} w={34} h={28} />)}
      <P cast="staff" x={90} y={FLOOR} h={H - 10} armR={[150, 170]} itemR={<g><line x1="0" y1="0" x2="0" y2="-36" stroke="#475569" strokeWidth="2" /><path d="M 0 -36 L 24 -30 L 0 -22 Z" fill={C.rose} /></g>} />
      {[200, 270, 340, 410].map((bx, i) => <P key={bx} cast={i % 2 ? 'client' : 'junior'} x={bx} y={FLOOR} h={140 - (i % 2) * 6} />)}
    </Card>
  ),
  システム: () => (
    <Card bg="cool" floor={false}>
      <rect x={200} y={60} width="80" height="140" rx="8" fill="#334155" />
      {[0, 1, 2, 3].map(i => <g key={i}><rect x={212} y={74 + i * 30} width="56" height="20" rx="3" fill="#475569" /><circle cx={258} cy={84 + i * 30} r="3" fill={C.green} /></g>)}
      {[[70, 80], [70, 220], [410, 80], [410, 220], [240, 270]].map(([mx, my], i) => (
        <g key={i}>
          <line x1={240} y1={130} x2={mx} y2={my} stroke={C.indigoL} strokeWidth="4" />
          <rect x={mx - 34} y={my - 24} width="68" height="46" rx="5" fill="#1f2937" /><rect x={mx - 29} y={my - 19} width="58" height="36" rx="2" fill="#bfdbfe" />
        </g>
      ))}
      <rect x={200} y={60} width="80" height="140" rx="8" fill="none" stroke="#1e293b" strokeWidth="3" />
    </Card>
  ),
  先日: () => (
    <Card bg="warm" floor={false}>
      <Calendar x={110} y={50} w={260} ring={[9]} mark={[12]} />
      <Arrow x1={300} y1={290} x2={180} y2={290} color={C.amber} />
      <Txt x={330} y={290} size={16} color={C.slate}>today</Txt>
    </Card>
  ),
  意識: () => (
    <Card bg="lilac">
      <P cast="staff" x={240} y={FLOOR} h={H} />
      {[0, 1, 2].map(i => <circle key={i} cx={240} cy={FLOOR - 0.89 * H} r={30 + i * 22} fill="none" stroke={C.indigo} strokeWidth="3" opacity={0.7 - i * 0.2} />)}
      <Bubble x={380} y={70} w={110} h={58} tail="l"><Check x={0} y={2} s={1} color={C.indigo} /></Bubble>
      <Sparkle x={120} y={80} r={10} />
    </Card>
  ),
  構成: () => (
    <Card bg="cool" floor={false}>
      <rect x={190} y={36} width="100" height="44" rx="8" fill={C.indigo} />
      {[[80, 140], [240, 140], [400, 140]].map(([bx, by], i) => (
        <g key={i}>
          <path d={`M 240 80 L 240 108 L ${bx} 108 L ${bx} ${by - 22}`} fill="none" stroke="#94a3b8" strokeWidth="3" />
          <rect x={bx - 50} y={by - 22} width="100" height="44" rx="8" fill={C.indigoL} />
          {[0, 1].map(j => (
            <g key={j}>
              <path d={`M ${bx} ${by + 22} L ${bx} ${by + 50} L ${bx - 26 + j * 52} ${by + 50} L ${bx - 26 + j * 52} ${by + 70}`} fill="none" stroke="#cbd5e1" strokeWidth="3" />
              <rect x={bx - 48 + j * 52} y={by + 70} width="44" height="36" rx="6" fill="#e0e7ff" stroke={C.indigoL} strokeWidth="2" />
            </g>
          ))}
        </g>
      ))}
    </Card>
  ),
  該当: () => (
    <Card bg="mint" floor={false}>
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <rect x={150} y={36 + i * 52} width="290" height="42" rx="8" fill={i === 2 ? C.greenL : '#fff'} stroke={i === 2 ? C.green : '#cbd5e1'} strokeWidth={i === 2 ? 4 : 2} />
          <circle cx={174} cy={57 + i * 52} r="10" fill={i === 2 ? C.green : '#cbd5e1'} />
          <rect x={194} y={53 + i * 52} width={170 - (i % 2) * 40} height="8" rx="3" fill="#cbd5e1" />
        </g>
      ))}
      <Check x={410} y={140} />
      <rect x={30} y={120} width="70" height="42" rx="8" fill={C.green} />
      <circle cx={52} cy={141} r="10" fill="#fff" />
      <Arrow x1={104} y1={141} x2={142} y2={141} color={C.green} w={5} />
    </Card>
  ),
  重視: () => (
    <Card bg="warm">
      <Scales x={240} y={FLOOR} tilt={-18} />
      <Star x={164} y={154} r={26} />
      <circle cx={318} cy={78} r="9" fill="#cbd5e1" />
      <Txt x={164} y={96} size={36} color={C.rose} weight={900}>!</Txt>
    </Card>
  ),
  すでに: () => (
    <Card bg="mint">
      <Clipboard x={170} y={160} w={160} h={210}><Checklist x={-56} y={-60} rows={5} w={110} checked={[0, 1, 2, 3, 4]} gap={28} /></Clipboard>
      <g transform="translate(360 120) rotate(-12)">
        <rect x="-62" y="-26" width="124" height="52" rx="10" fill="none" stroke={C.green} strokeWidth="6" />
        <Txt x={0} y={2} size={26} color={C.green} weight={900}>DONE</Txt>
      </g>
      <g transform="translate(380 230)"><circle r="34" fill="#fff" stroke="#475569" strokeWidth="5" /><path d="M 0 0 L 0 -22 M 0 0 L -16 6" stroke="#334155" strokeWidth="4" strokeLinecap="round" /></g>
    </Card>
  ),
  メリット: () => (
    <Card bg="mint" floor={false}>
      <Doc x={180} y={160} w={210} h={230} lines={0} head={C.green}>
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <circle cx={-76} cy={-64 + i * 44} r="14" fill={C.green} />
            <path d={`M -76 ${-72 + i * 44} L -76 ${-56 + i * 44} M -84 ${-64 + i * 44} L -68 ${-64 + i * 44}`} stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <rect x={-52} y={-68 + i * 44} width={140 - (i % 2) * 30} height="8" rx="3" fill="#cbd5e1" />
          </g>
        ))}
      </Doc>
      <g transform="translate(380 160)">
        <rect x="-30" y="-6" width="20" height="56" rx="5" fill="#f2c9a5" />
        <path d="M -10 -6 L -10 50 L 34 50 Q 46 50 46 38 L 50 4 Q 52 -8 38 -8 L 12 -8 L 16 -34 Q 18 -50 4 -48 L -10 -6 Z" fill="#f2c9a5" stroke="#e2ad86" strokeWidth="2" />
      </g>
    </Card>
  ),
  使用: () => (
    <Card bg="office">
      <rect x={250} y={130} width="160" height={FLOOR - 130} rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <rect x={262} y={118} width="136" height="16" rx="4" fill="#cbd5e1" />
      <rect x={270} y={150} width="60" height="30" rx="4" fill="#1e293b" /><rect x={276} y={156} width="48" height="18" fill="#4ade80" />
      <rect x={270} y={200} width="120" height="10" rx="4" fill="#94a3b8" />
      <Doc x={350} y={236} w={60} h={20} lines={0} head="#cbd5e1" />
      <P cast="staff" x={170} y={FLOOR} h={H} armR={[64, 100]} />
      <Waves x={330} y={100} color={C.green} n={2} />
    </Card>
  ),
  医療: () => (
    <Card bg="cool">
      <Building x={240} y={FLOOR} w={210} h={210} color="#f1f5f9" win="#bae6fd" />
      <rect x={325} y={70} width="40" height="40" fill="#fff" /><path d="M 345 76 L 345 104 M 331 90 L 359 90" stroke="#dc2626" strokeWidth="10" />
      <P x={140} y={FLOOR} h={H} hair="short" top="shirt" topColor="#f8fafc" bottomColor="#475569" />
      <path d={`M 128 ${FLOOR - 0.76 * H} q 0 30 12 40 q 12 -10 12 -40`} fill="none" stroke="#334155" strokeWidth="3" />
      <circle cx={140} cy={FLOOR - 0.76 * H + 40} r="6" fill="#94a3b8" />
    </Card>
  ),
  含む: () => (
    <Card bg="warm">
      <path d="M 120 150 L 360 150 L 340 290 L 140 290 Z" fill="#d6a76a" />
      <path d="M 120 150 L 80 110 L 200 110 L 240 150 Z M 360 150 L 400 110 L 280 110 L 240 150 Z" fill="#c99a5c" />
      <Doc x={190} y={140} w={50} h={60} rot={-10} lines={3} />
      <circle cx={260} cy={130} r="20" fill={C.rose} />
      <rect x={290} y={110} width="36" height="40" rx="4" fill={C.indigo} />
      <rect x={130} y={170} width="220" height="110" fill="#d6a76a" />
      <rect x={60} y={40} width="360" height="250" rx="16" fill="none" stroke={C.green} strokeWidth="5" strokeDasharray="12 8" />
    </Card>
  ),
}
