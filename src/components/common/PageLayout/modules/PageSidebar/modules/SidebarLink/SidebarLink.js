import React from 'react';
import classnames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

import Icon from '@/components/common/Icon';

import SidebarSubmenu from '../SidebarSubmenu';

import styles from './SidebarLink.module.scss';

export default function SidebarLink({ to, match, label, icon, children, iconWidth = 16, className }) {
  const routeMatch = useRouteMatch(match || to);

  const classes = classnames({
    [styles.item]: true,
    [styles['is-active']]: !!routeMatch,
    [styles['is-iconed']]: !!icon,
    [className]: !!className,
  });

  return (
    <div className={ classes }>
      <Link
        to={ to }
        className={ styles.link }
      >
        {
          !!icon && <div className={ styles.icon }>
            <Icon name={ icon } width={ iconWidth } />
          </div>
        }
        
        { label }
      </Link>
      {
        !!children && <SidebarSubmenu
          className={ styles.submenu }
          items={ children }
        />
      }
    </div>
  );
}
