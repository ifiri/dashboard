import React, { useState } from 'react';
import pull from 'lodash/pull';

import DataTable from '@/components/common/DataTable';
import Icon from '@/components/common/Icon';
import ReadableDate from '@/components/common/ReadableDate';

import User from './modules/User';

import styles from './UsersTable.module.scss';

export default function UsersTable({ items = [], ...rest}) {
  const [selectedRows, setSelectedRows] = useState([]);

  const onRowSelect = (isChecked, name, value) => {
    const newSelectedRows = [
      ...selectedRows,
    ];

    if (isChecked) {
      newSelectedRows.push(value);
    } else {  
      pull(newSelectedRows, value);
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <DataTable
      { ...rest }
    >
      <DataTable.HeadRow>
        <DataTable.HeadCell type="check" />
        <DataTable.HeadCell className={ styles['name-column'] }>
          Подписчик
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['count-column'] }>
          Онлайн чатов
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['date-column'] }>
          Подписался
        </DataTable.HeadCell>
      </DataTable.HeadRow>

      <DataTable.Body>
        {(() => {
          if (!items.length) {
            return (
              <DataTable.Placeholder>
                <Icon
                  className={ styles['users-table-placeholder-icon'] }
                  name="people"
                  width={ 25 }
                />
                Не найдено ни одного подписчика
              </DataTable.Placeholder>
            )
          }

          return items.map((item, index) => {
            const isCurrentRow = ~selectedRows.indexOf(index);

            return <DataTable.Row
              className={ styles['table-row'] }
            >
              <DataTable.Cell type="check">
                <DataTable.Check
                  value={ index }
                  onChange={ onRowSelect }
                />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['name-column'] }>
                <User
                  avatar={ item.user.avatar }
                  name={ item.user.name }
                  className={ isCurrentRow && styles['users-table-active-user'] }
                />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['date-column'] }>
                <ReadableDate date={ item.subscribedAt } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['count-column'] }>
                { item.chats }
              </DataTable.Cell>
            </DataTable.Row>
          })
        })()}
      </DataTable.Body>
    </DataTable>
  );
}
