import React from 'react';
import classnames from 'classnames';

import Icon from '@/components/common/Icon';

import styles from './DataTableDragControl.module.scss';

export default function DataTableDragControl({
  className,
  onDrag = () => {},
  ...rest
}) {
  const componentClasses = classnames(styles['table-drag-control'], className);

  return (
    <div
      className={ componentClasses }
      { ...rest }
    >
      <Icon name="drag" width={ 20 } { ...rest } />
    </div>
  );
}
