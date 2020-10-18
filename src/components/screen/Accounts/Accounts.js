import React from 'react';
import classnames from 'classnames';

// import Button from 'react-bootstrap/Button';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
// import SearchInput from '@/components/common/SearchInput';
import AccountsTable from '@/components/common/AccountsTable';
// import Dropdown, { DropdownItem } from '@/components/common/Dropdown';

import styles from './Accounts.module.scss';

const ACCOUNTZ = [
  {
    'account': {
      'type': 'telegram',
      'project': {
        'title': 'Проект 1',
        'thumbnail': 'project-01.png',
      },
    },
    'createdAt': '25.08.2020',
    'bots': '2',
    'mailings': '5',
    'keywords': '19',
    'chats': '837',
  },
];

export default function Accounts() {
  const areAccountsExists = !!ACCOUNTZ.length;

  return (
    <PageLayout
      title="Аккаунты"
    >
      {
        (() => {
          if (areAccountsExists) {
            return (
              <AccountsTable
                items={ ACCOUNTZ }
              />
            );
          }

          return (
            <Placeholder
              name="accounts"
              width={ 216 }
            >
              Добавьте существующий аккаунт telegram, whats’up, facebook, viber или vkontakte, к которому в дальнейшем можно будет привязать бот.
            </Placeholder>
          );
        })()
      }
    </PageLayout>
  );
}
