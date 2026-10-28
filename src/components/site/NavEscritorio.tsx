"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconChevron } from "./Iconos";
import { ESPECIALIDADES_LINKS, NAV_ANTES, NAV_DESPUES, SERVICIOS_HREF, esActivo, type NavLink } from "./nav";

const linkClass =
  "border-b-2 py-1.5 text-[15px] transition-colors hover:border-verde-claro hover:text-verde-marca";

function claseLink(activo: boolean) {
  return `${linkClass} ${activo ? "border-verde-marca font-semibold text-verde-marca" : "border-transparent text-texto-medio"}`;
}

export function NavEscritorio() {
  const pathname = usePathname();
  const serviciosActivo =
    esActivo(pathname, SERVICIOS_HREF) ||
    ESPECIALIDADES_LINKS.some((l) => l.href !== "/tienda" && esActivo(pathname, l.href));

  const item = (link: NavLink) => {
    const activo = esActivo(pathname, link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={activo ? "page" : undefined}
        className={claseLink(activo)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav aria-label="Principal" className="ml-auto hidden items-center gap-6 w1100:flex">
      {NAV_ANTES.map(item)}

      <div className="group relative">
        <Link
          href={SERVICIOS_HREF}
          aria-current={pathname === SERVICIOS_HREF ? "page" : undefined}
          className={`${claseLink(serviciosActivo)} inline-flex items-center gap-1`}
        >
          Servicios
          <IconChevron className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
        </Link>
        <div className="invisible absolute top-full left-1/2 z-10 w-[330px] -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <ul className="m-0 list-none rounded-xl border border-borde bg-white p-2 shadow-xl">
            {ESPECIALIDADES_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={esActivo(pathname, link.href) ? "page" : undefined}
                  className="block rounded-lg px-4 py-3 text-[14.5px] text-texto-medio transition-colors hover:bg-fondo-verde hover:text-verde-marca aria-[current=page]:bg-fondo-verde aria-[current=page]:text-verde-marca"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {NAV_DESPUES.map(item)}
    </nav>
  );
}
