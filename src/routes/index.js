const routes = [
  {
    path: '/audience',
    component: () =>
      import(/* webpackChunkName: "audience" */ '@/components/screen/Audience'),
  },
];

export default routes;
