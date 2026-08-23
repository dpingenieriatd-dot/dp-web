import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const SERVICIOS = [
  {
    href: "#ingenieria",
    numero: "01",
    titulo: "Ingeniería y Geotecnia",
    subtitulo: "Diseños y proyectos",
  },
  {
    href: "#gestion",
    numero: "02",
    titulo: "Sistemas de Gestión",
    subtitulo: "Calidad, seguridad y salud en el trabajo",
  },
  {
    href: "#suministros",
    numero: "03",
    titulo: "Suministro y Dotaciones",
    subtitulo: "Souvenirs y Dotación EPP",
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-verde-profundo text-fondo scroll-mt-[90px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 88% 8%, rgba(87,167,51,.30) 0%, rgba(10,42,24,0) 62%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#F7F8F4 1px, transparent 1px), linear-gradient(90deg, #F7F8F4 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-end gap-14 px-[28px] pt-24 w900:grid-cols-[1.15fr_.85fr]">
        <div className="animate-dp-rise">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-verde-suave/35 px-[14px] py-2 font-mono text-[12px] tracking-[.14em] text-verde-suave uppercase">
            <span className="block h-1.5 w-1.5 rounded-full bg-verde-claro" />
            Ingeniería civil · SG-SST · Dotación
          </div>
          <h1 className="mt-[26px] text-[40px] leading-[1.05] font-extrabold tracking-[-.02em] font-display text-balance w900:text-[66px] w900:leading-[1.02]">
            Sistemas de seguridad en el trabajo e Ingeniería Integral
          </h1>
          <p className="mt-[22px] max-w-[52ch] text-[18px] leading-[1.65] text-fondo/72">
            Estudios de suelo, diseño geotécnico, sistemas de gestión y suministro de EPP para
            proyectos urbanísticos, viales y de infraestructura.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#contactenos"
              className="rounded-[2px] bg-ambar px-[26px] py-4 font-mono text-[13px] font-medium tracking-[.08em] text-verde-profundo uppercase transition-colors hover:bg-ambar-hover"
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="rounded-[2px] border border-fondo/32 px-[26px] py-4 font-mono text-[13px] tracking-[.08em] text-fondo uppercase transition-colors hover:border-verde-claro hover:text-verde-suave"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <ImagePlaceholder
          variant="dark"
          height={340}
          label="foto de obra / equipo en campo — 1200×900"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-[28px] pt-[72px]">
        <div className="grid grid-cols-1 gap-px border border-fondo/16 bg-fondo/16 w700:grid-cols-3">
          {SERVICIOS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="block bg-verde-profundo px-[26px] pt-[30px] pb-[34px] transition-colors hover:bg-[#0F3A22]"
            >
              <div className="font-mono text-[11.5px] tracking-[.12em] text-verde-suave">
                {s.numero}
              </div>
              <h2 className="mt-[14px] mb-2 font-display text-[24px] leading-[1.15] font-bold text-fondo">
                {s.titulo}
              </h2>
              <p className="m-0 text-[15px] text-fondo/66">{s.subtitulo}</p>
              <span className="mt-[18px] inline-block font-mono text-[12px] tracking-[.08em] text-ambar uppercase">
                Ver servicio →
              </span>
            </a>
          ))}
        </div>
        <div className="h-14" />
      </div>
    </section>
  );
}
