import React from 'react';
import classnames from 'classnames';

import isFunction from 'lodash/isFunction';

import Button from 'react-bootstrap/Button';

import styles from './PageHeader.module.scss';

const getActionVariant = (type) => {
  switch (true) {
    case type === 'publish':
      return 'danger';

    case type === 'cancel':
      return 'outline-dark';

    default:
      return 'primary';
  }
};

export default function PageHeader({ title, render, type, actions = [] }) {
  const componentClasses = classnames({
    [styles.header]: true,
    [styles[`type-${type}`]]: !!type,
  });

  const isCustomHeaderRender = isFunction(render);

  

  const renderActions = () => actions.map(
    ({ type, render, handler, ...rest }) => {
      const variant = getActionVariant(type);

      return <Button
        key={ type }
        className={
          classnames(
            styles['header-action'],
            styles[`type-${type}`],
          )
        }
        variant={ variant }
        onClick={ handler }
        { ...rest }
      >
        { render }
      </Button>;
    }
  );

  if (isCustomHeaderRender) {
    const prerenderedActions = renderActions();

    return (
      <header className={ componentClasses }>
        { render.call(this, title, prerenderedActions, actions) }
      </header>
    );
  }

  return (
    <header className={ componentClasses }>
      <h1 className={ styles.title }>
        { title }
      </h1>

      <div className={ styles['header-actions']}>
        { renderActions() }
      </div>
    </header>
  );
}
