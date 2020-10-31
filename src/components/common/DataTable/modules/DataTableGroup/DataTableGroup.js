import React, { useContext } from 'react';
import classnames from 'classnames';

import ThemeContext from '../../ThemeContext';

import styles from './DataTableGroup.module.scss';

export default function DataTableGroup({
  isDisabled = false,
  isHead = false,
  children,
  className,
  ...rest
}) {
  const context = useContext(ThemeContext);
  const theme = context.theme || context;

  const componentClasses = classnames({
    [styles['table-group']]: !isHead,
    [styles['table-group-head']]: isHead,
    [styles['is-disabled']]: isDisabled,

    [styles[`theme-${theme}`]]: !!theme,

    [className]: className,
  });

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
}
