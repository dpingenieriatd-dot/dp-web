import { expect, test } from "@playwright/test";

test.describe("Formulario de contacto", () => {
  test("llega con el servicio elegido desde la página del servicio", async ({ page }) => {
    await page.goto("/contacto?servicio=seguridad-salud-y-bienestar-laboral");
    await expect(page.getByLabel("Servicio de interés")).toHaveValue("SG-SST y Bienestar");
  });

  test("muestra los campos de la Tienda solo cuando se elige la Tienda", async ({ page }) => {
    await page.goto("/contacto");
    await expect(page.getByLabel("Cantidad aproximada")).toHaveCount(0);
    await page.goto("/contacto?servicio=tienda");
    await expect(page.getByLabel("Cantidad aproximada")).toBeVisible();
    await expect(page.getByLabel("¿Con personalización?")).toBeVisible();
  });

  test("no envía si faltan los datos obligatorios", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByRole("button", { name: "Enviar solicitud" }).click();
    // El navegador frena el envío por los campos `required`: no aparece confirmación.
    await expect(page.getByRole("status")).toHaveCount(0);
    await expect(page.getByLabel("Nombre")).toBeFocused();
  });

  test("completa el envío hasta el servidor y confirma", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByLabel("Nombre").fill("Prueba automática");
    await page.getByLabel("Correo electrónico").fill("prueba@example.com");
    await page.getByLabel("Mensaje").fill("Prueba automática del formulario.");
    // Se marca el campo trampa anti-bots: el servidor responde "ok" sin mandar ningún correo real.
    await page.locator('input[name="empresa_web"]').evaluate((el: HTMLInputElement) => {
      el.value = "prueba";
    });
    await page.getByRole("button", { name: "Enviar solicitud" }).click();
    await expect(page.getByRole("status")).toContainText("Recibimos tu mensaje");
    await expect(page.getByLabel("Nombre")).toHaveValue("");
  });
});
