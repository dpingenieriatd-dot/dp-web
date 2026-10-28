import type { Metadata } from "next";
import { metadatosPagina } from "@/lib/seo";
import { CierreComercial } from "@/components/site/CierreComercial";
import { Clientes } from "@/components/site/Clientes";
import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";
import { Testimonios } from "@/components/site/Testimonios";

export const metadata: Metadata = metadatosPagina({
  titulo: "Experiencia, clientes y testimonios",
  descripcion:
    "Clientes, proyectos y testimonios que respaldan el trabajo de D&P Ingeniería Integral en prevención, bienestar, talento humano e ingeniería.",
  ruta: "/experiencia",
});

// Guía 2026, cap. 6.2: se conservan los clientes y los dos testimonios publicados. Los casos
// nuevos se agregan solo con material aprobado por D&P.
export default function ExperienciaPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Experiencia"
        titulo="Experiencias que respaldan nuestro trabajo."
        foto={{
          src: "/fotos-2026/capacitacion-sgsst.webp",
          alt: "Capacitación en SG-SST dictada por D&P a un grupo de trabajadores",
        }}
        migas={[{ href: "/", label: "Inicio" }, { label: "Experiencia" }]}
      >
        <p className="m-0">
          Conoce parte de nuestros proyectos, clientes y experiencias en prevención, bienestar,
          talento humano e ingeniería.
        </p>
      </PageHero>
      <Clientes conEnlace={false} />
      <Testimonios />
      <CierreComercial />
    </SiteShell>
  );
}
