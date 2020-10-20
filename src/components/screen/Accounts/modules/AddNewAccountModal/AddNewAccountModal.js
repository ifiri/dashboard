import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

import Modal, {
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from '@/components/common/Modal';
import Stepper from '@/components/common/Stepper';

import SteppingModal from '@/components/common/SteppingModal';

import { STEPS } from './AddNewAccountModal.constants';

// TODO refactor it
export default function AddNewAccountModal({ isOpen, onClose, ...rest }) {
  const [currentStep, setCurrentStep] = useState('add-account');

  return (
    <SteppingModal
      steps={ STEPS }
      isOpen={ isOpen }
      onClose={ onClose }

      currentStep={ currentStep }
      setCurrentStep={ setCurrentStep }

      isClosable={ true }
    />
  );
}
