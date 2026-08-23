type ImagePlaceholderProps = {
  label: string;
  variant?: "light" | "dark";
  height?: number | string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  variant = "light",
  height,
  className = "",
}: ImagePlaceholderProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex items-end border p-4 ${
        isDark ? "border-white/18" : "border-borde"
      } ${className}`}
      style={{
        height,
        backgroundImage: isDark
          ? "repeating-linear-gradient(135deg, rgba(247,248,244,.07) 0 10px, rgba(247,248,244,0) 10px 20px)"
          : "repeating-linear-gradient(135deg, #E9ECE4 0 10px, #F2F4EE 10px 20px)",
      }}
    >
      <span
        className={`font-mono text-[11px] tracking-wide ${
          isDark ? "text-white/60" : "text-texto-tenue"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
