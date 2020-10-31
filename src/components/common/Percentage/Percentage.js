import React from 'react';

import styles from './Percentage.module.scss';

export default function Percentage({ value, from = 100 }) {
  const percentFromValue = Math.round((100 * value) / from);

  return (
    <div className={ styles['percentage'] }>
      { value }
      <span className={ styles['percentage-percent'] }>
        ({ percentFromValue }%)
      </span>
    </div>
  );
}
