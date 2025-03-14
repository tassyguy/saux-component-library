import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
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

export const Default: StoryFn<AvatarProps> = Template.bind({});
Default.args = {
  alt: 'John Doe',
  size: 60,
  src: 'https://i.pravatar.cc/128',
};

export const WithFallback: StoryFn<AvatarProps> = Template.bind({});
WithFallback.args = {
  alt: 'Jane Doe',
  size: 60,
  src: '',
};

export const CustomSize: StoryFn<AvatarProps> = Template.bind({});
CustomSize.args = {
  alt: 'Custom Size',
  size: 100,
  src: 'https://i.pravatar.cc/128',
};
