import React, { createRef, useRef, useState } from 'react';
import pull from 'lodash/pull';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Percentage from '@/components/common/Percentage';
import Icon from '@/components/common/Icon';

import styles from './SentMailingsTable.module.scss';

export default function SentMailingsTable({ items = [], onDelete, ...rest}) {
  return (
    <DataTable
      { ...rest }
    >
      <DataTable.HeadRow>
        <DataTable.Cell className={ styles['mailing-icon-column'] } />
        <DataTable.HeadCell className={ styles['mailing-name-column'] }>
          Название
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-date-column'] }>
          Дата отправки
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-date-column'] }>
          Дата создания
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-count-column'] }>
          Отправлено
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-count-column'] }>
          Просмотрено
        </DataTable.HeadCell>
        <DataTable.HeadCell className={ styles['mailing-clicks-column'] }>
          Кликов
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
                <Icon name="mail-sent" width={ 40 } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-name-column'] }>
                { item.name }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-date-column'] }>
                <ReadableDate date={ item.sentAt } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-date-column'] }>
                <ReadableDate date={ item.createdAt } />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-count-column'] }>
                { item.dispatched }
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-count-column'] }>
                <Percentage
                  value={ item.viewed }
                  from={ item.dispatched }
                />
              </DataTable.Cell>
              <DataTable.Cell className={ styles['mailing-clicks-column'] }>
                <Percentage
                  value={ item.clicks }
                  from={ item.dispatched }
                />
              </DataTable.Cell>
              <DataTable.Cell type="actions">
                <DataTable.Actions
                  actions={[
                    {
                      type: 'copy',
                      handler: () => console.log('copy')
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
