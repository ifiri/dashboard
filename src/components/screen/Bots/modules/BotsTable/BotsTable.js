import React from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';
import ProjectInfo from '@/components/common/ProjectInfo';

import ThemeContext from '@/components/common/DataTable/ThemeContext';

import BotState from './modules/BotState';

import styles from './BotsTable.module.scss';

export default function BotsTable({ items = [], onDelete, ...rest}) {
  return (
    <ThemeContext.Provider value="outline">
      <DataTable
        { ...rest }
      >
        <DataTable.HeadRow>
          <DataTable.HeadCell className={ styles['type-column'] } />
          <DataTable.HeadCell className={ styles['name-column'] }>
            Название бота
          </DataTable.HeadCell>
          <DataTable.HeadCell className={ styles['account-column'] }>
            Аккаунт
          </DataTable.HeadCell>
          <DataTable.HeadCell className={ styles['date-column'] }>
            Дата создания
          </DataTable.HeadCell>
          <DataTable.HeadCell className={ styles['count-column'] }>
            Кол-во подписчиков
          </DataTable.HeadCell>
          <DataTable.HeadCell className={ styles['state-column'] } />
          <DataTable.HeadCell type="actions" />
        </DataTable.HeadRow>

        <DataTable.Body>
          {(() => {
            return items.map((item, index) => (
              <DataTable.Row
                className={ styles['table-row'] }
              >
                <DataTable.Cell className={ styles['type-column'] }>
                  <Icon name={ item.type } width= { 30 } />
                </DataTable.Cell>
                <DataTable.Cell className={ styles['name-column'] }>
                  { item.name }
                </DataTable.Cell>
                <DataTable.Cell className={ styles['account-column'] }>
                  <ProjectInfo withType={ false } info={ item.account } />
                </DataTable.Cell>
                <DataTable.Cell className={ styles['date-column'] }>
                  <ReadableDate date={ item.createdAt } />
                </DataTable.Cell>
                <DataTable.Cell className={ styles['count-column'] }>
                  { item.subscribers }
                </DataTable.Cell>
                <DataTable.Cell className={ styles['state-column'] }>
                  <BotState state={ item.state } />
                </DataTable.Cell>
                <DataTable.Cell type="actions">
                  <DataTable.Actions
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
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))
          })()}
        </DataTable.Body>
      </DataTable>
    </ThemeContext.Provider>
  );
}
