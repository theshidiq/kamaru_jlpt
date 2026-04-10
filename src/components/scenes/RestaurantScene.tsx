export function RestaurantScene(_props: Record<string, unknown>) {
  return (
    <svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="320" height="200" fill="#F8F8F8" />
      {/* Counter */}
      <rect x="0" y="80" width="320" height="16" fill="#D4A96A" stroke="#333" strokeWidth="2" />
      <rect x="0" y="96" width="320" height="70" fill="#C4995A" stroke="#333" strokeWidth="1" />
      {/* Menu board on wall */}
      <rect x="50" y="10" width="220" height="60" rx="4" fill="#2C2C2C" stroke="#333" strokeWidth="2" />
      <text x="160" y="28" textAnchor="middle" fill="#FFD700" fontSize="11" fontFamily="sans-serif">MENU</text>
      <line x1="70" y1="36" x2="270" y2="36" stroke="#555" strokeWidth="1" />
      <text x="90" y="48" fill="#FFF" fontSize="9" fontFamily="sans-serif">ランチセット ¥950</text>
      <text x="90" y="60" fill="#FFF" fontSize="9" fontFamily="sans-serif">カレーライス ¥800</text>
      {/* Table in front */}
      <rect x="90" y="145" width="140" height="10" rx="2" fill="#E8C898" stroke="#333" strokeWidth="1.5" />
      {/* Table legs */}
      <rect x="100" y="155" width="6" height="35" fill="#D4A96A" stroke="#333" strokeWidth="1" />
      <rect x="214" y="155" width="6" height="35" fill="#D4A96A" stroke="#333" strokeWidth="1" />
      {/* Plate on counter */}
      <ellipse cx="120" cy="77" rx="28" ry="8" fill="#FFF" stroke="#333" strokeWidth="1.5" />
      <circle cx="120" cy="73" r="12" fill="#F5E6CC" stroke="#333" strokeWidth="1" />
      {/* Cup */}
      <rect x="200" y="62" width="18" height="20" rx="3" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      <ellipse cx="209" cy="62" rx="9" ry="3" fill="#F0F0F0" stroke="#333" strokeWidth="1" />
      {/* Floor line */}
      <line x1="0" y1="192" x2="320" y2="192" stroke="#CCC" strokeWidth="1" />
    </svg>
  )
}
