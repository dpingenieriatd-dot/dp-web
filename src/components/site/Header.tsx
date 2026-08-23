import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#actualidad", label: "Actualidad" },
  { href: "/#contactenos", label: "Contáctenos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-borde bg-fondo/92 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1240px] items-center gap-7 px-[28px] py-[14px]">
        <Link href="/#inicio" className="flex flex-none items-center">
          <Image
            src="/logo-dyp.png"
            alt="D&P Ingeniería Integral"
            width={87}
            height={62}
            className="h-[62px] w-auto"
            priority
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-[26px] font-mono text-[12.5px] tracking-[.09em] uppercase w860:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent py-1.5 text-tinta transition-colors hover:border-verde-claro hover:text-verde-marca"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/portal"
          className="hidden flex-none rounded-[2px] border border-input-borde px-[18px] py-[11px] font-mono text-[12.5px] tracking-[.08em] text-tinta uppercase transition-colors hover:border-verde-claro hover:text-verde-marca w860:block"
        >
          Portal clientes
        </Link>
        <Link
          href="/#contactenos"
          className="hidden flex-none rounded-[2px] bg-verde-marca px-5 py-3 font-mono text-[12.5px] tracking-[.08em] text-white uppercase transition-colors hover:bg-verde-marca-hover w860:block"
        >
          Cotizar
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
