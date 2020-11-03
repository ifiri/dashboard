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
  {
    path: '/automatization/mailings',
    component: loadable(
      () =>
        import(/* webpackChunkName: "automatization-mailings" */ '@/components/screen/Automailings')
    ),
    
    exact: true,
  },
  {
    path: '/chat',
    component: loadable(
      () =>
        import(/* webpackChunkName: "chat" */ '@/components/screen/Chat')
    ),
    
    exact: true,
  },
  {
    path: '/mailings',
    component: loadable(
      () =>
        import(/* webpackChunkName: "mailings" */ '@/components/screen/Mailings')
    ),
    
    exact: true,
  },
  {
    path: '/payment',
    component: loadable(
      () =>
        import(/* webpackChunkName: "pay" */ '@/components/screen/Payment')
    ),
    
    exact: true,
  },
];

export default routes;
