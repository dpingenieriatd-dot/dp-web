const MAP: Record<string, string> = {
  "En ejecución": "bg-estado-ejec-bg text-estado-ejec-fg",
  Alistamiento: "bg-estado-ok-bg text-estado-ok-fg",
  Completado: "bg-estado-ok-bg text-estado-ok-fg",
  "En diseño": "bg-estado-pend-bg text-estado-pend-fg",
  Pendiente: "bg-estado-pend-bg text-estado-pend-fg",
  Pagada: "bg-estado-ok-bg text-estado-ok-fg",
  Crítico: "bg-estado-crit-bg text-estado-crit-fg",
};

export function StatusPill({ estado }: { estado: string }) {
  const classes = MAP[estado] ?? "bg-estado-neutro-bg text-estado-neutro-fg";
  return (
    <span
      className={`px-[9px] py-[5px] font-mono text-[10.5px] tracking-[.06em] uppercase ${classes}`}
    >
      {estado}
    </span>
  );
}
