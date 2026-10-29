"use client";

import Image from "next/image";
import Link from "next/link";
import { contacto } from "@/lib/site-config";
import { btnPrimario, btnSecundario, eyebrow } from "@/components/site/ui";

// Error inesperado en cualquier página. Es un componente de cliente, así que no repite el menú
// completo: muestra la marca, la opción de reintentar y los datos de contacto.
export default function ErrorPagina({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <main className="flex min-h-svh items-center bg-[linear-gradient(100deg,#eef6e9_0%,#f6faf3_45%,#ffffff_75%)] px-[28px] py-16 text-tinta">
      <div className="mx-auto w-full max-w-[640px]">
        <Link href="/" className="inline-flex">
          <Image src="/logo-dyp.png" alt="D&P Ingeniería Integral — ir al inicio" width={113} height={80} />
        </Link>
        <p className={`${eyebrow} mt-10`}>Algo salió mal</p>
        <h1 className="mt-4 font-display text-[36px] leading-[1.08] font-extrabold tracking-[-.025em] text-verde-profundo w640:text-[44px]">
          No pudimos cargar esta página.
        </h1>
        <p className="mt-6 text-[17px] leading-[1.7] text-texto-medio">
          Fue un error de nuestro lado. Intenta de nuevo en unos segundos; si continúa, escríbenos a{" "}
          <a href={`mailto:${contacto.correo}`} className="text-verde-marca underline underline-offset-2">
            {contacto.correo}
          </a>{" "}
          o por WhatsApp al {contacto.telefono}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <button type="button" onClick={() => retry()} className={btnPrimario}>
            Intentar de nuevo
          </button>
          <Link href="/" className={btnSecundario}>
            Ir al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
