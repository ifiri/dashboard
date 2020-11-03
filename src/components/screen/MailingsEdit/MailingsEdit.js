import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Dropdown, {
  DropdownItem,
  DropdownHeader,
  DropdownDivider
} from '@/components/common/Dropdown';
import PageLayout from '@/components/common/PageLayout';
import Icon from '@/components/common/Icon';
import Select from '@/components/common/Select';
import FiltersConditions from '@/components/common/FiltersConditions';
import FiltersToggle from '@/components/common/FiltersToggle';

import useOutsideClick from '@/hooks/useOutsideClick';

import SubscribersTable from './modules/SubscribersTable';

import { SUBSCRIBERS } from './MailingsEdit.constants';
import styles from './MailingsEdit.module.scss';

const CustomHeader = ({ title, renderedActions }) => {
  const [isTitleEditable, setTitleEditableState] = useState(false);

  const titleRef = useRef(null);

  useOutsideClick(titleRef, () => setTitleEditableState(false));

  useEffect(() => {
    if (!isTitleEditable) {
      return;
    }

    titleRef.current.focus();
  }, [isTitleEditable]);

  return (
    <>
      <div className={ styles['breadcrumbs'] }>
        <Link
          to="/mailings"
          className={ styles['breadcrumbs-item'] }
        >
          Рассылки
        </Link>
        <Icon name="arrow-right" className={ styles['breadcrumbs-separator'] } />
        <h1
          ref={ titleRef }
          className={
            classnames(styles['breadcrumbs-item'], styles['is-active'])
          }
          contenteditable={ '' + isTitleEditable }
          onInput={ (e) => console.log(e.target.textContent) }
        >
          { title }
        </h1>

        <Button
          variant="ghost"
          className={ styles['edit-title-button'] }
          onClick={ () => setTitleEditableState(true) }
        >
          <Icon name="edit" width={ 20 } />
        </Button>
      </div>

      <div className={ styles['actions'] }>
        {
          renderedActions.map(renderedAction => renderedAction)
        }
      </div>
    </>
  );
}

export default function MailingsEdit() {
  const [sendingTimeMode, setSendingTimeMode] = useState(null);

  const onSelectSendingTime = (value) => {
    setSendingTimeMode(value.key);
  };

  return (
    <PageLayout
      title="Новая рассылка от 20.06.2020"
      headerRender={
        (title, renderedActions) => <CustomHeader
          title={ title }
          renderedActions={ renderedActions }
        />
      }
      headerActions={[
        {
          type: 'cancel',
          render: 'Отмена',
          handler: () => {},
        },
        {
          type: 'publish',
          render: 'Отправить',
          handler: () => {},
        }
      ]}
      type="edit"
    >
      <section className={ styles['mailing-form-layout'] }>

        <div className={ styles['settings'] }>
          <div className={ styles['settings-primary'] }>
            <div className={ styles['settings-primary-item'] }>
              <Select
                label="Канал рассылки"
                placeholder="Выберите канал"
                external={ true }
                options={[
                  {
                    key: 'cocka',
                    content: 'Cocka'
                  },
                ]}
              />
            </div>

            <div className={ styles['settings-primary-item'] }>
              <Select
                label="Когда сделать рассылку"
                placeholder="Выберите время"
                external={ true }
                onChange={ onSelectSendingTime }
                options={[
                  {
                    key: 'now',
                    content: 'Сейчас'
                  },
                  {
                    key: 'date',
                    content: 'В определенное время'
                  },
                ]}
              />
            </div>

            {
              sendingTimeMode === 'date' && (
                <div
                  className={
                    classnames(
                      styles['settings-datetime']
                    )
                  }
                >
                  <Form.Group className={ styles['settings-date'] }>
                    <Form.Label>Дата</Form.Label>
                    <Form.Control className={ styles['date-input'] } type="text" placeholder="10.10.2020" />
                  </Form.Group>
                  <Form.Group className={ styles['settings-time'] }>
                    <Form.Label>Время</Form.Label>
                    <div className={ styles['settings-time-group'] }>
                      <Form.Control className={ styles['time-input'] } type="text" placeholder="" />
                      <Form.Control className={ styles['time-input'] } type="text" placeholder="" />
                    </div>
                  </Form.Group>
                </div>
              )
            }
          </div>

          <section className={ styles['recipients'] }>
            <header className={ styles['recipients-header'] }>
              <h5 className={ styles['recipients-title'] }>
                Кому отправить сообщения рассылки (6)
              </h5>

              <div className={ styles['recipients-filters'] }>
                <Dropdown
                  as={ Button }
                  size="sm"
                  variant="ghost"
                  header="Добавить фильтр"
                  className={ styles['recipients-filters-dropdown'] }
                  toggleClassName={ styles['recipients-filters-toggle'] }
                  toggleContent={
                    <>
                      <FiltersToggle
                        className={ styles['recipients-filters-toggle-icon'] }
                        countClassName={ styles['recipients-filters-toggle-count'] }
                        filtersCount={ 1 }
                      />

                      Применить фильтр
                    </>
                  }
                >
                  <DropdownItem>Метка</DropdownItem>
                  <DropdownItem>Дата последнего контакта</DropdownItem>
                  <DropdownItem>Дата подписки</DropdownItem>
                  <DropdownItem>Количество онлайн-чатов</DropdownItem>

                  <DropdownDivider />

                  <DropdownHeader variant="secondary">
                    Системные поля
                  </DropdownHeader>
                  <DropdownItem>Имя</DropdownItem>
                  <DropdownItem>Email</DropdownItem>
                  <DropdownItem>Телефон</DropdownItem>

                  <DropdownDivider />

                  <DropdownHeader variant="secondary">
                    Пользовательские поля
                  </DropdownHeader>
                  <DropdownItem>Заинтересован</DropdownItem>
                  <DropdownItem>Тестовое</DropdownItem>
                </Dropdown>
              </div>

              <FiltersConditions className={ styles['recipients-filters-conditions'] } />
            </header>

            <SubscribersTable
              items={ SUBSCRIBERS }
            />
            <div className={ styles['subscribers-count'] }>
              <Icon name="people-filled" className={ styles['subscribers-count-icon'] } />
              и еще 567 подписчиков
            </div>
          </section>
        </div>

        <section className={ styles['messages'] }>
          <article className={ styles['message'] }>
            <h5 className={ styles['message-title'] }>Сообщение №1</h5>

            <div className={ styles['message-controls'] }>
              <Button variant="ghost" className={ styles['message-control'] }>
                <Icon name="brackets" width={ 14 } />
              </Button>
              <Button variant="ghost" className={ styles['message-control'] }>
                <Icon name="smile" width={ 14 } />
              </Button>

              <span className={ styles['message-text-limit'] }>0/4000</span>
            </div>
            <Form.Control
              as="textarea"
              rows={ 3 }
              className={ styles['message-input']}
              placeholder="Текст сообщения"
              onChange={ () => {} }
            />
            <Button
              variant="outline-dark"
              className={ styles['message-button-create'] }
            >
              + Добавить кнопку
            </Button>
          </article>

          <Button size="lg" variant="secondary" className={ styles['message-add-button'] }>+ Добавить сообщение</Button>
        </section>

      </section>
    </PageLayout>
  );
}
