import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './User.module.scss';

export default function User({ name, avatar, className, ...rest }) {
  const userClasses = classnames(styles.user, className);

  return (
    <div
      className={ userClasses }
      { ...rest }
    >
      <img
        className={ styles.avatar }
        src={ avatar }
      />
      <span className={ styles.username }>
        { name }
      </span>
    </div>
  );
}
