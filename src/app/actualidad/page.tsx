import type { Metadata } from "next";
import { EnlaceInstagram, ListaPublicaciones } from "@/components/site/Actualidad";
import { CierreComercial } from "@/components/site/CierreComercial";
import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Actualidad",
  description:
    "Actividades, aprendizajes y recursos prácticos de D&P sobre seguridad, salud mental, desarrollo humano e ingeniería.",
  alternates: { canonical: "/actualidad" },
};

export default function ActualidadPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Actualidad"
        titulo="Conocimiento y experiencias para seguir creciendo."
        migas={[{ href: "/", label: "Inicio" }, { label: "Actualidad" }]}
      >
        <p className="m-0">
          Compartimos actividades, aprendizajes y recursos prácticos sobre seguridad, salud mental,
          desarrollo humano e ingeniería.
        </p>
        <div className="pt-2">
          <EnlaceInstagram />
        </div>
      </PageHero>

      <section id="publicaciones" className="bg-white px-[28px] py-16 w900:py-20">
        <div className="mx-auto max-w-[1240px]">
          <ListaPublicaciones />
        </div>
      </section>

      <CierreComercial />
    </SiteShell>
  );
}
