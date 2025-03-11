import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToggleSwitch, { ToggleSwitchProps } from './ToggleSwitch';
import { ThemeProvider } from '../../Theme';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Toggle Switch',
  component: ToggleSwitch,
} as Meta;

const Template: StoryFn<ToggleSwitchProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <ToggleSwitch {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOn: false,
  onToggle: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};

export const SuccessVariant = Template.bind({});
SuccessVariant.args = {
  ...Default.args,
  isOn: true,
  variant: 'success',
};

export const WarningVariant = Template.bind({});
WarningVariant.args = {
  ...Default.args,
  isOn: true,
  variant: 'warning',
};

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
  ...Default.args,
  isOn: true,
  variant: 'error',
};
