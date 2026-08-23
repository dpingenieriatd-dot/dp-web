"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePortalState } from "@/lib/portal-context";
import { PortalMobileNav } from "./PortalMobileNav";

const TITULOS: Record<string, string> = {
  "/portal": "Inicio",
  "/portal/proyectos": "Proyectos y obras",
  "/portal/indicadores": "Indicadores SG-SST",
  "/portal/documentos": "Documentos",
  "/portal/tienda": "Contratar servicios",
  "/portal/cotizaciones": "Cotizaciones",
  "/portal/agenda": "Agenda",
  "/portal/facturas": "Facturas y pagos",
  "/portal/mensajes": "Mensajes",
};

export function Topbar() {
  const pathname = usePathname();
  const { cartCount } = usePortalState();
  const crumb = TITULOS[pathname] ?? "";

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-borde bg-white px-[16px] w700:gap-5 w700:px-[28px]">
      <PortalMobileNav />
      <div className="min-w-0 flex-none truncate font-mono text-[11px] tracking-[.1em] text-texto-suave uppercase">
        Portal / <span className="text-tinta">{crumb}</span>
      </div>

      <label className="ml-auto hidden min-w-0 max-w-[220px] flex-1 items-center gap-2 border border-borde bg-fondo px-3 py-2 focus-within:border-verde-claro w700:flex w1100:max-w-[280px]">
        <span className="flex-none text-[12px] text-gris-etiqueta">⌕</span>
        <input
          type="text"
          placeholder="Buscar proyecto, documento, factura"
          className="w-full min-w-0 border-none bg-transparent text-[13px] outline-none"
        />
      </label>

      <Link
        href="/portal/tienda"
        className="ml-auto flex-none rounded-[2px] bg-ambar px-3 py-[11px] font-mono text-[11.5px] font-medium tracking-[.07em] text-verde-footer uppercase transition-colors hover:bg-ambar-hover w700:ml-0 w700:px-4"
      >
        <span className="w700:hidden">Contratar</span>
        <span className="hidden w700:inline">Contratar servicio</span>
      </Link>
      <Link
        href="/portal/tienda"
        className="relative flex-none rounded-[2px] border border-borde px-3 py-2.5 font-mono text-[11.5px] text-tinta transition-colors hover:border-verde-claro w700:px-3.5"
      >
        Carrito · {cartCount}
      </Link>
    </header>
  );
}
