import React, { useState } from 'react';
import classnames from 'classnames';
import pull from 'lodash/pull';

import Table from 'react-bootstrap/Table';

import Checkbox from '@/components/common/Checkbox';

import styles from './DataTable.module.scss';

export default function DataTable({
  className,
  columns,
  items = [],
  isCheckable = false,
  onRowSelect: passedRowSelect,
  ...rest
}) {
  const tableClasses = classnames(styles.table, className);

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

  return (
    <Table
      className={ tableClasses }
      { ...rest }
    >
      <thead className={ styles['table-head'] }>
        <tr>
          { isCheckable && <td></td> }

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
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => {
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
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
}
