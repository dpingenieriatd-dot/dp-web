import type { NextConfig } from "next";

// Direcciones del sitio anterior (registradas en el archivo web, 2023) que Google pudo haber
// guardado. Se redirigen de forma permanente a su página nueva para no perder el posicionamiento.
const DIRECCIONES_ANTIGUAS: [string, string][] = [
  ["/ingenieria-y-geotecnia", "/servicios/ingenieria-civil-y-geotecnia"],
  ["/sistemas-de-gestion", "/servicios/seguridad-salud-y-bienestar-laboral"],
  ["/suministros-y-dotacion-epp", "/tienda"],
];

// Encabezados de seguridad para todas las respuestas. No se usa una CSP completa con scripts
// porque obligaría a generar cada página en el servidor (nonce) y el sitio es estático.
const ENCABEZADOS_SEGURIDAD = [
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: ENCABEZADOS_SEGURIDAD }];
  },
  async redirects() {
    return DIRECCIONES_ANTIGUAS.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
