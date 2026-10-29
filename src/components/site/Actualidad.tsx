import Image from "next/image";
import Link from "next/link";
import { contacto } from "@/lib/site-config";
import { Encabezado } from "./Encabezado";
import { IconFlecha } from "./Iconos";
import { enlaceFlecha } from "./ui";

type Post = {
  categoria: string;
  titulo: string;
  texto: string;
  imagen: string;
  href: string;
};

// Publicaciones que ya estaban en el sitio (Guía 2026, cap. 6.3). Falta la fecha de cada una:
// se agrega cuando D&P la confirme.
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

export function ListaPublicaciones({ maximo }: { maximo?: number }) {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 w640:grid-cols-2 w900:grid-cols-3">
      {POSTS.slice(0, maximo).map((post) => (
        <li key={post.href}>
          <a
            href={post.href}
            target="_blank"
            rel="noopener"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-borde bg-white shadow-[0_6px_24px_rgba(0,83,35,.06)] transition-colors hover:border-verde-claro"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.imagen}
                alt={post.titulo}
                fill
                sizes="(min-width: 900px) 380px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
              <span className="font-mono text-[11.5px] tracking-[.1em] text-verde-marca uppercase">
                {post.categoria}
              </span>
              <h3 className="mt-2.5 mb-2 font-display text-[19px] leading-[1.25] font-bold text-verde-profundo">
                {post.titulo}
              </h3>
              <p className="m-0 flex-1 text-[15px] leading-[1.6] text-texto-medio">{post.texto}</p>
              <span className="mt-5 text-[14.5px] font-semibold text-verde-marca">
                Ver en Instagram ↗
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

// Guía 2026, cap. 3.8: en el inicio, máximo tres contenidos; el histórico va en /actualidad.
export function Actualidad() {
  return (
    <section id="actualidad" className="scroll-mt-[96px] border-t border-borde bg-white px-[28px] py-20 w900:py-24">
      <div className="mx-auto max-w-[1240px]">
        <Encabezado
          eyebrow="Actualidad"
          titulo="Ideas y experiencias que transforman entornos de trabajo."
          texto="Conoce nuestras actividades, recomendaciones y contenidos sobre seguridad, bienestar, talento humano e ingeniería."
          accion={
            <Link href="/actualidad" className={enlaceFlecha}>
              Ver actualidad
              <IconFlecha className="h-[18px] w-[18px]" />
            </Link>
          }
        />
        <div className="mt-12">
          <ListaPublicaciones maximo={3} />
        </div>
      </div>
    </section>
  );
}

export function EnlaceInstagram() {
  return (
    <a href={contacto.instagram} target="_blank" rel="noopener" className={enlaceFlecha}>
      Síguenos en Instagram {contacto.instagramHandle}
      <IconFlecha className="h-[18px] w-[18px]" />
    </a>
  );
}
