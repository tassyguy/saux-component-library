import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from './InputField';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

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

export const DefaultInputField = Template.bind({});
DefaultInputField.args = {
  value: '',
  placeholder: 'Enter text here...',
};
