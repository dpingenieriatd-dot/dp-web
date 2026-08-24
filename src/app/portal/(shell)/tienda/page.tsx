"use client";

import { PRODUCTOS } from "@/lib/portal-data";
import { formatCOP } from "@/lib/format";
import { usePortalState } from "@/lib/portal-context";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const CATEGORIAS = ["Capacitaciones", "Diagnósticos SG-SST", "Dotación EPP", "Ensayos de laboratorio"];

export default function TiendaPage() {
  const { addToCart, removeFromCart, cartLines, cartCount, subtotal, iva, total, pagando, checkout } =
    usePortalState();

  return (
    <section className="p-7">
      <div className="mb-2 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Contratar servicios</h1>
          <p className="m-0 text-texto-suave">
            Servicios con precio publicado. Pago en línea y programación inmediata.
          </p>
        </div>
        <div className="font-mono text-[11.5px] text-texto-suave">
          Catálogo por definir con D&amp;P
        </div>
      </div>

      <div className="mt-[22px] grid grid-cols-1 items-start gap-5 w1100:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-verde-profundo px-3 py-[7px] font-mono text-[11px] text-fondo">
              {CATEGORIAS[0]}
            </span>
            {CATEGORIAS.slice(1).map((c) => (
              <span
                key={c}
                className="border border-borde bg-white px-3 py-[7px] font-mono text-[11px] text-texto-suave"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 w640:grid-cols-2">
            {PRODUCTOS.map((p) => (
              <div key={p.id} className="flex flex-col border border-borde bg-white">
                <ImagePlaceholder label={p.imagen} height={110} className="border-0" />
                <div className="flex flex-1 flex-col p-[18px]">
                  <div className="font-mono text-[10.5px] tracking-[.1em] text-teal uppercase">
                    {p.categoria}
                  </div>
                  <h3 className="mt-[9px] mb-1.5 font-display text-[16px] leading-[1.25] font-bold">
                    {p.nombre}
                  </h3>
                  <p className="mb-3.5 text-[12.5px] leading-[1.5] text-texto-suave">
                    {p.detalle}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-2.5">
                    <span className="font-display text-[17px] font-bold">
                      {formatCOP(p.valor)}
                    </span>
                    <button
                      onClick={() => addToCart(p.id)}
                      className="bg-ambar px-3.5 py-2.5 font-mono text-[11px] tracking-[.06em] text-verde-footer uppercase transition-colors hover:bg-ambar-hover"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-[84px] border border-borde bg-white">
          <div className="flex items-center justify-between border-b border-borde px-5 py-[18px]">
            <h2 className="m-0 font-display text-[16px] font-bold">Su carrito</h2>
            <span className="font-mono text-[11px] text-texto-suave">{cartCount} ítems</span>
          </div>
          <div className="min-h-[90px] py-2">
            {cartLines.map((line) => (
              <div
                key={line.id}
                className="flex items-start gap-3 border-b border-borde-3 px-5 py-[13px]"
              >
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-medium">{line.nombre}</span>
                  <span className="mt-0.5 block text-[12px] text-texto-suave">
                    {line.cantidad} × {formatCOP(line.valor)}
                  </span>
                </span>
                <button
                  onClick={() => removeFromCart(line.id)}
                  className="ml-auto font-mono text-[11px] text-estado-crit-fg"
                >
                  Quitar
                </button>
              </div>
            ))}
            {cartLines.length === 0 && (
              <div className="px-5 py-[26px] text-center text-[13px] text-gris-etiqueta">
                Aún no ha agregado servicios.
              </div>
            )}
          </div>
          <div className="grid gap-2.5 border-t border-borde px-5 py-[18px]">
            <div className="flex justify-between text-[13px] text-texto-suave">
              <span>Subtotal</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[13px] text-texto-suave">
              <span>IVA 19%</span>
              <span>{formatCOP(iva)}</span>
            </div>
            <div className="flex justify-between border-t border-borde-3 pt-2 font-display text-[17px] font-bold">
              <span>Total</span>
              <span>{formatCOP(total)}</span>
            </div>
            <button
              onClick={checkout}
              className="mt-2 bg-verde-marca px-4 py-3.5 font-mono text-[11.5px] tracking-[.07em] text-white uppercase transition-colors hover:bg-verde-marca-hover"
            >
              {pagando ? "Pago confirmado ✓" : "Pagar y programar"}
            </button>
            <p className="m-0 text-[11.5px] leading-[1.5] text-gris-etiqueta">
              Pago con PSE, tarjeta o transferencia. Factura electrónica automática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
