import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckRadio, { CheckRadioProps } from './CheckRadio';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Check Radio',
  component: CheckRadio,
} as Meta;

const Template: StoryFn<CheckRadioProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const isDarkMode = useDarkMode();

  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
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
