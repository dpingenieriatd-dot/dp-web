import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/LegalPageLayout";
import { contacto } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad — D&P Ingeniería Integral",
  description:
    "Cómo D&P Ingeniería Integral recopila, usa y protege la información de quienes visitan este sitio y utilizan el portal de clientes.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      titulo="Política de privacidad"
      actualizado="22 de agosto de 2026"
    >
      <p>
        En D&amp;P Ingeniería Integral (&ldquo;D&amp;P&rdquo;, &ldquo;nosotros&rdquo;) respetamos su
        privacidad y nos comprometemos a proteger la información personal que usted nos
        proporciona al visitar este sitio web (dpingenieriaintegral.com) o al utilizar el portal
        de clientes. Esta política explica qué información recopilamos, cómo la usamos y qué
        opciones tiene al respecto.
      </p>
      <p>
        Para conocer en detalle el tratamiento que damos a los datos personales conforme a la
        legislación colombiana, consulte también nuestra{" "}
        <a href="/tratamiento-de-datos">Política de Tratamiento de Datos Personales</a>.
      </p>

      <h2>1. Responsable</h2>
      <p>
        El responsable del tratamiento de la información recolectada a través de este sitio es{" "}
        <strong>D&amp;P Ingeniería Integral</strong>, con domicilio en {contacto.ciudad}
        {contacto.ciudadConfirmar && " (confirmar)"}, Colombia. Puede contactarnos en{" "}
        <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a> o al {contacto.telefono}.
      </p>

      <h2>2. Información que recopilamos</h2>
      <p>Recopilamos información en los siguientes momentos:</p>
      <ul>
        <li>
          <strong>Formulario de contacto:</strong> nombre, ciudad, teléfono, correo electrónico,
          servicio de interés y el mensaje que usted redacta.
        </li>
        <li>
          <strong>Portal de clientes:</strong> datos de la empresa (razón social, NIT) y de las
          personas de contacto autorizadas, así como la información de proyectos, documentos,
          cotizaciones, agenda y facturación asociada a la relación comercial. El portal
          publicado en este sitio funciona hoy con datos de demostración; cuando entre en
          operación con clientes reales, esta sección se actualizará con el detalle exacto de los
          datos tratados.
        </li>
        <li>
          <strong>Comunicaciones directas:</strong> la información que usted nos comparta por
          WhatsApp, correo electrónico o teléfono al contactarnos.
        </li>
      </ul>
      <p>
        No recopilamos datos sensibles (salud, datos biométricos, origen racial, opiniones
        políticas o religiosas, entre otros) a través de este sitio, salvo que usted los incluya
        voluntariamente en el campo de mensaje del formulario de contacto.
      </p>

      <h2>3. Cómo usamos la información</h2>
      <ul>
        <li>Responder sus solicitudes de cotización, asesoría o información.</li>
        <li>Gestionar la ejecución de los servicios contratados y la relación comercial.</li>
        <li>
          Administrar el acceso y funcionamiento del portal de clientes (proyectos, documentos,
          cotizaciones, facturación, agenda y mensajería).
        </li>
        <li>Cumplir obligaciones legales, contables y tributarias.</li>
        <li>Mejorar este sitio y los servicios que ofrecemos.</li>
      </ul>

      <h2>4. Con quién compartimos la información</h2>
      <p>
        No vendemos ni alquilamos su información personal. Podemos compartirla con:
      </p>
      <ul>
        <li>
          Proveedores que nos prestan servicios técnicos para operar este sitio y el portal
          (por ejemplo, alojamiento web y correo electrónico), quienes están obligados a proteger
          esa información y usarla únicamente para prestarnos el servicio contratado.
        </li>
        <li>
          Autoridades públicas, cuando exista una obligación legal o un requerimiento judicial o
          administrativo válido.
        </li>
      </ul>

      <h2>5. Cookies y tecnologías similares</h2>
      <p>
        Este sitio, en su versión actual, no utiliza cookies de analítica, publicidad ni
        seguimiento de terceros. Si en el futuro incorporamos herramientas que utilicen cookies
        (por ejemplo, analítica web), actualizaremos esta política e informaremos las opciones
        disponibles para gestionarlas.
      </p>

      <h2>6. Seguridad de la información</h2>
      <p>
        Adoptamos medidas técnicas y organizativas razonables para proteger la información que
        recopilamos contra pérdida, uso indebido, acceso no autorizado, alteración o divulgación.
        No obstante, ningún sistema de transmisión o almacenamiento electrónico es completamente
        infalible, por lo que no podemos garantizar seguridad absoluta.
      </p>

      <h2>7. Sus derechos</h2>
      <p>
        Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar y
        suprimir su información, así como a revocar la autorización otorgada para su tratamiento.
        El detalle de estos derechos y el procedimiento para ejercerlos está descrito en nuestra{" "}
        <a href="/tratamiento-de-datos">Política de Tratamiento de Datos Personales</a>.
      </p>

      <h2>8. Enlaces a otros sitios</h2>
      <p>
        Este sitio incluye enlaces a redes sociales (Instagram, Facebook) y a la aplicación
        interna de D&amp;P. Estos sitios de terceros tienen sus propias políticas de privacidad,
        que le recomendamos revisar; no somos responsables por sus prácticas.
      </p>

      <h2>9. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente para reflejar cambios en nuestras
        prácticas o por razones legales. Publicaremos cualquier cambio en esta misma página junto
        con la fecha de la última actualización.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Si tiene preguntas sobre esta política o sobre el tratamiento de su información, escríbanos
        a <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a>.
      </p>
    </LegalPageLayout>
  );
}
