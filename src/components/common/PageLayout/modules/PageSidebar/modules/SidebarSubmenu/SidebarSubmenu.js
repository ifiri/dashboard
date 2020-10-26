import React from 'react';
import classnames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

import Icon from '@/components/common/Icon';

import SidebarLink from '../SidebarLink';

import styles from './SidebarSubmenu.module.scss';

export default function SidebarSubmenu({ items, className }) {
  const submenuClasses = classnames(styles['sidebar-submenu'], className);
  
  return (
    <div className={ submenuClasses }>
      { items.map(item => <SidebarLink
        key={ item.to }
        className={ styles.link }
        { ...item }
      />) }
    </div>
  );
}
