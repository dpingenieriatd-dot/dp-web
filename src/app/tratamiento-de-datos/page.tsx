import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/LegalPageLayout";
import { contacto } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tratamiento de datos personales — D&P Ingeniería Integral",
  description:
    "Política de Tratamiento de Datos Personales de D&P Ingeniería Integral, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.",
};

export default function TratamientoDeDatosPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal · Habeas Data"
      titulo="Política de Tratamiento de Datos Personales"
      actualizado="22 de agosto de 2026"
    >
      <p>
        Esta política regula el tratamiento de datos personales que D&amp;P Ingeniería Integral
        realiza en desarrollo de su actividad, en cumplimiento de la Ley Estatutaria 1581 de 2012,
        el Decreto 1377 de 2013 y las demás normas que los reglamenten, modifiquen o sustituyan.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Razón social:</strong> D&amp;P Ingeniería Integral{" "}
          <em className="not-italic text-texto-tenue">(confirmar razón social y NIT exactos)</em>
        </li>
        <li>
          <strong>Domicilio:</strong> {contacto.ciudad}
          {contacto.ciudadConfirmar && " (confirmar)"}, Colombia
        </li>
        <li>
          <strong>Correo electrónico:</strong> <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
        </li>
        <li>
          <strong>Teléfono:</strong> {contacto.telefono}
        </li>
      </ul>

      <h2>2. Definiciones</h2>
      <ul>
        <li>
          <strong>Dato personal:</strong> cualquier información vinculada o que pueda asociarse a
          una o varias personas naturales determinadas o determinables.
        </li>
        <li>
          <strong>Titular:</strong> la persona natural cuyos datos personales son objeto de
          tratamiento.
        </li>
        <li>
          <strong>Tratamiento:</strong> cualquier operación sobre datos personales, tales como
          recolección, almacenamiento, uso, circulación o supresión.
        </li>
        <li>
          <strong>Responsable del tratamiento:</strong> quien decide sobre la base de datos y/o el
          tratamiento de los datos, en este caso, D&amp;P Ingeniería Integral.
        </li>
        <li>
          <strong>Encargado del tratamiento:</strong> quien realiza el tratamiento de datos
          personales por cuenta del responsable (por ejemplo, proveedores de hosting o correo).
        </li>
        <li>
          <strong>Autorización:</strong> consentimiento previo, expreso e informado del titular
          para llevar a cabo el tratamiento de sus datos personales.
        </li>
      </ul>

      <h2>3. Datos que se recolectan</h2>
      <p>Según el canal de contacto, podemos recolectar:</p>
      <ul>
        <li>Datos de identificación y contacto: nombre, ciudad, teléfono y correo electrónico.</li>
        <li>
          Datos de la empresa que representa: razón social, NIT y las personas autorizadas para
          interactuar con nosotros.
        </li>
        <li>
          Información relacionada con los servicios contratados o solicitados: proyectos,
          cotizaciones, documentos técnicos, agenda de visitas o capacitaciones, y facturación.
        </li>
        <li>El contenido de los mensajes que usted nos envía a través del formulario de contacto, correo o WhatsApp.</li>
      </ul>
      <p>
        No solicitamos ni tratamos datos sensibles de manera intencional a través de este sitio.
      </p>

      <h2>4. Finalidades del tratamiento</h2>
      <ul>
        <li>Atender solicitudes de información, cotización y contacto.</li>
        <li>Ejecutar los contratos y servicios de ingeniería civil, SG-SST y dotación EPP acordados.</li>
        <li>
          Administrar el portal de clientes: proyectos, indicadores, documentos, cotizaciones,
          agenda, facturación y mensajería con el equipo asignado.
        </li>
        <li>Cumplir obligaciones legales, contables, tributarias y de facturación electrónica.</li>
        <li>Enviar comunicaciones relacionadas con los servicios contratados o solicitados.</li>
        <li>Fines estadísticos internos y mejora de nuestros servicios.</li>
      </ul>

      <h2>5. Derechos del titular</h2>
      <p>Como titular de datos personales, usted tiene derecho a:</p>
      <ul>
        <li>Conocer, actualizar y rectificar sus datos personales.</li>
        <li>
          Solicitar prueba de la autorización otorgada para el tratamiento de sus datos, salvo
          cuando expresamente se exceptúe como requisito para el tratamiento.
        </li>
        <li>Ser informado sobre el uso que se ha dado a sus datos personales, previa solicitud.</li>
        <li>
          Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por
          infracciones a la normativa de protección de datos.
        </li>
        <li>Revocar la autorización y/o solicitar la supresión de sus datos cuando no exista un deber legal o contractual que lo impida.</li>
        <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
      </ul>

      <h2>6. Deberes del responsable</h2>
      <p>D&amp;P Ingeniería Integral se compromete a:</p>
      <ul>
        <li>Garantizar el uso adecuado y seguro de los datos personales recolectados.</li>
        <li>Solicitar y conservar, cuando corresponda, la autorización del titular.</li>
        <li>Atender consultas y reclamos dentro de los plazos establecidos por la ley.</li>
        <li>
          Actualizar la información cuando el titular lo solicite y rectificar los datos
          inexactos.
        </li>
        <li>Adoptar medidas de seguridad razonables para evitar el acceso no autorizado a los datos.</li>
      </ul>

      <h2>7. Cómo ejercer sus derechos</h2>
      <p>
        Para consultar, actualizar, rectificar, suprimir sus datos o revocar la autorización
        otorgada, envíe su solicitud a{" "}
        <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a> indicando su nombre completo,
        el tipo de solicitud y la información que le permita identificarlo. También puede
        comunicarse al {contacto.telefono}.
      </p>
      <ul>
        <li>
          <strong>Consultas:</strong> se atenderán en un término máximo de diez (10) días hábiles
          contados a partir de la fecha de recibo. Cuando no sea posible atender la consulta
          dentro de dicho plazo, se informará al interesado antes del vencimiento, expresando los
          motivos de la demora y señalando la fecha en que se atenderá, la cual no podrá superar
          los cinco (5) días hábiles siguientes al vencimiento del primer plazo.
        </li>
        <li>
          <strong>Reclamos:</strong> se resolverán en un término máximo de quince (15) días
          hábiles contados a partir del día siguiente a la fecha de recibo. Cuando no sea posible
          atender el reclamo dentro de dicho término, se informará al interesado los motivos de la
          demora y la fecha en que se atenderá, la cual no podrá superar los ocho (8) días hábiles
          siguientes al vencimiento del primer plazo.
        </li>
      </ul>

      <h2>8. Autorización del titular</h2>
      <p>
        Al diligenciar el formulario de contacto de este sitio, o al vincularse como cliente y
        proporcionar sus datos para acceder al portal de clientes, usted otorga su autorización
        expresa e informada para que D&amp;P Ingeniería Integral trate sus datos personales de
        acuerdo con esta política.
      </p>

      <h2>9. Transferencia y transmisión de datos</h2>
      <p>
        Los datos personales que recolectamos se almacenan y procesan en Colombia, salvo cuando
        utilicemos proveedores de servicios tecnológicos (por ejemplo, alojamiento web o correo
        electrónico) que operen desde otros países. En dichos casos, exigimos a estos proveedores
        garantías adecuadas de protección de la información, en los términos que exige la ley.
      </p>

      <h2>10. Vigencia</h2>
      <p>
        Esta política rige a partir de su publicación y estará vigente mientras se mantenga la
        finalidad del tratamiento de los datos personales. Las bases de datos administradas por
        D&amp;P Ingeniería Integral se conservarán durante el tiempo necesario para cumplir las
        finalidades descritas y las obligaciones legales, contables y tributarias aplicables.
      </p>
    </LegalPageLayout>
  );
}
