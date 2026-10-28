import { eyebrow as eyebrowClass, textoSeccion, tituloSeccion } from "./ui";

type EncabezadoProps = {
  eyebrow: string;
  titulo: React.ReactNode;
  texto?: string;
  centrado?: boolean;
  /** Enlace o botón que acompaña al texto (columna derecha en escritorio). */
  accion?: React.ReactNode;
};

// Encabezado de sección: etiqueta, título y, si hay texto, el texto a la derecha en escritorio,
// como en "Cuatro especialidades, un mismo compromiso" del boceto.
export function Encabezado({ eyebrow, titulo, texto, centrado, accion }: EncabezadoProps) {
  if (centrado) {
    return (
      <div className="mx-auto max-w-[760px] text-center">
        <p className={eyebrowClass}>{eyebrow}</p>
        <h2 className={tituloSeccion}>{titulo}</h2>
        {texto && <p className={`${textoSeccion} mt-5`}>{texto}</p>}
        {accion && <div className="mt-6 flex justify-center">{accion}</div>}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-end gap-6 w900:grid-cols-[1.1fr_1fr] w900:gap-16">
      <div>
        <p className={eyebrowClass}>{eyebrow}</p>
        <h2 className={tituloSeccion}>{titulo}</h2>
      </div>
      {(texto || accion) && (
        <div>
          {texto && <p className={textoSeccion}>{texto}</p>}
          {accion ? (
            <div className="mt-5">{accion}</div>
          ) : (
            <span className="mt-5 block h-[3px] w-12 rounded-full bg-verde-marca" />
          )}
        </div>
      )}
    </div>
  );
}
