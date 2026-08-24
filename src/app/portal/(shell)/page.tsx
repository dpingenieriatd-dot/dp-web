import Link from "next/link";
import { StatCard, StatCardGrid } from "@/components/portal/StatCard";
import { ProgressBar } from "@/components/portal/ProgressBar";
import { StatusPill } from "@/components/portal/StatusPill";

const PROYECTOS_EN_CURSO = [
  {
    nombre: "Estudio geotécnico — Vía Chía-Cajicá K2+300",
    detalle: "Ingeniería y Geotecnia · Ing. C. Peña",
    estado: "En ejecución",
    avance: "72%",
  },
  {
    nombre: "Diseño de cimentación — Bodega Funza",
    detalle: "Ingeniería y Geotecnia · Ing. L. Marín",
    estado: "En diseño",
    avance: "35%",
  },
  {
    nombre: "Administración SG-SST 2026",
    detalle: "Sistemas de gestión · Psic. D. Torres",
    estado: "En ejecución",
    avance: "58%",
  },
  {
    nombre: "Dotación EPP — Frente 3",
    detalle: "Suministros · Despacho programado",
    estado: "Alistamiento",
    avance: "90%",
  },
];

const ACTIVIDADES = [
  { fecha: "26 AGO", titulo: "Visita técnica — Frente 2", detalle: "8:00 a.m. · Ing. C. Peña" },
  { fecha: "28 AGO", titulo: "Capacitación brigadas", detalle: "2:00 p.m. · 24 asistentes" },
  { fecha: "02 SEP", titulo: "Entrega informe geotécnico", detalle: "Vía Chía-Cajicá" },
];

export default function PortalInicioPage() {
  return (
    <section className="p-7">
      <div className="mb-[22px] flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="m-0 font-display text-[28px] leading-[1.1] font-extrabold">
            Buen día, María
          </h1>
          <p className="mt-[7px] mb-0 text-[14px] text-texto-suave">
            Tiene 2 cotizaciones por aprobar y 1 visita técnica esta semana.
          </p>
        </div>
        <div className="font-mono text-[11.5px] text-texto-suave">Datos de demostración</div>
      </div>

      <StatCardGrid>
        <StatCard label="Proyectos activos" value="4" hint="2 en ejecución · 2 en diseño" hintClassName="text-teal" />
        <StatCard
          label="Cumplimiento SG-SST"
          value="86%"
          hint={<ProgressBar percent="86%" />}
        />
        <StatCard label="Documentos nuevos" value="7" hint="Últimos 30 días" />
        <StatCard
          label="Saldo pendiente"
          value="$8.4 M"
          hint="1 factura por vencer"
          hintClassName="text-estado-pend-fg"
        />
      </StatCardGrid>

      <div className="grid grid-cols-1 gap-5 w1100:grid-cols-[1.5fr_1fr]">
        <div className="border border-borde bg-white">
          <div className="flex items-center justify-between border-b border-borde px-[22px] py-[18px]">
            <h2 className="m-0 font-display text-[16px] font-bold">Proyectos en curso</h2>
            <Link href="/portal/proyectos" className="font-mono text-[11px] tracking-[.07em] uppercase">
              Ver todos →
            </Link>
          </div>
          <div className="grid">
            {PROYECTOS_EN_CURSO.map((p, i) => (
              <div
                key={p.nombre}
                className={`grid grid-cols-1 items-center gap-2 px-[22px] py-4 w640:grid-cols-[1fr_auto_auto] w640:gap-4 ${
                  i < PROYECTOS_EN_CURSO.length - 1 ? "border-b border-borde-3" : ""
                }`}
              >
                <div>
                  <div className="text-[14px] font-semibold">{p.nombre}</div>
                  <div className="mt-[3px] text-[12.5px] text-texto-suave">{p.detalle}</div>
                </div>
                <StatusPill estado={p.estado} />
                <span className="font-mono text-[12px] text-tinta">{p.avance}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-5">
          <div className="border border-borde bg-white">
            <div className="border-b border-borde px-[22px] py-[18px]">
              <h2 className="m-0 font-display text-[16px] font-bold">Próximas actividades</h2>
            </div>
            <div className="py-1.5">
              {ACTIVIDADES.map((a, i) => (
                <div
                  key={a.titulo}
                  className={`flex items-start gap-3.5 px-[22px] py-[13px] ${
                    i > 0 ? "border-t border-borde-3" : ""
                  }`}
                >
                  <span className="w-[52px] flex-none font-mono text-[11px] text-teal">
                    {a.fecha}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-medium">{a.titulo}</span>
                    <span className="mt-0.5 block text-[12.5px] text-texto-suave">
                      {a.detalle}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-verde-profundo p-6 text-fondo">
            <div className="font-mono text-[10.5px] tracking-[.12em] text-verde-suave uppercase">
              Autogestión
            </div>
            <h3 className="mt-3 mb-2 font-display text-[19px] leading-[1.2] font-bold">
              Contrate capacitaciones y kits EPP sin esperar cotización
            </h3>
            <p className="mb-[18px] text-[13.5px] text-fondo/70">
              Servicios con precio publicado, pago en línea y programación inmediata.
            </p>
            <Link
              href="/portal/tienda"
              className="inline-block bg-ambar px-[18px] py-3 font-mono text-[11.5px] tracking-[.07em] text-verde-footer uppercase transition-colors hover:bg-ambar-hover"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
