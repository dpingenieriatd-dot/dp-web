export type SocialPlatform = "instagram" | "facebook" | "linkedin" | "youtube";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function InstagramGlyph() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <line x1="17.6" y1="6.4" x2="17.6" y2="6.4" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M15.5 2.5h-2.2A4.3 4.3 0 0 0 9 6.8v2.4H6.7v3.6H9v8.7h3.7v-8.7h2.6l.5-3.6h-3.1V7.1c0-.6.4-1 1-1h2.4z" />
    </svg>
  );
}

function LinkedinGlyph() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M15.3 9.3a5 5 0 0 1 5 5v6.2h-3.5v-6.2a1.7 1.7 0 0 0-3.4 0v6.2h-3.5V9.6h3.5v1.4a5 5 0 0 1 1.9-1.7z" />
      <rect x="2.7" y="9.6" width="3.4" height="10.9" />
      <circle cx="4.4" cy="4.9" r="1.8" />
    </svg>
  );
}

function YoutubeGlyph() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M21.5 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.4.5A3 3 0 0 0 2.5 7.2 30 30 0 0 0 2 12a30 30 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a3 3 0 0 0 2.1-2.1A30 30 0 0 0 22 12a30 30 0 0 0-.5-4.8z" />
      <polygon points="10 15.3 15.2 12 10 8.7" />
    </svg>
  );
}

const GLYPHS: Record<SocialPlatform, () => React.ReactElement> = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  linkedin: LinkedinGlyph,
  youtube: YoutubeGlyph,
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
