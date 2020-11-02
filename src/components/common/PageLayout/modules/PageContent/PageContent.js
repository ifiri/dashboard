import React from 'react';
import classnames from 'classnames';

import styles from './PageContent.module.scss';

export default function PageContent({ type, children }) {
  const componentClasses = classnames({
    [styles.content]: true,
    [styles[`type-${type}`]]: !!type,
  });

  return (
    <main className={ componentClasses }>
      { children }
    </main>
  );
}
