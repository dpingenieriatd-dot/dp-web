// Autenticación mínima del portal mientras no se define con el cliente el
// modelo real de cuentas (una cuenta por empresa tras comprar un servicio).
// Una sola cuenta de prueba, guardada en variables de entorno — nunca en
// el código — y una cookie de sesión que solo es válida si coincide
// exactamente con PORTAL_SESSION_TOKEN. Sin backend/BD todavía: cuando se
// defina el modelo real, esto se reemplaza por una tabla de usuarios.

export const SESSION_COOKIE_NAME = "dp_portal_session";

export function isValidSessionValue(value: string | undefined): boolean {
  const token = process.env.PORTAL_SESSION_TOKEN;
  return Boolean(token) && value === token;
}

export function verifyCredentials(nit: string, email: string, password: string): boolean {
  const validNit = process.env.PORTAL_TEST_NIT;
  const validEmail = process.env.PORTAL_TEST_EMAIL;
  const validPassword = process.env.PORTAL_TEST_PASSWORD;

  if (!validNit || !validEmail || !validPassword) return false;

  return (
    nit.trim() === validNit &&
    email.trim().toLowerCase() === validEmail.toLowerCase() &&
    password === validPassword
  );
}

export function getSessionToken(): string | undefined {
  return process.env.PORTAL_SESSION_TOKEN;
}
