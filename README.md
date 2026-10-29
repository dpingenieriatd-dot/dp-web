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
| `npm run typecheck` | Revisión de tipos (`tsc --noEmit`)       |
| `npm run test:e2e`  | Pruebas Playwright + axe sobre el build (correr `npm run build` antes) |

## Estructura

```
src/
  app/
    layout.tsx                 Layout raíz, fuentes (Archivo / IBM Plex), metadata y favicon
    page.tsx                   Inicio (secciones en src/components/site)
    nosotros/ experiencia/ actualidad/ tienda/ contacto/   Páginas del sitio
    servicios/                 Índice de las cuatro especialidades
      [slug]/                  Página de cada servicio (datos en src/lib/servicios.ts)
    sitemap.ts robots.ts       SEO
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
    site/                      Secciones del sitio corporativo (Hero, Especialidades, Nosotros…)
                               Piezas comunes: SiteShell (menú + pie), PageHero, Encabezado,
                               CierreComercial, nav.ts (menú) y ui.ts (clases de botones/títulos)
    portal/                    UI del portal (Sidebar, Topbar, StatCard, StatusPill…)
    shared/                    Componentes compartidos
  lib/
    site-config.ts             Datos de contacto y flags de contenido del sitio
    servicios.ts               Las cuatro especialidades: textos de la Guía 2026, fotos y slugs
    seo.ts                     Metadatos por página (Open Graph), ficha de empresa y servicios (JSON-LD)
    client-logos.ts            Lista de logos de clientes (public/logosclientes)
    portal-auth.ts             Verificación de credenciales y de la cookie de sesión
    portal-logout.ts           Server Action de cierre de sesión (borra la cookie)
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

Rediseño según la **Guía de Redacción Web 2026** de D&P y su boceto de referencia
(guardados fuera del repo, en `C:\Users\cesar\DP\web-2026\`). Todos los textos
visibles salen de la guía; no se inventan cifras, certificaciones ni clientes.

Páginas (menú del cap. 2: Inicio · Nosotros · Servicios ▼ · Experiencia · Actualidad ·
Tienda D&P · Contacto):

| Ruta | Contenido |
|---|---|
| `/` | Portada, franja de beneficios, 4 especialidades, Nosotros, propósito, clientes, testimonios, actualidad (máx. 3), cierre comercial y contacto |
| `/servicios` | Las cuatro especialidades |
| `/servicios/[slug]` | Ingeniería Civil y Geotecnia · Seguridad, Salud y Bienestar Laboral · Gestión Humana y Desarrollo Organizacional |
| `/tienda` | Tienda D&P, fase 1: categorías y "Solicitar cotización" (nunca "Comprar" hasta la fase 2) |
| `/nosotros` | Quiénes somos, valores (Trabajo, Rectitud, Integralidad), cómo trabajamos, propósito |
| `/experiencia` | Clientes y testimonios publicados |
| `/actualidad` | Publicaciones (enlazan a Instagram) |
| `/contacto` | Formulario; `?servicio=<slug>` deja el selector ya elegido |

Todas las páginas usan `SiteShell` (mismo menú, pie y botón de WhatsApp). Para cambiar
el texto de un servicio se edita solo `src/lib/servicios.ts`: de ahí leen el inicio,
el menú, el pie, el selector del formulario y la página del servicio.

Pendientes de D&P: PDF del portafolio para "Descargar portafolio", productos y fotos
para la Tienda y fechas de las publicaciones.

### Calidad y medición

- **Pruebas** (`e2e/`): formulario de contacto (servicio preseleccionado, campos de la
  Tienda, campos obligatorios y envío completo usando el campo trampa, sin mandar correo),
  página 404, redirecciones antiguas, encabezados de seguridad y accesibilidad con axe
  (WCAG 2.2 AA) en todas las páginas, en escritorio y celular de 390 px.
- **Medición**: Vercel Web Analytics (`<Analytics />` en `layout.tsx`, sin cookies) y el
  evento `solicitud_enviada` cuando un formulario se envía bien. Hay que tener activado
  Web Analytics en el proyecto de Vercel; los eventos personalizados requieren plan Pro.
- **Seguridad**: encabezados en `next.config.ts` (HSTS, `nosniff`, `Referrer-Policy`,
  `Permissions-Policy` y CSP con `frame-ancestors`).
- **Errores**: `src/app/not-found.tsx` (404 con la marca) y `src/app/error.tsx`.

Las secciones **Actualidad**, **Clientes** y **Testimonios** se activan/desactivan
con flags en `src/lib/site-config.ts` (`showActualidad`, `showClientes`,
`showTestimonios`). Ahí también viven los datos de contacto (teléfono, correo,
WhatsApp, horarios, redes). Algunos datos están marcados como pendientes de
confirmar por el cliente (p. ej. `ciudadConfirmar`).

Servicios retirados del sitio hasta que Dirección Técnica de D&P los confirme
(Guía de Redacción Web 2026, caps. 4.1 y 4.2): auditorías ISO 9001, ISO 14001,
ISO 31000 y "OHSAS 18000", habilitación en salud, trazado y diagnóstico de líneas
Oil & Gas (locaciones y facilidades de acceso) e instrumentación. Si se confirman,
van en un acordeón "Otros servicios especializados".

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
