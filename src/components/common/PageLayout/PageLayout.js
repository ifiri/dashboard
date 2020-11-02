import React from 'react';
import classnames from 'classnames';

import PageContent from './modules/PageContent';
import PageHeader from './modules/PageHeader';
import PageSidebar from './modules/PageSidebar';

import styles from './PageLayout.module.scss';

export default function PageLayout({
  title,
  headerActions,
  headerRender,
  type,
  children
}) {
  const componentClasses = classnames({
    [styles.layout]: true,
    [styles[`type-${type}`]]: !!type,
  });

  return (
    <div className={ componentClasses }>
      

        <PageHeader
          title={ title }
          render={ headerRender }
          actions={ headerActions }
          type={ type }
        />

        <PageSidebar />

        <PageContent type={ type }>
          { children }
        </PageContent>
    </div>
  );
}
