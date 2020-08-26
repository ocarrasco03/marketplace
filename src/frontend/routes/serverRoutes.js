import Home from '../containers/Home';
import AvisoPrivacidad from '../containers/AvisoPrivacidad';
import Terms from '../containers/Terms';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  // {
  //   path: '/signin',
  //   exact: true,
  //   component: SignIn,
  // },
  // {
  //   path: '/signup',
  //   exact: true,
  //   component: SignUp,
  // },
  {
    path: '/aviso-de-privacidad',
    exact: true,
    component: AvisoPrivacidad,
  },
  {
    path: '/terminos-y-condiciones',
    exact: true,
    component: Terms,
  },
  // {
  //   name: 'NotFound',
  //   component: NotFound,
  // },
];

export default routes;
