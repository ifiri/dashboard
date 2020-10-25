import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Select from '@/components/common/Select';
import TagInput from '@/components/common/TagInput';
import Modal, { 
  ModalHeader,
  ModalTitle,
  ModalBody,
} from '@/components/common/Modal';
import ProjectInfo from '@/components/common/ProjectInfo';
import Icon from '@/components/common/Icon';

import styles from './AddNewKeywordModal.module.scss';

// TODO refactor it
export default function AddNewKeywordModal({ isOpen, onClose, ...rest }) {
  const [currentStep, setCurrentStep] = useState('add-keyword');

  return (
    <Modal isOpen={ isOpen }
      onClose={ onClose }>
      <ModalHeader
        onClose={ onClose }
        isClosable={ true }
      >
        <ModalTitle>Создание ключевого слова</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form className={ styles['add-keyword-form'] }>
          <div className={ styles['add-keyword-form-tags'] }>
            <TagInput
              label="Ключевые слова"
              placeholder="Введите слова через запятую (например, “привет, сколько стоит, найти” и т.д.)"
              name="tags"
            />
          </div>

          <Select
            label="Какой бот должен запуститься?"
            placeholder={ (state) => {
              if (!state) {
                return 'Выберите бота';
              }

              return (
                <div className={ styles['bot-header'] }>
                  <div className={ styles['bot-header-info'] }>
                    бот
                  </div>
                  <div className={ styles['bot-header-project'] }>
                    аккаунт
                  </div>
                  <div className={ styles['bot-header-created'] }>
                    создан
                  </div>
                </div>
              );
            } }
            options={[
              {
                key: 'option1',
                content: (
                  <div className={ styles['bot'] }>
                    <div className={ styles['bot-info'] }>
                      <Icon className={ styles['bot-info-icon'] } name="telegram" width={ 30 } />
                      <span >
                        Новый бот от 22.09.2020
                      </span>
                    </div>
                    <ProjectInfo
                      className={ styles['bot-project'] }
                      withType={ false }
                      compact
                      info={{
                        project: {
                          thumbnail: 'project-01.png',
                          title: 'Проект 01'
                        }
                      }}
                    />
                    <div className={ styles['bot-created'] }>
                      22.09.2020
                    </div>
                  </div>
                )
              },
            ]}
          />

          <footer className={ styles['add-keyword-form-footer'] }>
            <Button variant="outline-dark" onClick={ onClose }>
              Отмена
            </Button>

            <Button variant="primary" type="submit">
              Создать
            </Button>
          </footer>
        </Form>
      </ModalBody>
    </Modal>
  );
}
