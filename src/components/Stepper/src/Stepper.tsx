import React from 'react';
import './Stepper.css';

export interface Step {
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StepperProps {
  steps: Step[];
  activeStep: number;
  onStepClick?: (stepIndex: number) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepClick,
  orientation = 'horizontal',
  className = '',
}) => {
  return (
    <div
      className={`stepper stepper--${orientation} ${className}`.trim()}
      role="progressbar"
      aria-valuenow={activeStep + 1}
      aria-valuemin={1}
      aria-valuemax={steps.length}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper__step ${
            index < activeStep ? 'stepper__step--completed' : ''
          } ${index === activeStep ? 'stepper__step--active' : ''}`.trim()}
          onClick={() => onStepClick && onStepClick(index)}
          role="button"
          tabIndex={0}
          aria-current={index === activeStep ? 'step' : undefined}
        >
          <div className="stepper__icon">
            {step.icon || <span>{index + 1}</span>}
          </div>
          <div className="stepper__content">
            <div className="stepper__label">{step.label}</div>
            {step.description && (
              <div className="stepper__description">{step.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
