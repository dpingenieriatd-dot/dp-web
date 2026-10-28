import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { PAGINAS_SERVICIO } from "@/lib/servicios";

// Solo páginas públicas. El portal de clientes queda fuera (ver robots.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  const pagina = (
    ruta: string,
    priority: number,
    changeFrequency: "monthly" | "yearly" = "monthly",
  ): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${ruta}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });

  return [
    pagina("", 1),
    pagina("/servicios", 0.9),
    ...PAGINAS_SERVICIO.map((e) => pagina(e.href, 0.9)),
    pagina("/tienda", 0.8),
    pagina("/nosotros", 0.7),
    pagina("/experiencia", 0.7),
    pagina("/actualidad", 0.6),
    pagina("/contacto", 0.8),
    pagina("/politica-de-privacidad", 0.3, "yearly"),
    pagina("/tratamiento-de-datos", 0.3, "yearly"),
  ];
}
