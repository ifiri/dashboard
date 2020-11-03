import React, { useState } from 'react';
import classnames from 'classnames';

import Form from 'react-bootstrap/Form';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
import ProjectInfo from '@/components/common/ProjectInfo';
import Icon from '@/components/common/Icon';

import AccountsTable from './modules/AccountsTable';
import AddNewAccountModal from './modules/AddNewAccountModal';

const ACCOUNTS = [
  {
    'account': {
      'type': 'telegram',
      'project': {
        'title': 'Проект 1',
        'thumbnail': 'project-01.png',
      },
    },
    'createdAt': '25.08.2020',
    'bots': '2',
    'mailings': '5',
    'keywords': '19',
    'chats': '837',
  },
];

export default function Accounts() {
  const [isModalOpen, setModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  const areAccountsExists = !!ACCOUNTS.length;

  const onAccountAdd = () => {
    openModal();
  };

  return (
    <PageLayout
      title="Аккаунты"
      headerActions={[
        {
          type: 'account-add',
          render: '+ Добавить аккаунт',
          handler: onAccountAdd,
        }
      ]}
    >
      {
        (() => {
          if (areAccountsExists) {
            return (
              <AccountsTable
                items={ ACCOUNTS }
              />
            );
          }

          return (
            <Placeholder
              name="accounts"
              width={ 216 }
            >
              <div>Добавьте существующий аккаунт telegram, whats’up, facebook, viber или vkontakte, к которому в дальнейшем можно будет привязать бот.</div>
              <Placeholder.Button
                onClick={ onAccountAdd }
              >
                Добавить аккаунт
              </Placeholder.Button>
            </Placeholder>
          );
        })()
      }

      <AddNewAccountModal
        isOpen={ isModalOpen }
        onClose={ closeModal }
      />
    </PageLayout>
  );
}
