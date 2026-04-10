export function StationScene(_props: Record<string, unknown>) {
  return (
    <svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="320" height="200" fill="#F8F8F8" />
      {/* Platform floor */}
      <rect x="0" y="150" width="320" height="50" fill="#E8E8E8" stroke="#CCC" strokeWidth="1" />
      {/* Platform edge yellow line */}
      <rect x="0" y="148" width="320" height="6" fill="#FFD700" />
      {/* Overhead sign board */}
      <rect x="60" y="20" width="200" height="35" rx="3" fill="#1A1A2E" stroke="#333" strokeWidth="2" />
      {/* Sign text placeholder lines */}
      <text x="160" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif">出口 / 改札</text>
      {/* Sign support poles */}
      <rect x="85" y="55" width="6" height="60" fill="#888" stroke="#555" strokeWidth="1" />
      <rect x="229" y="55" width="6" height="60" fill="#888" stroke="#555" strokeWidth="1" />
      {/* Train body */}
      <rect x="0" y="60" width="320" height="80" rx="8" fill="#FFFFFF" stroke="#333" strokeWidth="2.5" />
      {/* Train windows */}
      <rect x="20" y="75" width="45" height="35" rx="3" fill="#D0E8FF" stroke="#333" strokeWidth="1.5" />
      <rect x="80" y="75" width="45" height="35" rx="3" fill="#D0E8FF" stroke="#333" strokeWidth="1.5" />
      <rect x="140" y="75" width="45" height="35" rx="3" fill="#D0E8FF" stroke="#333" strokeWidth="1.5" />
      <rect x="200" y="75" width="45" height="35" rx="3" fill="#D0E8FF" stroke="#333" strokeWidth="1.5" />
      <rect x="260" y="75" width="45" height="35" rx="3" fill="#D0E8FF" stroke="#333" strokeWidth="1.5" />
      {/* Door */}
      <rect x="140" y="115" width="40" height="25" fill="#EEE" stroke="#333" strokeWidth="2" />
      <line x1="160" y1="115" x2="160" y2="140" stroke="#333" strokeWidth="1.5" />
      {/* Rails */}
      <rect x="0" y="147" width="320" height="4" fill="#888" />
      {/* Floor line */}
      <line x1="0" y1="195" x2="320" y2="195" stroke="#CCC" strokeWidth="1" />
    </svg>
  )
}
