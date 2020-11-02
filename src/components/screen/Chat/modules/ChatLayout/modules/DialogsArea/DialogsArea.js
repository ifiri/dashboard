import React from 'react';
import classnames from 'classnames';

import Icon from '@/components/common/Icon';
import Placeholder from '@/components/common/Placeholder';
import Dropdown, { DropdownItem } from '@/components/common/Dropdown';

import styles from './DialogsArea.module.scss';

export default function DialogsArea({ className, children }) {
  const componentClasses = classnames(styles['dialogs'], className);
  
  // TODO dry
  const Toggle = React.forwardRef(({
    content,
    onClick,
    isActive,
  }, ref) => {
    return (
      <div
        className={ styles['filter-toggle'] }
        onClick={
          event => {
            event.preventDefault();
            onClick(event);
          }
        }
        ref={ ref }
      >
        { content }
        &nbsp;
        <Icon name={ isActive ? 'chevron-up' : 'chevron-down' } width={ 8 } />
      </div>
    );
  });

  return (
    <div className={ componentClasses }>
      <div className={ styles['filters'] }>
        <Dropdown
          toggleAs={ Toggle }
          toggleContent={ 'Все чаты (2)' }
          className={ styles['filter'] }
          toggleClassName={ styles['filter-toggle'] }
          menuClassName={ styles['filter-dropdown'] }
        >
          <DropdownItem>Назначенные на меня (1)</DropdownItem>
          <DropdownItem>Не назначенные (1)</DropdownItem>
        </Dropdown>

        <Dropdown
          toggleAs={ Toggle }
          toggleContent={ 'Активные (2)' }
          className={ styles['filter'] }
          menuClassName={ styles['filter-dropdown'] }
        >
          <DropdownItem>Активные (2)</DropdownItem>
          <DropdownItem>Решенные (1)</DropdownItem>
        </Dropdown>
      </div>

      <section className={ styles['dialogs-list'] }>
        <article
          className={
            classnames(
              styles['dialogs-list-item'],
              styles['is-unread'],
            )
          }
        >
          <Icon className={ styles['dialog-type'] } name="telegram" width={ 36 } />

          <div className={ styles['dialog-user'] }>
            <img src="/avatar-01.png" className={ styles['dialog-user-avatar'] } />

            <div className={ styles['user-message'] }>
              <h5 className={ styles['user-message-author'] }>
                John 
              </h5>
            
              <p className={ styles['user-message-text'] }>
                Пока не уверен, что именно...
              </p>
            </div>
          </div>

          <div className={ styles['dialog-info-meta'] }>
            <div className={ styles['dialog-info-unread-count'] }>1</div>
            <div className={ styles['dialog-info-time'] }>
              <time>14:31</time>
              <time>12.08.2020</time>
            </div>
          </div>
        </article>

        <article className={ styles['dialogs-list-item'] }>
          <Icon className={ styles['dialog-type'] } name="telegram" width={ 36 } />

          <div className={ styles['dialog-user'] }>
            <img src="/avatar-01.png" className={ styles['dialog-user-avatar'] } />

            <div className={ styles['user-message'] }>
              <h5 className={ styles['user-message-author'] }>
                John 
              </h5>
            
              <p className={ styles['user-message-text'] }>
                Сколько стоит эта вкусная конфетка?...
              </p>
            </div>
          </div>

          <div className={ styles['dialog-info-meta'] }>
            <div className={ styles['dialog-info-time'] }>
              <time>14:31</time>
              <time>12.08.2020</time>
            </div>
          </div>
        </article>
      </section>

      {
        false && <Placeholder
          name="dialogs"
          className={ styles['placeholder'] }
          width={ 180 }
        >
          <Placeholder.Subtitle
            className={ styles['placeholder-subtitle'] }
          >
            Тут будут отображаться подписчики, с которыми взаимодействовали боты или сотрудники
          </Placeholder.Subtitle>
        </Placeholder>
      }
    </div>
  );
}
