import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

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

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success',
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  text: 'Error',
  variant: 'error',
};
