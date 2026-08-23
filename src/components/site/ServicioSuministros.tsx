import { ServicioLayout } from "./ServicioLayout";

const ITEMS = [
  "Elementos de protección auditiva",
  "Elementos de protección ocular",
  "Elementos de protección respiratoria",
  "Elementos de protección de cabeza y cara",
  "Elementos de protección para soldar",
  "Material reflexivo",
  "Equipos de emergencia",
  "Souvenirs para empresas",
];

export function ServicioSuministros() {
  return (
    <ServicioLayout
      id="suministros"
      bgClassName="bg-white pb-[100px]"
      indice="03 — Suministros"
      titulo="Suministros y dotación EPP"
      subtitulo="Souvenirs – Dotación EPP"
      placeholderLabel="dotación industrial"
      linkHref="#contactenos"
      linkLabel="Pedir catálogo →"
    >
      <div className="grid content-start grid-cols-1 gap-px border border-borde bg-borde w640:grid-cols-2">
        {ITEMS.map((item, i) => (
          <div key={item} className="bg-white px-6 py-[26px]">
            <div className="mb-2 font-mono text-[11px] text-verde-claro">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-[16px] leading-[1.45] text-texto">{item}</div>
          </div>
        ))}
      </div>
    </ServicioLayout>
  );
}
