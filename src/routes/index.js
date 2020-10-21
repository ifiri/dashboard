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
  {
    path: '/automatization/bots',
    component: loadable(
      () =>
        import(/* webpackChunkName: "automatization-bots" */ '@/components/screen/Bots')
    ),
    
    exact: true,
  },
  {
    path: '/automatization/keywords',
    component: loadable(
      () =>
        import(/* webpackChunkName: "automatization-keywords" */ '@/components/screen/Keywords')
    ),
    
    exact: true,
  },
];

export default routes;
