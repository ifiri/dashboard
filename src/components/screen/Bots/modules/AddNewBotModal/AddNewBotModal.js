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

import { STEPS } from './AddNewBotModal.constants';

// TODO refactor it
export default function AddNewBotModal({ isOpen, onClose, ...rest }) {
  const [currentStep, setCurrentStep] = useState('add-bot');

  return (
    <SteppingModal
      steps={ STEPS }
      isOpen={ isOpen }
      onClose={ onClose }

      currentStep={ currentStep }
      setCurrentStep={ setCurrentStep }

      size="lg"
      isClosable={ true }
    />
  );
}
