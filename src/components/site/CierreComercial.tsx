import Link from "next/link";
import { contacto } from "@/lib/site-config";
import { IconFlecha, IconHoja } from "./Iconos";
import { btnClaro, btnContornoClaro } from "./ui";

type CierreComercialProps = {
  titulo?: string;
  texto?: string;
  boton?: string;
  href?: string;
};

// Cierre comercial (Guía 2026, cap. 3.9). Las páginas internas lo usan con el llamado de cada servicio.
export function CierreComercial({
  titulo = "Hablemos de lo que tu organización necesita.",
  texto = "Cuéntanos tu reto y te ayudaremos a identificar la solución más adecuada.",
  boton = "Solicitar asesoría",
  href = "/contacto",
}: CierreComercialProps) {
  return (
    <section className="bg-white px-[28px] py-16 w900:py-20">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[28px] bg-verde-profundo px-7 py-12 text-white w900:px-16 w900:py-14">
        <IconHoja className="pointer-events-none absolute -right-8 -bottom-12 h-[260px] w-[260px] text-white/[.07]" />
        <div className="relative grid grid-cols-1 items-center gap-8 w900:grid-cols-[1.4fr_1fr] w900:gap-12">
          <div>
            <h2 className="m-0 font-display text-[30px] leading-[1.12] font-extrabold tracking-[-.02em] w900:text-[38px]">
              {titulo}
            </h2>
            <p className="mt-4 mb-0 max-w-[52ch] text-[17px] leading-[1.65] text-white/85">{texto}</p>
          </div>
          <div className="flex flex-wrap gap-3.5 w900:justify-end">
            <Link href={href} className={btnClaro}>
              {boton}
              <IconFlecha className="h-[18px] w-[18px]" />
            </Link>
            <a href={contacto.whatsappHref} target="_blank" rel="noopener" className={btnContornoClaro}>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
