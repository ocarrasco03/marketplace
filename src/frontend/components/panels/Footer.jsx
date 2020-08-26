import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from '../../assets/images/logo.png';
import Suscribe from './Suscribe';

function Copyright() {
  return (
    <Typography
      variant='body2'
      color='textPrimary'
      className='copyright'
      align='center'
    >
      {'Copyright © '}
      <Link color='inherit' to='/'>
        HJ Autopartes
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => (
  <div>
    <Suscribe />
    <footer className='footer'>
      <CssBaseline />
      <Container fixed>
        <Grid container justify='center' className='root' spacing={4}>
          <Grid item md={3}>
            <img src={logo} alt='HJ Autopartes' />
            <div className='footer-social'>
              <h4 className='footer-title'>Siguenos:</h4>
              <ul className='social-link clearfix'>
                <li>
                  <IconButton color='primary' aria-label='facebook'>
                    <FacebookIcon />
                  </IconButton>
                </li>
                <li>
                  <IconButton color='primary' aria-label='twitter'>
                    <TwitterIcon />
                  </IconButton>
                </li>
                <li>
                  <IconButton color='primary' aria-label='instagram'>
                    <InstagramIcon />
                  </IconButton>
                </li>
                <li>
                  <IconButton color='primary' aria-label='instagram'>
                    <LinkedInIcon />
                  </IconButton>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className='footer-widget'>
              <h3 className='footer-title'>Quienes Somos</h3>
              <p>
                Nuestra empresa se encuentra conformada por un equipo de
                profesionalesen tecnologías de la información y sistemas
                computacionales, técnicosaltamente capacitados en reparación y
                mantenimiento de computadoras,Contamos con la infraestructura
                más innovadora de equipo de cómputo y elconocimiento necesario
                para cubrir las solicitudes de servicioImplementamos servicios
                de tecnología para su empresa
              </p>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className='footer-widget'>
              <h3 className='footer-title'>Enlaces Rápidos</h3>
              <ul className='footer-links clearfix'>
                <li>
                  <Link to='/'>Inicio</Link>
                </li>
                <li>
                  <Link to='/'>Corporativo</Link>
                </li>
                <li>
                  <Link to='/'>Tips Tecnicos</Link>
                </li>
                <li>
                  <Link to='/'>Politicas</Link>
                </li>
                <li>
                  <Link to='/terminos-y-condiciones'>
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to='/'>Politicas de Garantia</Link>
                </li>
                <li>
                  <Link to='/aviso-de-privacidad'>Aviso de privacidad</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className='footer-widget'>
              <h3 className='footer-title'>Datos de Contacto</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam exercitationem voluptates, nihil expedita enim sit
                voluptas iure tenetur rem laborum possimus minus modi deserunt
                repellendus tempore nemo dolorum. Incidunt, debitis.
              </p>
            </div>
          </Grid>
          <hr width='100%' />
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  </div>
);

export default Footer;
