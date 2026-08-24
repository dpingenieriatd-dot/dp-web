import { DOCUMENTOS } from "@/lib/portal-data";

const FILTROS = ["Informes técnicos", "Certificados", "Cargados por mí"];

export default function DocumentosPage() {
  return (
    <section className="p-7">
      <div className="mb-[22px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">
            Documentos y certificados
          </h1>
          <p className="m-0 text-texto-suave">
            Informes, certificados de capacitación y documentos de su empresa.
          </p>
        </div>
        <button className="bg-verde-marca px-[18px] py-3 font-mono text-[11.5px] tracking-[.07em] text-white uppercase transition-colors hover:bg-verde-marca-hover">
          Cargar documento
        </button>
      </div>

      <div className="overflow-x-auto border border-borde bg-white">
        <div className="min-w-[640px]">
          <div className="flex flex-wrap items-center gap-2 border-b border-borde px-5 py-3.5">
            <span className="bg-verde-profundo px-[11px] py-1.5 font-mono text-[11px] text-fondo">
              Todos
            </span>
            {FILTROS.map((f) => (
              <span
                key={f}
                className="border border-borde px-[11px] py-1.5 font-mono text-[11px] text-texto-suave"
              >
                {f}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-[80px_1fr_200px_130px_120px] border-b border-borde px-5 py-3 font-mono text-[10.5px] tracking-[.1em] text-texto-suave uppercase">
            <span>Tipo</span>
            <span>Documento</span>
            <span>Proyecto</span>
            <span>Fecha</span>
            <span></span>
          </div>
          {DOCUMENTOS.map((d) => (
            <div
              key={d.nombre}
              className="grid grid-cols-[80px_1fr_200px_130px_120px] items-center border-b border-borde-3 px-5 py-[15px] text-[13.5px] transition-colors hover:bg-fondo"
            >
              <span className="font-mono text-[10px] text-gris-etiqueta">{d.tipo}</span>
              <span className="truncate pr-2 font-medium">{d.nombre}</span>
              <span className="truncate pr-2 text-[12.5px] text-texto-suave">{d.proyecto}</span>
              <span className="font-mono text-[12px] text-texto-suave">{d.fecha}</span>
              <a href="#" className="justify-self-end font-mono text-[11px]">
                Descargar ↓
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
