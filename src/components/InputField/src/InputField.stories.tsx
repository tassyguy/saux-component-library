import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from './InputField';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import { Mail, Lock } from 'react-feather';

export default {
  title: 'Components/Input Field',
  component: InputField,
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <InputField {...args} value={value} onChange={handleChange} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter text here...',
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  ...Default.args,
  maxLength: 50,
  characterCount: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'This field is required',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <Mail size={16} />,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  ...Default.args,
  type: 'password',
  placeholder: 'Enter your password',
  icon: <Lock size={16} />,
};
