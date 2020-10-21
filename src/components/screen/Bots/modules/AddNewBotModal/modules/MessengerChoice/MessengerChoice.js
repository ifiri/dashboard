import React from 'react';

import Button from 'react-bootstrap/Button';

import Modal, { 
  ModalHeader,
  ModalTitle,
  ModalBody,
} from '@/components/common/Modal';
import ProjectInfo from '@/components/common/ProjectInfo';
import Icon from '@/components/common/Icon';

import styles from './MessengerChoice.module.scss';

export default function MessengerChoice({
  isOpen,
  onClose,
  currentStep,
  setCurrentStep,
  gotoPreviousStep,
  ...rest
}) {
  const onSelectBot = botName => () => {
    setCurrentStep('adding');
  };

  return (
    <>
      <ModalHeader
        onClose={ onClose }
        isClosable={ true }
      >
        <ModalTitle>Создать бота</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div className={ styles['messengers-list-description'] } >
          Для какого мессенджера создать бот?
        </div>

        <section className={ styles['messengers-list'] }>
          <article className={ styles['messenger'] } onClick={ onSelectBot('whatsapp') }>
            <Icon
              name="whatsapp"
              width={ 30 }
              className={ styles['messenger-icon'] }
            />
            
            <span>Бот для WhatsApp</span>
          </article>

          <article className={ styles['messenger'] } onClick={ onSelectBot('facebook') }>
            <Icon
              name="facebook"
              width={ 30 }
              className={ styles['messenger-icon'] }
            />
            
            <span>Бот для Facebook</span>
          </article>

          <article className={ styles['messenger'] } onClick={ onSelectBot('telegram') }>
            <Icon
              name="telegram"
              width={ 30 }
              className={ styles['messenger-icon'] }
            />
            
            <span>Бот для Telegram</span>
          </article>

          <article className={ styles['messenger'] } onClick={ onSelectBot('viber') }>
            <Icon
              name="viber"
              width={ 30 }
              className={ styles['messenger-icon'] }
            />
            
            <span>Бот для Viber</span>
          </article>

          <article className={ styles['messenger'] } onClick={ onSelectBot('vk') }>
            <Icon
              name="vk"
              width={ 30 }
              className={ styles['messenger-icon'] }
            />
            
            <span>Бот для Vkontakte</span>
          </article>
        </section>
      </ModalBody>
    </>
  );
}
