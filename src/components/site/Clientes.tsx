import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/client-logos";

export function Clientes() {
  return (
    <section className="border-t border-borde bg-white px-[28px] py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center font-mono text-[12px] tracking-[.14em] text-teal uppercase">
          Nuestros clientes
        </div>
        <div className="mt-9 grid grid-cols-3 gap-px border border-borde-2 bg-borde-2 w640:grid-cols-4 w900:grid-cols-7">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="flex aspect-video items-center justify-center bg-white p-4"
            >
              <Image
                src={logo.src}
                alt={logo.nombre}
                width={160}
                height={90}
                className="h-full w-full object-contain grayscale transition-[filter] duration-200 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
