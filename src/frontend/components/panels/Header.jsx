import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <header className='header'>
    <CssBaseline />
    <Container fixed>
      <img src={logo} alt='HJ Autopartes' />
    </Container>
    <nav>
      <CssBaseline />
      <Container fixed>
        <div className='ecatalog-menu'>
          <Typography>Catalogo electronico</Typography>
        </div>
      </Container>
    </nav>
  </header>
);

export default Header;
