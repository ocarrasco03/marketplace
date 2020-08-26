import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';

const Title = ({ title }) => (
  <div className='title'>
    <CssBaseline />
    <Container fixed>
      <Typography variant='h5' color='primary'>{title}</Typography>
    </Container>
  </div>
);

export default Title;
