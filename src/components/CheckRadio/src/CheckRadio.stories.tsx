import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckRadio, { CheckRadioProps } from './CheckRadio';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Check Radio',
  component: CheckRadio,
} as Meta;

const options = [
  { label: 'Option 1', value: 'option1', disabled: false },
  { label: 'Option 2', value: 'option2', disabled: false },
  { label: 'Option 3', value: 'option3', disabled: true }, // Disabled option
];

const Template: StoryFn<CheckRadioProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(
    args.indeterminate || false
  );
  const isDarkMode = useDarkMode();

  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };

  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio
          options={options}
          {...args}
          checked={checked}
          indeterminate={indeterminate}
          onChange={handleChange}
        />
      </div>
    </ThemeProvider>
  );
};

export const Checkbox: StoryFn<CheckRadioProps> = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
  checked: false,
  disabled: false,
  label: 'Example Checkbox',
  size: 'medium',
  variant: 'primary',
};

export const RadioButton: StoryFn<CheckRadioProps> = Template.bind({});
RadioButton.args = {
  type: 'radio',
  checked: false,
  disabled: false,
  label: 'Example Radio Button',
  name: 'exampleRadio',
  size: 'medium',
  variant: 'primary',
};

export const SmallCheckbox: StoryFn<CheckRadioProps> = Template.bind({});
SmallCheckbox.args = {
  ...Checkbox.args,
  size: 'small',
};

export const LargeCheckbox: StoryFn<CheckRadioProps> = Template.bind({});
LargeCheckbox.args = {
  ...Checkbox.args,
  size: 'large',
};

export const ErrorCheckbox: StoryFn<CheckRadioProps> = Template.bind({});
ErrorCheckbox.args = {
  ...Checkbox.args,
  variant: 'error',
};

export const IndeterminateCheckbox: StoryFn<CheckRadioProps> = Template.bind(
  {}
);
IndeterminateCheckbox.args = {
  type: 'checkbox',
  checked: false,
  indeterminate: true, // Enable the indeterminate state
  disabled: false,
  label: 'Indeterminate Checkbox',
  size: 'medium',
  variant: 'primary',
};
