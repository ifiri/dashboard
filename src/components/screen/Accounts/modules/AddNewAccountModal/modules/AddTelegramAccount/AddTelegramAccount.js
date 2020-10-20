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
        <ModalTitle>Добавить аккаунт Telegram</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <section className={ styles['account-addition'] }>
          <div className={ styles['account-addition-disclaimer'] }>
            <Icon
              name="telegram"
              width={ 30 }
              className={ styles['account-addition-type'] }
            />
            <span>Для добавления аккаунта Telegram необходимо создать отдельного бота Telegram и ввести его токен в поле ниже:</span>
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
                Добавить бота Telegram
              </Button>

              <Button variant="link">
                Подробнее о добавлении бота Telegram
              </Button>
            </footer>
          </Form>
          <section
            className={ styles['telegram-bot-add-instruction'] }
            data-opened={ areRulesOpened }
          >
            <h3 className={ styles['telegram-bot-add-instruction-header'] }>Как создать бота и где взять токен ключ?</h3>
            <p>1. Зайдите в приложение Telegram c существующего аккаунта (владельцем будущего бота будет аккаунт, с которого был создан бот).</p>
            <p>2. В поиске Telegram найдите аккаунт @BotFather (справа от названия аккаунта будет синяя галочка, а на аватарке крестный отец с пачкой денег).</p>
            <p>3. Напишите следующее сообщение этому аккаунту: “/newbot”.</p>
            <p>4. Telegram попросит вас написать имя вашего будущего бота (оно будет отображаться в списке контактов пользователей и в диалогах с ними).</p>
            <p>5. Telegram попросит вас написать ник вашего будущего бота (должен обязательно заканчиваться на “bot”, например, ServiceBot или Service_Bot).</p>
            <p>6. Telegram отправит вам такое сообщение:</p>
            <blockquote className={ styles['telegram-bot-add-example'] }>
              <p>Done! Congratulations on your new bot. You will find it at t.me/ServiceBot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.</p>

              <p>Use this token to access the HTTP API:
                <br/>
              <code className={ styles['telegram-bot-add-token-code'] }>105859328409:AADa5Hg-rH5QSV0BkJCeei0wRiKvG6lVDMo</code>
              <br/>
              Keep your token secure and store it safely, it can be used by anyone to control your bot.</p>

              For a description of the Bot API, see this page: https://core.telegram.org/bots/api</blockquote>
            <p>7. Текст <code className={ styles['telegram-bot-add-token'] }>105859328409:AADa5Hg-rH5QSV0BkJCeei0wRiKvG6lVDMo</code> и есть необходимый для создания вашего бота токен. Скопируйте и вставьте его в поле выше в данном окне.</p>
          </section>
        </section>
      </ModalBody>
      <ModalFooter className={ styles['telegram-bot-add-instruction-readmore'] }>
        <Button
          variant="link"
          className={ styles['telegram-bot-add-instruction-readmore-btn'] }
          onClick={ toggleRules }
        >
          { areRulesOpened ? 'свернуть' : 'читать далее' }
        </Button>
      </ModalFooter>
    </>
  );
}
