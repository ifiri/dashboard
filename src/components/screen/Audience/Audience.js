import React from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';

import PageLayout from '@/components/common/PageLayout';
import SearchInput from '@/components/common/SearchInput';
import Dropdown, { DropdownItem } from '@/components/common/Dropdown';

import UsersTable from './modules/UsersTable';
import FiltersConditions from './modules/FiltersConditions';
import BulkActionsButton from './modules/BulkActionsButton';

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
        <SearchInput />

        <div className={ styles.actions }>
          <div className={ styles.selected }>
            Выбрано пользователей 0 из 6
          </div>

          <div className={ styles.bulk }>
            <Dropdown
              toggleAs= { BulkActionsButton }
            >
              <DropdownItem>Добавить метку</DropdownItem>
              <DropdownItem>Снять метку</DropdownItem>
              <DropdownItem>Подписать на рассылку</DropdownItem>
              <DropdownItem>Отписать от рассылки</DropdownItem>
            </Dropdown>
          </div>
        </div>

        <FiltersConditions
          className={ styles['filters-conditions'] }
        />
      </div>

      <UsersTable
        items={ SUBSCRIBERS }
      />
    </PageLayout>
  );
}
