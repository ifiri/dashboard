import React from 'react';

import styles from './Stepper.module.scss';

export default function Stepper({ currentStep, steps, ...rest}) {
  const currentStepData = steps.find(stepData => stepData.name === currentStep);

  const StepComponent = currentStepData.render;
  return (
    <div>
      <StepComponent
        currentStep={ currentStep }
        className={ styles['stepper-step'] }
        { ...rest }
      />
    </div>
  );
}
