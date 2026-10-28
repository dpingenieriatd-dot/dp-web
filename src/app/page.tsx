import { Hero } from "@/components/site/Hero";
import { Especialidades } from "@/components/site/Especialidades";
import { Nosotros } from "@/components/site/Nosotros";
import { Proposito } from "@/components/site/Proposito";
import { Clientes } from "@/components/site/Clientes";
import { Testimonios } from "@/components/site/Testimonios";
import { Actualidad } from "@/components/site/Actualidad";
import { CierreComercial } from "@/components/site/CierreComercial";
import { Contactenos } from "@/components/site/Contactenos";
import { SiteShell } from "@/components/site/SiteShell";
import { showActualidad, showClientes, showTestimonios } from "@/lib/site-config";
import { datosEstructuradosEmpresa, jsonLd } from "@/lib/seo";

// Estructura de la Guía de Redacción Web 2026 (cap. 3): portada, especialidades, nosotros,
// propósito, experiencia, actualidad, cierre comercial y contacto. El detalle de cada servicio
// vive en su propia página.
export default function Home() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(datosEstructuradosEmpresa())} />
      <Hero />
      <Especialidades />
      <Nosotros />
      <Proposito />
      {showClientes && <Clientes />}
      {showTestimonios && <Testimonios />}
      {showActualidad && <Actualidad />}
      <CierreComercial href="#contactenos" />
      <Contactenos />
    </SiteShell>
  );
}
