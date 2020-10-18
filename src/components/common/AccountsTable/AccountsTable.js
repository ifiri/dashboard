import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';

import styles from './AccountsTable.module.scss';

const TABLE_COLUMNS = {
  'account': 'Аккаунт',
  'createdAt': 'Дата добавления',
  'bots': 'Ботов',
  'mailings': 'Авторассылок',
  'keywords': 'Ключевых слов',
  'chats': 'Чатов',
};

const AccountInfo = ({ info, ...rest }) => {
  const { type, project } = info;

  return (
    <div className={ styles['account-info'] }>
      <Icon name={ type } width= { 30 } />

      <div className={ styles['account-info-project'] }>
        <img src={ project.thumbnail } width={ 30 } />
        <span className={ styles['account-info-project-name'] }>
          { project.title }
        </span>
      </div>
    </div>
  );
};

export default function AccountsTable({ items = [], ...rest}) {
  const mappedItems = items.map((item, index) => {
    // const isCurrentRow = ~selectedRows.indexOf(index);

    const fields = Object.keys(item);

    return fields.map(field => {
      const fieldData = item[field];

      switch (true) {
        case field === 'account':
          return <AccountInfo info={ fieldData } />;

        case field === 'createdAt':
          return <ReadableDate date={ fieldData } />;
      };

      return fieldData;
    });
  });

  return (
    <DataTable
      columns={ TABLE_COLUMNS }
      items={ mappedItems }
      actions={[
        {
          type: 'remove',
          handler: () => console.log('remove')
        }
      ]}
      { ...rest }
    />
  );
}
