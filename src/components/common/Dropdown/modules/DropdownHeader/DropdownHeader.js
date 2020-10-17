import React from 'react';
import classnames from 'classnames';

import Dropdown from 'react-bootstrap/Dropdown';

import styles from './DropdownHeader.module.scss';

export default function DropdownHeader({ children, variant, ...rest }) {
  const headerClasses = classnames({
    [styles['dropdown-header']]: true,
    [styles['is-secondary']]: variant === 'secondary',
  });

  return (
    <Dropdown.Header
      className={ headerClasses }
      { ...rest }
    >
      { children }
    </Dropdown.Header>
  );
}
