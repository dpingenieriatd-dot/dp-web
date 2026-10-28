import Image from "next/image";
import Link from "next/link";
import { eyebrow as eyebrowClass } from "./ui";

type Miga = { href?: string; label: string };

type PageHeroProps = {
  eyebrow: string;
  titulo: string;
  migas?: Miga[];
  foto?: { src: string; alt: string };
  /** Párrafos, botones u otro contenido debajo del título. */
  children?: React.ReactNode;
};

// Portada de las páginas internas: mismo fondo claro y misma jerarquía que la portada del inicio.
// La foto va aparte, nunca con texto encima (Guía 2026, cap. 8).
export function PageHero({ eyebrow, titulo, migas, foto, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(100deg,#eef6e9_0%,#f6faf3_45%,#ffffff_75%)] px-[28px] pt-10 pb-16 w900:pt-12 w900:pb-20">
      <div
        className={`mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 ${
          foto ? "w900:grid-cols-[1.05fr_1fr] w900:gap-14" : ""
        }`}
      >
        <div className="animate-dp-rise max-w-[640px]">
          {migas && (
            <nav aria-label="Ruta de navegación" className="mb-7">
              <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0 text-[14px] text-texto-suave">
                {migas.map((m, i) => (
                  <li key={m.label} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {m.href ? (
                      <Link href={m.href} className="hover:text-verde-marca">
                        {m.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-texto-medio">
                        {m.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <p className={eyebrowClass}>{eyebrow}</p>
          <h1 className="mt-4 font-display text-[36px] leading-[1.08] font-extrabold tracking-[-.025em] text-verde-profundo w640:text-[44px] w1100:text-[52px]">
            {titulo}
          </h1>
          {children && (
            <div className="mt-6 space-y-4 text-[17px] leading-[1.7] text-texto-medio w640:text-[18px]">
              {children}
            </div>
          )}
        </div>

        {foto && (
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-6 h-[70%] w-[70%] rounded-[32px] border-[10px] border-verde-claro/45"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_18px_44px_rgba(0,83,35,.16)]">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                priority
                sizes="(min-width: 900px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
