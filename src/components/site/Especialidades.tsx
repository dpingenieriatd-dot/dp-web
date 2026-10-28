import Image from "next/image";
import Link from "next/link";
import { ESPECIALIDADES } from "@/lib/servicios";
import { Encabezado } from "./Encabezado";
import { IconFlecha } from "./Iconos";
import { IconoEspecialidad } from "./IconoEspecialidad";
import { enlaceFlecha } from "./ui";

// Guía 2026, cap. 3.3: solo un resumen por tarjeta; el detalle vive en la página de cada servicio.
export function TarjetasEspecialidades({ excluir }: { excluir?: string }) {
  const lista = ESPECIALIDADES.filter((e) => e.slug !== excluir);
  return (
    <ul
      className={`m-0 grid list-none grid-cols-1 gap-6 p-0 w640:grid-cols-2 ${
        lista.length === 4 ? "w1100:grid-cols-4" : "w1100:grid-cols-3"
      }`}
    >
      {lista.map((e) => (
        <li
          key={e.slug}
          className="flex flex-col overflow-hidden rounded-2xl border border-borde bg-white shadow-[0_6px_24px_rgba(0,83,35,.07)]"
        >
          <div className="relative aspect-[3/2]">
            <Image
              src={e.foto}
              alt={e.fotoAlt}
              fill
              sizes="(min-width: 1100px) 300px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-1 flex-col px-6 pt-12 pb-7">
            <span className="absolute -top-9 left-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-white bg-verde-profundo text-white">
              <IconoEspecialidad nombre={e.icono} className="h-8 w-8" />
            </span>
            <h3 className="m-0 font-display text-[21px] leading-[1.2] font-bold text-verde-marca">
              {e.titulo}
            </h3>
            <p className="mt-3 mb-6 flex-1 text-[15.5px] leading-[1.6] text-texto-medio">{e.resumen}</p>
            <Link
              href={e.href}
              className={enlaceFlecha}
            >
              {e.boton}
              <IconFlecha className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Especialidades() {
  return (
    <section id="especialidades" className="scroll-mt-[96px] bg-white px-[28px] pt-20 pb-24 w900:pt-24">
      <div className="mx-auto max-w-[1240px]">
        <Encabezado
          eyebrow="Nuestras líneas de servicio"
          titulo="Cuatro especialidades, un mismo compromiso."
          texto="Acompañamos a empresas y entidades con soluciones que articulan la ingeniería, la seguridad, el bienestar y el talento humano."
        />
        <div className="mt-12">
          <TarjetasEspecialidades />
        </div>
      </div>
    </section>
  );
}
