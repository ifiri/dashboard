import React from 'react';

import Modal from 'react-bootstrap/Modal';

export default function ModalBody({ children, ...rest }) {
  return (
    <Modal.Body { ...rest }>
      { children }
    </Modal.Body>
  );
}
