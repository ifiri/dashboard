import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';
import ProjectInfo from '@/components/common/ProjectInfo';

import BotState from './modules/BotState';

import styles from './BotsTable.module.scss';

const TABLE_COLUMNS = {
  'type': '',
  'name': 'Название бота',
  'account': 'Аккаунт',
  'createdAt': 'Дата создания',
  'subscribers': 'Кол-во подписчиков',
  'state': '',
};


export default function AccountsTable({ items = [], onDelete, ...rest}) {
  const mappedItems = items.map((item, index) => {
    const fields = Object.keys(item);

    return fields.map(field => {
      const fieldData = item[field];

      switch (true) {
        case field === 'type':
          return <Icon name={ 'telegram' } width= { 30 } />;

        case field === 'account':
          return <ProjectInfo withType={ false } info={ fieldData } />;

        case field === 'createdAt':
          return <ReadableDate date={ fieldData } />;

        case field === 'state':
          return <BotState state={ fieldData } />;
      };

      return fieldData;
    });
  });

  return (
    <DataTable
      columns={ TABLE_COLUMNS }
      items={ mappedItems }
      variant="outline"
      actions={[
        {
          type: 'edit',
          handler: () => console.log('edit')
        },
        {
          type: 'copy',
          handler: () => console.log('copy')
        },
        {
          type: 'remove',
          handler: onDelete
        },
      ]}
      { ...rest }
    />
  );
}
