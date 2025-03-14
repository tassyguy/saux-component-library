import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { CheckCircle, AlertTriangle, Info } from 'react-feather';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Callback function to handle button click',
    },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'The variant of the button',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'The size of the button',
    },
    type: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
      description: 'The type of the button',
    },
    iconPosition: {
      control: { type: 'select', options: ['left', 'right'] },
      description: 'The position of the icon inside the button',
    },
    label: {
      control: 'text',
      description: 'The text to display inside the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description:
        'Whether the button should take up the full width of its container',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text to display on hover',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the button',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const WithClickHandler: StoryFn<ButtonProps> = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
  variant: 'primary',
};

export const Disabled: StoryFn<ButtonProps> = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};

export const WithIcon: StoryFn<ButtonProps> = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: <CheckCircle size={16} />,
  iconPosition: 'left',
};

export const FullWidth: StoryFn<ButtonProps> = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  fullWidth: true,
};

export const Loading: StoryFn<ButtonProps> = Template.bind({});
Loading.args = {
  label: 'Loading Button',
  loading: true,
  variant: 'primary',
};

export const WithTooltip: StoryFn<ButtonProps> = Template.bind({});
WithTooltip.args = {
  label: 'Button with Tooltip',
  tooltip: 'This is a tooltip',
  variant: 'primary',
};
