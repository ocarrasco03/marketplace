import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
  Button,
  InputBase,
} from '@material-ui/core';

const Suscribe = () => (
  <div className='suscribe'>
    <CssBaseline />
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant='h5' className='suscribe-title'>
            Suscribete y recibe nuestra promociones
          </Typography>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          {/* <Input variant='outlined' placeholder='Escribe tu correo' /> */}
          <InputBase
            placeholder='Escribe tu correo'
            inputProps={{ 'aria-label': 'naked' }}
          />
          <Button
            variant='contained'
            color='secondary'
            className='btn-suscribe'
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Suscribe;
