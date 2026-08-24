import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, isValidSessionValue } from "@/lib/portal-auth";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Ingresar — Portal de clientes D&P",
  robots: { index: false, follow: false },
};

export default async function PortalLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (isValidSessionValue(session)) {
    redirect("/portal");
  }

  const { from } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-verde-profundo px-[28px] py-16">
      <div className="w-full max-w-[420px]">
        <div className="mb-8 flex justify-center">
          <div className="inline-block rounded-[2px] bg-fondo px-[14px] py-3">
            <Image
              src="/logo-dyp.png"
              alt="D&P Ingeniería Integral"
              width={87}
              height={62}
              className="h-[50px] w-auto"
              priority
            />
          </div>
        </div>

        <div className="border border-fondo/15 bg-verde-footer p-8">
          <div className="font-mono text-[11px] tracking-[.14em] text-verde-suave uppercase">
            Portal de clientes
          </div>
          <h1 className="mt-3 font-display text-[24px] font-bold text-fondo">
            Ingresar a su cuenta
          </h1>
          <p className="mt-2 mb-7 text-[13.5px] leading-[1.5] text-fondo/60">
            Acceso exclusivo para clientes de D&amp;P Ingeniería Integral.
          </p>
          <LoginForm from={from ?? "/portal"} />
        </div>

        <p className="mt-6 text-center text-[12.5px] text-fondo/50">
          ¿Aún no tiene acceso? Escríbanos después de contratar un servicio a{" "}
          <Link href="/#contactenos" className="underline underline-offset-2">
            través del sitio
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
