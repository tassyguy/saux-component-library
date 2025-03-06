import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToggleSwitch, { ToggleSwitchProps } from './ToggleSwitch';
import { ThemeProvider } from '../Theme/ThemeProvider';
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
