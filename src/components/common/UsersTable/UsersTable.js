import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import Icon from '@/components/common/Icon';

import User from './modules/User';

import styles from './UsersTable.module.scss';

const TABLE_COLUMNS = {
  'subscriber': 'Подписчик',
  'chats': 'Онлайн чатов',
  'subscribedAt': 'Подписался',
};

export default function UsersTable({ items = [], ...rest}) {
  const [selectedRows, setSelectedRows] = useState([]);

  const onRowSelect = (rowIndex, allSelectedRows) => {
    setSelectedRows(allSelectedRows);
  };

  const mappedItems = items.map((item, index) => {
    const isCurrentRow = ~selectedRows.indexOf(index);

    const fields = Object.keys(item);

    return fields.map(field => {
      const fieldData = item[field];

      switch (true) {
        case field === 'user':
          return <User
            avatar={ fieldData.avatar }
            name={ fieldData.name }
            className={ isCurrentRow && styles['users-table-active-user'] }
          />;

        case field === 'chats':
          return fieldData;

        case field === 'subscribedAt':
          return <React.Fragment>
            <time className={ styles['users-table-time-readable'] }>
              2 месяца назад
            </time>
            <time>
              { fieldData }
            </time>
          </React.Fragment>
      };
    });
  });

  return (
    <DataTable
      columns={ TABLE_COLUMNS }
      items={ mappedItems }
      onRowSelect={ onRowSelect }
      placeholder={
        <React.Fragment>
          <Icon
            className={ styles['users-table-placeholder-icon'] }
            name="people"
            width={ 25 }
          />
          Не найдено ни одного подписчика
        </React.Fragment>
      }
      isCheckable
      { ...rest }
    />
  );
}
