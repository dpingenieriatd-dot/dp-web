import Image from "next/image";
import Link from "next/link";
import { appInternaHref, contacto } from "@/lib/site-config";
import { SocialIcon, type SocialPlatform } from "@/components/shared/SocialIcon";

const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#actualidad", label: "Actualidad" },
  { href: "/#contactenos", label: "Contáctenos" },
];

const SERVICIOS_LINKS = [
  { href: "/#ingenieria", label: "Ingeniería y Geotecnia" },
  { href: "/#gestion", label: "Sistemas de gestión" },
  { href: "/#suministros", label: "Suministros y dotación EPP" },
  { href: "/#contactenos", label: "Capacitaciones" },
];

const SOCIALES: { platform: SocialPlatform; title: string; href: string; active: boolean }[] = [
  { platform: "instagram", title: "Instagram", href: contacto.instagram, active: true },
  { platform: "facebook", title: "Facebook", href: contacto.facebook, active: true },
  { platform: "linkedin", title: "LinkedIn (pendiente)", href: "#", active: false },
  { platform: "youtube", title: "YouTube (pendiente)", href: "#", active: false },
];

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 font-mono text-[11px] tracking-[.12em] text-verde-suave uppercase">
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-verde-footer px-[28px] pt-[72px] pb-8 text-fondo/72">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-12 w640:grid-cols-2 w900:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="inline-block rounded-[2px] bg-fondo px-[14px] py-3">
              <Image src="/logo-dyp.png" alt="D&P Ingeniería Integral" width={91} height={65} className="h-[65px] w-auto" />
            </div>
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-[1.6]">
              Sistemas de seguridad en el trabajo e Ingeniería Integral. Trabajo y rectitud en
              cada proyecto.
            </p>
            <div className="mt-[22px] flex gap-2.5">
              {SOCIALES.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target={s.active ? "_blank" : undefined}
                  rel={s.active ? "noopener" : undefined}
                  title={s.title}
                  className={`flex h-10 w-10 items-center justify-center border transition-colors hover:border-verde-claro hover:text-verde-suave ${
                    s.active ? "border-fondo/20 text-fondo" : "border-fondo/20 text-fondo/45"
                  }`}
                >
                  <SocialIcon platform={s.platform} className="block h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterColumnTitle>Navegación</FooterColumnTitle>
            <div className="grid gap-[11px] text-[14.5px]">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-fondo/72 hover:text-verde-suave">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <FooterColumnTitle>Servicios</FooterColumnTitle>
            <div className="grid gap-[11px] text-[14.5px]">
              {SERVICIOS_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="text-fondo/72 hover:text-verde-suave">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-7 mb-4 font-mono text-[11px] tracking-[.12em] text-verde-suave uppercase">
              Accesos
            </div>
            <div className="grid gap-[11px] text-[14.5px]">
              <Link href="/portal" className="text-fondo/72 hover:text-verde-suave">
                Portal de clientes
              </Link>
              <a
                href={appInternaHref}
                target="_blank"
                rel="noopener"
                className="text-fondo/72 hover:text-verde-suave"
              >
                App interna D&amp;P ↗
              </a>
            </div>
          </div>

          <div>
            <FooterColumnTitle>Contacto</FooterColumnTitle>
            <div className="grid gap-[11px] text-[14.5px] leading-[1.5]">
              <span>
                {contacto.telefono}{" "}
                {contacto.telefonoConfirmar && (
                  <em className="not-italic text-fondo/42">(confirmar)</em>
                )}
              </span>
              <span>{contacto.correo}</span>
              <span>{contacto.ciudad}</span>
              <span>{contacto.horarios.corto}</span>
            </div>
            <Link
              href="/#contactenos"
              className="mt-5 inline-block rounded-[2px] bg-verde-marca px-[18px] py-[13px] font-mono text-[12px] tracking-[.08em] text-white uppercase transition-colors hover:bg-verde-claro hover:text-verde-footer"
            >
              Escribir por WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-[52px] flex flex-wrap justify-between gap-6 border-t border-fondo/14 pt-[22px] text-[13px] text-fondo/50">
          <span>D&amp;P Ingeniería Integral © 2026. Todos los derechos reservados.</span>
          <span className="flex gap-[22px]">
            <Link href="/politica-de-privacidad" className="text-fondo/50 hover:text-verde-suave">
              Política de privacidad
            </Link>
            <Link href="/tratamiento-de-datos" className="text-fondo/50 hover:text-verde-suave">
              Tratamiento de datos
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
