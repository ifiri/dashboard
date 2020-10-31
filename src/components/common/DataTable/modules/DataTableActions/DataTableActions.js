import React from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';
import Icon from '@/components/common/Icon';

import styles from './DataTableActions.module.scss';

export default function DataTableActions({
  actions = [],
  className,
  ...rest
}) {
  const componentClasses = classnames({
    [styles['table-actions']]: true, 

    [className]: !!className,
  });

  const areActionsExists = !!actions.length;

  return (
    <div
      className={ componentClasses }
      { ...rest }
    >
      {
        areActionsExists && (
          actions.map(action => {
            switch (action.type) {
              case 'remove':
                return <Button
                  className={ styles['table-action'] }
                  variant="link"
                  onClick={ action.handler }
                  key={ action.type }
                >
                  <Icon name="trash" width={ 20 } />
                </Button>;

              case 'edit':
                return <Button
                  className={ styles['table-action'] }
                  variant="link"
                  onClick={ action.handler }
                  key={ action.type }
                >
                  <Icon name="edit" width={ 20 } />
                </Button>;

              case 'copy':
                return <Button
                  className={ styles['table-action'] }
                  variant="link"
                  onClick={ action.handler }
                  key={ action.type }
                >
                  <Icon name="copy" width={ 20 } />
                </Button>;
            }
          })
        )
      }
    </div>
  );
}
