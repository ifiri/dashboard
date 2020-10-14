import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Logo from '@/components/common/Logo';

import SidebarLink from './modules/SidebarLink';

import { SIDEBAR_LINKS } from './PageSidebar.constants';

import styles from './PageSidebar.module.scss';

export default function PageSidebar() {
  return (
    <aside className={ styles.sidebar }>
      <Logo height={ 20 } />

      <Nav className={ styles.nav }>
        {
          SIDEBAR_LINKS.map(linkProps => 
            <SidebarLink key={ linkProps.to } { ...linkProps } />
          )
        }
      </Nav>
    </aside>
  );
}
