"use server";

// Envía la solicitud del formulario "Contáctenos" por correo a D&P vía la API
// de Resend (mismo proveedor y patrón que usa la plataforma interna para sus
// correos). No hay base de datos en este sitio: la solicitud viaja solo por
// email, con Reply-To al correo de quien escribe para poder responderle directo.

export type EstadoContacto = { ok?: boolean; error?: string } | undefined;

// Uno o varios destinatarios separados por coma (CONTACTO_DESTINO).
const DESTINOS = (
  process.env.CONTACTO_DESTINO ||
  "proyectos@dpingenieriaintegral.com, angelicapaez@dpingenieriaintegral.com"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const REMITENTE =
  process.env.CONTACTO_REMITENTE || "Sitio web D&P <notificaciones@dpingenieriaintegral.com>";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function enviarSolicitud(
  _prev: EstadoContacto,
  formData: FormData,
): Promise<EstadoContacto> {
  // Honeypot: un campo oculto que solo rellenan los bots.
  if (String(formData.get("empresa_web") ?? "").trim() !== "") {
    return { ok: true };
  }

  const nombre = String(formData.get("nombre") ?? "").trim();
  const ciudad = String(formData.get("ciudad") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const correo = String(formData.get("correo") ?? "").trim();
  const servicio = String(formData.get("servicio") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  if (!nombre || !correo || !mensaje) {
    return { error: "Complete al menos nombre, correo y mensaje." };
  }
  if (!EMAIL_RE.test(correo)) {
    return { error: "El correo electrónico no parece válido." };
  }
  if (mensaje.length > 5000) {
    return { error: "El mensaje es demasiado largo." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return {
      error:
        "El formulario aún no está configurado. Escríbanos directamente a proyectos@dpingenieriaintegral.com.",
    };
  }

  const filas: [string, string][] = [
    ["Nombre", nombre],
    ["Ciudad", ciudad],
    ["Teléfono", telefono],
    ["Correo", correo],
    ["Servicio de interés", servicio],
  ].filter(([, v]) => v) as [string, string][];

  const text =
    filas.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMensaje:\n${mensaje}`;

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0c1f14;line-height:1.6">
      <h2 style="margin:0 0 12px">Nueva solicitud desde el sitio web</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${filas
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#5c6b60">${esc(k)}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin:16px 0 4px;color:#5c6b60">Mensaje:</p>
      <p style="margin:0;white-space:pre-wrap">${esc(mensaje)}</p>
    </div>`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: REMITENTE,
        to: DESTINOS,
        reply_to: correo,
        subject: `Solicitud web — ${servicio || "General"} — ${nombre}`,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      return {
        error:
          "No se pudo enviar en este momento. Intente de nuevo o escríbanos a proyectos@dpingenieriaintegral.com.",
      };
    }
  } catch {
    return {
      error:
        "No se pudo enviar en este momento. Intente de nuevo o escríbanos a proyectos@dpingenieriaintegral.com.",
    };
  }

  return { ok: true };
}
