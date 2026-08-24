import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { contacto } from "@/lib/site-config";

type Post = {
  categoria: string;
  titulo: string;
  texto: string;
  imagen?: string;
  href?: string;
};

const POSTS: Post[] = [
  {
    categoria: "Equipo",
    titulo: "Un equipo comprometido con la seguridad",
    texto: "D&P Ingeniería Integral S.A.S. — un equipo comprometido con la seguridad y salud de los trabajadores.",
    imagen: "/actualidad/equipo-seguridad.jpg",
    href: "https://www.instagram.com/p/DGKIp9-MA1u/",
  },
  {
    categoria: "Bienestar",
    titulo: "Actividades que conectan cuerpo, mente y emoción",
    texto: "Las actividades vivenciales conectan cuerpo, mente y emoción. No solo se piensa el cambio, se vive.",
    imagen: "/actualidad/actividad-vivencial.jpg",
    href: "https://www.instagram.com/p/DIuKP_jPD9E/",
  },
  {
    categoria: "SG-SST",
    titulo: "8 tips para reducir el estrés laboral",
    texto: "Te regalamos algunos tips que puedes implementar para disminuir el estrés laboral.",
    imagen: "/actualidad/tips-estres-laboral.jpg",
    href: "https://www.instagram.com/p/CmJzyveuOOA/",
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
          {POSTS.map((post, i) => {
            const card = (
              <>
                <ImagePlaceholder
                  label="portada del post"
                  src={post.imagen}
                  alt={post.titulo}
                  height={190}
                  className="border-0"
                />
                <div className="px-[22px] pt-[22px] pb-[26px]">
                  <div className="font-mono text-[11px] tracking-[.1em] text-verde-claro uppercase">
                    {post.categoria}
                  </div>
                  <h3 className="mt-2.5 mb-2 font-display text-[19px] leading-[1.25] font-bold">
                    {post.titulo}
                  </h3>
                  <p className="m-0 text-[14.5px] leading-[1.55] text-texto-suave">{post.texto}</p>
                </div>
              </>
            );

            if (post.href) {
              return (
                <a
                  key={i}
                  href={post.href}
                  target="_blank"
                  rel="noopener"
                  className="block border border-borde bg-white transition-colors hover:border-verde-claro"
                >
                  {card}
                </a>
              );
            }

            return (
              <article key={i} className="border border-borde bg-white">
                {card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
