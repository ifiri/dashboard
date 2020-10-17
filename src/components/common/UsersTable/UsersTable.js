import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';

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
      isCheckable
      { ...rest }
    />
  );
}
