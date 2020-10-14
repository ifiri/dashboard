import React from 'react';
import classnames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

import Icon from '@/components/common/Icon';

import styles from './SidebarLink.module.scss';

export default function SidebarLink({ to, label, icon, iconWidth = 16 }) {
  const match = useRouteMatch(to);

  const classes = classnames({
    [styles.item]: true,
    [styles['is-active']]: !!match,
  });

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
}
