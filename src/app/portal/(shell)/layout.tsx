import Link from "next/link";
import { Sidebar } from "@/components/portal/Sidebar";
import { Topbar } from "@/components/portal/Topbar";
import { PortalStateProvider } from "@/lib/portal-context";
import { requirePortalSession } from "@/lib/require-portal-session";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  await requirePortalSession();

  return (
    <PortalStateProvider>
      <div className="grid min-h-screen grid-cols-1 bg-portal-bg text-tinta text-[14px] w900:grid-cols-[252px_1fr]">
        <Sidebar />
        <div className="flex min-w-0 flex-col">
          <Topbar />
          <main className="flex-1">{children}</main>
          <PortalFooter />
        </div>
      </div>
    </PortalStateProvider>
  );
}

function PortalFooter() {
  return (
    <footer className="mt-2 flex flex-wrap justify-between gap-5 border-t border-borde px-[28px] py-5 text-[12.5px] text-gris-etiqueta">
      <span>D&amp;P Ingeniería Integral · Portal de clientes (prototipo)</span>
      <span className="flex gap-5">
        <Link href="/" className="text-texto-suave">
          Ir al sitio corporativo
        </Link>
        <a
          href="https://app.dpingenieriaintegral.com"
          target="_blank"
          rel="noopener"
          className="text-texto-suave"
        >
          App interna D&amp;P ↗
        </a>
      </span>
    </footer>
  );
}
