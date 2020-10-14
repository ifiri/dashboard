import loadable from '@loadable/component';

const routes = [
  {
    path: '/audiences',
    component: loadable(() => import(/* webpackChunkName: "audiences" */ '@/components/screen/Audience')),
    exact: true,
  },
];

export default routes;
