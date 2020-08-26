import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardContent } from '@material-ui/core';
import logo from '../assets/images/logo.png';
import '../assets/styles/app.scss';

function Copyright() {
  return (
    <Typography variant='body2' color='secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://hjautopartes.com.mx/'>
        HJ Autopartes
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    minWidth: 275,
    backgroundColor: '#f3f3f3',
    borderRadius: '15px',
  },
  main: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary,
    flex: 1,
    justifyContent: 'center',
    border: '1px',
  },
  actions: {
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Container component='main' className={classes.main} maxWidth='xs'>
        <CssBaseline />
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.paper}>
              <img src={logo} alt='HJ Autopartes' />
              <Typography component='h1' variant='h5'>
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
                <div className={classes.actions}>
                  <Button variant='outlined'>Crear Cuenta</Button>
                  <Button variant='contained' color='primary'>
                    Acceder
                  </Button>
                </div>

                <Grid container>
                  <Grid item>
                    <Link href='/forgot' variant='body2' color='secondary'>
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
