# D&P Ingeniería Integral — sitio web

Sitio corporativo y portal de clientes de **D&P Ingeniería Integral** (ingeniería
civil y geotecnia, sistemas de gestión SG-SST y suministro de dotación / EPP).

Construido con **Next.js 16** (App Router + Turbopack), **React 19** y **Tailwind
CSS v4**. Todo el código y la documentación están en español.

## Requisitos

- Node.js 20.9+ (probado con Node 24)
- npm (se incluye `package-lock.json`)

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # y completar los valores (ver "Variables de entorno")
npm run dev
```

Abrir <http://localhost:3000> (si el puerto está ocupado, Next.js elige el
siguiente libre e imprime la URL real en consola).

### Scripts

| Script          | Descripción                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo (Turbopack)           |
| `npm run build` | Build de producción                          |
| `npm run start` | Sirve el build de producción                 |
| `npm run lint`  | ESLint (`eslint-config-next`)                |

## Estructura

```
src/
  app/
    layout.tsx                 Layout raíz, fuentes (Archivo / IBM Plex), metadata y favicon
    page.tsx                   Home de una sola página (secciones en src/components/site)
    globals.css                Tailwind v4 + tokens de tema (@theme) y breakpoints w*
    politica-de-privacidad/    Página legal
    tratamiento-de-datos/      Página legal (Habeas Data, Ley 1581 de 2012)
    portal/
      login/                   Login del portal (NIT + correo + contraseña)
      (shell)/                 Portal autenticado: layout con Sidebar + Topbar
        page.tsx               Inicio del portal
        proyectos/ indicadores/ documentos/
        tienda/ cotizaciones/ agenda/ facturas/
        mensajes/
  components/
    site/                      Secciones del sitio corporativo (Hero, Nosotros, Servicios…)
    portal/                    UI del portal (Sidebar, Topbar, StatCard, StatusPill…)
    shared/                    Componentes compartidos
  lib/
    site-config.ts             Datos de contacto y flags de contenido del sitio
    portal-auth.ts             Verificación de credenciales y de la cookie de sesión
    require-portal-session.ts  Guard "seguro" usado en el layout del portal
    portal-data.ts             Datos de demostración del portal (empresa ficticia)
    portal-context.tsx         Estado de cliente del portal (carrito, checkout, etc.)
    portal-nav.ts              Definición del menú del portal
    format.ts                  Utilidades de formato
  proxy.ts                     Middleware de Next 16: chequeo optimista de sesión en /portal/*
public/                        Imágenes (fotos del sitio, logos de clientes, favicon)
```

Alias de importación: `@/*` → `src/*`.

## Sitio corporativo

Home de una sola página con navegación por anclas. Secciones: Hero, Nosotros,
Servicios (Ingeniería y Geotecnia, Sistemas de gestión, Suministros), Actualidad,
Clientes, Testimonios y Contáctenos, más botón flotante de WhatsApp.

Las secciones **Actualidad**, **Clientes** y **Testimonios** se activan/desactivan
con flags en `src/lib/site-config.ts` (`showActualidad`, `showClientes`,
`showTestimonios`). Ahí también viven los datos de contacto (teléfono, correo,
WhatsApp, horarios, redes). Algunos datos están marcados como pendientes de
confirmar por el cliente (p. ej. `ciudadConfirmar`).

### Formulario "Contáctenos"

`src/components/site/contacto-action.ts` (Server Action). No hay base de datos: la
solicitud se envía **por correo vía [Resend](https://resend.com)**, con `Reply-To`
al correo de quien escribe. Incluye honeypot anti-bots (`empresa_web`) y
validación básica. Sin `RESEND_API_KEY` configurada, el formulario muestra un
mensaje pidiendo escribir directamente a `proyectos@dpingenieriaintegral.com`.

## Portal de clientes (`/portal`)

Prototipo funcional con **datos de demostración** (empresa ficticia "Constructora
Andina S.A.S." en `src/lib/portal-data.ts`). Todavía no hay backend ni base de
datos.

**Autenticación** (temporal, en `src/lib/portal-auth.ts`): una única cuenta de
prueba guardada en variables de entorno. El login valida NIT + correo +
contraseña y, si coinciden, escribe una cookie `dp_portal_session` (httpOnly,
`sameSite=lax`, 7 días) cuyo valor debe ser exactamente `PORTAL_SESSION_TOKEN`.

- `src/proxy.ts` — chequeo optimista (solo lee la cookie) en cada request a
  `/portal/*`; redirige a `/portal/login` si no hay sesión.
- `src/app/portal/(shell)/layout.tsx` — chequeo "seguro" con
  `requirePortalSession()`.

Cuando se defina con el cliente el modelo real de cuentas (una por empresa tras
contratar un servicio), esto se reemplaza por una tabla de usuarios y los datos de
demostración por endpoints reales.

## Variables de entorno

Ver `.env.example`. Se cargan desde `.env.local` (no versionado).

| Variable                | Requerida | Descripción                                                                 |
| ----------------------- | --------- | -------------------------------------------------------------------------- |
| `PORTAL_TEST_NIT`       | Portal    | NIT de la cuenta de prueba del portal                                     |
| `PORTAL_TEST_EMAIL`     | Portal    | Correo de la cuenta de prueba                                             |
| `PORTAL_TEST_PASSWORD`  | Portal    | Contraseña de la cuenta de prueba                                         |
| `PORTAL_SESSION_TOKEN`  | Portal    | Valor de la cookie de sesión; sin esto el login no funciona               |
| `RESEND_API_KEY`        | Contacto  | API key de Resend; requiere el dominio `dpingenieriaintegral.com` verificado |
| `CONTACTO_DESTINO`      | No        | Destinatarios del formulario, separados por coma (tiene default en código) |
| `CONTACTO_REMITENTE`    | No        | Remitente de los correos (tiene default en código)                        |

## Despliegue

Pensado para **Vercel**. Configurar las variables de entorno en el proyecto y
desplegar desde `main`.

## Notas para agentes (Claude Code, etc.)

`AGENTS.md` / `CLAUDE.md` los genera y mantiene `next dev` (advierten que esta
versión de Next tiene breaking changes respecto a versiones anteriores). Antes de
escribir código, consultar las guías en `node_modules/next/dist/docs/`.
