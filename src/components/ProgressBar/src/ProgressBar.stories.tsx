import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const DefaultProgressBar: StoryFn<ProgressBarProps> = Template.bind({});
DefaultProgressBar.args = {
  value: 50,
  label: '50%',
  variant: 'primary',
};

export const SuccessProgressBar: StoryFn<ProgressBarProps> = Template.bind({});
SuccessProgressBar.args = {
  value: 75,
  label: '75%',
  variant: 'success',
};

export const StripedProgressBar: StoryFn<ProgressBarProps> = Template.bind({});
StripedProgressBar.args = {
  value: 60,
  label: '60%',
  striped: true,
  variant: 'warning',
};

export const AnimatedProgressBar: StoryFn<ProgressBarProps> = Template.bind({});
AnimatedProgressBar.args = {
  value: 40,
  label: '40%',
  striped: true,
  animated: true,
  variant: 'error',
};

export const InteractiveProgressBar: StoryFn = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div>
      <ProgressBar value={progress} label={`${progress}%`} variant="primary" />
      <button onClick={handleIncrease} style={{ margin: '10px' }}>
        Increase
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
