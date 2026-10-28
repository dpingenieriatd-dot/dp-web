import Image from "next/image";
import Link from "next/link";
import { IconEngrane, IconEscudo, IconFlecha, IconHoja, IconPersonas } from "./Iconos";
import { btnSecundario, eyebrow } from "./ui";

// Guía 2026, cap. 3.5 (atributos de marca). También se usan en la página Nosotros.
const ATRIBUTOS = [
  { Icono: IconEscudo, texto: "Enfoque integral" },
  { Icono: IconPersonas, texto: "Equipo interdisciplinario" },
  { Icono: IconEngrane, texto: "Soluciones a la medida" },
  { Icono: IconHoja, texto: "Compromiso con la mejora continua" },
];

export function Atributos() {
  return (
    <ul className="mx-auto m-0 grid max-w-[1240px] list-none grid-cols-1 gap-5 px-[28px] py-9 w640:grid-cols-2 w1100:grid-cols-4 w1100:gap-0">
      {ATRIBUTOS.map(({ Icono, texto }, i) => (
        <li
          key={texto}
          className={`flex items-center gap-4 w1100:justify-center w1100:px-4 ${
            i > 0 ? "w1100:border-l w1100:border-borde" : ""
          }`}
        >
          <Icono className="h-10 w-10 flex-none text-verde-brillante" />
          <span className="text-[16px] text-texto-medio">{texto}</span>
        </li>
      ))}
    </ul>
  );
}

// Guía 2026, cap. 3.4.
export function Nosotros() {
  return (
    <section id="nosotros" className="scroll-mt-[96px] bg-white">
      <div className="grid grid-cols-1 w900:grid-cols-2">
        <div className="relative aspect-[16/10] w900:aspect-auto w900:min-h-[460px]">
          <Image
            src="/fotos-2026/nosotros.webp"
            alt="Equipo de D&P en camisa blanca trabajando alrededor de un computador"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-[#eef6e9] px-[28px] py-14 w900:px-16 w900:py-16">
          <div className="max-w-[540px]">
            <p className={eyebrow}>Nosotros</p>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] font-extrabold tracking-[-.02em] text-verde-profundo w900:text-[42px]">
              Ingeniería aplicada al cuidado de las personas.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-texto-medio">
              Somos una empresa colombiana que integra soluciones de ingeniería civil, seguridad y
              salud en el trabajo, gestión humana y suministros empresariales. Unimos conocimiento
              técnico y enfoque humano para contribuir a organizaciones más seguras, productivas y
              sostenibles.
            </p>
            <Link href="/nosotros" className={`${btnSecundario} mt-7`}>
              Conoce más sobre nosotros
              <IconFlecha className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </div>

      <Atributos />
    </section>
  );
}
