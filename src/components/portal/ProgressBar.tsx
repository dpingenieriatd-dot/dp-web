export function ProgressBar({
  percent,
  colorClassName = "bg-verde-claro",
  height = 5,
}: {
  percent: string;
  colorClassName?: string;
  height?: number;
}) {
  return (
    <div className="bg-borde-3" style={{ height }}>
      <span className={`block ${colorClassName}`} style={{ height, width: percent }} />
    </div>
  );
}
