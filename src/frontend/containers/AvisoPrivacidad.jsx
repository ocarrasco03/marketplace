import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Layout from '../components/layouts/Layout';
import Title from '../components/panels/Title';

const AvisoPrivacidad = () => (
  <Layout>
    <Title title='Aviso de Privacidad' />
    <section>
      <CssBaseline />
      <Container fixed>
        <div className='notify'>
          <p className='text-justify'>
            Con fundamento en los artículos 15 y 16 de la Ley Federal de
            Protección de Datos Personales en Posesión de Particulares hacemos
            de su conocimiento que HJ Autopartes SA de CV, con domicilio en BLVD LOS ALAMOS #195 COLONIA LOS ALAMOS,
            {' '}
            NOGALES, SONORA 84085, México, es el responsable
            en término de la Ley de referencia de recabar los datos personales
            que le hemos solicitado, del uso que dé a los mismos y de su
            protección.Su información personal será utilizada para las
            siguientes finalidades: Proveerle los servicios y productos que ha
            solicitado; Notificarle sobre nuevos servicios o productos que
            tengan relación con los ya contratados o adquiridos;
            Comunicarlesobre cambios en los mismos; Elaborar estudios y
            programar que son necesarios para determinar hábitos de consumo;
            Realizar evaluaciones peródicas de nuestros productos y servicios
            que brindamos, y en general, para dar cumplimiento a las
            obligaciones que hemos contraído con usted.Para las finalidades
            antes mencionadas, requerimos obtener entre otros sus siguientes
            datos personales.Nombre completo.Estado civil. Sexo.Teléfono fijo
            y/o celular.Correo electrónico.ID de Facebook, Twitter, Linkedin y/o
            similares.Firma autógrafa. Domicilio.RFC y/o CURP.Gustos y
            aficiones.Fecha de nacimiento.Es importante informarle que usted
            tiene derecho al acceso, rectificación y cancelación de sus datos
            personales, a oponerse al tratamiento de los mismos o a revocar el
            consentimiento que para dicho fin nos haya otorgado.Para ello, es
            necesario que envíe tal solicitud en los términos que marca la Ley
            antes aludida en su Art. 29 a FERNANDO CORDERO GOMEZ, responsable de
            nuestro Departamento de Protección de datos personales, ubicado en
            LIBERTAD No. 39 int. 18, Colonia Mexicaltzingo, Guadalajara,
            Jalisco. C.P. 44180, México, se comunique al teléfono (33) 3837 56
            10, ext. 1204, o vía correo electrónico a fcordero@mayasa.com.mx, el
            cual solicitamos confirme vía telefónica para garantizar su correcta
            recepción.Importante: Cualquier modificación a este Aviso de
            Privacidad podrá consultarla en www.orma.com.mx
          </p>
          <h4>Inicios de sesión y cookies:</h4>
          <h5 className='subtitle'>Inicios de sesión</h5>
          <p className='text-justify'>
            Puedes iniciar sesión de forma manual o automática. Para iniciar
            sesión de forma manual, ingresa tu nombre de usuario y contraseña y
            haz clic en &quot;Iniciar sesión&quot;. Si seleccionas el inicio de
            sesión automático, nuestro sitio web te reconocerá y te permitirá
            hacer uso de nuestros servicios personalizados sin iniciar sesión.
            Para seleccionar el inicio de sesión automático, ingresa tu nombre
            de usuario y contraseña en la página de inicio de sesión. Después
            selecciona el recuadro &quot;Recordarme&quot; y haz clic en
            &quot;Iniciar sesión&quot;. Debes habilitar la recepción de cookies
            en tu navegador web para poder iniciar sesión de forma automática.
          </p>
        </div>
      </Container>
    </section>
  </Layout>
);

export default AvisoPrivacidad;
