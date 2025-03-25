import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SliderInput, { SliderInputProps } from './SliderInput';

export default {
  title: 'Components/Slider Input',
  component: SliderInput,
} as Meta;

const Template: StoryFn<SliderInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return <SliderInput {...args} value={value} onChange={handleChange} />;
};

export const DefaultSlider: StoryFn<SliderInputProps> = Template.bind({});
DefaultSlider.args = {
  label: 'Default Slider',
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  showValue: true,
};

export const DisabledSlider: StoryFn<SliderInputProps> = Template.bind({});
DisabledSlider.args = {
  label: 'Disabled Slider',
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  disabled: true,
  showValue: true,
};

export const CustomStepSlider: StoryFn<SliderInputProps> = Template.bind({});
CustomStepSlider.args = {
  label: 'Custom Step Slider',
  value: 10,
  min: 0,
  max: 100,
  step: 10,
  showValue: true,
};
