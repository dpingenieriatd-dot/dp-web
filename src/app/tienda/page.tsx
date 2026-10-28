import type { Metadata } from "next";
import { metadatosPagina } from "@/lib/seo";
import Link from "next/link";
import { CierreComercial } from "@/components/site/CierreComercial";
import { Encabezado } from "@/components/site/Encabezado";
import { IconCaja, IconCasco, IconFlecha, IconRegalo } from "@/components/site/Iconos";
import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";
import { btnPrimario, btnSecundario, enlaceFlecha } from "@/components/site/ui";
import { contacto } from "@/lib/site-config";

export const metadata: Metadata = metadatosPagina({
  titulo: "Souvenirs corporativos, dotación y EPP",
  descripcion:
    "Souvenirs corporativos, dotación laboral, elementos de protección personal y suministros para empresas. Solicita tu cotización.",
  ruta: "/tienda",
});

const COTIZAR = "/contacto?servicio=tienda";

// Guía 2026, caps. 4.4 y 5 (fase 1): catálogo por categorías y solicitud de cotización.
// "Comprar", precios, envíos y pagos solo se activan en la fase 2 (comercio electrónico).
const LINEAS = [
  {
    Icono: IconRegalo,
    titulo: "Souvenirs corporativos",
    texto:
      "Regalos empresariales, kits institucionales y artículos personalizados para eventos, campañas, reconocimiento y actividades organizacionales.",
  },
  {
    Icono: IconCasco,
    titulo: "Dotación y protección personal",
    texto:
      "Prendas de dotación, elementos de protección personal y artículos de seguridad para las actividades de los equipos de trabajo.",
  },
  {
    Icono: IconCaja,
    titulo: "Suministros especiales",
    texto:
      "Artículos y materiales empresariales que se suministran de acuerdo con las especificaciones de cada solicitud.",
  },
];

const CATEGORIAS = [
  "Souvenirs y regalos corporativos",
  "Kits empresariales",
  "Dotación laboral",
  "EPP y seguridad",
];

export default function TiendaPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tienda D&P · Souvenirs, dotaciones y suministros"
        titulo="Souvenirs y suministros que acompañan tu marca y tu operación."
        foto={{
          src: "/fotos-2026/dotaciones.webp",
          alt: "Souvenirs corporativos con el logo de D&P: termo, bolso, libreta y taza",
        }}
        migas={[
          { href: "/", label: "Inicio" },
          { href: "/servicios", label: "Servicios" },
          { label: "Tienda D&P" },
        ]}
      >
        <p className="m-0">
          Te ayudamos a encontrar artículos corporativos, dotaciones laborales y elementos de
          protección personal acordes con las necesidades de tu organización.
        </p>
        <div className="pt-4">
          <a href="#catalogo" className={btnPrimario}>
            Explorar catálogo
            <IconFlecha className="h-[18px] w-[18px]" />
          </a>
        </div>
      </PageHero>

      <section id="catalogo" className="scroll-mt-[96px] bg-white px-[28px] py-20 w900:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Encabezado
            eyebrow="Catálogo"
            titulo="Encuentra el detalle ideal para tu empresa."
            texto="Explora souvenirs corporativos, dotación y elementos de protección personal."
          />

          <ul aria-label="Categorías" className="m-0 mt-10 flex list-none flex-wrap gap-2.5 p-0">
            {CATEGORIAS.map((c) => (
              <li
                key={c}
                className="rounded-full border border-verde-claro/50 bg-fondo-verde px-4 py-2 text-[14.5px] font-medium text-verde-profundo"
              >
                {c}
              </li>
            ))}
          </ul>

          <ul className="m-0 mt-10 grid list-none grid-cols-1 gap-6 p-0 w900:grid-cols-3">
            {LINEAS.map(({ Icono, titulo, texto }) => (
              <li
                key={titulo}
                className="flex flex-col rounded-2xl border border-borde bg-white p-8 shadow-[0_6px_24px_rgba(0,83,35,.07)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-verde-profundo text-white">
                  <Icono className="h-7 w-7" />
                </span>
                <h3 className="mt-5 mb-2 font-display text-[21px] leading-[1.2] font-bold text-verde-marca">
                  {titulo}
                </h3>
                <p className="mt-0 mb-6 flex-1 text-[16px] leading-[1.65] text-texto-medio">{texto}</p>
                <Link href={COTIZAR} className={enlaceFlecha}>
                  Solicitar cotización
                  <IconFlecha className="h-[18px] w-[18px]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-borde bg-fondo px-[28px] py-20">
        <div className="mx-auto max-w-[1240px]">
          <Encabezado eyebrow="Tienda D&P" titulo="Cómo solicitar." />
          <p className="mt-6 mb-0 max-w-[70ch] text-[17px] leading-[1.7] text-texto-medio">
            Explora las categorías, selecciona tus productos de interés y solicita información sobre
            disponibilidad, personalización, cantidades y entrega.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href={COTIZAR} className={btnPrimario}>
              Solicitar cotización
              <IconFlecha className="h-[18px] w-[18px]" />
            </Link>
            <a
              href={contacto.whatsappHref}
              target="_blank"
              rel="noopener"
              className={btnSecundario}
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CierreComercial boton="Solicitar cotización" href={COTIZAR} />
    </SiteShell>
  );
}
