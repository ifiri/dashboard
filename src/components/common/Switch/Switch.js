import React, { useState } from 'react';
import classnames from 'classnames';
import ExternalSwitch from 'react-switch';

import Icon from '@/components/common/Icon';

import styles from './Switch.module.scss';

export default function Switch({ label, value, name, isEnabled: passedState = true, onSwitch, className, ...rest }) {
  const [isEnabled, setSwitchState] = useState(passedState);

  const componentClasses = classnames({
    [styles.switch]: true,
    [styles['is-disabled']]: !isEnabled,

    [className]: !!className,
  });

  const toggleSwitchState = () => {
    setSwitchState(!isEnabled);

    onSwitch && onSwitch(!isEnabled, value);
  };

  return (
    <label className={ componentClasses }>
      { label && <span className={ styles.caption }>{ label }</span> }
      <ExternalSwitch
        name={ name }
        value={ value }
        onChange={ toggleSwitchState }
        checked={ isEnabled }
        uncheckedIcon={ false }
        checkedIcon={ false }
        className={ styles['switch-control'] }
      />
    </label>

  );
}
