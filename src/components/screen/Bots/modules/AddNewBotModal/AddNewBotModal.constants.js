import MessengerChoice from './modules/MessengerChoice';
import AddVendorBot from './modules/AddVendorBot';
// import AddTelegramAccount from './modules/AddTelegramAccount';
// import AddViberAccount from './modules/AddViberAccount';
// import AddVkontakteAccount from './modules/AddVkontakteAccount';

export const STEPS = [
  {
    name: 'add-bot',

    component: MessengerChoice,
  },
  {
    name: 'adding',
    prev: 'add-bot',

    size: 'md',

    component: AddVendorBot,
  },
//   {
//     name: 'telegram',
//     prev: 'add-account',
// 
//     component: AddTelegramAccount,
//   },
//   {
//     name: 'vkontakte',
//     prev: 'add-account',
// 
//     component: AddVkontakteAccount,
//   },
//   {
//     name: 'viber',
//     prev: 'add-account',
// 
//     component: AddViberAccount,
//   },
];
