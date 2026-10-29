import { defineConfig, devices } from "@playwright/test";

// Pruebas de los flujos que importan: contacto, 404 y accesibilidad (axe).
// Corren contra el build de producción: `npm run build` y luego `npm run test:e2e`.
const PUERTO = 3017;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: `http://localhost:${PUERTO}` },
  projects: [
    { name: "escritorio", use: { ...devices["Desktop Chrome"] } },
    { name: "celular", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 844 } } },
  ],
  webServer: {
    command: `npx next start -p ${PUERTO}`,
    url: `http://localhost:${PUERTO}`,
    reuseExistingServer: true,
  },
});
