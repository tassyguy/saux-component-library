import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Stepper, { StepperProps } from './Stepper';
import { CheckCircle, Info } from 'react-feather';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta;

const Template: StoryFn<StepperProps> = (args) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <Stepper {...args} activeStep={activeStep} onStepClick={handleStepClick} />
  );
};

export const HorizontalStepper: StoryFn<StepperProps> = Template.bind({});
HorizontalStepper.args = {
  steps: [
    {
      label: 'Step 1',
      description: 'Description for step 1',
      icon: <CheckCircle size={16} />,
    },
    {
      label: 'Step 2',
      description: 'Description for step 2',
      icon: <Info size={16} />,
    },
    { label: 'Step 3', description: 'Description for step 3' },
  ],
  activeStep: 0,
  orientation: 'horizontal',
};

export const VerticalStepper: StoryFn<StepperProps> = Template.bind({});
VerticalStepper.args = {
  ...HorizontalStepper.args,
  orientation: 'vertical',
};
