import React from 'react';

import PageContent from './modules/PageContent';
import PageHeader from './modules/PageHeader';
import PageSidebar from './modules/PageSidebar';

import styles from './PageLayout.module.scss';

export default function PageLayout({ title, headerActions, headerRender, children }) {
  return (
    <div className={ styles.layout }>
      <PageHeader
        title={ title }
        render={ headerRender }
        actions={ headerActions }
      />

      <PageSidebar />

      <PageContent>
        { children }
      </PageContent>
    </div>
  );
}
