'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'default' | 'white' | 'primary';
}

export function Logo({ className, width = 160, height = 40, variant = 'default' }: LogoProps) {
  const colors = {
    default: { primary: '#0F2C59', secondary: '#00A88F', accent: '#00B4D8', text: '#2B2D42', textMuted: '#6B6E85' },
    white: { primary: '#FFFFFF', secondary: '#FFFFFF', accent: '#FFFFFF', text: '#FFFFFF', textMuted: '#FFFFFF' },
    primary: { primary: '#0F2C59', secondary: '#00A88F', accent: '#00B4D8', text: '#2B2D42', textMuted: '#6B6E85' },
  };

  const c = colors[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0', className)}
      aria-label="Albarka S.A.S. - Consultoría en Dirección de Proyectos y Transformación Organizacional"
      role="img"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor={c.primary} />
          <stop offset="50%" stopColor={c.secondary} />
          <stop offset="100%" stopColor={c.accent} />
        </linearGradient>
        <linearGradient id="iconGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor={c.primary} />
          <stop offset="100%" stopColor={c.secondary} />
        </linearGradient>
      </defs>

      {/* Isotipo - Abstract arrow/transformation symbol */}
      <g transform="translate(10, 10)">
        {/* Background circle */}
        <circle cx="35" cy="35" r="35" fill="url(#iconGradient)" opacity="0.15" />
        {/* Arrow pointing up-right - transformation */}
        <path
          d="M35 12 L35 45 M20 30 L35 15 L50 30"
          stroke="url(#logoGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Three dots representing People, Process, Technology */}
        <circle cx="20" cy="52" r="3" fill={c.primary} opacity="0.6" />
        <circle cx="35" cy="52" r="3" fill={c.secondary} />
        <circle cx="50" cy="52" r="3" fill={c.accent} opacity="0.6" />
      </g>

      {/* Logotipo - Text */}
      <g transform="translate(100, 0)">
        {/* ALBARKA */}
        <text
          x="0"
          y="52"
          fontFamily="Montserrat, system-ui, sans-serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="-0.02em"
          fill={c.primary}
        >
          ALBARKA
        </text>
        {/* S.A.S. */}
        <text
          x="0"
          y="74"
          fontFamily="Montserrat, system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.15em"
          fill={c.text}
        >
          S.A.S.
        </text>
        {/* Tagline */}
        <text
          x="0"
          y="90"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="9"
          fontWeight="400"
          letterSpacing="0.05em"
          fill={c.textMuted}
        >
          DIRECCIÓN DE PROYECTOS · TRANSFORMACIÓN ORGANIZACIONAL
        </text>
      </g>

      {/* Decorative line */}
      <line
        x1="100"
        y1="58"
        x2="220"
        y2="58"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}