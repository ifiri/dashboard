import React from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';
import Icon from '@/components/common/Icon';
import Dropdown, { DropdownItem } from '@/components/common/Dropdown';

import styles from './FiltersConditions.module.scss';

export default function FiltersConditions({ className, ...rest }) {
  const conditionsClasses = classnames(
    styles['filters-conditions'],
    className
  );

  const Toggle = React.forwardRef(({
    content,
    onClick,
    ...props
  }, ref) => {
    return (
      <div
        onClick={
          event => {
            event.preventDefault();
            onClick(event);
          }
        }
        ref={ ref }
      >
        { content }
      </div>
    );
  });

  return (
    <div className={ conditionsClasses }>
      Подписчик соответствует

      <Dropdown
        toggleAs={ Toggle }
        toggleContent={ 'всем из следующих условий' }
        className={ styles['filters-conditions-type'] }
      >
        <DropdownItem>всем из следующих условий</DropdownItem>
        <DropdownItem>любому из следующих условий</DropdownItem>
      </Dropdown>

      <div className={ styles['filters-conditions-items'] }>
        <div className={ styles['filters-conditions-item'] }>
          <span
            className={ styles['filters-conditions-item-type'] }
          >
            Метка
          </span>
          =
          <span
            className={ styles['filters-conditions-item-value'] }
          >
            Новый клиент
          </span>

          <Button
            variant="link"
            size="sm"
            className={ styles['filters-conditions-item-remove'] }
          >
            <Icon
              name="close"
              width={ 10 }
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
