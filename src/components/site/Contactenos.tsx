"use client";

import { useActionState, useEffect, useRef, useState, startTransition } from "react";
import { contacto } from "@/lib/site-config";
import { ESPECIALIDADES, especialidadPorSlug } from "@/lib/servicios";
import { enviarSolicitud } from "./contacto-action";

const INPUT_CLASS =
  "rounded-lg border border-input-borde bg-white px-[14px] py-[13px] text-[15px] outline-none focus:border-verde-marca focus:ring-2 focus:ring-verde-claro/30";
const LABEL_CLASS = "font-mono text-[11px] tracking-[.1em] text-texto-suave uppercase";

type ContactenosProps = {
  /** Slug de la especialidad que llega preseleccionada (p. ej. desde una página de servicio). */
  servicioInicial?: string;
  /** En /contacto el título es el h1 de la página. */
  comoPagina?: boolean;
};

export function Contactenos({ servicioInicial, comoPagina = false }: ContactenosProps) {
  const Titulo = comoPagina ? "h1" : "h2";
  const seleccion =
    ESPECIALIDADES.find((e) => e.slug === servicioInicial)?.opcionFormulario ??
    ESPECIALIDADES[0].opcionFormulario;

  const [estado, formAction, pending] = useActionState(enviarSolicitud, undefined);
  const sent = estado?.ok === true;
  const formRef = useRef<HTMLFormElement>(null);
  const [servicio, setServicio] = useState(seleccion);
  // Tienda D&P, fase 1 (Guía 2026, cap. 5): producto, cantidad y personalización.
  const esTienda = servicio === especialidadPorSlug("tienda")?.opcionFormulario;

  // Se envía por onSubmit (no por el prop `action`) para que React NO limpie el
  // formulario automáticamente: en caso de error se conservan los datos que
  // escribió la persona. La limpieza solo ocurre abajo cuando el envío fue OK.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => formAction(fd));
  }

  useEffect(() => {
    if (estado?.ok) formRef.current?.reset();
  }, [estado]);

  return (
    <section id="contactenos" className="scroll-mt-[96px] bg-verde-profundo px-[28px] py-20 text-fondo w900:py-[104px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-20 w900:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="m-0 font-mono text-[12.5px] font-medium tracking-[.12em] text-verde-suave uppercase">
            Contáctanos
          </p>
          <Titulo className="mt-4 font-display text-[34px] leading-[1.1] font-extrabold tracking-[-.02em] w900:text-[46px] w900:leading-[1.06]">
            Conversemos sobre tu proyecto.
          </Titulo>
          <p className="mt-5 mb-8 max-w-[46ch] text-[17px] leading-[1.65] text-fondo/80">
            Cuéntanos qué necesita tu organización. Te orientaremos sobre el servicio más adecuado y
            los siguientes pasos para recibir una propuesta.
          </p>
          <a
            href={contacto.whatsappHref}
            target="_blank"
            rel="noopener"
            className="mb-10 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[16px] font-semibold text-verde-profundo transition-colors hover:bg-fondo-verde"
          >
            Escribir por WhatsApp
          </a>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-fondo/16 bg-fondo/16">
            <div className="bg-verde-profundo px-[22px] py-5">
              <div className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-verde-suave uppercase">
                Teléfono / WhatsApp
              </div>
              <div className="text-[17px] text-fondo">
                {contacto.telefono}{" "}
                {contacto.telefonoConfirmar && (
                  <span className="text-[12px] text-fondo/50">(confirmar)</span>
                )}
              </div>
            </div>
            <div className="bg-verde-profundo px-[22px] py-5">
              <div className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-verde-suave uppercase">
                Correo
              </div>
              <div className="text-[17px] text-fondo">
                {contacto.correo}{" "}
                {contacto.correoConfirmar && (
                  <span className="text-[12px] text-fondo/50">(confirmar)</span>
                )}
              </div>
            </div>
            <div className="bg-verde-profundo px-[22px] py-5">
              <div className="mb-1.5 font-mono text-[11px] tracking-[.12em] text-verde-suave uppercase">
                Horarios de atención
              </div>
              <div className="text-[16px] leading-[1.6] text-fondo">
                {contacto.horarios.semana}
                <br />
                {contacto.horarios.sabado}
              </div>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="grid content-start gap-[18px] rounded-2xl bg-fondo p-6 text-tinta shadow-xl w640:p-10"
        >
          {/* Honeypot anti-spam: oculto para personas, tentador para bots. */}
          <input
            type="text"
            name="empresa_web"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid grid-cols-1 gap-[18px] w640:grid-cols-2">
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Nombre</span>
              <input
                type="text"
                name="nombre"
                required
                placeholder="Nombre y apellido"
                className={INPUT_CLASS}
              />
            </label>
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Ciudad</span>
              <input type="text" name="ciudad" placeholder="Ciudad" className={INPUT_CLASS} />
            </label>
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Teléfono</span>
              <input type="tel" name="telefono" placeholder="300 000 0000" className={INPUT_CLASS} />
            </label>
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Correo electrónico</span>
              <input
                type="email"
                name="correo"
                required
                placeholder="nombre@empresa.com"
                className={INPUT_CLASS}
              />
            </label>
          </div>

          <label className="grid gap-[7px]">
            <span className={LABEL_CLASS}>Servicio de interés</span>
            <select
              name="servicio"
              className={INPUT_CLASS}
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
            >
              {ESPECIALIDADES.map((e) => (
                <option key={e.slug}>{e.opcionFormulario}</option>
              ))}
            </select>
          </label>

          {esTienda && (
            <div className="grid grid-cols-1 gap-[18px] rounded-xl border border-verde-claro/40 bg-fondo-verde p-4 w640:grid-cols-2">
              <label className="grid gap-[7px] w640:col-span-2">
                <span className={LABEL_CLASS}>Producto o categoría de interés</span>
                <input
                  type="text"
                  name="producto"
                  placeholder="Ej.: termos con logo, dotación, guantes"
                  className={INPUT_CLASS}
                />
              </label>
              <label className="grid gap-[7px]">
                <span className={LABEL_CLASS}>Cantidad aproximada</span>
                <input type="number" name="cantidad" min={1} placeholder="100" className={INPUT_CLASS} />
              </label>
              <label className="grid gap-[7px]">
                <span className={LABEL_CLASS}>¿Con personalización?</span>
                <select name="personalizacion" className={INPUT_CLASS} defaultValue="Por definir">
                  <option>Sí, con logo o marca</option>
                  <option>No</option>
                  <option>Por definir</option>
                </select>
              </label>
            </div>
          )}

          <label className="grid gap-[7px]">
            <span className={LABEL_CLASS}>Mensaje</span>
            <textarea
              name="mensaje"
              rows={5}
              required
              placeholder="Cuéntanos tu necesidad o tu reto"
              className={`${INPUT_CLASS} resize-y`}
            />
          </label>

          {estado?.error && (
            <p className="m-0 text-[13px] leading-[1.5] text-[#b3261e]">{estado.error}</p>
          )}
          {sent && (
            <p className="m-0 rounded-lg bg-verde-marca/10 px-3 py-2.5 text-[13px] leading-[1.5] text-verde-marca">
              ✓ Recibimos tu mensaje. Te responderemos al correo que nos indicaste.
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-verde-marca px-[22px] py-4 text-[16px] font-semibold text-white transition-colors hover:bg-verde-marca-hover disabled:opacity-60"
          >
            {pending ? "Enviando…" : "Enviar solicitud"}
          </button>
          <p className="m-0 text-[12.5px] leading-[1.5] text-texto-tenue">
            Al enviar aceptas el tratamiento de tus datos conforme a nuestra{" "}
            <a href="/politica-de-privacidad" className="underline underline-offset-2">
              política de privacidad
            </a>{" "}
            y{" "}
            <a href="/tratamiento-de-datos" className="underline underline-offset-2">
              política de tratamiento de datos
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
