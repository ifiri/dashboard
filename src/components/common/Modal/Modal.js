import React from 'react';

import BootstrapModal from 'react-bootstrap/Modal';

export default function Modal({
  isOpen,
  onClose,
  children
}) {
  return (
    <BootstrapModal show={ isOpen } onHide={ onClose }>
      { children }
    </BootstrapModal>
  );
};
