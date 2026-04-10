export function StoreScene(_props: Record<string, unknown>) {
  return (
    <svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="320" height="200" fill="#F8F8F8" />
      {/* Floor */}
      <rect x="0" y="155" width="320" height="45" fill="#E8E8E8" />
      <line x1="0" y1="155" x2="320" y2="155" stroke="#CCC" strokeWidth="1.5" />
      {/* Left shelf unit */}
      <rect x="10" y="30" width="80" height="130" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      {/* Shelf dividers */}
      <line x1="10" y1="62" x2="90" y2="62" stroke="#333" strokeWidth="1.5" />
      <line x1="10" y1="95" x2="90" y2="95" stroke="#333" strokeWidth="1.5" />
      <line x1="10" y1="128" x2="90" y2="128" stroke="#333" strokeWidth="1.5" />
      {/* Items on left shelf */}
      <rect x="15" y="40" width="18" height="20" rx="2" fill="#FFE0B2" stroke="#AAA" strokeWidth="1" />
      <rect x="38" y="40" width="18" height="20" rx="2" fill="#C8E6C9" stroke="#AAA" strokeWidth="1" />
      <rect x="61" y="40" width="18" height="20" rx="2" fill="#BBDEFB" stroke="#AAA" strokeWidth="1" />
      <rect x="15" y="70" width="18" height="22" rx="2" fill="#F8BBD9" stroke="#AAA" strokeWidth="1" />
      <rect x="38" y="70" width="18" height="22" rx="2" fill="#FFE0B2" stroke="#AAA" strokeWidth="1" />
      <rect x="61" y="70" width="18" height="22" rx="2" fill="#C8E6C9" stroke="#AAA" strokeWidth="1" />
      <rect x="15" y="102" width="18" height="22" rx="2" fill="#BBDEFB" stroke="#AAA" strokeWidth="1" />
      <rect x="38" y="102" width="18" height="22" rx="2" fill="#F8BBD9" stroke="#AAA" strokeWidth="1" />
      {/* Right shelf unit */}
      <rect x="230" y="30" width="80" height="130" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      <line x1="230" y1="62" x2="310" y2="62" stroke="#333" strokeWidth="1.5" />
      <line x1="230" y1="95" x2="310" y2="95" stroke="#333" strokeWidth="1.5" />
      <line x1="230" y1="128" x2="310" y2="128" stroke="#333" strokeWidth="1.5" />
      <rect x="235" y="40" width="18" height="20" rx="2" fill="#C8E6C9" stroke="#AAA" strokeWidth="1" />
      <rect x="258" y="40" width="18" height="20" rx="2" fill="#BBDEFB" stroke="#AAA" strokeWidth="1" />
      <rect x="281" y="40" width="18" height="20" rx="2" fill="#FFE0B2" stroke="#AAA" strokeWidth="1" />
      <rect x="235" y="70" width="18" height="22" rx="2" fill="#F8BBD9" stroke="#AAA" strokeWidth="1" />
      <rect x="258" y="70" width="18" height="22" rx="2" fill="#C8E6C9" stroke="#AAA" strokeWidth="1" />
      {/* Counter / cashier in middle */}
      <rect x="115" y="110" width="90" height="18" rx="3" fill="#D4A96A" stroke="#333" strokeWidth="2" />
      <rect x="115" y="128" width="90" height="30" fill="#C4995A" stroke="#333" strokeWidth="1.5" />
      {/* Register on counter */}
      <rect x="138" y="90" width="44" height="22" rx="3" fill="#333" stroke="#222" strokeWidth="1.5" />
      <rect x="143" y="94" width="34" height="13" fill="#4CAF50" stroke="#333" strokeWidth="1" />
      {/* Basket */}
      <rect x="130" y="150" width="30" height="20" rx="2" fill="#FFFFFF" stroke="#333" strokeWidth="1.5" />
      <line x1="130" y1="157" x2="160" y2="157" stroke="#CCC" strokeWidth="1" />
    </svg>
  )
}
