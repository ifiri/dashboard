import React from 'react';
import classnames from 'classnames';

import Modal from 'react-bootstrap/Modal';

import styles from './ModalTitle.module.scss';

export default function ModalTitle({ className, children, ...rest }) {
  const titleClasses = classnames(
    styles['modal-title'],
    className
  );

  return (
    <Modal.Title className={ titleClasses }>
      { children }
    </Modal.Title>
  );
}
