import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '@/assets/logo.svg';

import styles from './Logo.module.scss';

export default function Logo({ clickable = true, ...rest }) {
  const logoIconComponent = (
    <LogoIcon
      className={ styles.logo }
      { ...rest }
    />
  );

  if (clickable) {
    return (
      <Link to="/">
        { logoIconComponent }
      </Link>
    );
  }
  
  return logoIconComponent;
}
