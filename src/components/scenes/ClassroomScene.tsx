export function ClassroomScene(_props: Record<string, unknown>) {
  return (
    <svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="320" height="200" fill="#F8F8F8" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#EDE0C8" />
      <line x1="0" y1="155" x2="320" y2="155" stroke="#CCC" strokeWidth="1.5" />
      {/* Blackboard */}
      <rect x="30" y="15" width="260" height="80" rx="4" fill="#2E4A3A" stroke="#333" strokeWidth="2.5" />
      {/* Chalk lines on board */}
      <line x1="50" y1="40" x2="150" y2="40" stroke="#FFFFFFAA" strokeWidth="1.5" />
      <line x1="50" y1="52" x2="200" y2="52" stroke="#FFFFFFAA" strokeWidth="1.5" />
      <line x1="50" y1="64" x2="160" y2="64" stroke="#FFFFFFAA" strokeWidth="1.5" />
      <line x1="50" y1="76" x2="130" y2="76" stroke="#FFFFFFAA" strokeWidth="1.5" />
      {/* Board frame */}
      <rect x="30" y="15" width="260" height="80" rx="4" fill="none" stroke="#5C4A28" strokeWidth="3" />
      {/* Chalk tray */}
      <rect x="30" y="95" width="260" height="6" fill="#8B6A3A" stroke="#333" strokeWidth="1" />
      {/* Teacher's podium */}
      <rect x="120" y="112" width="80" height="40" rx="3" fill="#D4A96A" stroke="#333" strokeWidth="2" />
      <rect x="120" y="112" width="80" height="10" rx="2" fill="#E8C898" stroke="#333" strokeWidth="1.5" />
      {/* Student desks - row 1 */}
      <rect x="20" y="138" width="55" height="22" rx="2" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      <rect x="90" y="138" width="55" height="22" rx="2" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      <rect x="175" y="138" width="55" height="22" rx="2" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      <rect x="245" y="138" width="55" height="22" rx="2" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      {/* Desk legs */}
      <line x1="25" y1="160" x2="25" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="70" y1="160" x2="70" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="95" y1="160" x2="95" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="140" y1="160" x2="140" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="180" y1="160" x2="180" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="225" y1="160" x2="225" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="250" y1="160" x2="250" y2="175" stroke="#333" strokeWidth="1.5" />
      <line x1="295" y1="160" x2="295" y2="175" stroke="#333" strokeWidth="1.5" />
      {/* Papers on desks */}
      <rect x="27" y="141" width="30" height="18" fill="#FFFDE7" stroke="#CCC" strokeWidth="1" />
      <rect x="97" y="141" width="30" height="18" fill="#FFFDE7" stroke="#CCC" strokeWidth="1" />
      <rect x="182" y="141" width="30" height="18" fill="#FFFDE7" stroke="#CCC" strokeWidth="1" />
    </svg>
  )
}
