import loadable from '@loadable/component';

const routes = [
  {
    path: '/audience',
    component: loadable(
      () =>
        import(/* webpackChunkName: "audience" */ '@/components/screen/Audience')
    ),
    
    exact: true,
  },
  {
    path: '/accounts',
    component: loadable(
      () =>
        import(/* webpackChunkName: "accounts" */ '@/components/screen/Accounts')
    ),
    
    exact: true,
  },
];

export default routes;
