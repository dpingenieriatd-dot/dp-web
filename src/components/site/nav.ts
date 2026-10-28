// Menú de la Guía de Redacción Web 2026 (cap. 2): Inicio · Nosotros · Servicios ▼ · Experiencia ·
// Actualidad · Tienda D&P · Contacto. Lo comparten el menú de escritorio, el de celular y el pie.
import { ESPECIALIDADES } from "@/lib/servicios";

export type NavLink = { href: string; label: string };

export const SERVICIOS_HREF = "/servicios";

export const ESPECIALIDADES_LINKS: NavLink[] = ESPECIALIDADES.map((e) => ({
  href: e.href,
  label: e.titulo,
}));

export const NAV_ANTES: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
];

export const NAV_DESPUES: NavLink[] = [
  { href: "/experiencia", label: "Experiencia" },
  { href: "/actualidad", label: "Actualidad" },
  { href: "/tienda", label: "Tienda D&P" },
  { href: "/contacto", label: "Contacto" },
];

export function esActivo(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
