import React, { useState } from 'react';
import pull from 'lodash/pull';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Icon from '@/components/common/Icon';
import ProjectInfo from '@/components/common/ProjectInfo';
import BotInfo from '@/components/common/BotInfo';

import ThemeContext from '@/components/common/DataTable/ThemeContext';

import KeywordsColumn from './modules/KeywordsColumn';

import styles from './KeywordsTable.module.scss';

export default function KeywordsTable({ items = [], onDelete, ...rest}) {
  const [switchedRows, setSwitchedRows] = useState([]);
  
  const onSwitch = (state, value) => {
    const newSwitchedRows = [
      ...switchedRows,
    ];

    state ? 
      pull(newSwitchedRows, value) :
      newSwitchedRows.push(value);

    setSwitchedRows(newSwitchedRows);
  };

  return (
    <ThemeContext.Provider value="outline">
      <DataTable
        { ...rest }
      >
        <DataTable.HeadRow>
          <DataTable.HeadCell type="switch" />
          <DataTable.HeadGroup>
            <DataTable.HeadCell className={ styles['column'] }>
              Ключевые слова
            </DataTable.HeadCell>
            <DataTable.HeadCell className={ styles['column'] }>
              Бот
            </DataTable.HeadCell>
            <DataTable.HeadCell type="actions" />
          </DataTable.HeadGroup>
        </DataTable.HeadRow>

        <DataTable.Body>
          {(() => {
            return items.map((item, index) => (
              <DataTable.Row
                isDisabled={ ~switchedRows.indexOf(index) }
              >
                <DataTable.Switch
                  value={ index }
                  onSwitch={ onSwitch }
                />

                <DataTable.Group className={ styles['table-group'] }>
                  <DataTable.Cell className={ styles['column'] }>
                    <KeywordsColumn
                      keywords={ item.keywords }
                    />
                  </DataTable.Cell>
                  <DataTable.Cell className={ styles['column'] }>
                    <div className={ styles['bot'] }>
                      Запустить бот
                      <BotInfo
                        info={ item.bot }
                        className={ styles['bot-info'] }
                      />
                      <Icon
                        name="pause"
                        width={ 12 }
                        className={ styles['bot-state'] }
                      />
                    </div>
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
                          handler: onDelete,
                        },
                      ]}
                    />
                  </DataTable.Cell>
                </DataTable.Group>
              </DataTable.Row>
            ))
          })()}
        </DataTable.Body>
      </DataTable>
    </ThemeContext.Provider>
  );
}
