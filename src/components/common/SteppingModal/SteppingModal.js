import React from 'react';

import Modal from '@/components/common/Modal';
import Stepper from '@/components/common/Stepper';

export default function SteppingModal({
  steps,
  currentStep,
  setCurrentStep,
  isOpen,
  isClosable,
  onClose,
  size,
  ...rest
}) {
  const currentStepData = steps.find(
    step => step.name === currentStep
  );

  const isRootStep = !currentStepData.prev;
  const realSize = currentStepData.size || size;

  const gotoPreviousStep = () => setCurrentStep(currentStepData.prev);

  const StepComponent = currentStepData.component;

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      size={ realSize }
    >
      <StepComponent
        currentStep={ currentStep }
        setCurrentStep={ setCurrentStep }
        gotoPreviousStep={ gotoPreviousStep }

        onClose={ onClose }

        isClosable={ isClosable }

        { ...rest }
      />
    </Modal>
  );
};
