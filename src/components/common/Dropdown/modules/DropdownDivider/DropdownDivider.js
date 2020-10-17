import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownDivider(props) {
  return (
    <Dropdown.Divider
      { ...props }
    />
  );
}
