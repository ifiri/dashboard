import React from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';

import styles from './TrashMailingsTable.module.scss';

export default function TrashMailingsTable({ items = [], onDelete, ...rest }) {
  return (
    <DataTable
      { ...rest }
    >
      <DataTable.HeadRow>
        <DataTable.HeadCell className={ styles['mailing-column'] }>
          Название
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-column'] }>
          Дата создания
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-column'] }>
          Удалено
        </DataTable.HeadCell>
        <DataTable.HeadCell type="actions" />
      </DataTable.HeadRow>

      <DataTable.Body>
        {(() => {
          if (!items.length) {
            return (
              <DataTable.Placeholder>
                Нет ни одной удаленной рассылки
              </DataTable.Placeholder>
            )
          }

          return items.map((item, index) => (
            <DataTable.Row
              className={ styles['table-row'] }
            >
              <DataTable.Cell className={ styles['mailing-column'] }>
                { item.name }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-column'] }>
                <ReadableDate date={ item.createdAt } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-column'] }>
                <ReadableDate date={ item.deletedAt } />
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
