import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import { ReactComponent as LogoIcon } from '@/assets/logo.svg';

import Icon from '@/components/common/Icon';

import { useRouteMatch, useLocation } from "react-router-dom";


import styles from './Audience.module.scss';

const SIDEBAR_LINKS = [
  {
    label: 'Аккаунты',
    to: '/accounts',
    icon: 'chain',
  },
  {
    label: 'Автоматизация',
    to: '/automatization',
    icon: 'chain',
  },
  {
    label: 'Аудитория',
    to: '/audiences',
    icon: 'audience',
  },
  {
    label: 'Онлайн-чат',
    to: '/chat',
    icon: 'smile-filled',
  },
  {
    label: 'Рассылки',
    to: '/mailings',
    icon: 'mark-list-filled',
  },
  {
    label: 'Статистика',
    to: '/stats',
    icon: 'palette',
    iconWidth: 24,
  },
];

const SidebarLink = ({ to, label, icon, iconWidth = 16 }) => {
  const match = useRouteMatch(to);

  const classes = classnames({
    [styles.item]: true,
    [styles['is-active']]: !!match,
  });

  const isLinkActive = true;

  return (
    <Link
      to={ to }
      className={ classes }
    >
      <div className={ styles.icon }>
        <Icon name={ icon } width={ iconWidth } />
      </div>
      { label }
    </Link>
  );
};

export default function Audience() {
  

  return (
    <div className={ styles.layout }>
      <header className={ styles.header }>
          asdadasd
      </header>

      <aside className={ styles.sidebar }>
        <Link to="/">
          <LogoIcon className={ styles.logo } />
        </Link>

        <Nav className={ styles.nav }>
          {
            SIDEBAR_LINKS.map(linkProps => 
              <SidebarLink key={ linkProps.to } { ...linkProps } />
            )
          }
        </Nav>
      </aside>

      <main className={ styles.content }>
          asdasdasd
      </main>
    </div>
  );
}
