import React from 'react';

import PageContent from './modules/PageContent';
import PageHeader from './modules/PageHeader';
import PageSidebar from './modules/PageSidebar';

import styles from './PageLayout.module.scss';

export default function PageLayout({ title, headerRender, children }) {
  return (
    <div className={ styles.layout }>
      <PageHeader
        title={ title }
        headerRender={ headerRender }
      />

      <PageSidebar />

      <PageContent>
        { children }
      </PageContent>
    </div>
  );
}
