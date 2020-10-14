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
];

export default routes;
