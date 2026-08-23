export type PortalNavItem = {
  href: string;
  label: string;
  badge?: { text: string; variant: "plain" | "amber" | "green" };
};

export const PORTAL_NAV_GRUPOS: { titulo: string; items: PortalNavItem[] }[] = [
  {
    titulo: "Operación",
    items: [
      { href: "/portal", label: "Inicio" },
      { href: "/portal/proyectos", label: "Proyectos y obras", badge: { text: "4", variant: "plain" } },
      { href: "/portal/indicadores", label: "Indicadores SG-SST" },
      { href: "/portal/documentos", label: "Documentos y certificados" },
    ],
  },
  {
    titulo: "Contratación",
    items: [
      { href: "/portal/tienda", label: "Contratar servicios" },
      { href: "/portal/cotizaciones", label: "Cotizaciones", badge: { text: "2", variant: "amber" } },
      { href: "/portal/agenda", label: "Agenda" },
      { href: "/portal/facturas", label: "Facturas y pagos" },
    ],
  },
  {
    titulo: "Comunicación",
    items: [{ href: "/portal/mensajes", label: "Mensajes", badge: { text: "3", variant: "green" } }],
  },
];
