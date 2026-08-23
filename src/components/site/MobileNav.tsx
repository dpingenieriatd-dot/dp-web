"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#actualidad", label: "Actualidad" },
  { href: "#contactenos", label: "Contáctenos" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-auto w860:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={open}
        className="flex flex-col gap-[5px] p-2"
      >
        <span className="block h-[2px] w-[22px] bg-tinta" />
        <span className="block h-[2px] w-[22px] bg-tinta" />
        <span className="block h-[2px] w-[22px] bg-tinta" />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-borde bg-fondo px-[28px] py-5 shadow-lg">
          <nav className="flex flex-col gap-4 font-mono text-[13px] tracking-[.09em] text-tinta uppercase">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/portal"
              onClick={() => setOpen(false)}
              className="rounded-[2px] border border-input-borde px-[18px] py-[11px] text-center font-mono text-[12.5px] tracking-[.08em] text-tinta uppercase"
            >
              Portal clientes
            </Link>
            <a
              href="#contactenos"
              onClick={() => setOpen(false)}
              className="rounded-[2px] bg-verde-marca px-5 py-3 text-center font-mono text-[12.5px] tracking-[.08em] text-white uppercase"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
