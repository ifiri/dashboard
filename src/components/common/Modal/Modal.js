import React from 'react';

import BootstrapModal from 'react-bootstrap/Modal';

export default function Modal({
  isOpen,
  onClose,
  size = 'md',
  children
}) {
  return (
    <BootstrapModal
      show={ isOpen }
      onHide={ onClose }
      size={ size }
    >
      { children }
    </BootstrapModal>
  );
};
