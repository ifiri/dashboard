import React from 'react';
import classnames from 'classnames';

import Modal from 'react-bootstrap/Modal';

import styles from './ModalFooter.module.scss';

export default function ModalFooter({ className, children, ...rest }) {
  const footerClasses = classnames(
    styles['modal-footer'],
    className
  );

  return (
    <Modal.Footer className={ footerClasses } { ...rest }>
      { children }
    </Modal.Footer>
  );
}
