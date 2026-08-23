export function StatCard({
  label,
  value,
  hint,
  hintClassName = "text-texto-suave",
}: {
  label: string;
  value: string;
  hint?: React.ReactNode;
  hintClassName?: string;
}) {
  return (
    <div className="bg-white px-[22px] py-5">
      <div className="font-mono text-[10.5px] tracking-[.12em] text-texto-suave uppercase">
        {label}
      </div>
      <div className="mt-3 font-display text-[34px] leading-none font-extrabold">{value}</div>
      {hint && <div className={`mt-2 text-[12.5px] ${hintClassName}`}>{hint}</div>}
    </div>
  );
}

export function StatCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 grid grid-cols-1 gap-px border border-borde bg-borde w640:grid-cols-2 w900:grid-cols-4">
      {children}
    </div>
  );
}
