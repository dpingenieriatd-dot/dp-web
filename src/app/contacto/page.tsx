import type { Metadata } from "next";
import { metadatosPagina } from "@/lib/seo";
import { Contactenos } from "@/components/site/Contactenos";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = metadatosPagina({
  titulo: "Contacto y cotizaciones",
  descripcion:
    "Cuéntanos qué necesita tu organización. Escríbenos por el formulario, por WhatsApp al +57 310 772 0548 o a proyectos@dpingenieriaintegral.com.",
  ruta: "/contacto",
});

// ?servicio=<slug> llega desde los botones de cada especialidad y deja el selector ya elegido.
export default async function ContactoPage(props: PageProps<"/contacto">) {
  const { servicio } = await props.searchParams;
  return (
    <SiteShell>
      <Contactenos key={String(servicio)} comoPagina servicioInicial={typeof servicio === "string" ? servicio : undefined} />
    </SiteShell>
  );
}
