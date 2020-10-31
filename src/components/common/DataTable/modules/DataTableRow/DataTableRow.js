import React, { useContext } from 'react';
import classnames from 'classnames';

import ThemeContext from '../../ThemeContext';

import styles from './DataTableRow.module.scss';

export default function DataTableRow({ isHead = false, isDisabled = false, children, className, ...rest }) {
  const context = useContext(ThemeContext);
  const theme = context.theme || context;

  console.log(context);

  const componentClasses = classnames({
    [styles['table-row']]: !isHead,
    [styles['table-head-row']]: isHead,

    [styles[`theme-${theme}`]]: !!theme,
    
    [styles[`is-disabled`]]: isDisabled,

    [className]: !!className,
  });

  return (
    <div className={ componentClasses } { ...rest }>
      { children }
    </div>
  );
}
