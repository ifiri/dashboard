import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';

// TODO remove type from this
import ProjectInfo from '@/components/common/ProjectInfo';

import styles from './AccountsTable.module.scss';

export default function AccountsTable({ items = [], ...rest}) {
  return (
    <DataTable
      { ...rest }
    >
      <DataTable.HeadRow>
        <DataTable.HeadCell className={ styles['name-column'] }>
          Аккаунт
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['date-column'] }>
          Дата добавления
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['count-column'] }>
          Ботов
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['count-column'] }>
          Авторассылок
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['count-column'] }>
          Ключевых слов
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['count-column'] }>
          Чатов
        </DataTable.HeadCell>
        <DataTable.HeadCell type="actions" />
      </DataTable.HeadRow>

      <DataTable.Body>
        {(() => {
          return items.map((item, index) => (
            <DataTable.Row
              className={ styles['table-row'] }
            >
              <DataTable.Cell className={ styles['name-column'] }>
                <ProjectInfo info={ item.account } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['date-column'] }>
                <ReadableDate date={ item.createdAt } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['count-column'] }>
                { item.bots }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['count-column'] }>
                { item.mailings }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['count-column'] }>
                { item.keywords }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['count-column'] }>
                { item.chats }
              </DataTable.Cell>
              <DataTable.Cell type="actions">
                <DataTable.Actions
                  actions={[
                    {
                      type: 'remove',
                      handler: () => console.log('remove')
                    },
                  ]}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))
        })()}
      </DataTable.Body>
    </DataTable>
  );
}
