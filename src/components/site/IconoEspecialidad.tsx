import type { IconoEspecialidad as Nombre } from "@/lib/servicios";
import { IconCarrito, IconCasco, IconEdificios, IconPersonas } from "./Iconos";

const ICONOS = {
  edificios: IconEdificios,
  casco: IconCasco,
  personas: IconPersonas,
  carrito: IconCarrito,
};

export function IconoEspecialidad({ nombre, className }: { nombre: Nombre; className?: string }) {
  const Icono = ICONOS[nombre];
  return <Icono className={className} />;
}
