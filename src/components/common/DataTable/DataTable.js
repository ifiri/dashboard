import React, { useState } from 'react';
import classnames from 'classnames';
import pull from 'lodash/pull';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Checkbox from '@/components/common/Checkbox';
import Icon from '@/components/common/Icon';

import styles from './DataTable.module.scss';

export default function DataTable({
  className,
  columns,
  items = [],
  isCheckable = false,
  placeholder,
  actions = [],
  variant = 'light',
  onRowSelect: passedRowSelect,
  ...rest
}) {
  const tableClasses = classnames(styles.table, styles[`table-${variant}`], className);

  const areActionsExists = !!actions.length;

  const [selectedRows, changeSelectedRows] = useState([]);

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

  const renderRows = () => {
    const columnsCount = Object.keys(columns).length + ( isCheckable ? 1 : 0 );
    if (!items.length) {
      return (
        <div className={ styles['table-head-row'] }>
          <div className={ styles['table-head-cell'] }>
            className={ styles['table-placeholder'] }
            colSpan={ columnsCount }
          >
            { placeholder || 'Не найдено ни одной записи' }
          </div>
        </div>
      )
    }

    return items.map((item, index) => {
      return (
        <div
          key={ `data-table-row-${index}` }
          className={ styles['table-row'] }
        >
          {
            isCheckable && <div className={ styles['table-cell'] }>
              <Checkbox
                value={ index }
                name="_rows[]"
                onChange={ onRowSelect }
              />
            </div>
          }
          {
            Object.entries(item).map(
              ([key, field]) => (
                <div className={ styles['table-cell'] } key={ key }>
                  { field }
                </div>
              )
            )
          }
          {
            areActionsExists && <div className={ styles['table-cell'] }>
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
      );
    })
  };

  return (
    <div
      className={ tableClasses }
      { ...rest }
    >
      <div className={ styles['table-head-row'] }>
        { isCheckable && <div className={ styles['table-head-cell'] }></div> }

        {
          Object.entries(columns).map(([key, column]) => (
            <div className={ styles['table-head-cell'] }
              key={ key }
              style={{
                width: column.width || 'auto',
              }}
            >
              { column.label || column }
            </div>
          ))
        }

        { areActionsExists && <div className={ styles['table-head-cell'] }></div> }
      </div>
  
      { renderRows() }
    </div>
  );
}
