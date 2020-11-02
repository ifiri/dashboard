import React from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';
import Icon from '@/components/common/Icon';

import styles from './Tag.module.scss';

export default function Tag({ text, onDelete, className, ...rest }) {
  const componentClasses = classnames(styles['tag'], className);

  return (
    <div className={ componentClasses }>
      { text }

      <Button
        className={ styles['tag-close'] }
        variant="link"
        onClick={ onDelete }
      >
        <Icon name="close" width={ 10 } />
      </Button>
    </div>
  );
}
