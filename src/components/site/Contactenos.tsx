"use client";

import { useState } from "react";
import { contacto } from "@/lib/site-config";

const INPUT_CLASS =
  "rounded-[2px] border border-input-borde bg-white px-[14px] py-[13px] text-[15px] outline-none focus:border-verde-claro";
const LABEL_CLASS = "font-mono text-[11px] tracking-[.1em] text-texto-suave uppercase";

export function Contactenos() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contactenos" className="scroll-mt-[90px] bg-verde-profundo px-[28px] py-[104px] text-fondo">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-20 w900:grid-cols-[1fr_1.05fr]">
        <div>
          <div className="font-mono text-[12px] tracking-[.14em] text-verde-suave uppercase">
            Contáctenos
          </div>
          <h2 className="mt-4 font-display text-[34px] leading-[1.1] font-extrabold tracking-[-.02em] w900:text-[48px] w900:leading-[1.06]">
            Conversemos sobre su proyecto.
          </h2>
          <p className="mt-5 mb-10 max-w-[46ch] text-[17px] leading-[1.65] text-fondo/70">
            Cuéntenos qué necesita y le respondemos con alcance, tiempos y cotización.
          </p>

          <div className="grid gap-px border border-fondo/16 bg-fondo/16">
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
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="grid content-start gap-[18px] bg-fondo p-10 text-tinta"
        >
          <div className="grid grid-cols-1 gap-[18px] w640:grid-cols-2">
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Nombre</span>
              <input type="text" required placeholder="Nombre y apellido" className={INPUT_CLASS} />
            </label>
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Ciudad</span>
              <input type="text" placeholder="Ciudad" className={INPUT_CLASS} />
            </label>
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Teléfono</span>
              <input type="tel" placeholder="300 000 0000" className={INPUT_CLASS} />
            </label>
            <label className="grid gap-[7px]">
              <span className={LABEL_CLASS}>Correo electrónico</span>
              <input
                type="email"
                required
                placeholder="nombre@empresa.com"
                className={INPUT_CLASS}
              />
            </label>
          </div>

          <label className="grid gap-[7px]">
            <span className={LABEL_CLASS}>Servicio de interés</span>
            <select className={INPUT_CLASS}>
              <option>Ingeniería y Geotecnia</option>
              <option>Sistemas de gestión (SG-SST)</option>
              <option>Suministros y dotación EPP</option>
              <option>Otro / varios</option>
            </select>
          </label>

          <label className="grid gap-[7px]">
            <span className={LABEL_CLASS}>Mensaje</span>
            <textarea
              rows={5}
              placeholder="Descríbanos su necesidad"
              className={`${INPUT_CLASS} resize-y`}
            />
          </label>

          <button
            type="submit"
            className="rounded-[2px] bg-ambar px-[22px] py-4 font-mono text-[13px] font-medium tracking-[.08em] text-verde-profundo uppercase transition-colors hover:bg-ambar-hover"
          >
            {sent ? "Mensaje enviado ✓" : "Enviar"}
          </button>
          <p className="m-0 text-[12.5px] leading-[1.5] text-texto-tenue">
            Al enviar acepta el tratamiento de sus datos conforme a la política de privacidad.
          </p>
        </form>
      </div>
    </section>
  );
}
