import type { Metadata } from "next";
import { Contactenos } from "@/components/site/Contactenos";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué necesita tu organización. Escríbenos por el formulario, WhatsApp +57 310 772 0548 o proyectos@dpingenieriaintegral.com.",
  alternates: { canonical: "/contacto" },
};

// ?servicio=<slug> llega desde los botones de cada especialidad y deja el selector ya elegido.
export default async function ContactoPage(props: PageProps<"/contacto">) {
  const { servicio } = await props.searchParams;
  return (
    <SiteShell>
      <Contactenos key={String(servicio)} comoPagina servicioInicial={typeof servicio === "string" ? servicio : undefined} />
    </SiteShell>
  );
}
