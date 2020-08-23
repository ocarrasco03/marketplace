const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/signin',
    exact: true,
    component: SignIn,
  },
  {
    path: '/signup',
    exact: true,
    component: SignUp,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/admin',
    exact: true,
    component: AdminDashboard,
  },
  {
    path: '/admin/signin',
    exact: true,
    component: AdminSignIn,
  },
  {
    path: '/admin/analytics',
    exact: true,
    component: AdminAnalytics,
  },
  {
    path: '/admin',
    exact: true,
    component: AdminDashboard,
  },
  {
    path: '/admin',
    exact: true,
    component: AdminDashboard,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
