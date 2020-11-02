import React from 'react';
import classnames from 'classnames';

import styles from './PlaceholderSubtitle.module.scss';

export default function PlaceholderSubtitle({ className, children }) {
  const componentClasses = classnames(styles['placeholder-subtitle'], className);
  
  return (
    <div className={ componentClasses }>
      { children }
    </div>
  );
}
