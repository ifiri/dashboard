import React from 'react';

import { ICONS_MAP } from './Icon.constants';

export default function Icon({ name, width = 16, ...rest }) {
  const IconComponent = ICONS_MAP[name];

  if (!IconComponent) {
    throw new Error(`Icon ${name} wasn't found`);
  }

  return (
    <IconComponent
      width={ width }
      { ...rest }
    />
  );
}
