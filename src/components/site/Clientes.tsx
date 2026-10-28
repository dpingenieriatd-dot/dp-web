import Image from "next/image";
import Link from "next/link";
import { CLIENT_LOGOS } from "@/lib/client-logos";
import { Encabezado } from "./Encabezado";
import { IconFlecha } from "./Iconos";
import { enlaceFlecha } from "./ui";

// Guía 2026, cap. 3.7. Solo logos ya publicados en el sitio anterior: los nuevos se agregan
// cuando D&P confirme la autorización de cada cliente.
export function Clientes({ conEnlace = true }: { conEnlace?: boolean }) {
  return (
    <section id="experiencia" className="scroll-mt-[96px] border-t border-borde bg-white px-[28px] py-20 w900:py-24">
      <div className="mx-auto max-w-[1240px]">
        <Encabezado
          eyebrow="Nuestros clientes"
          titulo="Confían en nuestra experiencia."
          texto="Construimos relaciones de trabajo a partir del compromiso, el acompañamiento profesional y la atención a las necesidades de cada organización."
          accion={
            conEnlace ? (
              <Link
                href="/experiencia"
                className={enlaceFlecha}
              >
                Conocer nuestra experiencia
                <IconFlecha className="h-[18px] w-[18px]" />
              </Link>
            ) : undefined
          }
        />
        <ul className="m-0 mt-12 grid list-none grid-cols-2 gap-px overflow-hidden rounded-2xl border border-borde-2 bg-borde-2 p-0 w640:grid-cols-4 w900:grid-cols-7">
          {CLIENT_LOGOS.map((logo) => (
            <li key={logo.src} className="flex aspect-video items-center justify-center bg-white p-4">
              <Image
                src={logo.src}
                alt={logo.nombre}
                width={160}
                height={90}
                className="h-full w-full object-contain grayscale transition-[filter] duration-200 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
