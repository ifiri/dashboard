import React from 'react';
import classnames from 'classnames';

import PageLayout from '@/components/common/PageLayout';
import SearchInput from '@/components/common/SearchInput';
import UsersTable from '@/components/common/UsersTable';

import Button from 'react-bootstrap/Button';

import styles from './Audience.module.scss';

const SUBSCRIBERS = [
  {
    user: {
      avatar: 'avatar-01.png',
      name: 'Алексей Иванов',
    },
    chats: '1',
    subscribedAt: '25.08.2020',
  },
  {
    user: {
      avatar: 'avatar-01.png',
      name: 'Алексей Иванов',
    },
    chats: '1',
    subscribedAt: '25.08.2020',
  },
];

export default function Audience() {
  return (
    <PageLayout
      title="Аудитория"
    >
      <div className={ styles.header }>
        <SearchInput

        />

        <div className={ styles.actions }>
          <div className={ styles.selected }>
            Выбрано пользователей 0 из 6
          </div>

          <div className={ styles.bulk }>
            <Button
              variant="outline-secondary"
            >
              Массовые действия
            </Button>
          </div>
        </div>
      </div>

      <UsersTable
        items={ SUBSCRIBERS }
      />

    </PageLayout>
  );
}
