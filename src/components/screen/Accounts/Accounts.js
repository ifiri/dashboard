import React from 'react';
import classnames from 'classnames';

// import Button from 'react-bootstrap/Button';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
// import SearchInput from '@/components/common/SearchInput';
// import UsersTable from '@/components/common/UsersTable';
// import Dropdown, { DropdownItem } from '@/components/common/Dropdown';

import styles from './Accounts.module.scss';

const DATA = [
  //
];

export default function Accounts() {
  const areAccountsExists = !!DATA.length;

  return (
    <PageLayout
      title="Аккаунты"
    >
      {
        (() => {
          if (areAccountsExists) {
            return;
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
