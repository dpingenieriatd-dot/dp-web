import Image from "next/image";
import Link from "next/link";
import { appInternaHref, contacto } from "@/lib/site-config";
import { SocialIcon, type SocialPlatform } from "@/components/shared/SocialIcon";
import { IconFlecha, IconHoja } from "./Iconos";
import { ESPECIALIDADES_LINKS, NAV_ANTES, NAV_DESPUES, SERVICIOS_HREF } from "./nav";

// Guía 2026, cap. 7.1: navegación completa y las cuatro especialidades (sin "Tres frentes").
const NAV_LINKS = [
  ...NAV_ANTES,
  { href: SERVICIOS_HREF, label: "Servicios" },
  ...NAV_DESPUES.map((l) => (l.href === "/contacto" ? { ...l, label: "Contáctanos" } : l)),
];

const SOCIALES: { platform: SocialPlatform; title: string; href: string; active: boolean }[] = [
  { platform: "instagram", title: "Instagram", href: contacto.instagram, active: true },
  { platform: "facebook", title: "Facebook", href: contacto.facebook, active: true },
  { platform: "linkedin", title: "LinkedIn (pendiente)", href: "#", active: false },
];

const linkClass = "text-texto-medio transition-colors hover:text-verde-marca";

function TituloColumna({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-0 mb-5 font-display text-[16px] font-bold text-verde-profundo">
      {children}
      <span className="mt-2 block h-[3px] w-8 rounded-full bg-verde-claro" />
    </h2>
  );
}

// Mismo lenguaje del rediseño: fondo verde claro de la portada, franja con los cinco verdes de
// la marca (Guía 2026, cap. 8) y accesos privados separados del menú comercial (cap. 7.1).
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#eef6e9] text-texto-medio">
      <div
        aria-hidden="true"
        className="h-[6px] bg-[linear-gradient(90deg,#005323_0%,#007832_25%,#119834_50%,#52A22E_75%,#68A93A_100%)]"
      />
      <IconHoja className="pointer-events-none absolute -right-16 -bottom-20 h-[380px] w-[380px] text-verde-marca/[.05]" />

      <div className="relative mx-auto max-w-[1240px] px-[28px] pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 w640:grid-cols-2 w1100:grid-cols-[1.35fr_.9fr_1.15fr_1.1fr] w1100:gap-10">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo-dyp.png"
                alt="D&P Ingeniería Integral — ir al inicio"
                width={113}
                height={80}
                className="h-[80px] w-auto"
              />
            </Link>
            <p className="mt-5 mb-0 font-display text-[17px] font-bold text-verde-profundo">
              D&amp;P Ingeniería Integral S.A.S.
            </p>
            <p className="mt-2 mb-0 max-w-[34ch] text-[15px] leading-[1.6]">
              Ingeniería aplicada al cuidado de las personas.
            </p>
            <p className="mt-1 mb-0 max-w-[34ch] text-[15px] leading-[1.6] font-semibold text-verde-brillante">
              Cuidamos personas, protegemos organizaciones.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALES.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target={s.active ? "_blank" : undefined}
                  rel={s.active ? "noopener" : undefined}
                  title={s.title}
                  aria-label={s.title}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-borde bg-white shadow-sm transition-transform ${
                    s.active ? "hover:-translate-y-0.5" : "opacity-45"
                  }`}
                >
                  <SocialIcon platform={s.platform} className="block h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <TituloColumna>Navegación</TituloColumna>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 text-[15px] w640:grid-cols-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <TituloColumna>Servicios</TituloColumna>
            <ul className="m-0 grid list-none gap-3 p-0 text-[15px] leading-[1.4]">
              {ESPECIALIDADES_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TituloColumna>Contacto</TituloColumna>
            <ul className="m-0 grid list-none gap-3 p-0 text-[15px] leading-[1.5]">
              <li>
                <a href={contacto.whatsappHref} target="_blank" rel="noopener" className={linkClass}>
                  WhatsApp {contacto.telefono}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacto.correo}`} className={`${linkClass} break-all`}>
                  {contacto.correo}
                </a>
              </li>
              <li>{contacto.horarios.semana}</li>
              <li>{contacto.horarios.sabado}</li>
              <li>{contacto.ciudad}</li>
            </ul>
            <a
              href={contacto.whatsappHref}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-verde-marca px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-verde-marca-hover"
            >
              Escribir por WhatsApp
              <IconFlecha className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* Accesos privados: tarjeta aparte, distinta del menú comercial (Guía 2026, cap. 7.1). */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-borde bg-white px-6 py-5 shadow-[0_6px_24px_rgba(0,83,35,.06)] w640:flex-row w640:items-center w640:justify-between">
          <div>
            <p className="m-0 font-display text-[15.5px] font-bold text-verde-profundo">Accesos</p>
            <p className="mt-0.5 mb-0 text-[14px] text-texto-suave">Para clientes y equipo de D&amp;P.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-verde-marca px-4 py-2.5 text-[14.5px] font-semibold text-verde-marca transition-colors hover:bg-fondo-verde"
            >
              Portal de clientes
            </Link>
            <a
              href={appInternaHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-verde-profundo/25 px-4 py-2.5 text-[14.5px] font-semibold text-verde-profundo transition-colors hover:bg-fondo-verde"
            >
              App interna D&amp;P ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-verde-claro/30 pt-6 text-[13.5px] text-texto-suave w640:flex-row w640:items-center w640:justify-between">
          <span>D&amp;P Ingeniería Integral S.A.S. © 2026. Todos los derechos reservados.</span>
          <span className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/politica-de-privacidad" className="hover:text-verde-marca">
              Política de privacidad
            </Link>
            <Link href="/tratamiento-de-datos" className="hover:text-verde-marca">
              Tratamiento de datos
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
