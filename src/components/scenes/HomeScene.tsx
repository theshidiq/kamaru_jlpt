export function HomeScene(_props: Record<string, unknown>) {
  return (
    <svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background / wall */}
      <rect width="320" height="200" fill="#FFF8F0" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#E8D5B0" />
      <line x1="0" y1="155" x2="320" y2="155" stroke="#CCC" strokeWidth="1.5" />
      {/* Window */}
      <rect x="220" y="20" width="80" height="70" fill="#E8F4FD" stroke="#333" strokeWidth="2" />
      <line x1="260" y1="20" x2="260" y2="90" stroke="#333" strokeWidth="1.5" />
      <line x1="220" y1="55" x2="300" y2="55" stroke="#333" strokeWidth="1.5" />
      {/* Curtains */}
      <path d="M220 20 Q228 35 222 55 Q228 75 220 90" fill="none" stroke="#FFAAAA" strokeWidth="3" />
      <path d="M300 20 Q292 35 298 55 Q292 75 300 90" fill="none" stroke="#FFAAAA" strokeWidth="3" />
      {/* Sofa */}
      <rect x="20" y="120" width="160" height="55" rx="8" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      <rect x="20" y="120" width="160" height="20" rx="5" fill="#F0F0F0" stroke="#333" strokeWidth="1.5" />
      {/* Sofa armrests */}
      <rect x="20" y="120" width="18" height="55" rx="5" fill="#EEEEEE" stroke="#333" strokeWidth="1.5" />
      <rect x="162" y="120" width="18" height="55" rx="5" fill="#EEEEEE" stroke="#333" strokeWidth="1.5" />
      {/* Sofa cushions */}
      <rect x="40" y="143" width="55" height="28" rx="4" fill="#FAFAFA" stroke="#CCC" strokeWidth="1" />
      <rect x="100" y="143" width="58" height="28" rx="4" fill="#FAFAFA" stroke="#CCC" strokeWidth="1" />
      {/* TV */}
      <rect x="30" y="40" width="100" height="65" rx="4" fill="#1A1A2E" stroke="#333" strokeWidth="2" />
      <rect x="36" y="46" width="88" height="52" fill="#2C4A7C" stroke="#333" strokeWidth="1" />
      {/* TV stand */}
      <rect x="68" y="105" width="24" height="8" fill="#888" stroke="#333" strokeWidth="1" />
      <rect x="58" y="112" width="44" height="5" fill="#888" stroke="#333" strokeWidth="1" />
      {/* Coffee table */}
      <rect x="60" y="175" width="100" height="8" rx="2" fill="#E8C898" stroke="#333" strokeWidth="1.5" />
    </svg>
  )
}
