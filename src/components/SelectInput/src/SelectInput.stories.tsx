import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectInput, { SelectInputProps } from './SelectInput';

export default {
  title: 'Components/Select Input',
  component: SelectInput,
} as Meta;

const Template: StoryFn<SelectInputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <SelectInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: StoryFn<SelectInputProps> = Template.bind({});
Default.args = {
  label: 'Choose an option:',
  value: 'option1',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: false,
};

export const WithPlaceholder: StoryFn<SelectInputProps> = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  value: '',
  placeholder: 'Select an option...',
};

export const Small: StoryFn<SelectInputProps> = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Large: StoryFn<SelectInputProps> = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};

export const ErrorVariant: StoryFn<SelectInputProps> = Template.bind({});
ErrorVariant.args = {
  ...Default.args,
  variant: 'error',
};
