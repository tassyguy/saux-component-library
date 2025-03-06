import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { ThemeProvider } from '../Theme/ThemeProvider'; // Import ThemeProvider

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
  variant: 'primary',
};
