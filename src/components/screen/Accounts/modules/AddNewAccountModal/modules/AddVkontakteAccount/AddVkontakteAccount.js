import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ProjectInfo from '@/components/common/ProjectInfo';
import { 
  ModalHeader,
  ModalTitle,
  ModalBody,
} from '@/components/common/Modal';
import Icon from '@/components/common/Icon';

import styles from '../../AddNewAccountModal.module.scss';

export default function AddVkontakteAccount({ onClose, setCurrentStep, gotoPreviousStep }) {
  return (
    <>
      <ModalHeader onClose={ onClose } isClosable={ true } gotoPreviousStep={ gotoPreviousStep }>
        <ModalTitle>Добавить аккаунт Facebook</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <section className={ styles['account-addition'] }>
          <div className={ styles['account-addition-disclaimer'] }>
            <Icon
              name="vk"
              width={ 30 }
               className={ styles['account-addition-type'] }
            />
            <span>В вашем аккаунте <strong>Cribi</strong> на <strong>Vkontakte</strong> было найдено 3 страницы.</span>
          </div>
          <div>
            <p className={ styles['account-addition-pages-disclaimer'] }>
              Выберите страницу, к которой будут привязаны созданные на нашем сервисе боты:
            </p>
            <section className={ styles['account-addition-pages-list'] }>
              <div className={ styles['account-addition-pages-item'] }>
                <ProjectInfo
                  withType={ false }
                  info={{
                    project: {
                      thumbnail: 'project-01.png',
                      title: 'Проект 01'
                    }
                  }}
                />

                <Button
                  variant="primary"
                  className={ styles['account-addition-pages-connect'] }
                >
                  Подключить
                </Button>
              </div>
              <div className={ styles['account-addition-pages-item'] }>
                <ProjectInfo
                  withType={ false }
                  info={{
                    project: {
                      thumbnail: 'project-01.png',
                      title: 'Проект 01'
                    }
                  }}
                />

                <Button
                  variant="primary"
                  className={ styles['account-addition-pages-connect'] }
                >
                  Подключить
                </Button>
              </div>
            </section>
          </div>
        </section>
      </ModalBody>
    </>
  );
}
