import React from 'react';
import classnames from 'classnames';

import Switch from '@/components/common/Switch';

import styles from './DataTableSwitch.module.scss';

export default function DataTableSwitch({
  className,
  value,
  onSwitch = () => {},
  ...rest
}) {
  const componentClasses = classnames(styles['table-switch'], className);

  return (
    <div
      className={ componentClasses }
      { ...rest }
    >
      <Switch
        value={ value }
        name="_disabled[]"
        onSwitch={ onSwitch }
        className={ styles['switch-element'] }
      />
    </div>
  );
}
