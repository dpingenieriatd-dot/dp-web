"use client";

import { COTIZACIONES } from "@/lib/portal-data";
import { usePortalState } from "@/lib/portal-context";

export default function CotizacionesPage() {
  const { aprobadas, aprobar } = usePortalState();

  return (
    <section className="p-7">
      <div className="mb-[22px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Cotizaciones</h1>
          <p className="m-0 text-texto-suave">Solicite alcances a medida y apruebe en línea.</p>
        </div>
        <button className="bg-ambar px-[18px] py-3 font-mono text-[11.5px] tracking-[.07em] text-verde-footer uppercase transition-colors hover:bg-ambar-hover">
          Nueva solicitud
        </button>
      </div>

      <div className="grid gap-4">
        {COTIZACIONES.map((q) => {
          const ok = !!aprobadas[q.id];
          return (
            <div
              key={q.id}
              className="grid grid-cols-1 items-center gap-5 border border-borde bg-white p-[22px] w700:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] text-gris-etiqueta">{q.codigo}</span>
                  <span className="font-display text-[17px] font-bold">{q.nombre}</span>
                </div>
                <div className="mt-1.5 text-[12.5px] text-texto-suave">
                  {q.linea} · vigente hasta {q.vigencia} · {q.items}
                </div>
                <div className="mt-3 font-display text-[20px] font-bold">{q.valor}</div>
              </div>
              <div className="grid justify-items-start gap-2.5 w700:justify-items-end">
                <span className="bg-estado-neutro-bg px-2.5 py-1.5 font-mono text-[10.5px] tracking-[.06em] text-estado-neutro-fg uppercase">
                  {ok ? "Aprobada" : "Por aprobar"}
                </span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="border border-borde px-3.5 py-2.5 font-mono text-[11px] text-tinta transition-colors hover:border-verde-claro"
                  >
                    Ver PDF
                  </a>
                  <button
                    onClick={() => aprobar(q.id)}
                    className="bg-verde-marca px-3.5 py-2.5 font-mono text-[11px] tracking-[.06em] text-white uppercase transition-colors hover:bg-verde-marca-hover"
                  >
                    {ok ? "Aprobada ✓" : "Aprobar"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
