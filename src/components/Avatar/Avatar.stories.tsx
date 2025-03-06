import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Avatar {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  alt: 'John Doe',
  size: 60,
  src: 'https://via.placeholder.com/60',
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  alt: 'Jane Doe',
  size: 60,
  src: '',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  alt: 'Custom Size',
  size: 100,
  src: 'https://via.placeholder.com/100',
};
