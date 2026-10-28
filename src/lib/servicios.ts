// Las cuatro especialidades de D&P con los textos de la Guía de Redacción Web 2026 (caps. 3.3 y 4).
// Es la única fuente de estos textos: portada, menú, pie, formulario y páginas de servicio leen de aquí.

export type IconoEspecialidad = "edificios" | "casco" | "personas" | "carrito";

export type GrupoServicio = { titulo: string; texto: string };

export type PaginaServicio = {
  titular: string;
  intro: string;
  cta: string;
  foto: string;
  fotoAlt: string;
  grupos: GrupoServicio[];
  galeria: { src: string; alt: string }[];
};

export type Especialidad = {
  slug: string;
  href: string;
  numero: string;
  titulo: string;
  /** Valor que llega al correo desde el selector del formulario de contacto. */
  opcionFormulario: string;
  resumen: string;
  boton: string;
  foto: string;
  fotoAlt: string;
  icono: IconoEspecialidad;
  /** Solo las tres especialidades con página en /servicios; la cuarta es la Tienda D&P. */
  pagina?: PaginaServicio;
};

export const ESPECIALIDADES: Especialidad[] = [
  {
    slug: "ingenieria-civil-y-geotecnia",
    href: "/servicios/ingenieria-civil-y-geotecnia",
    numero: "01",
    titulo: "Ingeniería Civil y Geotecnia",
    opcionFormulario: "Ingeniería Civil y Geotecnia",
    resumen: "Estudios, diseños, consultoría y soluciones técnicas para proyectos de infraestructura.",
    boton: "Conocer ingeniería",
    foto: "/fotos-2026/ingenieria.webp",
    fotoAlt: "Ingenieros de D&P con casco revisando planos en obra",
    icono: "edificios",
    pagina: {
      titular: "Soluciones técnicas para proyectos de infraestructura.",
      intro:
        "Acompañamos la planeación, el diseño y el desarrollo de proyectos mediante estudios, consultoría y servicios especializados de ingeniería civil y geotecnia.",
      cta: "Solicitar asesoría técnica",
      foto: "/fotos-2026/perforacion-talud.webp",
      fotoAlt: "Equipo de D&P operando una perforadora en un talud",
      // Oil & Gas e instrumentación quedan fuera hasta que Dirección Técnica los confirme (Guía, cap. 4.1).
      grupos: [
        {
          titulo: "Estudios y exploración",
          texto:
            "Estudios de suelos y ensayos de laboratorio; exploración directa e indirecta del subsuelo; estudios geotécnicos y técnicas geofísicas.",
        },
        {
          titulo: "Diseño y consultoría",
          texto:
            "Consultoría geotécnica; diseños de cimentaciones, estructuras de contención y soluciones para la estabilidad de taludes; diseño geotécnico de vías y pavimentos.",
        },
        {
          titulo: "Infraestructura y acompañamiento",
          texto:
            "Topografía, georreferenciación y análisis espacial; tratamiento de taludes, perforaciones, pilotes y anclajes; acompañamiento técnico a proyectos de infraestructura.",
        },
      ],
      galeria: [
        {
          src: "/fotos-2026/ensayo-laboratorio.webp",
          alt: "Profesionales de D&P haciendo ensayos en el laboratorio de suelos",
        },
        {
          src: "/fotos-2026/ingenieria.webp",
          alt: "Ingenieros de D&P con casco revisando planos en obra",
        },
      ],
    },
  },
  {
    slug: "seguridad-salud-y-bienestar-laboral",
    href: "/servicios/seguridad-salud-y-bienestar-laboral",
    numero: "02",
    titulo: "Seguridad, Salud y Bienestar Laboral",
    opcionFormulario: "SG-SST y Bienestar",
    resumen:
      "Acompañamiento en SG-SST, prevención de riesgos, salud mental, riesgo psicosocial y programas de bienestar.",
    boton: "Conocer SG-SST y bienestar",
    foto: "/fotos-2026/sst-bienestar.webp",
    fotoAlt: "Equipo de D&P con chalecos y casco revisando una tableta",
    icono: "casco",
    pagina: {
      titular: "Prevenimos riesgos. Fortalecemos entornos de trabajo saludables.",
      intro:
        "Acompañamos a las organizaciones en la gestión de la seguridad y salud en el trabajo, la prevención de riesgos laborales y el cuidado de la salud física y mental de sus colaboradores.",
      cta: "Solicitar asesoría SG-SST",
      foto: "/fotos-2026/sst-bienestar.webp",
      fotoAlt: "Equipo de D&P con chalecos y casco revisando una tableta",
      // Auditorías ISO y habilitación en salud quedan fuera hasta su revisión técnica (Guía, cap. 4.2).
      grupos: [
        {
          titulo: "Gestión del SG-SST",
          texto:
            "Diseño, implementación, administración, seguimiento y mejora del SG-SST; inspecciones, capacitación, acompañamiento técnico y gestión preventiva.",
        },
        {
          titulo: "Riesgo psicosocial y salud mental",
          texto:
            "Evaluación del riesgo psicosocial, aplicación de instrumentos según los requisitos aplicables, análisis de resultados, planes de intervención, seguimiento de casos y programas de salud mental laboral.",
        },
        {
          titulo: "Salud osteomuscular y prevención",
          texto:
            "Evaluaciones e inspecciones de puestos de trabajo, identificación de condiciones de riesgo biomecánico, higiene postural, programas de pausas activas y apoyo a sistemas de vigilancia epidemiológica.",
        },
        {
          titulo: "Bienestar, formación y cultura preventiva",
          texto:
            "Talleres experienciales, liderazgo preventivo, prevención del acoso y la violencia laboral, convivencia, manejo del estrés, primeros auxilios psicológicos y fortalecimiento de prácticas seguras.",
        },
        {
          titulo: "Complementos relacionados",
          texto:
            "Asesoría en gestión de emergencias, seguridad vial y otros componentes preventivos, conforme con el alcance contratado.",
        },
      ],
      galeria: [
        {
          src: "/fotos-2026/capacitacion-sgsst.webp",
          alt: "Capacitación en SG-SST dictada por D&P a un grupo de trabajadores",
        },
        {
          src: "/fotos-2026/brigada-emergencia.webp",
          alt: "Taller de brigada de emergencia con práctica de primeros auxilios",
        },
      ],
    },
  },
  {
    slug: "gestion-humana-y-desarrollo-organizacional",
    href: "/servicios/gestion-humana-y-desarrollo-organizacional",
    numero: "03",
    titulo: "Gestión Humana y Desarrollo Organizacional",
    opcionFormulario: "Gestión Humana",
    resumen:
      "Selección por competencias, evaluación, formación, liderazgo y fortalecimiento de equipos de trabajo.",
    boton: "Conocer gestión humana",
    foto: "/fotos-2026/gestion-humana.webp",
    fotoAlt: "Profesional de D&P en una entrevista de trabajo",
    icono: "personas",
    pagina: {
      titular: "Impulsamos el talento que mueve a las organizaciones.",
      intro:
        "Acompañamos la selección, la evaluación y el desarrollo de las personas, fortaleciendo competencias, liderazgo, relaciones laborales y desempeño de los equipos.",
      cta: "Conocer soluciones de gestión humana",
      foto: "/fotos-2026/gestion-humana.webp",
      fotoAlt: "Profesional de D&P en una entrevista de trabajo",
      grupos: [
        {
          titulo: "Selección y evaluación",
          texto:
            "Reclutamiento y selección por competencias, entrevistas, pruebas psicotécnicas, evaluaciones de potencial, valoración de perfiles y apoyo a decisiones de vinculación.",
        },
        {
          titulo: "Desarrollo de líderes y equipos",
          texto:
            "Programas de formación, fortalecimiento de habilidades de liderazgo, comunicación, trabajo en equipo, gestión de conflictos y acompañamiento al desarrollo de competencias.",
        },
        {
          titulo: "Cultura y bienestar organizacional",
          texto:
            "Diagnósticos de clima, estrategias de bienestar, fortalecimiento de relaciones laborales y actividades para promover equipos comprometidos y entornos colaborativos.",
        },
        {
          titulo: "Procesos de gestión humana",
          texto:
            "Elaboración y actualización de perfiles de cargo, acompañamiento a procesos de inducción y reinducción, planes de desarrollo y formación empresarial.",
        },
      ],
      galeria: [
        {
          src: "/fotos-2026/nosotros.webp",
          alt: "Equipo de D&P en camisa blanca trabajando alrededor de un computador",
        },
      ],
    },
  },
  {
    slug: "tienda",
    href: "/tienda",
    numero: "04",
    titulo: "Souvenirs, Dotaciones y Suministros",
    opcionFormulario: "Souvenirs y Suministros (Tienda D&P)",
    resumen:
      "Souvenirs corporativos, dotación laboral, elementos de protección personal y suministros para empresas.",
    boton: "Explorar catálogo",
    foto: "/fotos-2026/dotaciones.webp",
    fotoAlt: "Souvenirs corporativos con el logo de D&P: termo, bolso, libreta y taza",
    icono: "carrito",
  },
];

export const PAGINAS_SERVICIO = ESPECIALIDADES.filter(
  (e): e is Especialidad & { pagina: PaginaServicio } => Boolean(e.pagina),
);

export function especialidadPorSlug(slug: string) {
  return ESPECIALIDADES.find((e) => e.slug === slug);
}

/** Enlace al formulario con la especialidad ya elegida en el selector. */
export function hrefCotizar(e: Especialidad) {
  return `/contacto?servicio=${e.slug}`;
}
