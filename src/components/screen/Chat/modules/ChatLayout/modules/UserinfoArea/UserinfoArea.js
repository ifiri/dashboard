import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PerfectScrollbar from 'perfect-scrollbar';

import Button from 'react-bootstrap/Button';

import Icon from '@/components/common/Icon';
import Placeholder from '@/components/common/Placeholder';
import Dropdown, { DropdownItem } from '@/components/common/Dropdown';
import TagInput from '@/components/common/TagInput';
import Tag from '@/components/common/Tag';
import Select from '@/components/common/Select';
import DeleteModal from '@/components/common/DeleteModal';

import styles from './UserinfoArea.module.scss';

export default function UserinfoArea({ className, children }) {
  const serviceName = 'Название проекта';

  const [isUnsubscribeModalOpen, setUnsubscribeModalState] = useState(false);
  const [isRemoveModalOpen, setRemoveModalState] = useState(false);

  const componentClasses = classnames(styles['userinfo'], className);

  const scrollableRef = useRef(null);

  const [tags, setTags] = useState([
    {
      id: 1,
      text: 'Новый клиент',
    }
  ]);
  const [automailings, setAutomailings] = useState([]);

  let scrollbars;

  useEffect(() => {
    if (!scrollableRef) {
      return;
    }

    scrollbars = new PerfectScrollbar(scrollableRef.current);
  }, [scrollableRef]);

  useEffect(() => {
    if (scrollbars && tags) {
      scrollbars.update();
    }
  }, [scrollbars, tags]);

  const onTagAdd = tag => {
    setTags([
      ...tags,
      tag,
    ]);
  };

  const onAddAutomailing = automailing => {
    setAutomailings([
      ...automailings,
      automailing,
    ]);
  };

  const onUnsubscribe = () => {
    //
  };

  const onDelete = () => {
    //
  };

  return (
    <aside className={ componentClasses } ref={ scrollableRef }>
      <section className={ classnames(styles['userinfo-section'], styles['user-basic']) }>
        <img src="/avatar-01.png" className={ styles['user-basic-avatar']} />
        
        <div className={ styles['user-basic-info'] }>
          <h5 className={ styles['userinfo-section-title'] }>John</h5>

          <footer className={ styles['user-basic-actions'] }>
            <Button
              variant="link"
              className={
                classnames(styles['user-basic-action'], styles['is-unsubscribe'])
              }
              onClick={ () => setUnsubscribeModalState(true) }
            >
              Отписать
            </Button>

            <Button
              variant="link"
              className={
                classnames(styles['user-basic-action'], styles['is-delete'])
              }
              onClick={ () => setRemoveModalState(true) }
            >
              Удалить
            </Button>
          </footer>
        </div>
      </section>

      <section className={ classnames(styles['userinfo-section'], styles['user-subscription']) }>
        <h5 className={ styles['userinfo-section-title'] }>
          Подписался
        </h5>

        <time>2 месяца назад &nbsp; 25.08.2020</time>
      </section>

      <section className={ classnames(styles['userinfo-section']) }>
        <h5 className={ styles['userinfo-section-title'] }>
          Метки
        </h5>
        
        <div className={ styles['user-tags'] }>
          {
            tags.map(
              tag => (
                <Tag
                  key={ tag.id }
                  text={ tag.text }
                  className={ styles['user-tag'] }
                />
              )
            )
          }
        </div>
      </section>

      <section className={ classnames(styles['userinfo-section']) }>
        <h5 className={ styles['userinfo-section-title'] }>
          Добавить метку
        </h5>
        
        <TagInput
          placeholder="Введите название метки"
          name="tags"
          onAdd={ onTagAdd }
          showTags={ false }
        />
      </section>

      <section className={ classnames(styles['userinfo-section']) }>
        <h5 className={ styles['userinfo-section-title'] }>
          Подписать на авторассылку
        </h5>
        
        <Select
          placeholder="Выберите авторассылку"
          options={[
            {
              key: 'option1',
              content: 'Авторассылка от 20.09.2020'
            },
          ]}
          excludeOptions={ automailings }
          selectable={ false }
          onChange={ onAddAutomailing }
        />

        <div className={ styles['user-subscriptions'] }>
          {
            automailings.map(
              (automailing, index) => (
                <Tag
                  key={ automailing.key || index }
                  text={ automailing.content || automailing }
                  className={ styles['user-subscription'] }
                />
              )
            )
          }
        </div>
      </section>

      <DeleteModal
        title="Вы уверены, что хотите отписать данного пользователя?"
        isOpen={ isUnsubscribeModalOpen }
        onClose={ () => setUnsubscribeModalState(false) }
        onDelete={ onUnsubscribe }
      >
        <p>Вы не сможете подписать его обратно. Пользователь не сможет получать ваши сообщения пока снова самостоятельно не подпишется на ваш бот.</p>
      </DeleteModal>

      <DeleteModal
        title="Вы уверены, что хотите удалить всю информацию о данном пользователе?"
        isOpen={ isRemoveModalOpen }
        onClose={ () => setRemoveModalState(false) }
        onDelete={ onDelete }
      >
        <p>Вся информация о данном пользователе будет безвозвратно удалена из { serviceName }, включая всю переписку в онлайн чате и статистику.</p>
      </DeleteModal>
    </aside>
  );
}
