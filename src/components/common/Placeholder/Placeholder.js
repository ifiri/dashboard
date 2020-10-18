import React from 'react';

import { PLACEHOLDERS_MAP } from './Placeholder.constants';

import styles from './Placeholder.module.scss';

export default function Placeholder({ name, width = 196, children, ...rest }) {
  const PlaceholderComponent = PLACEHOLDERS_MAP[name];

  if (!PlaceholderComponent) {
    throw new Error(`Placeholder for ${name} wasn't found`);
  }

  return (
    <div className={ styles['placeholder'] }>
      <PlaceholderComponent
        width={ width }
        { ...rest }
      />

      <div className={ styles['placeholder-description'] }>
        { children }
      </div>
    </div>
  );
}
