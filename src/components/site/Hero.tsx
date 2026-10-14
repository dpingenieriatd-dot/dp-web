import Image from "next/image";

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
    <section id="inicio" className="relative overflow-hidden bg-verde-profundo text-fondo scroll-mt-[102px]">
      {/* Foto de fondo: en escritorio se corre a la derecha para que el equipo en campo no quede
          detrás del texto; el lado izquierdo se funde con el verde de marca. */}
      <div className="absolute inset-0 w900:left-[22%]">
        <Image
          src="/fotos-sitio-actual/foto-geotecnia-obra.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-verde-profundo/80 w900:bg-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #0A2A18 0%, #0A2A18 24%, rgba(10,42,24,.86) 40%, rgba(10,42,24,.45) 62%, rgba(10,42,24,.15) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #0A2A18 0%, rgba(10,42,24,.85) 22%, rgba(10,42,24,0) 52%), linear-gradient(180deg, rgba(10,42,24,.55) 0%, rgba(10,42,24,0) 18%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F7F8F4 1px, transparent 1px), linear-gradient(90deg, #F7F8F4 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-[28px] pt-24 pb-[72px] w900:pt-32 w900:pb-28">
        <div className="animate-dp-rise max-w-[640px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-verde-suave/35 px-[14px] py-2 font-mono text-[12px] tracking-[.14em] text-verde-suave uppercase">
            <span className="block h-1.5 w-1.5 rounded-full bg-verde-claro" />
            Ingeniería civil · SG-SST · Dotación
          </div>
          <h1 className="mt-[26px] text-[40px] leading-[1.05] font-extrabold tracking-[-.02em] font-display text-balance w900:text-[66px] w900:leading-[1.02]">
            Sistemas de seguridad en el trabajo e Ingeniería Integral
          </h1>
          <p className="mt-[22px] max-w-[52ch] text-[18px] leading-[1.65] text-fondo/80">
            Estudios de suelo, diseño geotécnico, sistemas de gestión en seguridad y salud en el
            trabajo y suministro de EPP para proyectos urbanísticos, viales y de infraestructura.
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

      </div>

      <div className="relative mx-auto max-w-[1240px] px-[28px]">
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
