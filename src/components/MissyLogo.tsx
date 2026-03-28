interface MissyLogoProps {
  size?: number;
  className?: string;
}

export default function MissyLogo({ size = 22, className = '' }: MissyLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-label="Missy"
      role="img"
    >
      {/* Head silhouette (dark) */}
      <path d="M12,2 L24,16 L32,12 L40,16 L52,2 L56,22 L52,37 L46,44 L18,44 L12,37 L8,22 Z" fill="#3d3530" />
      {/* White blaze */}
      <path d="M29,12 L38,15 L45,22 L44,37 L38,44 L26,44 L22,37 L22,22 Z" fill="#ede8e3" />
      {/* Left inner ear */}
      <path d="M14,5 L23,15 L10,20 Z" fill="#2a2520" />
      {/* Right inner ear */}
      <path d="M50,5 L54,20 L41,15 Z" fill="#2a2520" />
      {/* Left eye (diamond) */}
      <path d="M17,25 L19,23 L21,25 L19,27 Z" fill="#1a1614" />
      {/* Right eye */}
      <circle cx="35" cy="25" r="1.5" fill="#1a1614" />
      {/* Nose */}
      <path d="M29,32 L35,32 L32,36 Z" fill="#1a1614" />
      {/* Tongue */}
      <path d="M34,35 Q37,40 33,40 Q31,40 32,36 Z" fill="#e88ca0" />
      {/* Collar */}
      <rect x="16" y="43" width="32" height="5" rx="1.5" fill="#d4833c" />
      {/* Tag connector */}
      <rect x="31" y="47" width="2" height="3" rx="0.5" fill="#7a6e66" />
      {/* Tag */}
      <path d="M32,50 L35,52 L35,56 L32,58 L29,56 L29,52 Z" fill="#e88ca0" />
    </svg>
  );
}
