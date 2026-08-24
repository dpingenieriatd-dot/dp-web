"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, verifyCredentials, getSessionToken } from "@/lib/portal-auth";

export type LoginState = { error?: string } | undefined;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const nit = String(formData.get("nit") ?? "");
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const from = String(formData.get("from") ?? "/portal");

  if (!verifyCredentials(nit, email, password)) {
    return { error: "NIT, correo o contraseña incorrectos." };
  }

  const token = getSessionToken();
  if (!token) {
    return { error: "El portal aún no está configurado. Contacte al administrador." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect(from.startsWith("/portal") && from !== "/portal/login" ? from : "/portal");
}
