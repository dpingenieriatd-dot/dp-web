"use client";

import { useActionState } from "react";
import { login } from "./actions";

const INPUT_CLASS =
  "rounded-[2px] border border-fondo/20 bg-white/[0.06] px-[14px] py-[13px] text-[15px] text-fondo outline-none placeholder:text-fondo/35 focus:border-verde-claro";
const LABEL_CLASS = "font-mono text-[11px] tracking-[.1em] uppercase text-fondo/55";

export function LoginForm({ from }: { from: string }) {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form action={formAction} className="grid gap-[18px]">
      <input type="hidden" name="from" value={from} />

      <label className="grid gap-[7px]">
        <span className={LABEL_CLASS}>NIT</span>
        <input name="nit" required placeholder="900.123.456-7" className={INPUT_CLASS} />
      </label>

      <label className="grid gap-[7px]">
        <span className={LABEL_CLASS}>Correo electrónico</span>
        <input
          name="email"
          type="email"
          required
          placeholder="nombre@empresa.com"
          className={INPUT_CLASS}
        />
      </label>

      <label className="grid gap-[7px]">
        <span className={LABEL_CLASS}>Contraseña</span>
        <input name="password" type="password" required className={INPUT_CLASS} />
      </label>

      {state?.error && <p className="m-0 text-[13px] text-[#F0A28C]">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-[2px] bg-ambar px-5 py-4 font-mono text-[13px] font-medium tracking-[.08em] text-verde-profundo uppercase transition-colors hover:bg-ambar-hover disabled:opacity-60"
      >
        {pending ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}
