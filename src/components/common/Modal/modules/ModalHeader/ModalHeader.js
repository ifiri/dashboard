import React from 'react';
import classnames from 'classnames';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Icon from '@/components/common/Icon';

import styles from './ModalHeader.module.scss';

export default function ModalHeader({
  gotoPreviousStep,
  isClosable,
  onClose,
  onBack,
  className,
  children,
  ...rest
}) {
  const headerClasses = classnames(
    styles['modal-header'],
    className
  );

  return (
    <Modal.Header
      className={ headerClasses }
      { ...rest }
    >
      {
        !!gotoPreviousStep && (
          <Button
            variant="link"
            className={ styles['modal-header-back'] }
            onClick={ gotoPreviousStep }
          >
            <Icon
              name="chevron-left"
              width={ 24 }
              onClick={ onBack }
            />
          </Button>
        )
      }

      { children }

      {
        isClosable && (
          <Button
            variant="link"
            className={ styles['modal-header-close'] }
          >
            <Icon
              name="close"
              width={ 16 }
              onClick={ onClose }
            />
          </Button>
        )
      }
    </Modal.Header>
  );
}
