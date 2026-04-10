export function OfficeScene(_props: Record<string, unknown>) {
  return (
    <svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="320" height="200" fill="#F8F8F8" />
      {/* Window */}
      <rect x="220" y="20" width="80" height="70" fill="#E8F4FD" stroke="#333" strokeWidth="2" />
      <line x1="260" y1="20" x2="260" y2="90" stroke="#333" strokeWidth="1.5" />
      <line x1="220" y1="55" x2="300" y2="55" stroke="#333" strokeWidth="1.5" />
      {/* Desk */}
      <rect x="40" y="110" width="180" height="12" fill="#D4A96A" stroke="#333" strokeWidth="1.5" />
      {/* Desk legs */}
      <rect x="50" y="122" width="8" height="40" fill="#C4995A" stroke="#333" strokeWidth="1" />
      <rect x="200" y="122" width="8" height="40" fill="#C4995A" stroke="#333" strokeWidth="1" />
      {/* Monitor */}
      <rect x="80" y="75" width="80" height="52" rx="3" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      <rect x="86" y="81" width="68" height="38" fill="#D0E8FF" stroke="#333" strokeWidth="1" />
      {/* Monitor stand */}
      <rect x="115" y="127" width="10" height="8" fill="#888" stroke="#333" strokeWidth="1" />
      <rect x="108" y="133" width="24" height="4" fill="#888" stroke="#333" strokeWidth="1" />
      {/* Keyboard */}
      <rect x="90" y="118" width="60" height="12" rx="2" fill="#EEE" stroke="#333" strokeWidth="1.5" />
      {/* Document on desk */}
      <rect x="175" y="100" width="30" height="20" fill="#FFF" stroke="#333" strokeWidth="1.5" />
      <line x1="179" y1="106" x2="201" y2="106" stroke="#666" strokeWidth="1" />
      <line x1="179" y1="111" x2="201" y2="111" stroke="#666" strokeWidth="1" />
      <line x1="179" y1="116" x2="195" y2="116" stroke="#666" strokeWidth="1" />
      {/* Chair outline */}
      <rect x="105" y="155" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      <rect x="100" y="150" width="60" height="12" rx="3" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      {/* Chair legs */}
      <line x1="112" y1="185" x2="105" y2="200" stroke="#333" strokeWidth="2" />
      <line x1="148" y1="185" x2="155" y2="200" stroke="#333" strokeWidth="2" />
      {/* Floor line */}
      <line x1="0" y1="190" x2="320" y2="190" stroke="#CCC" strokeWidth="1" />
    </svg>
  )
}
