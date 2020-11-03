import React, { useContext } from 'react';
import classnames from 'classnames';

import ThemeContext from '../../ThemeContext';

import styles from './DataTableCell.module.scss';

export default function DataTableCell({
  className,
  type,
  width,
  isHead = false,
  children,
  ...rest
}) {
  const context = useContext(ThemeContext);
  const theme = (context && context.theme) || context || 'default';

  const componentClasses = classnames({
    [styles['table-cell']]: !isHead, 
    [styles['table-head-cell']]: isHead,

    [styles[`table-cell-${type}`]]: !!styles[`table-cell-${type}`],

    [styles['table-cell-auto']]: !className && typeof width !== 'undefined',

    [styles[`theme-${theme}`]]: !!theme,

    [className]: !!className,
  });

  return (
    <div
      className={ componentClasses }
      style={ width && {
        width,
      }}
      { ...rest }
    >
      { children }
    </div>
  );
}
