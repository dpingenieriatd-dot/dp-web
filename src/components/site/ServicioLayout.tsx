import Image from "next/image";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

type ServicioLayoutProps = {
  id: string;
  bgClassName: string;
  indice: string;
  titulo: string;
  subtitulo: string;
  placeholderLabel: string;
  placeholderSrc?: string;
  /** Mascota que acompaña a la foto principal (ocupa el 25% restante). */
  mascotSrc?: string;
  mascotAlt?: string;
  linkHref: string;
  linkLabel: string;
  children: React.ReactNode;
};

export function ServicioLayout({
  id,
  bgClassName,
  indice,
  titulo,
  subtitulo,
  placeholderLabel,
  placeholderSrc,
  mascotSrc,
  mascotAlt,
  linkHref,
  linkLabel,
  children,
}: ServicioLayoutProps) {
  return (
    <section id={id} className={`scroll-mt-[90px] px-[28px] py-[60px] ${bgClassName}`}>
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 border-t border-borde pt-11 w900:grid-cols-[.72fr_1.28fr]">
        <div>
          <div className="font-mono text-[11.5px] tracking-[.12em] text-verde-claro">
            {indice}
          </div>
          <h3 className="mt-3.5 mb-2.5 font-display text-[28px] leading-[1.1] font-extrabold w900:text-[34px] w900:leading-[1.08]">
            {titulo}
          </h3>
          <p className="mb-6 text-[16px] text-texto-suave">{subtitulo}</p>
          {mascotSrc ? (
            <div className="flex gap-3">
              <div className="relative h-[200px] min-w-0 flex-1 overflow-hidden border border-borde bg-white">
                <Image
                  src={mascotSrc}
                  alt={mascotAlt ?? titulo}
                  fill
                  sizes="140px"
                  className="object-contain p-1.5"
                />
              </div>
              <ImagePlaceholder
                label={placeholderLabel}
                src={placeholderSrc}
                alt={titulo}
                height={200}
                className="min-w-0 flex-[3]"
              />
            </div>
          ) : (
            <ImagePlaceholder
              label={placeholderLabel}
              src={placeholderSrc}
              alt={titulo}
              height={200}
            />
          )}
          <a
            href={linkHref}
            className="mt-6 inline-block border-b border-verde-claro pb-1 font-mono text-[12.5px] tracking-[.08em] text-verde-marca uppercase transition-colors hover:text-verde-claro"
          >
            {linkLabel}
          </a>
        </div>
        {children}
      </div>
    </section>
  );
}
