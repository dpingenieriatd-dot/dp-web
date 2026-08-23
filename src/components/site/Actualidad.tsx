import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { contacto } from "@/lib/site-config";

const POSTS = [
  {
    categoria: "Geotecnia",
    titulo: "Título de la entrada de actualidad",
    texto: "Espacio para noticias, casos de obra o novedades normativas. Reemplazar con contenido real.",
  },
  {
    categoria: "SG-SST",
    titulo: "Título de la entrada de actualidad",
    texto: "Espacio para noticias, casos de obra o novedades normativas. Reemplazar con contenido real.",
  },
  {
    categoria: "Dotación",
    titulo: "Título de la entrada de actualidad",
    texto: "Espacio para noticias, casos de obra o novedades normativas. Reemplazar con contenido real.",
  },
];

export function Actualidad() {
  return (
    <section id="actualidad" className="scroll-mt-[90px] border-t border-borde bg-fondo px-[28px] py-[100px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-10">
          <div>
            <div className="font-mono text-[12px] tracking-[.14em] text-teal uppercase">
              Actualidad
            </div>
            <h2 className="mt-4 font-display text-[34px] leading-[1.1] font-extrabold tracking-[-.02em] w900:text-[48px] w900:leading-[1.06]">
              Lo que pasa en obra y en capacitación.
            </h2>
          </div>
          <a
            href={contacto.instagram}
            target="_blank"
            rel="noopener"
            className="border-b border-verde-claro pb-1 font-mono text-[12.5px] tracking-[.08em] uppercase"
          >
            {contacto.instagramHandle} →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 w640:grid-cols-2 w900:grid-cols-3">
          {POSTS.map((post, i) => (
            <article key={i} className="border border-borde bg-white">
              <ImagePlaceholder label="portada del post" height={190} className="border-0" />
              <div className="px-[22px] pt-[22px] pb-[26px]">
                <div className="font-mono text-[11px] tracking-[.1em] text-verde-claro uppercase">
                  {post.categoria}
                </div>
                <h3 className="mt-2.5 mb-2 font-display text-[19px] leading-[1.25] font-bold">
                  {post.titulo}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-texto-suave">{post.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
