import React, { createRef, useRef, useState } from 'react';
import pull from 'lodash/pull';
import Draggable from 'react-draggable';

import DataTable from '@/components/common/DataTable';
import ReadableDate from '@/components/common/ReadableDate';
import Percentage from '@/components/common/Percentage';

import ThemeContext from '@/components/common/DataTable/ThemeContext';

import styles from './AutoMailingsTable.module.scss';

export default function AutoMailingsTable({ items = [], onDelete, ...rest}) {
  const [switchedRows, setSwitchedRows] = useState([]);

  const draggableRefs = [];
  const setDraggableRef = ref => draggableRefs.push(ref);

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
          <DataTable.HeadCell width={ 50 } />

          <DataTable.HeadCell type="switch" />

          <DataTable.HeadCell width={ 275 }>
            Время отправки
          </DataTable.HeadCell>

          <DataTable.HeadGroup>
            <DataTable.HeadCell type="drag" />
            <DataTable.HeadCell className={ styles['mailing-name-column'] }>
              Рассылки
            </DataTable.HeadCell>
            <DataTable.HeadCell width={ 125 }>
              Отправлено
            </DataTable.HeadCell>
            <DataTable.HeadCell width={ 125 }>
              Просмотрено
            </DataTable.HeadCell>
            <DataTable.HeadCell width={ 125 }>
              Кликов
            </DataTable.HeadCell>
            <DataTable.HeadCell type="actions" />
          </DataTable.HeadGroup>
        </DataTable.HeadRow>

        <DataTable.Body className={ styles['table-body'] }>
          {
            items.map((item, index) => {
              return <Draggable
                key={ index }
                axis="y"
                bounds="parent"
                grid={[10, 80]}
                handle={ `.${styles['drag-control']}` }
                // onStart={ () => console.log('start') }
                // onDrag={ () => console.log('drag') }
                // onStop={ () => console.log('stop') }
                // onMouseDown={ () => console.log('mous') }
              >
                <DataTable.Row
                  isDisabled={ ~switchedRows.indexOf(index) }
                  className={ styles['table-row'] }
                >
                  <DataTable.Cell width={ 50 } className={ styles['automailings-row-number'] }>
                    { item.id || index }
                  </DataTable.Cell>

                  <DataTable.Switch
                    value={ index }
                    onSwitch={ onSwitch }
                  />

                  <DataTable.Cell width={ 275 }>
                    <div className={ styles['automailings-scheduled-at'] }>
                      { item.scheduledAt }
                    </div>
                  </DataTable.Cell>

                  <DataTable.Group className={ styles['table-group'] }>
                    <DataTable.Cell width={ 30 }>
                      <DataTable.DragControl className={ styles['drag-control'] } />
                    </DataTable.Cell>
                    <DataTable.Cell className={ styles['mailing-name-column'] }>
                      { item.name }
                    </DataTable.Cell>
                    <DataTable.Cell width={ 120 }>
                      { item.dispatched }
                    </DataTable.Cell>
                    <DataTable.Cell width={ 120 }>
                      <Percentage
                        value={ item.viewed }
                        from={ item.dispatched }
                      />
                    </DataTable.Cell>
                    <DataTable.Cell width={ 120 }>
                      <Percentage
                        value={ item.clicks }
                        from={ item.dispatched }
                      />
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
                            handler: () => console.log('copy')
                          },
                        ]}
                      />
                    </DataTable.Cell>
                  </DataTable.Group>
                </DataTable.Row>
              </Draggable>
            })
          }
        </DataTable.Body>
      </DataTable>
    </ThemeContext.Provider>
  );
}
