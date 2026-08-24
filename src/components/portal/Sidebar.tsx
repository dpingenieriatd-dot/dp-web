import Image from "next/image";
import { PortalNavLinks } from "./PortalNavLinks";
import { logout } from "@/lib/portal-logout";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen flex-col bg-verde-footer text-fondo/72 w900:flex">
      <div className="border-b border-fondo/12 px-5 pt-5 pb-[18px]">
        <div className="inline-block rounded-[2px] bg-fondo px-[11px] py-2.5">
          <Image
            src="/logo-dyp.png"
            alt="D&P Ingeniería Integral"
            width={53}
            height={38}
            className="block h-[38px] w-auto"
          />
        </div>
        <div className="mt-3.5 font-mono text-[10.5px] tracking-[.14em] text-verde-suave uppercase">
          Portal de clientes
        </div>
      </div>

      <div className="border-b border-fondo/12 px-3.5 py-4">
        <div className="flex cursor-pointer items-center gap-2.5 border border-fondo/12 bg-fondo/6 px-3 py-[11px] transition-colors hover:bg-fondo/10">
          <span className="flex h-[30px] w-[30px] flex-none items-center justify-center bg-verde-marca font-display text-[12px] font-bold text-white">
            CA
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12.5px] font-medium text-fondo">
              Constructora Andina
            </span>
            <span className="block text-[11px] text-fondo/50">NIT 900.123.456-7</span>
          </span>
          <span className="ml-auto text-[11px] text-fondo/50">▾</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto py-3.5">
        <PortalNavLinks />
      </nav>

      <div className="flex items-center gap-[11px] border-t border-fondo/12 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal font-display text-[12px] font-bold text-white">
          MR
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12.5px] text-fondo">María Restrepo</span>
          <span className="block truncate text-[11px] text-fondo/50">Jefe HSEQ</span>
        </span>
        <form action={logout} className="flex-none">
          <button
            type="submit"
            title="Salir"
            className="font-mono text-[13px] text-fondo/50 transition-colors hover:text-verde-suave"
          >
            ⏻
          </button>
        </form>
      </div>
    </aside>
  );
}
