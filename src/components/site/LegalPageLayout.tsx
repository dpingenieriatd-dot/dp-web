import { PageHero } from "@/components/site/PageHero";
import { SiteShell } from "@/components/site/SiteShell";

export function LegalPageLayout({
  eyebrow,
  titulo,
  actualizado,
  children,
}: {
  eyebrow: string;
  titulo: string;
  actualizado: string;
  children: React.ReactNode;
}) {
  return (
    <SiteShell>
      <PageHero eyebrow={eyebrow} titulo={titulo} migas={[{ href: "/", label: "Inicio" }, { label: titulo }]}>
        <p className="m-0 font-mono text-[13px] text-texto-suave">Última actualización: {actualizado}</p>
      </PageHero>

      <article className="mx-auto max-w-[860px] px-[28px] py-16 text-[15.5px] leading-[1.7] text-texto [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:text-verde-profundo [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-tinta [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_li]:leading-[1.6] [&_a]:text-verde-marca [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-tinta [&_strong]:font-semibold">
        {children}
      </article>
    </SiteShell>
  );
}
