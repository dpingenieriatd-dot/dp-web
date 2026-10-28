// Flags de contenido — en el codebase destino final conviene mapearlas a
// flags de CMS/contenido en vez de constantes.
export const showActualidad = true;
export const showClientes = true;
export const showTestimonios = true;

// Datos de contacto. Ciudad sigue pendiente de confirmar por el cliente (ver README del handoff).
export const contacto = {
  telefono: "+57 310 772 0548",
  telefonoConfirmar: false,
  correo: "proyectos@dpingenieriaintegral.com",
  correoConfirmar: false,
  whatsappHref: "https://wa.me/573107720548",
  horarios: {
    semana: "Lunes a viernes 8:00 a.m. – 5:00 p.m.",
    sabado: "Sábados 8:00 a.m. – 12:00 m.",
    corto: "Lun–Vie 8:00–17:00 · Sáb 8:00–12:00",
  },
  // Razón social, NIT y dirección confirmados por D&P el 28/10/2026.
  razonSocial: "D&P Ingeniería Integral S.A.S.",
  nit: "901.246.822-2",
  direccion: "Cra. 16 # 96-64, Edificio Oficenter 96, Oficina 406",
  ciudad: "Bogotá",
  ciudadConfirmar: false,
  instagram: "https://www.instagram.com/dypingenieriaintegral",
  instagramHandle: "@dypingenieriaintegral",
  facebook: "https://www.facebook.com/dpingenieriaintegral",
};

// Dominio público principal (dpingenieriaintegral.com redirige aquí). Base de URLs absolutas
// para metadatos, sitemap y robots.
export const siteUrl = "https://www.dpingenieriaintegral.com";

export const appInternaHref = "https://app.dpingenieriaintegral.com";
