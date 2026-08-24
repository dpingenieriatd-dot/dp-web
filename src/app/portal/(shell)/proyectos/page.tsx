"use client";

import Link from "next/link";
import { PROYECTOS } from "@/lib/portal-data";
import { usePortalState } from "@/lib/portal-context";
import { StatusPill } from "@/components/portal/StatusPill";
import { ProgressBar } from "@/components/portal/ProgressBar";

const FILTROS = ["Ingeniería", "SG-SST", "Suministros"];

const ENTREGABLES = [
  { tipo: "PDF", nombre: "Informe de exploración", pendiente: false },
  { tipo: "XLSX", nombre: "Resultados de laboratorio", pendiente: false },
  { tipo: "PDF", nombre: "Diseño final — pendiente", pendiente: true },
];

export default function ProyectosPage() {
  const { proyectoSeleccionado, setProyectoSeleccionado } = usePortalState();
  const detalle = PROYECTOS[proyectoSeleccionado];

  return (
    <section className="p-7">
      <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Proyectos y obras</h1>
      <p className="mt-0 mb-[22px] text-texto-suave">
        Estado, responsable y entregables de cada contrato activo.
      </p>

      <div className="grid grid-cols-1 gap-5 w1100:grid-cols-[1.15fr_.85fr]">
        <div className="border border-borde bg-white">
          <div className="flex flex-wrap gap-2 border-b border-borde px-5 py-3.5">
            <span className="bg-verde-profundo px-[11px] py-1.5 font-mono text-[11px] text-fondo">
              Todos · {PROYECTOS.length}
            </span>
            {FILTROS.map((f) => (
              <span
                key={f}
                className="border border-borde px-[11px] py-1.5 font-mono text-[11px] text-texto-suave"
              >
                {f}
              </span>
            ))}
          </div>

          {PROYECTOS.map((p, i) => (
            <div
              key={p.codigo}
              onClick={() => setProyectoSeleccionado(i)}
              className={`grid cursor-pointer gap-2 border-b border-borde-3 px-5 py-[18px] transition-colors hover:bg-fondo ${
                i === proyectoSeleccionado ? "bg-fondo" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] text-gris-etiqueta">{p.codigo}</span>
                <span className="text-[14.5px] font-semibold">{p.nombre}</span>
                <span className="ml-auto">
                  <StatusPill estado={p.estado} />
                </span>
              </div>
              <div className="text-[12.5px] text-texto-suave">
                {p.linea} · {p.responsable} · entrega {p.entrega}
              </div>
              <ProgressBar percent={p.avance} />
            </div>
          ))}
        </div>

        <div className="self-start border border-borde bg-white">
          <div className="border-b border-borde p-5">
            <div className="font-mono text-[11px] text-gris-etiqueta">{detalle.codigo}</div>
            <h2 className="mt-2 mb-0 font-display text-[19px] leading-[1.25] font-bold">
              {detalle.nombre}
            </h2>
          </div>
          <div className="grid gap-3.5 border-b border-borde p-5">
            <div className="flex justify-between text-[13.5px]">
              <span className="text-texto-suave">Línea</span>
              <span>{detalle.linea}</span>
            </div>
            <div className="flex justify-between text-[13.5px]">
              <span className="text-texto-suave">Responsable</span>
              <span>{detalle.responsable}</span>
            </div>
            <div className="flex justify-between text-[13.5px]">
              <span className="text-texto-suave">Estado</span>
              <span>{detalle.estado}</span>
            </div>
            <div className="flex justify-between text-[13.5px]">
              <span className="text-texto-suave">Entrega</span>
              <span>{detalle.entrega}</span>
            </div>
          </div>
          <div className="p-5">
            <div className="mb-3 font-mono text-[10.5px] tracking-[.12em] text-texto-suave uppercase">
              Entregables
            </div>
            <div className="grid gap-2.5">
              {ENTREGABLES.map((e) => (
                <div
                  key={e.nombre}
                  className={`flex items-center gap-2.5 border px-3.5 py-3 ${
                    e.pendiente ? "border-dashed border-input-borde text-gris-etiqueta" : "border-borde"
                  }`}
                >
                  <span className="font-mono text-[10px] text-gris-etiqueta">{e.tipo}</span>
                  <span className="text-[13.5px]">{e.nombre}</span>
                  {!e.pendiente && (
                    <a href="#" className="ml-auto font-mono text-[11px]">
                      Descargar
                    </a>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/portal/mensajes"
              className="mt-5 inline-block bg-verde-marca px-4 py-3 font-mono text-[11.5px] tracking-[.07em] text-white uppercase transition-colors hover:bg-verde-marca-hover"
            >
              Escribir al responsable
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
