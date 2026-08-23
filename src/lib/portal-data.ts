// Datos de demostración para el portal de clientes (empresa ficticia
// "Constructora Andina S.A.S."). En producción, mapear 1:1 a endpoints/tablas
// reales (ver README del handoff de diseño).

export type Proyecto = {
  codigo: string;
  nombre: string;
  linea: string;
  responsable: string;
  estado: string;
  entrega: string;
  avance: string;
};

export const PROYECTOS: Proyecto[] = [
  {
    codigo: "PR-2026-014",
    nombre: "Estudio geotécnico — Vía Chía-Cajicá K2+300",
    linea: "Ingeniería y Geotecnia",
    responsable: "Ing. C. Peña",
    estado: "En ejecución",
    entrega: "02 sep 2026",
    avance: "72%",
  },
  {
    codigo: "PR-2026-021",
    nombre: "Diseño de cimentación — Bodega Funza",
    linea: "Ingeniería y Geotecnia",
    responsable: "Ing. L. Marín",
    estado: "En diseño",
    entrega: "18 sep 2026",
    avance: "35%",
  },
  {
    codigo: "SG-2026-003",
    nombre: "Administración SG-SST 2026",
    linea: "Sistemas de gestión",
    responsable: "Psic. D. Torres",
    estado: "En ejecución",
    entrega: "31 dic 2026",
    avance: "58%",
  },
  {
    codigo: "SU-2026-047",
    nombre: "Dotación EPP — Frente 3",
    linea: "Suministros",
    responsable: "Coord. J. Ramírez",
    estado: "Alistamiento",
    entrega: "27 ago 2026",
    avance: "90%",
  },
];

export type Producto = {
  id: string;
  categoria: string;
  nombre: string;
  detalle: string;
  valor: number;
  imagen: string;
};

export const PRODUCTOS: Producto[] = [
  {
    id: "p1",
    categoria: "Capacitación",
    nombre: "Brigadas de emergencia (8 h)",
    detalle: "Grupo de hasta 25 personas. Incluye certificado y material.",
    valor: 1850000,
    imagen: "taller de brigada",
  },
  {
    id: "p2",
    categoria: "Capacitación",
    nombre: "Pausas activas y psicopausas (mes)",
    detalle: "Sesiones semanales en sitio para un frente de trabajo.",
    valor: 1200000,
    imagen: "sesión en planta",
  },
  {
    id: "p3",
    categoria: "Diagnóstico",
    nombre: "Batería de riesgo psicosocial",
    detalle: "Aplicación, análisis e informe de resultados. Hasta 50 trabajadores.",
    valor: 3400000,
    imagen: "aplicación de batería",
  },
  {
    id: "p4",
    categoria: "Diagnóstico",
    nombre: "Inspección de puesto de trabajo",
    detalle: "Enfoque biomecánico, con plan de acción por puesto.",
    valor: 780000,
    imagen: "puesto de trabajo",
  },
  {
    id: "p5",
    categoria: "Dotación EPP",
    nombre: "Kit EPP básico obra civil",
    detalle: "Casco, gafas, protección auditiva, guantes y chaleco reflectivo.",
    valor: 189000,
    imagen: "kit EPP",
  },
  {
    id: "p6",
    categoria: "Laboratorio",
    nombre: "Ensayo de compresión inconfinada",
    detalle: "Por muestra. Resultados en 5 días hábiles.",
    valor: 320000,
    imagen: "laboratorio de suelos",
  },
];

export type Documento = {
  tipo: string;
  nombre: string;
  proyecto: string;
  fecha: string;
};

export const DOCUMENTOS: Documento[] = [
  { tipo: "PDF", nombre: "Informe de exploración K2+300", proyecto: "PR-2026-014", fecha: "20 ago 2026" },
  { tipo: "XLSX", nombre: "Resultados de laboratorio — lote 3", proyecto: "PR-2026-014", fecha: "18 ago 2026" },
  { tipo: "PDF", nombre: "Certificados capacitación alturas", proyecto: "SG-2026-003", fecha: "12 ago 2026" },
  { tipo: "PDF", nombre: "Matriz de peligros actualizada", proyecto: "SG-2026-003", fecha: "05 ago 2026" },
  { tipo: "PDF", nombre: "Acta de entrega dotación Frente 2", proyecto: "SU-2026-047", fecha: "29 jul 2026" },
  { tipo: "DOCX", nombre: "Política SST — firmada (cargado por cliente)", proyecto: "—", fecha: "22 jul 2026" },
];

export type Factura = {
  numero: string;
  concepto: string;
  emision: string;
  vence: string;
  valor: string;
  estado: "Pendiente" | "Pagada";
};

export const FACTURAS: Factura[] = [
  { numero: "FE-4821", concepto: "Estudio geotécnico — avance 2", emision: "10 ago 2026", vence: "30 ago 2026", valor: "$8.400.000", estado: "Pendiente" },
  { numero: "FE-4790", concepto: "Administración SG-SST — julio", emision: "31 jul 2026", vence: "15 ago 2026", valor: "$4.200.000", estado: "Pagada" },
  { numero: "FE-4755", concepto: "Dotación EPP Frente 2", emision: "18 jul 2026", vence: "02 ago 2026", valor: "$6.930.000", estado: "Pagada" },
  { numero: "FE-4712", concepto: "Capacitación brigadas", emision: "28 jun 2026", vence: "13 jul 2026", valor: "$1.850.000", estado: "Pagada" },
  { numero: "FE-4680", concepto: "Batería de riesgo psicosocial", emision: "12 jun 2026", vence: "27 jun 2026", valor: "$3.400.000", estado: "Pagada" },
];

export type Cotizacion = {
  id: string;
  codigo: string;
  nombre: string;
  linea: string;
  vigencia: string;
  items: string;
  valor: string;
};

export const COTIZACIONES: Cotizacion[] = [
  { id: "c1", codigo: "COT-2026-118", nombre: "Tratamiento de talud K3+150", linea: "Ingeniería y Geotecnia", vigencia: "15 sep 2026", items: "6 ítems", valor: "$42.800.000" },
  { id: "c2", codigo: "COT-2026-121", nombre: "Plan estratégico de seguridad vial", linea: "Sistemas de gestión", vigencia: "20 sep 2026", items: "4 ítems", valor: "$11.500.000" },
  { id: "c3", codigo: "COT-2026-109", nombre: "Dotación EPP anual 2027", linea: "Suministros", vigencia: "01 sep 2026", items: "18 ítems", valor: "$74.200.000" },
];
