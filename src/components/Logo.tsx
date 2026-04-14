interface LogoProps {
  variant?: 'dark' | 'white';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const wordmarkColor = variant === 'white' ? '#FFFFFF' : '#0F1E3C';
  const shieldFill = variant === 'white' ? 'rgba(255,255,255,0.08)' : '#0F1E3C';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 72"
      fill="none"
      className={className}
      aria-label="EDD Profiler"
    >
      {/* Shield */}
      <path
        d="M32 8 L52 14 L52 34 C52 46 42 54 32 58 C22 54 12 46 12 34 L12 14 Z"
        fill={shieldFill}
        stroke="#0FB8B0"
        strokeWidth="1.5"
      />

      {/* Magnifying glass circle */}
      <circle cx="32" cy="30" r="9" stroke="#0FB8B0" strokeWidth="2" fill="none" />

      {/* Magnifying glass handle */}
      <line
        x1="38.5" y1="37.5" x2="44" y2="43"
        stroke="#0FB8B0" strokeWidth="2.5" strokeLinecap="round"
      />

      {/* Teal accent arc at shield base */}
      <path
        d="M22 50 C25 53 29 55.5 32 57 C35 55.5 39 53 42 50"
        stroke="#0FB8B0" strokeWidth="1.5" fill="none" strokeLinecap="round"
      />

      {/* EDD — bold */}
      <text
        x="64" y="36"
        fontFamily="Inter, DM Sans, system-ui, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.5"
        fill={wordmarkColor}
      >
        EDD
      </text>

      {/* PROFILER — light spaced */}
      <text
        x="65" y="51"
        fontFamily="Inter, DM Sans, system-ui, sans-serif"
        fontSize="13"
        fontWeight="400"
        letterSpacing="4"
        fill="#0FB8B0"
      >
        PROFILER
      </text>
    </svg>
  );
}
