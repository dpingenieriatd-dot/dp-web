import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

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
    <div className="max-w-full overflow-x-hidden bg-fondo text-tinta">
      <Header />

      <section className="bg-verde-profundo px-[28px] py-20 text-fondo">
        <div className="mx-auto max-w-[860px]">
          <div className="font-mono text-[12px] tracking-[.14em] text-verde-suave uppercase">
            {eyebrow}
          </div>
          <h1 className="mt-4 font-display text-[36px] leading-[1.1] font-extrabold tracking-[-.02em] w900:text-[48px] w900:leading-[1.06]">
            {titulo}
          </h1>
          <p className="mt-4 font-mono text-[12.5px] text-fondo/60">
            Última actualización: {actualizado}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-[860px] px-[28px] py-16 text-[15.5px] leading-[1.7] text-texto [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:text-tinta [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-tinta [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_li]:leading-[1.6] [&_a]:text-verde-marca [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-tinta [&_strong]:font-semibold">
        {children}
      </article>

      <Footer />
      <WhatsappFloat />
    </div>
  );
}
