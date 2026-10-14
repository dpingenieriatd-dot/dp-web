import type { Metadata } from "next";

// Todo el portal de clientes es privado: ninguna de sus páginas debe aparecer en buscadores.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PortalLayout({ children }: LayoutProps<"/portal">) {
  return children;
}
