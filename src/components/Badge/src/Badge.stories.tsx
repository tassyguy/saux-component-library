import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import { CheckCircle, Info } from 'react-feather';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Badge {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Primary: StoryFn<BadgeProps> = Template.bind({});
Primary.args = { text: 'Primary', variant: 'primary' };

export const Secondary: StoryFn<BadgeProps> = Template.bind({});
Secondary.args = { text: 'Secondary', variant: 'secondary' };

export const Success: StoryFn<BadgeProps> = Template.bind({});
Success.args = { text: 'Success', variant: 'success' };

export const Warning: StoryFn<BadgeProps> = Template.bind({});
Warning.args = { text: 'Warning', variant: 'warning' };

export const Error: StoryFn<BadgeProps> = Template.bind({});
Error.args = { text: 'Error', variant: 'error' };

// New stories for additional props
export const Small: StoryFn<BadgeProps> = Template.bind({});
Small.args = { text: 'Small', variant: 'primary', size: 'small' };

export const Large: StoryFn<BadgeProps> = Template.bind({});
Large.args = { text: 'Large', variant: 'primary', size: 'large' };

export const RoundedFull: StoryFn<BadgeProps> = Template.bind({});
RoundedFull.args = { text: 'Rounded', variant: 'secondary', rounded: 'full' };

export const Pill: StoryFn<BadgeProps> = Template.bind({});
Pill.args = { text: 'Pill Badge', variant: 'success', isPill: true };

export const WithIconLeft: StoryFn<BadgeProps> = Template.bind({});
WithIconLeft.args = {
  text: 'Info',
  variant: 'primary',
  icon: <Info size={14} />,
  iconPosition: 'left',
};

export const WithIconRight: StoryFn<BadgeProps> = Template.bind({});
WithIconRight.args = {
  text: 'Check',
  variant: 'success',
  icon: <CheckCircle size={14} />,
  iconPosition: 'right',
};

export const Clickable: StoryFn<BadgeProps> = Template.bind({});
Clickable.args = {
  text: 'Click Me',
  variant: 'warning',
  onClick: () => alert('Badge clicked!'),
};

export const WithTooltip: StoryFn<BadgeProps> = Template.bind({});
WithTooltip.args = {
  text: 'Hover Me',
  variant: 'error',
  tooltip: 'This is an error badge',
  onClick: () => alert('Error badge clicked!'),
};
