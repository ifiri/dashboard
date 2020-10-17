import React from 'react';
import classnames from 'classnames';

import styles from './DropdownToggle.module.scss';

const DropdownToggle = React.forwardRef(({
  className,
  content,
  isActive,
  onClick,
  ...rest
}, ref) => {
  const toggleClasses = classnames({
    [styles['dropdown-toggle']]: true,
    [styles['dropdown-toggle-active']]: isActive,
  });

  return (
    <div
      className={ toggleClasses }
      ref={ ref }
      onClick={ onClick }
    >
      { content }
    </div>
  );
});

export default DropdownToggle;
