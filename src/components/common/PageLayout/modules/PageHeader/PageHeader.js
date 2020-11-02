import React from 'react';
import classnames from 'classnames';

import isFunction from 'lodash/isFunction';

import Button from 'react-bootstrap/Button';

import styles from './PageHeader.module.scss';

export default function PageHeader({ title, render, type, actions = [] }) {
  const componentClasses = classnames({
    [styles.header]: true,
    [styles[`type-${type}`]]: !!type,
  });

  const isCustomHeaderRender = isFunction(render);

  if (isCustomHeaderRender) {
    return (
      <header className={ componentClasses }>
        { render.call(this, title, actions) }
      </header>
    );
  }

  return (
    <header className={ componentClasses }>
      <h1 className={ styles.title }>
        { title }
      </h1>

      <div className={ styles['header-actions']}>
        { actions.map(({ type, render, handler, ...rest }) => {
          return <Button
            key={ type }
            className={ styles['header-action'] }
            onClick={ handler }
            { ...rest }
          >
            { render }
          </Button>;
        }) }
      </div>
    </header>
  );
}
