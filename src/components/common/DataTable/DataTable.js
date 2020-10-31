import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import pull from 'lodash/pull';

import Checkbox from '@/components/common/Checkbox';

import DataTableCell from './modules/DataTableCell';
import DataTableRow from './modules/DataTableRow';
import DataTableGroup from './modules/DataTableGroup';
import DataTableSwitch from './modules/DataTableSwitch';
import DataTableActions from './modules/DataTableActions';

import ThemeContext from './ThemeContext';

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
  children,
  ...rest
}) {
  const context = useContext(ThemeContext);
  const theme = context.theme || context;

  const tableClasses = classnames({
    [styles.table]: true,
    [styles[`theme-${theme}`]]: !!theme,

    [className]: !!className,
  });

  const areActionsExists = !!actions.length;

  // const columnWidthPercentage = `${Math.floor(100 / Object.values(columns).length)}%`;

  const [selectedRows, changeSelectedRows] = useState([]);
  const [disabledRows, changeDisabledRows] = useState([]);

  const outsideCols = [];
  const groupedCols = [];

//   Object.entries(columns).forEach(([key, column]) => {
//     if (typeof column === 'object' && column.outside) {
//       outsideCols.push(key);
//       return;
//     }
// 
//     groupedCols.push(key);
//   });

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

    return items.map((item, index) => {
      const column = Object.values(columns)[index];

      const isDisabled = ~disabledRows.indexOf(index);

      return (
        <DataTableRow className={ styles['table-row'] } key={ index }>
          {
            isCheckable && (
              <DataTableCell
                width={ column.width }
                className={ styles['table-cell'] }
              >
                <Checkbox
                  value={ index }
                  name="_checked[]"
                  onChange={ onRowSelect }
                />
              </DataTableCell>
            )
          }

          <DataTableGroup
            className={ styles['table-group'] }
            isDisabled={ isDisabled }
          >
            {
              groupedCols.forEach(outsideCol => (
                Object.entries(item).map(
                  ([key, field]) => {
                    if (outsideCol !== key) return;
                    return (
                      <DataTableCell
                        width={ column.width }
                        className={ styles['table-cell'] }
                        key={ key }
                      >
                        { field }
                      </DataTableCell>
                    )
                  }
                )
              ))
            }

            
          </DataTableGroup>

        </DataTableRow>
      );
    })
  };

  return (
    <div
      className={ tableClasses }
      { ...rest }
    >
      { children }
    </div>
  );
}
