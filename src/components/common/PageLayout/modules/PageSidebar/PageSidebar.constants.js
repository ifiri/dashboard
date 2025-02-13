export const SIDEBAR_LOGO_HEIGHT = 20;

export const SIDEBAR_LINKS = [
  {
    label: 'Аккаунты',
    to: '/accounts',
    icon: 'chain',
  },
  {
    label: 'Автоматизация',
    icon: 'chain',
    to: '/automatization/bots',
    match: '/automatization/:id',
    children: [
      {
        label: 'Боты',
        to: '/automatization/bots',
      },
      {
        label: 'Ключевые слова',
        to: '/automatization/keywords',
      },
      {
        label: 'Авторассылки',
        to: '/automatization/mailings',
      },
    ]
  },
  {
    label: 'Аудитория',
    to: '/audience',
    icon: 'audience',
  },
  {
    label: 'Онлайн-чат',
    to: '/chat',
    icon: 'smile-filled',
  },
  {
    label: 'Рассылки',
    to: '/mailings',
    icon: 'mark-list-filled',
  },
  {
    label: 'Статистика',
    to: '/stats',
    icon: 'palette',
    iconWidth: 24,
  },
];
