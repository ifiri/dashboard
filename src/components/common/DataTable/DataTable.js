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
  onRowSelect: passedRowSelect,
  ...rest
}) {
  const tableClasses = classnames(styles.table, className);

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
        <tr>
          <td
            className={ styles['table-placeholder'] }
            colSpan={ columnsCount }
          >
            { placeholder || 'Не найдено ни одной записи' }
          </td>
        </tr>
      )
    }

    return items.map((item, index) => {
      return (
        <tr
          key={ `data-table-row-${index}` }
          className={ styles['table-row'] }
        >
          {
            isCheckable && <td>
              <Checkbox
                value={ index }
                name="_rows[]"
                onChange={ onRowSelect }
              />
            </td>
          }
          {
            Object.entries(item).map(
              ([key, field]) => (
                <td key={ key }>
                  { field }
                </td>
              )
            )
          }
          {
            areActionsExists && <td className={ styles['data-table-actions'] }>
              {
                actions.map(action => {
                  switch (action.type) {
                    case 'remove':
                      return <Button
                        className={ styles['data-table-action'] }
                        variant="link"
                        onClick={ action.handler }
                        key={ action.type }
                      >
                        <Icon name="trash" width={ 15 } />
                      </Button>;
                  }
                })
              }
            </td>
          }
        </tr>
      );
    })
  };

  return (
    <Table
      className={ tableClasses }
      { ...rest }
    >
      <thead className={ styles['table-head'] }>
        <tr>
          { isCheckable && <th></th> }

          {
            Object.entries(columns).map(([key, column]) => (
              <th
                key={ key }
                style={{
                  width: column.width || 'auto',
                }}
              >
                { column.label || column }
              </th>
            ))
          }

          { areActionsExists && <th></th> }
        </tr>
      </thead>
  
      <tbody>
        { renderRows() }
      </tbody>
    </Table>
  );
}
