import React from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';

import styles from './SubscribersTable.module.scss';

export default function SubscribersTable({ items = [], ...rest }) {
  return (
    <DataTable
      { ...rest }
    >
      <DataTable.HeadRow>
        <DataTable.HeadCell className={ styles['name-column'] }>
          Подписчик
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
                  className={ styles['placeholder-icon'] }
                  name="people"
                  width={ 25 }
                />
                Не найдено ни одного подписчика
              </DataTable.Placeholder>
            )
          }

          return items.map((item, index) => (
            <DataTable.Row
              className={ styles['table-row'] }
            >
              <DataTable.Cell className={ styles['name-column'] }>
                <div className={ styles['user-info'] }>
                  <img src={ item.avatar } className={ styles['user-info-avatar'] } />
                  { item.name }
                </div>
              </DataTable.Cell>
              <DataTable.Cell className={ styles['date-column'] }>
                <ReadableDate date={ item.subscribedAt } />
              </DataTable.Cell>
            </DataTable.Row>
          ))
        })()}
      </DataTable.Body>
    </DataTable>
  );
}
