function PlantIcon({ color = '#5f8465', size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-hidden="true"
    >
      <rect x="18" y="42" width="28" height="16" rx="2" fill="#a65e2e" />
      <rect x="20" y="44" width="24" height="12" rx="1" fill="#8a4a22" />
      <path
        d="M32 42 C32 30 20 28 16 16 C28 16 34 26 32 38 Z"
        fill={color}
      />
      <path
        d="M32 42 C32 28 44 26 48 14 C36 14 30 24 32 38 Z"
        fill={color}
        opacity="0.85"
      />
      <path d="M32 42 L32 20" stroke="#2f5240" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default PlantIcon;
