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

import styles from '../../AddNewAccountModal.module.scss';

export default function AddTelegramAccount({ onClose, setCurrentStep, gotoPreviousStep, ...rest }) {
  const [areRulesOpened, setRulesState] = useState(false);

  const toggleRules = () => {
    setRulesState(!areRulesOpened);
  };

  return (
    <>
      <ModalHeader onClose={ onClose } isClosable={ true } gotoPreviousStep={ gotoPreviousStep }>
        <ModalTitle>Добавить аккаунт Viber</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <section className={ styles['account-addition'] }>
          <div className={ styles['account-addition-disclaimer'] }>
            <Icon
              name="telegram"
              width={ 30 }
              className={ styles['account-addition-type'] }
            />
            <span>Для добавления аккаунта Viber необходимо создать отдельного бота Telegram и ввести его токен в поле ниже:</span>
          </div>
          <Form className={ styles['telegram-bot-add-form'] }>
            <Form.Group controlId="tgtoken">
              <Form.Control
                type="text"
                name="token"
                placeholder="Введите сюда Токен-ключ"
                className={ styles['telegram-bot-add-form-input'] }
              />
            </Form.Group>

            <footer className={ styles['telegram-bot-add-form-footer'] }>
              <Button variant="primary" type="submit">
                Добавить бота Viber
              </Button>

              <Button variant="link">
                Подробнее о добавлении бота Viber
              </Button>
            </footer>
          </Form>
          <section
            className={ styles['telegram-bot-add-instruction'] }
            data-opened={ true }
          >
            <h3 className={ styles['telegram-bot-add-instruction-header'] }>Как создать бота и где взять токен ключ?</h3>
            <p>1. Перейдите в Viber Admin Panel и авторизуйтесь с помощью своего мобильного телефона.</p>
            <p>2.Перейдите в раздел правого меню “Создать бот”, далее заполните все поля справа и нажмите Create</p>
            <p>3. Всплывет окошко успешного создания бота с токеном вида <code className={ styles['telegram-bot-add-token-code'] }>4m25e782w64048f1-154cf82152c03c19-584bff1cka653c4b</code></p>
            <p>4. Скопируйте и вставьте токен в поле выше в данном окне.</p>
          </section>
        </section>
      </ModalBody>
    </>
  );
}
