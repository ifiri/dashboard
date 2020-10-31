import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal, { 
  ModalHeader,
  ModalTitle,
  ModalBody,
} from '@/components/common/Modal';

import styles from './AddNewModal.module.scss';

export default function AddNewModal({ isOpen, onClose, ...rest }) {
  return (
    <Modal isOpen={ isOpen }
      onClose={ onClose } size="sm">
      <ModalHeader
        onClose={ onClose }
        isClosable={ true }
      >
        <ModalTitle>Создание авторассылки</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>Название</Form.Label>
            <Form.Control type="text" placeholder="Введите название авторассылки" />
          </Form.Group>

          <footer className={ styles['form-footer'] }>
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
