import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGINAS = [
  "/",
  "/servicios",
  "/servicios/ingenieria-civil-y-geotecnia",
  "/servicios/seguridad-salud-y-bienestar-laboral",
  "/servicios/gestion-humana-y-desarrollo-organizacional",
  "/tienda",
  "/nosotros",
  "/experiencia",
  "/actualidad",
  "/contacto",
  "/politica-de-privacidad",
  "/tratamiento-de-datos",
  "/esta-pagina-no-existe",
];

test("una dirección que no existe muestra la página 404 de D&P", async ({ page }) => {
  const respuesta = await page.goto("/esta-pagina-no-existe");
  expect(respuesta?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("No encontramos esta página.");
  await expect(page.getByRole("link", { name: "Ir al inicio", exact: true })).toBeVisible();
});

test("las direcciones del sitio anterior redirigen a su página nueva", async ({ page }) => {
  await page.goto("/sistemas-de-gestion");
  await expect(page).toHaveURL(/\/servicios\/seguridad-salud-y-bienestar-laboral$/);
});

test("el servidor envía los encabezados de seguridad", async ({ request }) => {
  const r = await request.get("/");
  expect(r.headers()["x-content-type-options"]).toBe("nosniff");
  expect(r.headers()["content-security-policy"]).toContain("frame-ancestors 'self'");
});

for (const ruta of PAGINAS) {
  test(`accesibilidad (axe, WCAG 2.2 AA): ${ruta}`, async ({ page }) => {
    // Sin animaciones de entrada: axe mediría los colores a mitad del desvanecido.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(ruta);
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    const resumen = violations.map((v) => `${v.id}: ${v.nodes.length} elemento(s) — ${v.help}`);
    expect(resumen).toEqual([]);
  });
}
