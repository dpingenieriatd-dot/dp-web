import type { Metadata } from "next";
import { metadatosPagina } from "@/lib/seo";
import Link from "next/link";
import { CierreComercial } from "@/components/site/CierreComercial";
import { Encabezado } from "@/components/site/Encabezado";
import { IconFlecha, IconEscudo, IconEngrane, IconPersonas } from "@/components/site/Iconos";
import { Atributos } from "@/components/site/Nosotros";
import { PageHero } from "@/components/site/PageHero";
import { Proposito } from "@/components/site/Proposito";
import { SiteShell } from "@/components/site/SiteShell";
import { btnSecundario } from "@/components/site/ui";

export const metadata: Metadata = metadatosPagina({
  titulo: "Nosotros",
  descripcion:
    "Empresa colombiana de ingeniería civil, seguridad y salud en el trabajo, gestión humana y suministros. Ingeniería aplicada al cuidado de las personas.",
  ruta: "/nosotros",
});

// Guía 2026, cap. 6.1. Los valores Trabajo, Rectitud e Integralidad vienen del sitio anterior;
// no se publican misión, visión ni certificaciones sin aval gerencial.
const VALORES = [
  { Icono: IconEngrane, titulo: "Trabajo", texto: "Compromiso con la calidad de nuestras actividades y entregables." },
  { Icono: IconEscudo, titulo: "Rectitud", texto: "Actuación responsable, ética y transparente." },
  {
    Icono: IconPersonas,
    titulo: "Integralidad",
    texto: "Diferentes especialidades articuladas para atender los retos de nuestros clientes.",
  },
];

const PASOS = [
  "Escuchamos tu necesidad.",
  "Diseñamos una solución acorde con el alcance requerido.",
  "Ejecutamos y hacemos seguimiento al servicio.",
];

export default function NosotrosPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Quiénes somos"
        titulo="Ingeniería aplicada al cuidado de las personas."
        foto={{
          src: "/fotos-2026/nosotros.webp",
          alt: "Equipo de D&P en camisa blanca trabajando alrededor de un computador",
        }}
        migas={[{ href: "/", label: "Inicio" }, { label: "Nosotros" }]}
      >
        <p className="m-0">
          D&amp;P Ingeniería Integral S.A.S. es una empresa colombiana que desarrolla soluciones en
          ingeniería civil, seguridad y salud en el trabajo, gestión humana y suministros
          empresariales. Nuestro equipo interdisciplinario integra capacidades técnicas y humanas
          para acompañar a los clientes en la prevención de riesgos, la gestión de sus proyectos y
          el desarrollo de sus colaboradores.
        </p>
        <p className="m-0">
          Trabajamos con cercanía, responsabilidad y orientación a resultados, adaptando cada
          servicio al contexto de la organización.
        </p>
        <div className="pt-2">
          <Link href="/servicios" className={btnSecundario}>
            Conocer nuestros servicios
            <IconFlecha className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </PageHero>

      <div className="border-b border-borde bg-white">
        <Atributos />
      </div>

      <section className="bg-white px-[28px] py-20 w900:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Encabezado eyebrow="Nosotros" titulo="Nuestros valores." />
          <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-6 p-0 w900:grid-cols-3">
            {VALORES.map(({ Icono, titulo, texto }) => (
              <li key={titulo} className="rounded-2xl border border-borde bg-fondo-verde p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-verde-profundo text-white">
                  <Icono className="h-7 w-7" />
                </span>
                <h3 className="mt-5 mb-2 font-display text-[22px] font-bold text-verde-marca">{titulo}</h3>
                <p className="m-0 text-[16px] leading-[1.65] text-texto-medio">{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-borde bg-fondo px-[28px] py-20 w900:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Encabezado eyebrow="Nosotros" titulo="Cómo trabajamos." />
          <ol className="m-0 mt-12 grid list-none grid-cols-1 gap-6 p-0 w900:grid-cols-3">
            {PASOS.map((paso, i) => (
              <li key={paso} className="relative rounded-2xl border border-borde bg-white p-8">
                <span className="font-display text-[44px] leading-none font-extrabold text-verde-claro">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 mb-0 text-[18px] leading-[1.5] font-semibold text-verde-profundo">{paso}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Proposito />
      <CierreComercial />
    </SiteShell>
  );
}
