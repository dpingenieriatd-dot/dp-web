import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site-config";
import { IMAGEN_COMPARTIR, NOMBRE_SITIO } from "@/lib/seo";
import "./globals.css";

const TITULO_INICIO = "D&P Ingeniería Integral | Ingeniería, SG-SST y Gestión Humana";
const DESCRIPCION_INICIO =
  "Ingeniería civil y geotecnia, SG-SST, gestión humana y suministros para empresas en Colombia. Soluciones para organizaciones más seguras y eficientes.";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: TITULO_INICIO,
    template: `%s | ${NOMBRE_SITIO}`,
  },
  description: DESCRIPCION_INICIO,
  // Vista previa al compartir el inicio. Las demás páginas definen la suya con metadatosPagina().
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: NOMBRE_SITIO,
    url: "/",
    title: TITULO_INICIO,
    description: DESCRIPCION_INICIO,
    images: [IMAGEN_COMPARTIR],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO_INICIO,
    description: DESCRIPCION_INICIO,
    images: [IMAGEN_COMPARTIR.url],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
