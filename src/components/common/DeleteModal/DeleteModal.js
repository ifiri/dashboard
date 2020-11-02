import React from 'react';

import Button from 'react-bootstrap/Button';

import Modal, {
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '@/components/common/Modal';

export default function DeleteModal({
  title,
  children,
  isOpen,
  onClose,
  onDelete,
}) {
  return (
    <Modal isOpen={ isOpen } onClose={ onClose } size="sm">
      <ModalHeader onClose={ onClose } isClosable>
        <ModalTitle>{ title }</ModalTitle>
      </ModalHeader>
      <ModalBody>
        { children }
      </ModalBody>
      <ModalFooter>
        <Button variant="outline-dark" onClick={ onClose }>Отмена</Button>
        <Button variant="danger">Удалить</Button>
      </ModalFooter>
    </Modal>
  );
}
