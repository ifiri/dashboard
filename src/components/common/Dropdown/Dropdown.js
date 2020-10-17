import React, { useState } from 'react';
import classnames from 'classnames';

import BootstrapDropdown from 'react-bootstrap/Dropdown';

import DropdownToggle from './modules/DropdownToggle';
import DropdownHeader from './modules/DropdownHeader';

export default function Dropdown({ as, toggleAs, toggleContent, header, children, ...rest }) {
  const [isDropdownShown, setDropdownVisibility] = useState(false);

  const onDropdownToggle = isShown => {
    setDropdownVisibility(isShown);
  };

  return (
    <BootstrapDropdown
      as={ as }
      onToggle={ onDropdownToggle }
    >
      <BootstrapDropdown.Toggle
        as={ toggleAs || DropdownToggle }
        content={ toggleContent }
        isActive={ isDropdownShown }
      />
      <BootstrapDropdown.Menu>
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
