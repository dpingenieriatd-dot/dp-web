import Image from "next/image";
import { Encabezado } from "./Encabezado";

type Testimonio = {
  quote: string;
  nombre: string;
  cargo: string;
  empresa: string;
  foto: string;
  estrellas: number;
};

const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      "D&P no solo es una empresa que presta su portafolio de servicio, es una empresa que nos ayuda a promover el bienestar físico, moral e integral de cada una de las personas que laboran en nuestra empresa, aquellos que intervienen en talleres, charlas, lúdicas y juegos. Tiene un equipo muy profesional que logra que las personas se conecten y deseen que no termine la actividad, y ese es el elemento que los diferencia de los demás.",
    nombre: "Andrea Catalina Rodríguez Oquendo",
    cargo: "Asesora Salud Ocupacional",
    empresa: "Hotel Faranda — Barranquilla, Colombia",
    foto: "/testimonios/andrea-rodriguez.png",
    estrellas: 5,
  },
  {
    quote:
      "Ser aliados estratégicos con D&P Ingeniería, liderada por Angélica Páez Buendía como psicóloga especialista en riesgo psicosocial, ha sido una experiencia enriquecedora para el Grupo Merco. Las actividades enfocadas en riesgo psicosocial han hecho que los trabajadores encuentren su razón de ser en sus roles personales y laborales, generando cambios importantes que impactan su núcleo familiar. Queremos seguir contando con la asesoría de este gran grupo de profesionales para hacer de nuestra organización un excelente lugar para trabajar, donde cada persona es valorada por su SER.",
    nombre: "Yaneth Turriago",
    cargo: "Jefe de Talento Humano",
    empresa: "Merco Grupo Logístico",
    foto: "/testimonios/yaneth-turriago.png",
    estrellas: 5,
  },
];

function Estrellas({ cantidad }: { cantidad: number }) {
  return (
    <div className="flex gap-1" aria-label={`${cantidad} de 5 estrellas`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={i < cantidad ? "fill-verde-brillante" : "fill-borde-2"}
        >
          <path d="M10 1.6l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.73.99-5.79L1.58 7.72l5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonios() {
  return (
    <section id="testimonios" className="scroll-mt-[96px] border-t border-borde bg-fondo px-[28px] py-20 w900:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-11">
          <Encabezado eyebrow="Testimonios" titulo="Lo que dicen nuestros clientes." />
        </div>

        <div className="grid grid-cols-1 gap-5 w900:grid-cols-2">
          {TESTIMONIOS.map((t) => (
            <figure
              key={t.nombre}
              className="flex flex-col rounded-2xl border border-borde bg-white px-[30px] pt-[30px] pb-[26px] shadow-[0_6px_24px_rgba(0,83,35,.06)]"
            >
              <Estrellas cantidad={t.estrellas} />

              <blockquote className="mt-5 flex-1 text-pretty text-[15.5px] leading-[1.65] text-texto-medio">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-borde-3 pt-5">
                <Image
                  src={t.foto}
                  alt={t.nombre}
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] flex-none rounded-full border border-borde object-cover"
                />
                <div className="min-w-0">
                  <div className="font-display text-[15px] font-bold text-tinta">{t.nombre}</div>
                  <div className="mt-0.5 text-[13px] leading-[1.4] text-texto-suave">
                    {t.cargo} · {t.empresa}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
