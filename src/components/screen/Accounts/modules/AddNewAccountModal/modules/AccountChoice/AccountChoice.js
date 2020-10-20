import React from 'react';

import Button from 'react-bootstrap/Button';

import Modal, { 
  ModalHeader,
  ModalTitle,
  ModalBody,
} from '@/components/common/Modal';
import ProjectInfo from '@/components/common/ProjectInfo';
import Icon from '@/components/common/Icon';

import styles from '../../AddNewAccountModal.module.scss';

export default function AccountChoice({ isOpen, onClose, currentStep, setCurrentStep, gotoPreviousStep, ...rest }) {
  const onConnectClick = stepName => () => {
    setCurrentStep(stepName);
  };

  return (
    <>
      <ModalHeader
        onClose={ onClose }
        isClosable={ true }
      >
        <ModalTitle>Добавить аккаунт</ModalTitle>
      </ModalHeader>
      <ModalBody>
        Для начала необходимо добавить существующий аккаунт одного из мессенджеров, к которому в дальнейшем можно будет привязать неограниченное количество чат-ботов или автоворонок.

        <section className={ styles['accounts-list'] }>
          <article className={ styles['account'] }>
            <Icon
              name="facebook"
              width={ 30 }
              className={ styles['account-icon'] }
            />
            
            <span>Facebook</span>

            <Button
              variant="primary"
              className={ styles['account-connect-button'] }
              onClick={ onConnectClick('facebook') }
            >
              Подключить
            </Button>
          </article>

          <article className={ styles['account'] }>
            <Icon
              name="telegram"
              width={ 30 }
              className={ styles['account-icon'] }
            />
            
            <span>Telegram</span>

            <Button
              variant="primary"
              className={ styles['account-connect-button'] }
              onClick={ onConnectClick('telegram') }
            >
              Подключить
            </Button>
          </article>

          <article className={ styles['account'] }>
            <Icon
              name="viber"
              width={ 30 }
              className={ styles['account-icon'] }
            />
            
            <span>Viber</span>

            <Button
              variant="primary"
              className={ styles['account-connect-button'] }
              onClick={ onConnectClick('viber') }
            >
              Подключить
            </Button>
          </article>

          <article className={ styles['account'] }>
            <Icon
              name="vk"
              width={ 30 }
              className={ styles['account-icon'] }
            />
            
            <span>Vkontakte</span>

            <Button
              variant="primary"
              className={ styles['account-connect-button'] }
              onClick={ onConnectClick('vkontakte') }
            >
              Подключить
            </Button>
          </article>
        </section>
      </ModalBody>
    </>
  );
}
