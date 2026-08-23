import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const VALORES = [
  { titulo: "Trabajo", texto: "Equipo técnico en campo y laboratorio" },
  { titulo: "Rectitud", texto: "Cumplimiento normativo y entregables auditables" },
  { titulo: "Integralidad", texto: "Un solo aliado para obra, SG-SST y dotación" },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="scroll-mt-[90px] bg-fondo px-[28px] py-[110px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[72px] w900:grid-cols-2">
        <div>
          <div className="font-mono text-[12px] tracking-[.14em] text-teal uppercase">
            Nosotros
          </div>
          <h2 className="mt-4 font-display text-[34px] leading-[1.1] font-extrabold tracking-[-.02em] w900:text-[48px] w900:leading-[1.06]">
            Ingeniería y bienestar laboral, con un mismo estándar.
          </h2>
          <p className="mt-[26px] text-pretty text-[19px] leading-[1.7] text-texto-medio">
            <strong className="text-tinta">
              Ofrecemos servicios de ingeniería civil y seguridad y salud en el trabajo a
              sectores económicos,
            </strong>{" "}
            que se orienten al crecimiento urbanístico o vial y que a su vez deseen garantizar
            las condiciones de seguridad y salud física o mental de sus trabajadores, apoyados en
            un equipo humano altamente calificado y comprometidos con la satisfacción de nuestros
            clientes.
          </p>

          <div className="mt-[38px] grid grid-cols-1 gap-px border border-borde bg-borde w640:grid-cols-3">
            {VALORES.map((v) => (
              <div key={v.titulo} className="bg-white px-5 py-[22px]">
                <div className="font-display text-[15px] font-bold text-verde-marca">
                  {v.titulo}
                </div>
                <p className="mt-1.5 text-[13.5px] leading-[1.5] text-texto-suave">{v.texto}</p>
              </div>
            ))}
          </div>

          <a
            href="#servicios"
            className="mt-[34px] inline-block rounded-[2px] bg-verde-marca px-6 py-[15px] font-mono text-[13px] tracking-[.08em] text-white uppercase transition-colors hover:bg-verde-marca-hover"
          >
            Ver servicios
          </a>
        </div>

        <div className="grid h-[560px] grid-rows-[1.3fr_1fr] gap-4">
          <ImagePlaceholder label="imagen «nosotros» — equipo D&P" />
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder label="ensayo de laboratorio" />
            <ImagePlaceholder label="capacitación SG-SST" />
          </div>
        </div>
      </div>
    </section>
  );
}
