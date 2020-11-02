import React, { useState } from 'react';

import BootstrapDropdown from 'react-bootstrap/Dropdown';

import DropdownToggle from './modules/DropdownToggle';
import DropdownHeader from './modules/DropdownHeader';

import styles from './Dropdown.module.scss';

export default function Dropdown({
  as,
  toggleAs,
  toggleContent,
  togglePrefix,
  header,
  menuClassName,
  toggleClassName,
  children,
  ...rest
}) {
  const [isDropdownShown, setDropdownVisibility] = useState(false);

  const onDropdownToggle = isShown => {
    setDropdownVisibility(isShown);
  };

  return (
    <BootstrapDropdown
      as={ as }
      onToggle={ onDropdownToggle }
      { ...rest }
    >
      <div className={ styles['toggle-wrapper'] }>
        { togglePrefix ? togglePrefix : null }

        <BootstrapDropdown.Toggle
          as={ toggleAs || DropdownToggle }
          content={ toggleContent }
          isActive={ isDropdownShown }
          bsPrefix={ toggleClassName }
        />
      </div>

      <BootstrapDropdown.Menu className={ menuClassName }>
        {
          header && (
            <DropdownHeader>
              { header }
            </DropdownHeader>
          )
        }
        { children }
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};
