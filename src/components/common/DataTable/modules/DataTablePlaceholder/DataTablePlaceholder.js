import React, { useContext } from 'react';
import classnames from 'classnames';

import styles from './DataTablePlaceholder.module.scss';

export default function DataTablePlaceholder({ className, children }) {
  const componentClasses = classnames(styles['table-placeholder'], className);

  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
}
