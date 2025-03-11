import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { CheckCircle, AlertTriangle, Info } from 'react-feather';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

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

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: <CheckCircle size={16} />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  fullWidth: true,
};
