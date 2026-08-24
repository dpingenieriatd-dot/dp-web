import { FACTURAS } from "@/lib/portal-data";
import { StatCard } from "@/components/portal/StatCard";
import { StatusPill } from "@/components/portal/StatusPill";

export default function FacturasPage() {
  return (
    <section className="p-7">
      <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Facturas y pagos</h1>
      <p className="mt-0 mb-[22px] text-texto-suave">
        Estado de cartera y descarga de facturación electrónica.
      </p>

      <div className="mb-5 grid grid-cols-1 gap-px border border-borde bg-borde w640:grid-cols-3">
        <StatCard label="Pendiente" value="$8.400.000" />
        <StatCard label="Pagado en 2026" value="$62.150.000" />
        <StatCard label="Próximo vencimiento" value="30 AGO" />
      </div>

      <div className="overflow-x-auto border border-borde bg-white">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[120px_1fr_140px_140px_130px_120px] border-b border-borde px-5 py-3 font-mono text-[10.5px] tracking-[.1em] text-texto-suave uppercase">
            <span>Factura</span>
            <span>Concepto</span>
            <span>Emisión</span>
            <span>Vencimiento</span>
            <span>Valor</span>
            <span>Estado</span>
          </div>
          {FACTURAS.map((f) => (
            <div
              key={f.numero}
              className="grid grid-cols-[120px_1fr_140px_140px_130px_120px] items-center border-b border-borde-3 px-5 py-[15px] text-[13.5px] transition-colors hover:bg-fondo"
            >
              <a href="#" className="font-mono text-[12px]">
                {f.numero}
              </a>
              <span className="truncate pr-2">{f.concepto}</span>
              <span className="font-mono text-[12px] text-texto-suave">{f.emision}</span>
              <span className="font-mono text-[12px] text-texto-suave">{f.vence}</span>
              <span className="font-semibold">{f.valor}</span>
              <StatusPill estado={f.estado} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
