import React from 'react';

import styles from './ReadableDate.module.scss';

export default function ReadableDate({ date, ...rest}) {
  return (
    <div className={ styles['readable-date'] }>
      <time className={ styles['readable-date-representation'] }>
        2 месяца назад
      </time>
      <time>
        { date }
      </time>
    </div>
  );
}
