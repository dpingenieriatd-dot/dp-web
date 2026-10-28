"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconChevron } from "./Iconos";
import { ESPECIALIDADES_LINKS, NAV_ANTES, NAV_DESPUES, SERVICIOS_HREF, esActivo, type NavLink } from "./nav";

const itemClass = "block py-3 text-[16px] text-tinta aria-[current=page]:font-semibold aria-[current=page]:text-verde-marca";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const close = () => setOpen(false);

  const item = (link: NavLink) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={close}
      aria-current={esActivo(pathname, link.href) ? "page" : undefined}
      className={itemClass}
    >
      {link.label}
    </Link>
  );

  return (
    <div className="ml-auto w1100:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg bg-white/80"
      >
        <span className="block h-[2px] w-[22px] bg-tinta" />
        <span className="block h-[2px] w-[22px] bg-tinta" />
        <span className="block h-[2px] w-[22px] bg-tinta" />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-90px)] overflow-y-auto border-b border-borde bg-white px-[28px] pt-2 pb-6 shadow-lg">
          <nav aria-label="Principal" className="flex flex-col divide-y divide-borde-3">
            {NAV_ANTES.map(item)}
            <div>
              <button
                type="button"
                onClick={() => setServiciosOpen((v) => !v)}
                aria-expanded={serviciosOpen}
                className={`${itemClass} flex w-full items-center justify-between text-left`}
              >
                Servicios
                <IconChevron className={`h-5 w-5 transition-transform ${serviciosOpen ? "rotate-180" : ""}`} />
              </button>
              {serviciosOpen && (
                <ul className="m-0 mb-2 list-none border-l-2 border-verde-claro pl-4">
                  <li>
                    <Link
                      href={SERVICIOS_HREF}
                      onClick={close}
                      aria-current={pathname === SERVICIOS_HREF ? "page" : undefined}
                      className="block py-2.5 text-[15px] text-texto-medio aria-[current=page]:text-verde-marca"
                    >
                      Ver las cuatro especialidades
                    </Link>
                  </li>
                  {ESPECIALIDADES_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={esActivo(pathname, link.href) ? "page" : undefined}
                        className="block py-2.5 text-[15px] text-texto-medio aria-[current=page]:text-verde-marca"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {NAV_DESPUES.map(item)}
          </nav>
          <Link
            href="/contacto"
            onClick={close}
            className="mt-4 block rounded-lg bg-verde-marca px-5 py-3.5 text-center text-[15px] font-semibold text-white"
          >
            Solicitar cotización →
          </Link>
        </div>
      )}
    </div>
  );
}
