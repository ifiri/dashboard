import React, { useState } from 'react';
import classnames from 'classnames';

import Form from 'react-bootstrap/Form';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
import Icon from '@/components/common/Icon';

import KeywordsTable from './modules/KeywordsTable';
import AddNewKeywordModal from './modules/AddNewKeywordModal';
import DeleteKeywordModal from './modules/DeleteKeywordModal';

const DATA = [
  {
    'keywords': ['привет', 'пока', 'тест'],
    'bot': {
      'type': 'telegram',
      'name': 'Новый бот от 22.08.2020'
    },
  },
];

export default function Keywords() {
  const [isModalOpen, setModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  const [isDeleteModalOpen, setDeleteModalState] = useState(false);
  const openDeleteModal = () => {
    setDeleteModalState(true);
  };
  const closeDeleteModal = () => setDeleteModalState(false);

  const areBotsExists = !!DATA.length;

  const onKeywordAdd = () => {
    openModal();
  };

  return (
    <PageLayout
      title="Ключевые слова"
      headerActions={[
        {
          type: 'keyword-add',
          render: '+ Добавить ключевое слово',
          handler: onKeywordAdd,
        }
      ]}
    >
      {
        (() => {
          if (areBotsExists) {
            return (
              <KeywordsTable
                items={ DATA }
                onDelete={ openDeleteModal }
              />
            );
          }

          return (
            <Placeholder
              name="keywords"
              width={ 300 }
            >
              Ключевые слова позволяют автоматически запускать неограниченное количество ботов, в случае если пользователь напишет любое из таких слов в сообщении.

              <Placeholder.Subtitle>
                Например, ваш клиент в своем сообщении напишет слово “стоит”. По этому слову будет автоматически запущен бот, рассказывающий про цену.
              </Placeholder.Subtitle>
              <Placeholder.Button
                onClick={ onKeywordAdd }
              >
                Создать ключевое слово
              </Placeholder.Button>
            </Placeholder>
          );
        })()
      }

      <AddNewKeywordModal
        isOpen={ isModalOpen }
        onClose={ closeModal }
      />
      <DeleteKeywordModal
        isOpen={ isDeleteModalOpen }
        onClose={ closeDeleteModal }
      />
    </PageLayout>
  );
}
