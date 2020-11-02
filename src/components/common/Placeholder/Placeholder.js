import React from 'react';
import classnames from 'classnames';

import { PLACEHOLDERS_MAP } from './Placeholder.constants';

import styles from './Placeholder.module.scss';

export default function Placeholder({
  className,
  name,
  width = 196,
  children,
  ...rest
}) {
  const componentClasses = classnames(styles['placeholder'], className);

  const PlaceholderComponent = PLACEHOLDERS_MAP[name];

  if (!PlaceholderComponent) {
    throw new Error(`Placeholder for ${name} wasn't found`);
  }

  return (
    <div className={ componentClasses }>
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
