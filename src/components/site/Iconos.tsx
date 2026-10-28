// Íconos de línea (trazo 1.75, 24×24) para el diseño de la Guía 2026. Heredan el color con currentColor.
type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconPersonas({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5" />
      <circle cx="5" cy="9.5" r="2.2" />
      <path d="M1.8 17.5c.4-2.2 1.8-3.6 3.7-3.9" />
      <circle cx="19" cy="9.5" r="2.2" />
      <path d="M22.2 17.5c-.4-2.2-1.8-3.6-3.7-3.9" />
    </Svg>
  );
}

export function IconBarras({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="13" width="4" height="7" rx=".6" />
      <rect x="10" y="8.5" width="4" height="11.5" rx=".6" />
      <rect x="16.5" y="4" width="4" height="16" rx=".6" />
    </Svg>
  );
}

export function IconCorazon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />
    </Svg>
  );
}

export function IconHoja({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 4C10 4 5 9 5 15c0 1.6.4 3 1 4 1 .6 2.4 1 4 1 6 0 10-5 10-16Z" />
      <path d="M4 20 14 10" />
    </Svg>
  );
}

export function IconEdificios({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 20V5.5L11 3v17" />
      <path d="M11 20V9l9 2.5V20" />
      <path d="M2.5 20h19" />
      <path d="M7 8h1M7 11h1M7 14h1M14.5 13.5h1M14.5 16.5h1M17 13.5h.5M17 16.5h.5" />
    </Svg>
  );
}

export function IconCasco({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 16.5a8 8 0 0 1 16 0" />
      <path d="M10 8.8V6h4v2.8" />
      <path d="M2.5 16.5h19v2h-19z" />
    </Svg>
  );
}

export function IconCarrito({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M2.5 3.5h2.4l2.2 11.2h11.1l2-7.7H6" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </Svg>
  );
}

export function IconEscudo({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.1 7.5 9.5 4.4-1.4 7.5-4.9 7.5-9.5V6Z" />
    </Svg>
  );
}

export function IconEngrane({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
      <circle cx="12" cy="12" r="6.2" />
    </Svg>
  );
}

export function IconRegalo({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="8.5" width="17" height="4" rx=".6" />
      <path d="M5 12.5V20h14v-7.5M12 8.5V20" />
      <path d="M12 8.5C10.5 5 7 4.5 7 6.5S10 8.5 12 8.5ZM12 8.5c1.5-3.5 5-4 5-2s-3 2-5 2Z" />
    </Svg>
  );
}

export function IconCaja({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.5 7.5 12 3.5l8.5 4v9L12 20.5l-8.5-4Z" />
      <path d="M3.5 7.5 12 11.5l8.5-4M12 11.5v9" />
    </Svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  );
}

export function IconFlecha({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
    </Svg>
  );
}

export function IconChevron({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
    </Svg>
  );
}
