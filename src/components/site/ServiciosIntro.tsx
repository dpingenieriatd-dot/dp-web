export function ServiciosIntro() {
  return (
    <section id="servicios" className="scroll-mt-[90px] border-t border-borde bg-white px-[28px] pt-[104px] pb-10">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-10">
        <div>
          <div className="font-mono text-[12px] tracking-[.14em] text-teal uppercase">
            Servicios
          </div>
          <h2 className="mt-4 font-display text-[34px] leading-[1.1] font-extrabold tracking-[-.02em] w900:text-[48px] w900:leading-[1.06]">
            Tres frentes, un solo equipo.
          </h2>
        </div>
        <a
          href="#contactenos"
          className="border-b border-ambar pb-1 font-mono text-[12.5px] tracking-[.08em] text-tinta uppercase transition-colors hover:text-ambar"
        >
          Descargar portafolio ↓
        </a>
      </div>
    </section>
  );
}
