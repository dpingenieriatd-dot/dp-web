export type SocialPlatform = "instagram" | "facebook" | "linkedin";

// Logos con los colores oficiales de cada marca (no heredan currentColor).

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="dp-instagram-gradiente" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset=".3" stopColor="#FA7E1E" />
          <stop offset=".55" stopColor="#D62976" />
          <stop offset=".8" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#dp-instagram-gradiente)" />
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.2" cy="7.8" r="1" fill="#fff" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0866FF" />
      <path
        fill="#fff"
        d="M13 23.6v-8.8h2.6l.4-3H13V9.9c0-.9.3-1.5 1.5-1.5H16V5.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H7.5v3H10v8.8z"
      />
    </svg>
  );
}

function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <g fill="#fff" transform="translate(4.4 4.2) scale(.66)">
        <path d="M15.3 9.3a5 5 0 0 1 5 5v6.2h-3.5v-6.2a1.7 1.7 0 0 0-3.4 0v6.2h-3.5V9.6h3.5v1.4a5 5 0 0 1 1.9-1.7z" />
        <rect x="2.7" y="9.6" width="3.4" height="10.9" />
        <circle cx="4.4" cy="4.9" r="1.8" />
      </g>
    </svg>
  );
}

const GLYPHS: Record<SocialPlatform, () => React.ReactElement> = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  linkedin: LinkedinGlyph,
};

export function SocialIcon({
  platform,
  className = "",
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  const Glyph = GLYPHS[platform];
  return (
    <span className={className}>
      <Glyph />
    </span>
  );
}
