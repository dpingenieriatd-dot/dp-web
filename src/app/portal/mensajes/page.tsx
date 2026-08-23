const HILOS = [
  {
    nombre: "Ing. Camilo Peña",
    ultimo: "Informe geotécnico listo para revisión",
    noLeido: true,
  },
  { nombre: "Psic. Daniela Torres", ultimo: "Confirmación de asistentes capacitación", noLeido: false },
  { nombre: "Suministros D&P", ultimo: "Despacho EPP Frente 3 programado", noLeido: false },
];

const MENSAJES = [
  {
    propio: false,
    texto:
      "Buenos días María. El informe de exploración del K2+300 quedó cargado en Documentos. Quedan pendientes dos ensayos de laboratorio.",
    hora: "Ayer 4:12 p.m.",
  },
  {
    propio: true,
    texto: "Perfecto, lo reviso hoy. ¿Alcanzamos a tener el diseño final antes del 2 de septiembre?",
    hora: "Hoy 8:05 a.m.",
  },
  {
    propio: false,
    texto: "Sí, con los resultados del viernes lo entregamos el 2. Le agendo la reunión de sustentación.",
    hora: "Hoy 8:20 a.m.",
  },
];

export default function MensajesPage() {
  return (
    <section className="p-7">
      <h1 className="m-0 mb-1 font-display text-[26px] font-extrabold">Mensajes</h1>
      <p className="mt-0 mb-[22px] text-texto-suave">
        Canal directo con el equipo asignado a su cuenta.
      </p>

      <div className="grid min-h-[520px] grid-cols-1 gap-px border border-borde bg-borde w900:grid-cols-[300px_1fr]">
        <div className="bg-white">
          {HILOS.map((h, i) => (
            <div
              key={h.nombre}
              className={`border-b border-borde-3 px-[18px] py-3.5 ${i === 0 ? "bg-fondo" : ""}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[13.5px] font-semibold">{h.nombre}</span>
                {h.noLeido && (
                  <span className="ml-auto h-[7px] w-[7px] rounded-full bg-verde-claro" />
                )}
              </div>
              <div className="mt-1 text-[12.5px] text-texto-suave">{h.ultimo}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col bg-white">
          <div className="flex items-center gap-3 border-b border-borde-3 px-[22px] py-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-verde-marca font-display text-[12px] font-bold text-white">
              CP
            </span>
            <span>
              <span className="block text-[14px] font-semibold">Ing. Camilo Peña</span>
              <span className="block text-[12px] text-texto-suave">
                Director de proyecto · Geotecnia
              </span>
            </span>
          </div>

          <div className="grid flex-1 content-start gap-3.5 p-[22px]">
            {MENSAJES.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-3.5 w640:max-w-[70%] ${
                  m.propio
                    ? "justify-self-end bg-verde-profundo text-fondo"
                    : "justify-self-start bg-fondo-verde"
                }`}
              >
                <p className="m-0 text-[13.5px] leading-[1.55]">{m.texto}</p>
                <div
                  className={`mt-2 font-mono text-[10.5px] ${
                    m.propio ? "text-fondo/50" : "text-gris-etiqueta"
                  }`}
                >
                  {m.hora}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2.5 border-t border-borde-3 p-[18px]">
            <input
              type="text"
              placeholder="Escriba su mensaje"
              className="flex-1 border border-input-borde px-3.5 py-3 text-[13.5px] outline-none focus:border-verde-claro"
            />
            <button className="bg-verde-marca px-[18px] py-3 font-mono text-[11.5px] tracking-[.07em] text-white uppercase transition-colors hover:bg-verde-marca-hover">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
