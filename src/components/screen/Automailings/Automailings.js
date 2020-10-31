import React, { useState } from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
import Icon from '@/components/common/Icon';

import AddNewMailingModal from './modules/AddNewMailingModal';
import AutoMailingsTable from './modules/AutoMailingsTable';

import styles from './Automailings.module.scss';

const DATA = [
  {
    'id': 1,
    'scheduledAt': 'Через 10 дней, 8:00 - 22:00, Пн, Вт, Чт, Сб, Вск',
    'name': 'Приветствие клиента',
    'dispatched': '100',
    'viewed': '1',
    'clicks': '1',
  },
  {
    'id': 2,
    'scheduledAt': 'Через 10 дней, 8:00 - 22:00, Пн, Вт, Чт, Сб, Вск',
    'name': 'Приветствие клиента',
    'dispatched': '100',
    'viewed': '1',
    'clicks': '1',
  },
];

export default function Keywords() {
  const [isModalOpen, setModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  // const [isDeleteModalOpen, setDeleteModalState] = useState(false);
  // const openDeleteModal = () => {
  //   setDeleteModalState(true);
  // };
  // const closeDeleteModal = () => setDeleteModalState(false);

  const isDataExists = !!DATA.length;

  const onAdd = () => {
    openModal();
  };

  return (
    <PageLayout
      title="Авторассылки"
      headerActions={[
        {
          type: 'keyword-add',
          render: '+ Добавить авторассылку',
          handler: onAdd,
        }
      ]}
    >
      {
        (() => {
          if (isDataExists) {
            return (
              <>
                <AutoMailingsTable
                  items={ DATA }
                />
                <Button
                  variant="outline-primary"
                  className={ styles['create-new-task'] }
                >
                  + Добавить рассылку
                </Button>
              </>
            );
          }

          return (
            <Placeholder
              name="mailings"
              width={ 380 }
            >
              Авторассылки позволяют делать серию рассылок сообщений пользователям, где каждая рассылка имеет свое заранее запланированное время отправки.
              <Button
                size="lg"
                variant="primary"
                className={ styles['add-button'] }
                onClick={ onAdd }
              >
                Создать авторассылку
              </Button>
            </Placeholder>
          );
        })()
      }

      <AddNewMailingModal
        isOpen={ isModalOpen }
        onClose={ closeModal }
      />
    </PageLayout>
  );
}
