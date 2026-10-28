import { IconBarras, IconCorazon, IconHoja } from "./Iconos";

// Guía 2026, cap. 3.6. Fondo verde oscuro (#005323), como indica el cap. 8.
const PILARES = [
  {
    Icono: IconCorazon,
    titulo: "Prevención y bienestar",
    texto: "Entornos de trabajo más seguros y saludables.",
  },
  {
    Icono: IconBarras,
    titulo: "Desarrollo y productividad",
    texto: "Organizaciones fortalecidas a través de su talento.",
  },
  {
    Icono: IconHoja,
    titulo: "Proyectos sostenibles",
    texto: "Soluciones responsables que generan valor.",
  },
];

export function Proposito() {
  return (
    <section
      id="proposito"
      className="relative scroll-mt-[96px] overflow-hidden bg-verde-profundo px-[28px] py-16 text-white w900:py-20"
    >
      {/* Hojas decorativas, como la textura del boceto */}
      <IconHoja className="pointer-events-none absolute -right-10 -bottom-16 h-[340px] w-[340px] text-white/[.06]" />
      <IconHoja className="pointer-events-none absolute top-6 right-[18%] h-[160px] w-[160px] rotate-45 text-white/[.05]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full border-[28px] border-verde-claro/15" />

      <div className="relative mx-auto max-w-[1100px] text-center">
        <p className="m-0 font-mono text-[12.5px] font-medium tracking-[.14em] text-verde-suave uppercase">
          Nuestro propósito
        </p>
        <h2 className="mt-4 font-display text-[32px] leading-[1.12] font-extrabold tracking-[-.02em] w900:text-[44px]">
          Cuidamos personas,
          <br />
          protegemos organizaciones.
        </h2>

        <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-10 p-0 w900:grid-cols-3 w900:gap-0">
          {PILARES.map(({ Icono, titulo, texto }, i) => (
            <li key={titulo} className={`px-6 ${i > 0 ? "w900:border-l w900:border-white/25" : ""}`}>
              <Icono className="mx-auto h-11 w-11" />
              <h3 className="mt-4 mb-2 font-display text-[19px] font-bold">{titulo}</h3>
              <p className="m-0 text-[16px] leading-[1.55] text-white/85">{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
