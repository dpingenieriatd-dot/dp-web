import Image from "next/image";
import Link from "next/link";
import { IconFlecha } from "./Iconos";
import { MobileNav } from "./MobileNav";
import { NavEscritorio } from "./NavEscritorio";

// Fondo blanco siempre: el menú nunca queda encima de una foto (Guía 2026, cap. 8).
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-borde bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1240px] items-center gap-7 px-[28px] py-3">
        <Link href="/" className="flex flex-none items-center">
          <Image
            src="/logo-dyp.png"
            alt="D&P Ingeniería Integral — ir al inicio"
            width={113}
            height={80}
            className="h-[64px] w-auto w900:h-[80px]"
            priority
          />
        </Link>

        <NavEscritorio />

        <Link
          href="/contacto"
          className="hidden flex-none items-center gap-2 rounded-lg bg-verde-marca px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-verde-marca-hover w1100:inline-flex"
        >
          Solicitar cotización
          <IconFlecha className="h-[18px] w-[18px]" />
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
