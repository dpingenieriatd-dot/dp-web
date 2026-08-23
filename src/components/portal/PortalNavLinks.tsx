"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PORTAL_NAV_GRUPOS, type PortalNavItem } from "@/lib/portal-nav";

function Badge({ badge }: { badge: NonNullable<PortalNavItem["badge"]> }) {
  if (badge.variant === "plain") {
    return <span className="ml-auto font-mono text-[11px] text-verde-suave">{badge.text}</span>;
  }
  const bg = badge.variant === "amber" ? "bg-ambar" : "bg-verde-claro";
  return (
    <span
      className={`ml-auto rounded-full ${bg} px-1.5 py-0.5 font-mono text-[10.5px] text-verde-footer`}
    >
      {badge.text}
    </span>
  );
}

export function PortalNavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {PORTAL_NAV_GRUPOS.map((grupo) => (
        <div key={grupo.titulo}>
          <div className="px-5 pt-2 pb-2.5 font-mono text-[10px] tracking-[.14em] text-fondo/38 uppercase">
            {grupo.titulo}
          </div>
          {grupo.items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`relative flex items-center gap-2.5 px-5 py-[11px] text-[13.5px] transition-colors hover:bg-fondo/7 hover:text-white ${
                  active ? "text-white" : "text-fondo/80"
                }`}
              >
                {active && <span className="absolute top-2 bottom-2 left-0 w-[3px] bg-ambar" />}
                {item.label}
                {item.badge && <Badge badge={item.badge} />}
              </Link>
            );
          })}
        </div>
      ))}
    </>
  );
}
