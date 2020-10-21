import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ProjectInfo from '@/components/common/ProjectInfo';
import Icon from '@/components/common/Icon';
import { 
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalBody,
} from '@/components/common/Modal';

import styles from './AddVendorBot.module.scss';

export default function AddTelegramAccount({ onClose, setCurrentStep, gotoPreviousStep, ...rest }) {
  return (
    <>
      <ModalHeader onClose={ onClose } isClosable={ true } gotoPreviousStep={ gotoPreviousStep }>
        <ModalTitle>Добавить аккаунт Telegram</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>Название бота:</Form.Label>
            <Form.Control type="text" placeholder="Введите название бота" />
          </Form.Group>


          <section className={ styles['account-creation'] }>
            <h3 className={ styles['account-creation-title'] }>К какому аккаунту привязать бот?</h3>

            {/* <div className={ styles['account-creation-disclaimer'] }> */}
            {/*   <p>Каждый бот должен быть привязан к существующему аккаунту в соответствующем мессенджере.</p> */}
            {/*   <p>Для создания бота вам сначала необходимо  добавить существующий аккаунт Telegram в наш сервис.</p> */}
            {/* </div> */}

            <section className={ styles['accounts-list'] }>
              <article className={ styles['accounts-list-item'] }>
                <ProjectInfo
                  withType={ false }
                  info={{
                    project: {
                      thumbnail: '/project-01.png',
                      title: 'Проект 01'
                    }
                  }}
                  className={ styles['accounts-list-item-info'] }
                />

                <footer className={ styles['accounts-list-item-footer'] }>
                  <Icon name="telegram" width={ 10 } className={ styles['accounts-list-item-type'] } />
                  аккаунт Telegram
                </footer>
              </article>

              <article className={ styles['accounts-list-item'] }>
                <ProjectInfo
                  withType={ false }
                  info={{
                    project: {
                      thumbnail: '/project-01.png',
                      title: 'Проект 01'
                    }
                  }}
                  className={ styles['accounts-list-item-info'] }
                />

                <footer className={ styles['accounts-list-item-footer'] }>
                  <Icon name="telegram" width={ 10 } className={ styles['accounts-list-item-type'] }  />
                  аккаунт Telegram
                </footer>
              </article>

              <Button variant="light" className={ styles['accounts-list-item-new'] }>
                <Icon name="plus" width={ 15 } className={ styles['accounts-list-item-new-icon'] } />
                Добавить аккаунт
              </Button>
            </section>
          </section>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-dark">Отмена</Button>
        <Button variant="primary" className={ styles['create-bot-btn'] }>Добавить аккаунт Telegram</Button>
      </ModalFooter>
    </>
  );
}
