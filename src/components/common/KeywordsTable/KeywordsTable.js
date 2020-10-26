import React, { useState } from 'react';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';
import ProjectInfo from '@/components/common/ProjectInfo';
import BotInfo from '@/components/common/BotInfo';

import KeywordsColumn from './modules/KeywordsColumn';

import styles from './KeywordsTable.module.scss';

const TABLE_COLUMNS = {
  'keywords': 'Ключевые слова',
  'bot': 'Бот',
};

export default function KeywordsTable({ items = [], onDelete, ...rest}) {
  const mappedItems = items.map((item, index) => {
    const fields = Object.keys(item);

    return fields.map(field => {
      const fieldData = item[field];

      switch (true) {
        case field === 'keywords':
          return <KeywordsColumn keywords={ fieldData } />;

        case field === 'bot':
          return (
            <div className={ styles['column-bot'] }>
              Запустить бот
              <BotInfo
                info={ fieldData }
                className={ styles['bot-info'] }
              />
              <Icon name="pause" width={ 12 } className={ styles['bot-info-state'] } />
            </div>
          );
      };

      return fieldData;
    });
  });

  return (
    <DataTable
      columns={ TABLE_COLUMNS }
      items={ mappedItems }
      variant="outline"
      switchable={ true }
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
          handler: onDelete,
        },
      ]}
      { ...rest }
    />
  );
}
