import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownItem({ children, ...rest }) {
  return (
    <Dropdown.Item { ...rest } >
      { children }
    </Dropdown.Item>
  );
}
