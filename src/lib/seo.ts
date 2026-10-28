import type { Metadata } from "next";
import { contacto, siteUrl } from "@/lib/site-config";

// SEO común de las páginas: título, descripción (máx. ~155 caracteres para que Google no la
// corte), URL canónica y vista previa al compartir por WhatsApp, LinkedIn o Facebook.
export const NOMBRE_SITIO = "D&P Ingeniería Integral";

export const IMAGEN_COMPARTIR = {
  url: "/og/dp-ingenieria-integral.jpg",
  width: 1200,
  height: 630,
  alt: "D&P Ingeniería Integral — Soluciones integrales para organizaciones más seguras, saludables y eficientes",
};

type MetadatosPagina = {
  /** Sin la marca: la plantilla del layout agrega " | D&P Ingeniería Integral". */
  titulo: string;
  descripcion: string;
  ruta: string;
};

export function metadatosPagina({ titulo, descripcion, ruta }: MetadatosPagina): Metadata {
  const tituloCompleto = `${titulo} | ${NOMBRE_SITIO}`;
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: NOMBRE_SITIO,
      url: ruta,
      title: tituloCompleto,
      description: descripcion,
      images: [IMAGEN_COMPARTIR],
    },
    twitter: {
      card: "summary_large_image",
      title: tituloCompleto,
      description: descripcion,
      images: [IMAGEN_COMPARTIR.url],
    },
  };
}

/** Ficha de la empresa para Google (datos estructurados schema.org). */
export function datosEstructuradosEmpresa() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#empresa`,
    name: NOMBRE_SITIO,
    legalName: contacto.razonSocial,
    taxID: contacto.nit,
    slogan: "Cuidamos personas, protegemos organizaciones.",
    description:
      "Empresa colombiana que integra soluciones de ingeniería civil y geotecnia, seguridad y salud en el trabajo, gestión humana y suministros empresariales.",
    url: siteUrl,
    logo: `${siteUrl}/logo-dyp.png`,
    image: `${siteUrl}${IMAGEN_COMPARTIR.url}`,
    email: contacto.correo,
    telephone: contacto.telefono.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: contacto.direccion,
      addressLocality: contacto.ciudad,
      addressRegion: "Bogotá D.C.",
      addressCountry: "CO",
    },
    areaServed: { "@type": "Country", name: "Colombia" },
    sameAs: [contacto.instagram, contacto.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: contacto.telefono.replace(/\s/g, ""),
      email: contacto.correo,
      availableLanguage: "es",
      areaServed: "CO",
      hoursAvailable: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
      ],
    },
  };
}

/** Ficha de un servicio para Google, ligada a la empresa. */
export function datosEstructuradosServicio(s: { nombre: string; descripcion: string; ruta: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.nombre,
    description: s.descripcion,
    url: `${siteUrl}${s.ruta}`,
    serviceType: s.nombre,
    areaServed: { "@type": "Country", name: "Colombia" },
    provider: { "@id": `${siteUrl}/#empresa` },
  };
}

/** Script JSON-LD seguro (Next 16, guía json-ld: se escapa "<"). */
export function jsonLd(datos: object) {
  return { __html: JSON.stringify(datos).replace(/</g, "\\u003c") };
}
