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
    <header className="sticky top-0 z-20 flex h-16 items-center gap-5 border-b border-borde bg-white px-[28px]">
      <PortalMobileNav />
      <div className="font-mono text-[11px] tracking-[.1em] text-texto-suave uppercase">
        Portal / <span className="text-tinta">{crumb}</span>
      </div>

      <label className="ml-auto hidden w-[280px] items-center gap-2 border border-borde bg-fondo px-3 py-2 focus-within:border-verde-claro w640:flex">
        <span className="text-[12px] text-gris-etiqueta">⌕</span>
        <input
          type="text"
          placeholder="Buscar proyecto, documento, factura"
          className="w-full border-none bg-transparent text-[13px] outline-none"
        />
      </label>

      <Link
        href="/portal/tienda"
        className="rounded-[2px] bg-ambar px-4 py-[11px] font-mono text-[11.5px] font-medium tracking-[.07em] text-verde-footer uppercase transition-colors hover:bg-ambar-hover"
      >
        Contratar servicio
      </Link>
      <Link
        href="/portal/tienda"
        className="relative rounded-[2px] border border-borde px-3.5 py-2.5 font-mono text-[11.5px] text-tinta transition-colors hover:border-verde-claro"
      >
        Carrito · {cartCount}
      </Link>
    </header>
  );
}
