import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

import Modal, {
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '@/components/common/Modal';

export default function DeleteBotModal({ isOpen, onClose, ...rest }) {
  return (
    <Modal isOpen={ isOpen } onHide={ onClose }>
      <ModalHeader onClose={ onClose } isClosable>
        <ModalTitle>Вы уверены, что хотите удалить этот бот?</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <p>Бот будет полностью удален из системы, включая все шаги и настройки.</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-dark">Отмена</Button>
        <Button variant="danger">Удалить</Button>
      </ModalFooter>
    </Modal>
  );
}
