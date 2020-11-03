import React, { createRef, useRef, useState } from 'react';
import pull from 'lodash/pull';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Percentage from '@/components/common/Percentage';
import Icon from '@/components/common/Icon';

import styles from './DraftMailingsTable.module.scss';

export default function DraftMailingsTable({ items = [], onDelete, ...rest }) {
  return (
    <DataTable
      { ...rest }
    >
      <DataTable.HeadRow>
        <DataTable.Cell className={ styles['mailing-icon-column'] } />
        <DataTable.HeadCell className={ styles['mailing-column'] }>
          Название
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-column'] }>
          Дата создания
        </DataTable.HeadCell>
        <DataTable.HeadCell type="actions" />
      </DataTable.HeadRow>

      <DataTable.Body>
        {(() => {
          if (!items.length) {
            return (
              <DataTable.Placeholder>
                Нет ни одной рассылки
              </DataTable.Placeholder>
            )
          }

          return items.map((item, index) => (
            <DataTable.Row
              className={ styles['table-row'] }
            >
              <DataTable.Cell className={ styles['mailing-icon-column'] }>
                <Icon name="draft" width={ 20 } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-column'] }>
                { item.name }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-column'] }>
                <ReadableDate date={ item.createdAt } />
              </DataTable.Cell>
              <DataTable.Cell type="actions">
                <DataTable.Actions
                  actions={[
                    {
                      type: 'copy',
                      handler: () => console.log('copy')
                    },
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
