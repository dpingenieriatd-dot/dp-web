import Link from "next/link";
import { StatCard, StatCardGrid } from "@/components/portal/StatCard";
import { ProgressBar } from "@/components/portal/ProgressBar";

const ESTANDARES = [
  { nombre: "Recursos", pct: "95%", color: "bg-verde-marca" },
  { nombre: "Gestión integral del SG-SST", pct: "88%", color: "bg-verde-marca" },
  { nombre: "Gestión de la salud", pct: "82%", color: "bg-verde-claro" },
  { nombre: "Gestión de peligros y riesgos", pct: "79%", color: "bg-verde-claro" },
  { nombre: "Gestión de amenazas", pct: "64%", color: "bg-ambar" },
  { nombre: "Verificación y mejora", pct: "71%", color: "bg-ambar" },
];

const HALLAZGOS = [
  { nivel: "Alta", cantidad: 2, dot: "bg-estado-crit-fg" },
  { nivel: "Media", cantidad: 3, dot: "bg-ambar" },
  { nivel: "Baja", cantidad: 1, dot: "bg-verde-claro" },
];

export default function IndicadoresPage() {
  return (
    <section className="p-7">
      <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Indicadores SG-SST</h1>
      <p className="mt-0 mb-[22px] text-texto-suave">
        Corte a 22 de agosto de 2026 · datos de demostración.
      </p>

      <StatCardGrid>
        <StatCard label="Cumplimiento plan anual" value="86%" />
        <StatCard label="Capacitados" value="148" />
        <StatCard label="Índice de frecuencia" value="1.8" />
        <StatCard label="Hallazgos abiertos" value="6" />
      </StatCardGrid>

      <div className="grid grid-cols-1 gap-5 w1100:grid-cols-[1.3fr_1fr]">
        <div className="border border-borde bg-white p-[22px]">
          <h2 className="m-0 mb-5 font-display text-[16px] font-bold">
            Avance por estándar mínimo
          </h2>
          <div className="grid gap-4">
            {ESTANDARES.map((e) => (
              <div key={e.nombre}>
                <div className="mb-1.5 flex justify-between text-[13px]">
                  <span>{e.nombre}</span>
                  <span className="font-mono">{e.pct}</span>
                </div>
                <ProgressBar percent={e.pct} colorClassName={e.color} height={8} />
              </div>
            ))}
          </div>
        </div>

        <div className="border border-borde bg-white p-[22px]">
          <h2 className="m-0 mb-[18px] font-display text-[16px] font-bold">
            Hallazgos por prioridad
          </h2>
          <div className="grid gap-3">
            {HALLAZGOS.map((h) => (
              <div key={h.nivel} className="flex items-center gap-3 border border-borde p-3.5">
                <span className={`h-2 w-2 rounded-full ${h.dot}`} />
                <span className="text-[13.5px]">{h.nivel}</span>
                <span className="ml-auto font-display font-bold">{h.cantidad}</span>
              </div>
            ))}
          </div>
          <Link
            href="/portal/documentos"
            className="mt-5 inline-block border-b border-verde-claro pb-[3px] font-mono text-[11.5px] tracking-[.07em] uppercase"
          >
            Descargar informe completo →
          </Link>
        </div>
      </div>
    </section>
  );
}
