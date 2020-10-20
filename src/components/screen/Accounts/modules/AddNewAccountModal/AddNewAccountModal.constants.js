import AccountChoice from './modules/AccountChoice';
import AddFacebookAccount from './modules/AddFacebookAccount';
import AddTelegramAccount from './modules/AddTelegramAccount';
import AddViberAccount from './modules/AddViberAccount';
import AddVkontakteAccount from './modules/AddVkontakteAccount';

export const STEPS = [
  {
    name: 'add-account',

    component: AccountChoice,
  },
  {
    name: 'facebook',
    prev: 'add-account',

    component: AddFacebookAccount,
  },
  {
    name: 'telegram',
    prev: 'add-account',

    component: AddTelegramAccount,
  },
  {
    name: 'vkontakte',
    prev: 'add-account',

    component: AddVkontakteAccount,
  },
  {
    name: 'viber',
    prev: 'add-account',

    component: AddViberAccount,
  },
];
