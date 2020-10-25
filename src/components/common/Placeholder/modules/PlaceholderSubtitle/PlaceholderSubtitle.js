import React from 'react';

import styles from './PlaceholderSubtitle.module.scss';

export default function PlaceholderSubtitle({ children }) {
  return (
    <div className={ styles['placeholder-subtitle'] }>
      { children }
    </div>
  );
}
