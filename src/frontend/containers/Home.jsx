import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Layout from '../components/layouts/Layout';
import Title from '../components/panels/Title';

const Home = () => (
  <Layout>
    <Title title='Términos y Condiciones' />
    <section>
      <CssBaseline />
      <Container fixed>
        <div className='terms'>
          <p className='text-justify'>
            Por favor, tómese unos minutos para revisar estos Términos y
            Condiciones. El uso del sitio web de
            {' '}
            <strong className='text-primary'>HJ Autopartes</strong>
            , como se
            define a continuación, constituye su acuerdo para seguir estos
            Términos y Condiciones y regirse legalmente por ellos. Si no
            encuentra la respuesta que está buscando, póngase en contacto con
            nosotros.
          </p>
          <h4>Inicios de sesión y cookies:</h4>
          <h5 className='subtitle'>Inicios de sesión</h5>
          <p className='text-justify'>
            Puedes iniciar sesión de forma manual o automática. Para iniciar
            sesión de forma manual, ingresa tu nombre de usuario y contraseña y
            haz clic en &quot;Iniciar sesión&quot;. Si seleccionas el inicio
            de sesión automático, nuestro sitio web te reconocerá y te permitirá
            hacer uso de nuestros servicios personalizados sin iniciar sesión.
            Para seleccionar el inicio de sesión automático, ingresa tu nombre
            de usuario y contraseña en la página de inicio de sesión. Después
            selecciona el recuadro &quot;Recordarme&quot; y haz clic en &quot;Iniciar
            sesión&quot;. Debes habilitar la recepción de cookies en tu navegador web
            para poder iniciar sesión de forma automática.
          </p>
        </div>
      </Container>
    </section>
  </Layout>
);

export default Home;
