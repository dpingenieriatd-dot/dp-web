import Image from "next/image";
import { IconBarras, IconCorazon, IconFlecha, IconHoja, IconPersonas } from "./Iconos";

const BENEFICIOS = [
  { Icono: IconPersonas, linea1: "Equipos", linea2: "más seguros" },
  { Icono: IconBarras, linea1: "Organizaciones", linea2: "más productivas" },
  { Icono: IconCorazon, linea1: "Personas", linea2: "más saludables" },
  { Icono: IconHoja, linea1: "Proyectos", linea2: "más sostenibles" },
];

// Portada según el boceto de la Guía 2026: texto sobre fondo claro a la izquierda y la foto a la
// derecha, separada por un arco verde. El texto nunca va encima de la foto (Guía, cap. 8).
export function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-[96px] bg-white">
      <div className="relative overflow-hidden bg-[linear-gradient(100deg,#eef6e9_0%,#f6faf3_45%,#ffffff_70%)] pb-24 w900:pb-28">
        {/* Foto con borde curvo (solo escritorio) */}
        <div className="absolute inset-y-0 right-0 hidden w-[50%] w900:block">
          <div className="absolute inset-0 [clip-path:ellipse(88%_100%_at_100%_50%)]">
            <Image
              src="/fotos-2026/hero.webp"
              alt="Ingeniera de D&P con casco y tableta revisando una obra"
              fill
              priority
              sizes="50vw"
              className="object-cover object-[60%_30%]"
            />
          </div>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <ellipse cx="100" cy="50" rx="91" ry="103" fill="none" stroke="#68A93A" strokeWidth="14" vectorEffect="non-scaling-stroke" opacity=".55" />
            <ellipse cx="100" cy="50" rx="88.5" ry="100.5" fill="none" stroke="#119834" strokeWidth="5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1240px] px-[28px] pt-14 w900:min-h-[600px] w900:pt-20">
          <div className="animate-dp-rise max-w-[560px]">
            <p className="m-0 font-mono text-[12px] font-medium tracking-[.12em] text-verde-marca uppercase w640:text-[13px]">
              Ingeniería · SG-SST · Gestión Humana · Dotaciones
            </p>
            <h1 className="mt-5 font-display text-[44px] leading-[1.02] font-extrabold tracking-[-.025em] text-verde-profundo w640:text-[58px] w1100:text-[66px]">
              Soluciones integrales
            </h1>
            <p className="mt-3 font-display text-[24px] leading-[1.2] font-semibold tracking-[-.01em] text-verde-brillante w640:text-[30px]">
              para organizaciones más seguras, saludables y eficientes.
            </p>
            <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.65] text-texto-medio w640:text-[18px]">
              Combinamos conocimiento técnico y enfoque humano para prevenir riesgos, desarrollar
              talento y acompañar proyectos que generan bienestar y valor sostenible.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#contactenos"
                className="inline-flex items-center gap-2 rounded-lg bg-verde-marca px-6 py-3.5 text-[16px] font-semibold text-white shadow-sm transition-colors hover:bg-verde-marca-hover"
              >
                Solicitar cotización
                <IconFlecha className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center rounded-lg border-2 border-verde-marca bg-white px-6 py-3 text-[16px] font-semibold text-verde-marca transition-colors hover:bg-fondo-verde"
              >
                Conocer nuestros servicios
              </a>
            </div>
            <p className="mt-8 text-[16px] text-texto-medio">
              Cuidamos personas, protegemos organizaciones.
            </p>
          </div>
        </div>

        {/* Foto en celular: debajo del texto, sin texto encima */}
        <div className="relative mx-[28px] mt-10 aspect-[4/3] overflow-hidden rounded-2xl w900:hidden">
          <Image
            src="/fotos-2026/hero.webp"
            alt="Ingeniera de D&P con casco y tableta revisando una obra"
            fill
            sizes="100vw"
            className="object-cover object-[60%_25%]"
          />
        </div>
      </div>

      {/* Franja de beneficios, montada sobre el borde inferior del hero */}
      <div className="relative z-10 mx-auto -mt-16 max-w-[1240px] px-[16px] w640:px-[28px]">
        <ul className="m-0 grid list-none grid-cols-2 gap-y-6 rounded-2xl bg-verde-profundo px-5 py-7 text-white shadow-xl w900:grid-cols-4 w900:px-4 w900:py-8">
          {BENEFICIOS.map(({ Icono, linea1, linea2 }, i) => (
            <li
              key={linea1}
              className={`flex items-center justify-center gap-3.5 px-2 w900:gap-4 ${
                i > 0 ? "w900:border-l w900:border-white/30" : ""
              }`}
            >
              <Icono className="h-9 w-9 flex-none w900:h-11 w900:w-11" />
              <span className="text-[15px] leading-[1.3] w900:text-[17px]">
                {linea1}
                <br />
                {linea2}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
