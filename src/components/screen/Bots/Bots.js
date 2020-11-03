import React, { useState } from 'react';
import classnames from 'classnames';

import Form from 'react-bootstrap/Form';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
import Icon from '@/components/common/Icon';

import BotsTable from './modules/BotsTable';
import AddNewBotModal from './modules/AddNewBotModal';
import DeleteBotModal from './modules/DeleteBotModal';

const DATA = [
  {
    'type': 'telegram',
    'name': 'Новый бот от 22.09.2020',
    'account': {
      'type': 'telegram',
      'project': {
        'title': 'Проект 1',
        'thumbnail': '/project-01.png',
      },
    },
    'createdAt': '25.08.2020',
    'subscribers': '363',
    'state': 'running',
  },
  {
    'type': 'telegram',
    'name': 'Новый бот от 22.09.2020',
    'account': {
      'type': 'telegram',
      'project': {
        'title': 'Проект 1',
        'thumbnail': '/project-01.png',
      },
    },
    'createdAt': '25.08.2020',
    'subscribers': '363',
    'state': 'paused',
  },
];

export default function Bots() {
  const [isModalOpen, setModalState] = useState(false);
  const [isDeleteModalOpen, setDeleteModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  const openDeleteModal = () => {
    setDeleteModalState(true);
  };
  const closeDeleteModal = () => setDeleteModalState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const areBotsExists = !!DATA.length;

  const onAccountAdd = () => {
    openModal();
  };

  return (
    <PageLayout
      title="Боты"
    >
      {
        (() => {
          if (areBotsExists) {
            return (
              <BotsTable
                items={ DATA }
                onDelete={ openDeleteModal }
              />
            );
          }

          return (
            <Placeholder
              name="bots"
              width={ 114 }
            >
              <div>Создайте свой первый бот в telegram, whats'up, facebook, viber или vkontakte</div>
              <Placeholder.Button
                onClick={ onAccountAdd }
              >
                Создать бот
              </Placeholder.Button>
            </Placeholder>
          );
        })()
      }

      <AddNewBotModal
        isOpen={ isModalOpen }
        onClose={ closeModal }
      />

      <DeleteBotModal
        isOpen={ isDeleteModalOpen }
        onClose={ closeDeleteModal }
      />

    </PageLayout>
  );
}
