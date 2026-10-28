import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CierreComercial } from "@/components/site/CierreComercial";
import { Encabezado } from "@/components/site/Encabezado";
import { TarjetasEspecialidades } from "@/components/site/Especialidades";
import { IconFlecha } from "@/components/site/Iconos";
import { IconoEspecialidad } from "@/components/site/IconoEspecialidad";
import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";
import { btnPrimario } from "@/components/site/ui";
import { PAGINAS_SERVICIO, hrefCotizar } from "@/lib/servicios";

// Páginas de servicio de la Guía 2026 (cap. 4): título, párrafo de beneficio, grupos de servicios
// y un único llamado principal a la acción.
export const dynamicParams = false;

export function generateStaticParams() {
  return PAGINAS_SERVICIO.map((e) => ({ slug: e.slug }));
}

function buscar(slug: string) {
  return PAGINAS_SERVICIO.find((e) => e.slug === slug);
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const e = buscar(slug);
  if (!e) return {};
  return {
    title: e.titulo,
    description: `${e.pagina.titular} ${e.pagina.intro}`,
    alternates: { canonical: e.href },
  };
}

export default async function ServicioPage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const e = buscar(slug);
  if (!e) notFound();
  const { pagina } = e;

  return (
    <SiteShell>
      <PageHero
        eyebrow={`Especialidad ${e.numero} · ${e.titulo}`}
        titulo={pagina.titular}
        foto={{ src: pagina.foto, alt: pagina.fotoAlt }}
        migas={[
          { href: "/", label: "Inicio" },
          { href: "/servicios", label: "Servicios" },
          { label: e.titulo },
        ]}
      >
        <p className="m-0">{pagina.intro}</p>
        <div className="pt-4">
          <Link href={hrefCotizar(e)} className={btnPrimario}>
            {pagina.cta}
            <IconFlecha className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </PageHero>

      <section className="bg-white px-[28px] py-20 w900:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Encabezado eyebrow="Qué hacemos" titulo={e.titulo} />
          <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-6 p-0 w640:grid-cols-2">
            {pagina.grupos.map((g, i) => (
              <li
                key={g.titulo}
                className={`rounded-2xl border border-borde bg-fondo-verde p-7 w900:p-8 ${
                  pagina.grupos.length % 2 === 1 && i === pagina.grupos.length - 1 ? "w640:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-verde-profundo text-white">
                    <IconoEspecialidad nombre={e.icono} className="h-6 w-6" />
                  </span>
                  <h3 className="m-0 font-display text-[20px] leading-[1.25] font-bold text-verde-marca">
                    {g.titulo}
                  </h3>
                </div>
                <p className="mt-4 mb-0 text-[16px] leading-[1.7] text-texto-medio">{g.texto}</p>
              </li>
            ))}
          </ul>

          <div
            className={`mt-12 grid grid-cols-1 gap-6 ${pagina.galeria.length > 1 ? "w640:grid-cols-2" : ""}`}
          >
            {pagina.galeria.map((f) => (
              <div
                key={f.src}
                className={`relative overflow-hidden rounded-2xl ${
                  pagina.galeria.length > 1 ? "aspect-[3/2]" : "aspect-[3/2] w900:aspect-[21/8]"
                }`}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes={pagina.galeria.length > 1 ? "(min-width: 640px) 50vw, 100vw" : "100vw"}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CierreComercial
        titulo="Hablemos de lo que tu organización necesita."
        texto="Cuéntanos tu reto y te ayudaremos a identificar la solución más adecuada."
        boton={pagina.cta}
        href={hrefCotizar(e)}
      />

      <section className="border-t border-borde bg-fondo px-[28px] py-20">
        <div className="mx-auto max-w-[1240px]">
          <Encabezado eyebrow="Otras especialidades" titulo="Cuatro especialidades, un mismo compromiso." />
          <div className="mt-12">
            <TarjetasEspecialidades excluir={e.slug} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
