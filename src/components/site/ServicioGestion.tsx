import { ServicioLayout } from "./ServicioLayout";

const DISENO = [
  "Diseño y administración del SG-SST",
  "Gestión de Seguridad Vial",
  "Gestión del riesgo – Prevención y atención de emergencias",
  "Asesoría y capacitación en Riesgo Biomecánico",
  "Asesoría y capacitación en Riesgo Psicosocial",
  "Potencialización del talento humano",
  "Capacitación, psicopausas, neuróbicos, entrenamiento lúdico y pausas activas",
];

const AUDITORIA = [
  "Auditoría en norma ISO 9001",
  "Auditoría en norma ISO 14001",
  "Auditoría en norma ISO 31000",
  "Auditoría en OHSAS 18000",
  "Habilitación en salud",
];

const BIOMECANICO = [
  "Análisis e inspecciones de puesto de trabajo",
  "Educación e higiene postural",
  "Programa de pausas activas",
  "Seguimiento a casos de medicina laboral",
  "Acompañamiento a reintegros",
  "Capacitación",
];

const CHIPS = [
  "Comité de convivencia laboral y COPASST",
  "Brigadas de emergencia",
  "Seguridad basada en comportamiento (metodología tricondicional)",
  "Outdoor Training",
  "Neuróbicos",
  "Primeros auxilios",
  "Primeros auxilios psicológicos",
  "Prevención de riesgo psicosocial, biomecánico, biológico, físico, químico y público",
  "Gestión del talento humano",
  "Psicopausas",
  "Enfermedades laborales por riesgo psicosocial",
  "Enfermedades laborales por riesgo biomecánico",
];

const ENTREGABLES = [
  "Informe de resultados",
  "Observatorio de riesgo psicosocial",
  "Candidatos al SVE / casos blancos de intervención",
  "Plan de trabajo",
  "Levantamiento de perfil de cargo",
  "Diseño de programas de inducción y reinducción",
  "Evaluación de competencias",
  "Procesos de selección por competencias",
  "Diseño de planes de bienestar laboral",
  "Sistemas de vigilancia epidemiológica para riesgo psicosocial",
  "Inspección de puesto de trabajo con enfoque psicosocial",
  "Análisis de puesto de trabajo",
];

function SubLista({ titulo, items }: { titulo: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3 font-display text-[16px] font-bold text-tinta">{titulo}</h4>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-borde-4 py-2.5 text-[15px] leading-[1.5] text-texto"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicioGestion() {
  return (
    <ServicioLayout
      id="gestion"
      bgClassName="bg-fondo"
      indice="02 — SG-SST"
      titulo="Sistemas de gestión"
      subtitulo="Calidad, seguridad y salud en el trabajo"
      placeholderLabel="taller / brigada de emergencia"
      placeholderSrc="/fotos-sitio-actual/dp-brigada_de_emergencia.jpg"
      linkHref="#contactenos"
      linkLabel="Agendar asesoría →"
    >
      <div className="grid grid-cols-1 content-start gap-x-11 gap-y-9 w640:grid-cols-2">
        <SubLista titulo="Diseño y administración" items={DISENO} />
        <div>
          <SubLista titulo="Auditoría" items={AUDITORIA} />
          <div className="mt-7">
            <SubLista titulo="Prevención del riesgo biomecánico" items={BIOMECANICO} />
          </div>
        </div>

        <div className="col-span-full border border-borde bg-white px-8 py-[30px]">
          <h4 className="mb-2 font-display text-[16px] font-bold text-tinta">
            Asesorías y capacitación
          </h4>
          <p className="mb-5 max-w-[78ch] text-[15px] leading-[1.6] text-texto-suave">
            Ofrecemos servicios de asesoría y capacitación en aspectos relacionados con el
            SG-SST, utilizamos metodologías experienciales y lúdicas para adultos.
          </p>
          <div className="flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-borde bg-fondo-verde px-[13px] py-2 text-[13.5px] text-texto"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-full bg-verde-profundo px-8 py-[34px] text-fondo">
          <h4 className="mb-1.5 font-display text-[16px] font-bold">
            Prevención del riesgo psicosocial
          </h4>
          <p className="mb-[22px] text-[15px] text-fondo/70">
            Diagnóstico de riesgo psicosocial · Batería de riesgo psicosocial
          </p>
          <div className="mb-3.5 font-mono text-[11.5px] tracking-[.12em] text-verde-suave uppercase">
            Entregables
          </div>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-11 p-0 w640:grid-cols-2">
            {ENTREGABLES.map((item) => (
              <li
                key={item}
                className="border-b border-fondo/13 py-2.5 text-[15px] leading-[1.5]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ServicioLayout>
  );
}
