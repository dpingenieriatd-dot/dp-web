const DIAS = ["Lun 24", "Mar 25", "Mié 26", "Jue 27", "Vie 28", "Sáb 29"];

const EVENTOS: Record<number, { hora: string; titulo: string; detalle?: string; colorBorder: string; colorBg: string }[]> = {
  1: [
    {
      hora: "10:00",
      titulo: "Toma de muestras K1+800",
      colorBorder: "border-verde-claro",
      colorBg: "bg-fondo-verde",
    },
  ],
  2: [
    {
      hora: "08:00",
      titulo: "Visita técnica Frente 2",
      detalle: "Ing. C. Peña",
      colorBorder: "border-teal",
      colorBg: "bg-estado-ejec-bg",
    },
  ],
  4: [
    {
      hora: "14:00",
      titulo: "Capacitación brigadas",
      detalle: "24 asistentes · Aula 2",
      colorBorder: "border-ambar",
      colorBg: "bg-estado-pend-bg",
    },
  ],
};

export default function AgendaPage() {
  return (
    <section className="p-7">
      <div className="mb-[22px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Agenda</h1>
          <p className="m-0 text-texto-suave">Semana del 24 al 29 de agosto de 2026</p>
        </div>
        <button className="bg-ambar px-[18px] py-3 font-mono text-[11.5px] tracking-[.07em] text-verde-footer uppercase transition-colors hover:bg-ambar-hover">
          Agendar visita o capacitación
        </button>
      </div>

      <div className="overflow-x-auto border border-borde bg-white">
        <div className="grid min-w-[720px] grid-cols-6 gap-px bg-borde">
          {DIAS.map((d, i) => (
            <div
              key={d}
              className={`bg-fondo px-3.5 py-[13px] font-mono text-[10.5px] tracking-[.1em] uppercase ${
                i === 2 ? "text-tinta" : "text-texto-suave"
              }`}
            >
              {d}
            </div>
          ))}
          {DIAS.map((d, i) => (
            <div key={`col-${d}`} className="min-h-[240px] bg-white p-3.5">
              {EVENTOS[i]?.map((ev) => (
                <div
                  key={ev.titulo}
                  className={`border-l-[3px] p-3 ${ev.colorBorder} ${ev.colorBg}`}
                >
                  <div className="font-mono text-[10.5px] text-texto-suave">{ev.hora}</div>
                  <div className="mt-1 text-[13px] font-medium">{ev.titulo}</div>
                  {ev.detalle && (
                    <div className="mt-[3px] text-[12px] text-texto-suave">{ev.detalle}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
