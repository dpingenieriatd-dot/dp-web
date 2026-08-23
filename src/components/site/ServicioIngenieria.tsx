import { ServicioLayout } from "./ServicioLayout";

const ITEMS = [
  "Estudios de suelo y ensayos de laboratorio",
  "Tratamiento de taludes, perforaciones de suelo, construcción de pilotes, anclajes e instrumentos",
  "Consultorías y asesorías en el área de geotecnia",
  "Diseño de cimentaciones para todo tipo de estructuras",
  "Diseño de estructuras de contención y diseño de soluciones para deslizamientos",
  "Servicios de topografía, georreferenciación y análisis de datos espaciales por medio de SIG",
  "Trazado, diseño y diagnósticos de líneas de transporte Oil & Gas, locaciones y facilidades de acceso",
  "Diseño de pavimentos y diseño geotécnico de vías",
  "Servicios de exploración directa e indirecta del subsuelo para la ejecución de estudios geotécnicos",
  "Servicios de exploración indirecta del subsuelo por medio de técnicas geofísicas",
];

export function ServicioIngenieria() {
  return (
    <ServicioLayout
      id="ingenieria"
      bgClassName="bg-white"
      indice="01 — Ingeniería"
      titulo="Ingeniería y Geotecnia"
      subtitulo="Diseños y proyectos"
      placeholderLabel="perforación / talud"
      linkHref="#contactenos"
      linkLabel="Solicitar este servicio →"
    >
      <ul className="grid grid-cols-1 content-start gap-x-11 gap-y-0.5 w640:grid-cols-2">
        {ITEMS.map((item) => (
          <li
            key={item}
            className="border-b border-borde-3 py-3.5 text-[15.5px] leading-[1.55] text-texto"
          >
            {item}
          </li>
        ))}
        <li className="col-span-full mt-[22px] border-l-[3px] border-verde-claro bg-fondo-verde px-[22px] py-[18px] text-[15.5px] leading-[1.55] text-texto">
          <strong className="font-display">Capacitación:</strong> ofrecemos servicios de
          asesoría, consultoría y capacitación de ingeniería civil y geotecnia.
        </li>
      </ul>
    </ServicioLayout>
  );
}
