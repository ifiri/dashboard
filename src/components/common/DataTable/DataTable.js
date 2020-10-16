import React from 'react';
import classnames from 'classnames';

import Table from 'react-bootstrap/Table';

import Checkbox from '@/components/common/Checkbox';

import styles from './DataTable.module.scss';

export default function DataTable({
  className,
  columns,
  items = [],
  isCheckable = false,
  ...rest
}) {
  const tableClasses = classnames(styles.table, className);

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
          items.map((item, index) => (
            <tr
              key={ `data-table-row-${index}` }
              className={ styles['table-row'] }
            >
              {
                isCheckable && <td>
                  <Checkbox
                    value="1"
                    name="_"
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
          ))
        }
      </tbody>
    </Table>
  );
}
