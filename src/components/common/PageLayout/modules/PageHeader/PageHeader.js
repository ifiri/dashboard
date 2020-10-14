import React from 'react';
import isFunction from 'lodash/isFunction';

import styles from './PageHeader.module.scss';

export default function PageHeader({ title, headerRender }) {
  const isCustomHeaderRender = isFunction(headerRender);

  if (isCustomHeaderRender) {
    return (
      <header className={ styles.header }>
        { headerRender.call(this, title) }
      </header>
    );
  }

  return (
    <header className={ styles.header }>
      <h1 className={ styles.title }>
        { title }
      </h1>
    </header>
  );
}
