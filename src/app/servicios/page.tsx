import type { Metadata } from "next";
import { CierreComercial } from "@/components/site/CierreComercial";
import { TarjetasEspecialidades } from "@/components/site/Especialidades";
import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Ingeniería civil y geotecnia, seguridad y salud en el trabajo, gestión humana y suministros empresariales: cuatro especialidades de D&P Ingeniería Integral.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Nuestras líneas de servicio"
        titulo="Cuatro especialidades, un mismo compromiso."
        migas={[{ href: "/", label: "Inicio" }, { label: "Servicios" }]}
      >
        <p className="m-0">
          Acompañamos a empresas y entidades con soluciones que articulan la ingeniería, la
          seguridad, el bienestar y el talento humano.
        </p>
      </PageHero>

      <section className="bg-white px-[28px] pt-16 pb-8">
        <div className="mx-auto max-w-[1240px]">
          <TarjetasEspecialidades />
        </div>
      </section>

      <CierreComercial />
    </SiteShell>
  );
}
