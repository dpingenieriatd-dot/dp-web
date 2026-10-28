import type { NextConfig } from "next";

// Direcciones del sitio anterior (registradas en el archivo web, 2023) que Google pudo haber
// guardado. Se redirigen de forma permanente a su página nueva para no perder el posicionamiento.
const DIRECCIONES_ANTIGUAS: [string, string][] = [
  ["/ingenieria-y-geotecnia", "/servicios/ingenieria-civil-y-geotecnia"],
  ["/sistemas-de-gestion", "/servicios/seguridad-salud-y-bienestar-laboral"],
  ["/suministros-y-dotacion-epp", "/tienda"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return DIRECCIONES_ANTIGUAS.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
