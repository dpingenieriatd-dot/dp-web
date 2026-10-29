import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";
import { btnPrimario, btnSecundario, enlaceFlecha } from "@/components/site/ui";
import { ESPECIALIDADES } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

// 404 de todo el sitio: misma marca y salidas claras hacia lo que la gente suele buscar.
export default function NoEncontrada() {
  return (
    <SiteShell>
      <PageHero eyebrow="Error 404" titulo="No encontramos esta página.">
        <p>
          Es posible que la dirección haya cambiado o que el enlace esté incompleto. Desde aquí
          puedes volver al inicio o ir directo a nuestros servicios.
        </p>
        <div className="flex flex-wrap gap-3.5 pt-2">
          <Link href="/" className={btnPrimario}>
            Ir al inicio
          </Link>
          <Link href="/contacto" className={btnSecundario}>
            Contactar a D&amp;P
          </Link>
        </div>
      </PageHero>

      <section className="bg-white px-[28px] py-14">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="m-0 font-display text-[22px] font-bold text-verde-profundo">
            Quizás buscabas
          </h2>
          <ul className="mt-6 grid list-none grid-cols-1 gap-4 p-0 w640:grid-cols-2">
            {ESPECIALIDADES.map((e) => (
              <li key={e.slug}>
                <Link href={e.href} className={enlaceFlecha}>
                  {e.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
