import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckRadio, { CheckRadioProps } from './CheckRadio';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/CheckRadio',
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

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
  checked: false,
  disabled: false,
  label: 'Example Checkbox',
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  type: 'radio',
  checked: false,
  disabled: false,
  label: 'Example Radio Button',
  name: 'exampleRadio',
};
