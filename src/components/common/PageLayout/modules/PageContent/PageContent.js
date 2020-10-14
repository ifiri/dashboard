import React from 'react';

import styles from './PageContent.module.scss';

export default function PageContent({ children }) {
  return (
    <main className={ styles.content }>
      { children }
    </main>
  );
}
