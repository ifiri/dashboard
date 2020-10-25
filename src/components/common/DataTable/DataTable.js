import React, { useState } from 'react';
import classnames from 'classnames';
import pull from 'lodash/pull';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Checkbox from '@/components/common/Checkbox';
import Icon from '@/components/common/Icon';
import Switch from '@/components/common/Switch';

import styles from './DataTable.module.scss';

export default function DataTable({
  className,
  columns,
  items = [],
  isCheckable = false,
  switchable = false,
  placeholder,
  actions = [],
  variant = 'light',
  onRowSelect: passedRowSelect,
  onSwitch: passedRowSwitch,
  ...rest
}) {
  const tableClasses = classnames(styles.table, styles[`table-${variant}`], className);

  const areActionsExists = !!actions.length;

  const columnWidthPercentage = `${Math.floor(100 / Object.values(columns).length)}%`;

  const [selectedRows, changeSelectedRows] = useState([]);
  const [disabledRows, changeDisabledRows] = useState([]);

  const onRowSelect = (isChecked, name, value) => {
    const newSelectedRows = [
      ...selectedRows,
    ];

    if (isChecked) {
      newSelectedRows.push(value);
    } else {  
      pull(newSelectedRows, value);
    }

    changeSelectedRows(newSelectedRows);

    passedRowSelect && passedRowSelect(value, newSelectedRows);
  };

  const onRowSwitch = (isEnabled, value) => {
    const newDisabledRows = [
      ...disabledRows,
    ];

    if (!isEnabled) {
      newDisabledRows.push(value);
    } else {  
      pull(newDisabledRows, value);
    }

    changeDisabledRows(newDisabledRows);

    passedRowSwitch && passedRowSwitch(value, newDisabledRows);
  };

  const renderRows = () => {
    const columnsCount = Object.keys(columns).length + ( isCheckable ? 1 : 0 );
    if (!items.length) {
      return (
        <div className={ styles['table-row'] }>
          <div className={ styles['table-cell'] }>
            className={ styles['table-placeholder'] }
            colSpan={ columnsCount }
          >
            { placeholder || 'Не найдено ни одной записи' }
          </div>
        </div>
      )
    }

    return items.map((item, index) => {
      const column = Object.values(columns)[index];

      const isDisabled = ~disabledRows.indexOf(index);

      console.log('::: is', isDisabled, disabledRows);

      return (
        <div
          key={ `data-table-row-${index}` }
          className={ styles['table-row'] }
        >
          {
            switchable && <div className={ styles['table-switch'] }>
              <Switch
                value={ index }
                name="_disabled[]"
                onSwitch={ onRowSwitch }
              />
            </div>
          }
          {
            isCheckable && <div className={ styles['table-cell'] }>
              <Checkbox
                value={ index }
                name="_checked[]"
                onChange={ onRowSelect }
              />
            </div>
          }
          <div className={
            classnames({
              [styles['table-row-data']]: true,
              [styles['is-disabled']]: isDisabled,
            })
          }>
            {
              Object.entries(item).map(
                ([key, field]) => (
                  <div
                    className={ styles['table-cell'] }
                    style={{
                      width: column.width || columnWidthPercentage,
                    }}
                    key={ key }
                  >
                    { field }
                  </div>
                )
              )
            }
            {
              areActionsExists && <div className={ classnames(styles['table-cell'], styles['table-cell-actions'] ) }>
                {
                  actions.map(action => {
                    switch (action.type) {
                      case 'remove':
                        return <Button
                          className={ styles['table-action'] }
                          variant="link"
                          onClick={ action.handler }
                          key={ action.type }
                        >
                          <Icon name="trash" width={ 20 } />
                        </Button>;

                      case 'edit':
                        return <Button
                          className={ styles['table-action'] }
                          variant="link"
                          onClick={ action.handler }
                          key={ action.type }
                        >
                          <Icon name="edit" width={ 20 } />
                        </Button>;

                      case 'copy':
                        return <Button
                          className={ styles['table-action'] }
                          variant="link"
                          onClick={ action.handler }
                          key={ action.type }
                        >
                          <Icon name="copy" width={ 20 } />
                        </Button>;
                    }
                  })
                }
              </div>
            }
          </div>
        </div>
      );
    })
  };

  return (
    <div
      className={ tableClasses }
      { ...rest }
    >
      <div className={ styles['table-head-row'] }>
        { switchable && <div className={ styles['table-switch'] }></div> }
        { isCheckable && <div className={ styles['table-head-cell'] }></div> }

        <div className={ styles['table-head-row-data'] }>
          {
            Object.entries(columns).map(([key, column]) => (
              <div className={ styles['table-head-cell'] }
                key={ key }
                style={{
                  width: column.width || columnWidthPercentage,
                }}
              >
                { column.label || column }
              </div>
            ))
          }

          { areActionsExists && <div className={ styles['table-cell-actions'] }></div> }
        </div>
      </div>
  
      { renderRows() }
    </div>
  );
}
