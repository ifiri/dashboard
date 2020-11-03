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
  children,
  ...rest
}) {
  const context = useContext(ThemeContext);
  const theme = (context && context.theme) || context || 'default';

  const tableClasses = classnames({
    [styles.table]: true,
    [styles[`theme-${theme}`]]: !!theme,

    [className]: !!className,
  });

  return (
    <div
      className={ tableClasses }
      { ...rest }
    >
      { children }
    </div>
  );
}
