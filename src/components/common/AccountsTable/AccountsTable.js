import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';
import ProjectInfo from '@/components/common/ProjectInfo';

import styles from './AccountsTable.module.scss';

const TABLE_COLUMNS = {
  'account': 'Аккаунт',
  'createdAt': 'Дата добавления',
  'bots': 'Ботов',
  'mailings': 'Авторассылок',
  'keywords': 'Ключевых слов',
  'chats': 'Чатов',
};

export default function AccountsTable({ items = [], ...rest}) {
  const mappedItems = items.map((item, index) => {
    // const isCurrentRow = ~selectedRows.indexOf(index);

    const fields = Object.keys(item);

    return fields.map(field => {
      const fieldData = item[field];

      switch (true) {
        case field === 'account':
          return <ProjectInfo info={ fieldData } />;

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
