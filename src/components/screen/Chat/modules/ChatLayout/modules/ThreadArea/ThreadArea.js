import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import PerfectScrollbar from 'perfect-scrollbar';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Icon from '@/components/common/Icon';
import Placeholder from '@/components/common/Placeholder';
import Dropdown, { DropdownItem } from '@/components/common/Dropdown';

import styles from './ThreadArea.module.scss';

const items = [
  {
    time: '1588671480000',
    message: 'Как вас зовут?',
    type: 'text',
  },
  {
    time: '1588671480000',
    message: '/jason.jpg',
    type: 'image',
  },
  {
    time: '1604260574000',
    message: 'Как вас зовут?',
    type: 'text',
  },
  {
    time: '1604260574000',
    message: 'John',
    sender: {
      id: '1234567890',
      name: 'John',
      avatar: '/avatar-01.png',
    },
    type: 'text',
  },
  {
    time: '1604260574000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    sender: {
      id: '1234567890',
      name: 'John',
      avatar: '/avatar-01.png',
    },
    type: 'text',
  },
];

export default function ThreadArea({ className, children, isInfoOpened, onInfoToggle }) {
  const componentClasses = classnames(styles['thread'], className);
  const chatAreaRef = useRef(null);

  const [isSubmitDisabled, setSubmitDisabledState] = useState(true);
  const onMessageChange = (e) => {
    if (e.target.value) {
      if (isSubmitDisabled) {
        setSubmitDisabledState(false);
      }

      return;
    }

    setSubmitDisabledState(true);
  };

  const areItemsExists = true;
  
  let scrollbars;

  useEffect(() => {
    if (!chatAreaRef) {
      return;
    }

    scrollbars = new PerfectScrollbar(chatAreaRef.current);
  }, [chatAreaRef]);

  useEffect(() => {
    if (scrollbars) {
      if (!items.length) {
        console.log('adsasd');
        scrollbars.destroy();
        scrollbars = null;
        return;
      }

      scrollbars.update();
    }
  }, [scrollbars, items]);

  // TODO dry
  const Toggle = React.forwardRef(({
    content,
    isActive,
    onClick,
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

  if (!areItemsExists) {
    return (
      <Placeholder
        name="messages"
        className={ styles['placeholder'] }
        width={ 180 }
      >
        <Placeholder.Subtitle
          className={ styles['placeholder-subtitle'] }
        >
          Тут будет отображаться диалог с выбранным в левом меню подписчиком
        </Placeholder.Subtitle>
      </Placeholder>
    );
  }

  return (
    <div className={ componentClasses }>
      <div className={ styles['filters'] }>
        <Dropdown
          toggleAs={ Toggle }
          toggleContent={(
            'Не назначен'
          )}
          togglePrefix={
            <Icon
              className={ styles['filter-avatar'] }
              name="user-filled"
              width={ 30 }
            />
          }
          className={ styles['filter'] }
          menuClassName={ styles['filter-dropdown'] }
        >
          <DropdownItem>
            <img className={ styles['filter-avatar'] }  src="/avatar-01.png" />
            <span className={ styles['filter-label'] }>На себя</span>
          </DropdownItem>
          <DropdownItem>
            <img className={ styles['filter-avatar'] }  src="/avatar-01.png" />
            <span className={ styles['filter-label'] }>John</span>
          </DropdownItem>
        </Dropdown>

        <Dropdown
          toggleAs={ Toggle }
          toggleContent={(
            'Активен'
          )}
          togglePrefix={
            <span
              className={ styles['filter-status-prefix'] }
            >
              Статус:&nbsp;
            </span>
          }
          className={ styles['filter'] }
          menuClassName={ styles['filter-dropdown'] }
        >
          <DropdownItem>Активен</DropdownItem>
          <DropdownItem>Решен</DropdownItem>
        </Dropdown>

        <Button
          variant="ghost"
          className={
            classnames({
              [styles['user-info-toggle']]: true,
              [styles['is-active']]: isInfoOpened,
            })
          }
          onClick={ onInfoToggle }
        >
          <Icon name="info" width={ 30 } />
          <Icon
            name="chevron-right"
            width={ 14 }
            className={ styles['user-info-toggle-arrow'] }
          />
        </Button>
      </div>

      <section className={ styles['chat'] } ref={ chatAreaRef }>
        {(() => {
          let timeDisplayed = null;

          return items.reduce((accumulator, item, index) => {
            const sendAt = moment(+item.time);

            if (timeDisplayed && !sendAt.isSame(timeDisplayed, 'day')) {
              timeDisplayed = null;
            }

            if (!timeDisplayed) {
              const isToday = sendAt.isSame(moment(), 'day');

              accumulator.push(
                <time key={ `time-${item.time}` } className={ styles['chat-date-label'] }>
                  { isToday ? 'сегодня' : sendAt.format('DD.MM.YYYY') }
                </time>
              );

              timeDisplayed = sendAt;
            }

            accumulator.push(
              <div
                key={ `message-${item.time}-${index}` }
                className={
                  classnames({
                    [styles['chat-message']]: true,
                    [styles['is-alien']]: !!item.sender,
                  })
                }
              >
                {
                  item.sender ?
                    <img
                      src={ item.sender.avatar }
                      className={ styles['chat-message-avatar'] }
                    /> :
                    <Icon
                      name="sender"
                      className={ styles['chat-message-avatar'] }
                    />
                }

                <div
                  className={
                    classnames({
                      [styles['chat-message-text']]: true,
                      [styles['is-image']]: item.type === 'image',
                    })
                  }
                >
                  {
                    item.type === 'image' ? <img src={ item.message } /> : item.message
                  }

                  <time className={ styles['chat-message-time'] }>
                    { sendAt.format('HH:mm') }
                  </time>
                </div>
              </div>
            );

            return accumulator;
          }, [])
        })()}

        <div className={ styles['chat-message-buffer'] }></div>
      </section>

      <footer className={ styles['thread-footer'] }>
        <div className={ styles['thread-media-controls'] }>
          <Button variant="ghost" className={ styles['thread-control'] }>
            <Icon name="smile" width={ 16 } />
          </Button>
          <Button variant="ghost" className={ styles['thread-control'] }>
            <Icon name="attach" width={ 16 } />
          </Button>
        </div>

        <Form className={ styles['thread-footer-send-form'] }>
          <Form.Control
            as="textarea"
            rows={ 1 }
            className={ styles['thread-input']}
            placeholder="Написать сообщение"
            onChange={ onMessageChange }
          />

          <Button
            type="submit"
            variant="primary"
            disabled={ isSubmitDisabled }
          >
            Отправить
          </Button>
        </Form>
      </footer>
    </div>
  );
}
