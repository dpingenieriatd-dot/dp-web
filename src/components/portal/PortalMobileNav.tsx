"use client";

import Image from "next/image";
import { useState } from "react";
import { PortalNavLinks } from "./PortalNavLinks";

export function PortalMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w900:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir navegación del portal"
        className="flex flex-col gap-[5px] p-2"
      >
        <span className="block h-[2px] w-[20px] bg-tinta" />
        <span className="block h-[2px] w-[20px] bg-tinta" />
        <span className="block h-[2px] w-[20px] bg-tinta" />
      </button>

      {open && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 flex w-[260px] flex-col overflow-y-auto bg-verde-footer text-fondo/72">
            <div className="flex items-center justify-between border-b border-fondo/12 px-5 py-4">
              <Image src="/logo-dyp.png" alt="D&P Ingeniería Integral" width={53} height={38} className="h-[34px] w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar navegación"
                className="font-mono text-[13px] text-fondo/60"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col py-3.5">
              <PortalNavLinks onNavigate={() => setOpen(false)} />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
