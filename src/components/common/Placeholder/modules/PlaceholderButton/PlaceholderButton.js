import React from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';

import styles from './PlaceholderButton.module.scss';

export default function PlaceholderButton({ onClick, className, children }) {
  const componentClasses = classnames(styles['button'], className);
  
  return (
    <Button
      size="lg"
      variant="primary"
      className={ componentClasses }
      onClick={ onClick }
    >
      { children }
    </Button>
  );
}
