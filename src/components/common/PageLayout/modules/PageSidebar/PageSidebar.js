import React from 'react';
import Nav from 'react-bootstrap/Nav';

import Logo from '@/components/common/Logo';

import SidebarLink from './modules/SidebarLink';

import {
  SIDEBAR_LOGO_HEIGHT,
  SIDEBAR_LINKS
} from './PageSidebar.constants';

import styles from './PageSidebar.module.scss';

export default function PageSidebar() {
  return (
    <aside className={ styles.sidebar }>
      <Logo height={ SIDEBAR_LOGO_HEIGHT } />

      <Nav className={ styles.nav }>
        {
          SIDEBAR_LINKS.map(linkProps => {
            return <SidebarLink key={ linkProps.to } { ...linkProps } />;
          })
        }
      </Nav>
    </aside>
  );
}
