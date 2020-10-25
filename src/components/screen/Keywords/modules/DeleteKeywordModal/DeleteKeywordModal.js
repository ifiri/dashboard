import React from 'react';

import Button from 'react-bootstrap/Button';

import Modal, {
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '@/components/common/Modal';

export default function DeleteKeywordModal({ isOpen, onClose, ...rest }) {
  return (
    <Modal isOpen={ isOpen } onClose={ onClose } size="sm">
      <ModalHeader onClose={ onClose } isClosable>
        <ModalTitle>Вы уверены, что хотите удалить ключевое слово?</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <p>Ключевое слово будет полностью удалено из системы..</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-dark">Отмена</Button>
        <Button variant="danger">Удалить ключевое слово</Button>
      </ModalFooter>
    </Modal>
  );
}
