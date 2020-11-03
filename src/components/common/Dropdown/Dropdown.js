import React, { useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

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
      show={ isDropdownShown }
      { ...rest }
    >
      <div className={ styles['toggle-wrapper'] }>
        { togglePrefix ? togglePrefix : null }

        <BootstrapDropdown.Toggle
          as={ toggleAs || DropdownToggle }
          content={ toggleContent }
          isActive={ isDropdownShown }
          bsPrefix={ toggleClassName }
          className={ toggleClassName }
        />
      </div>
      <CSSTransition
        in={ isDropdownShown }
        timeout={ 250 }
        classNames="slide"
        onEnter={ () => {} }
        onExited={ () => {} }
      >
        <BootstrapDropdown.Menu
          className={
            classnames(
              styles['dropdown-menu'],
              menuClassName
            )
          }
        >
          {
            header && (
              <DropdownHeader>
                { header }
              </DropdownHeader>
            )
          }
          { children }
        </BootstrapDropdown.Menu>
      </CSSTransition>
    </BootstrapDropdown>
  );
};
