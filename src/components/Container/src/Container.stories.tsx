import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from './Container';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Container',
  component: Container,
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Container {...args}>
          <p>This is a responsive container.</p>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export const Default: StoryFn<ContainerProps> = Template.bind({});
Default.args = {
  maxWidth: '900px',
  padding: '2rem',
  backgroundColor: 'var(--background-color)',
  borderRadius: '8px',
  shadow: 'medium',
};

export const FullHeight: StoryFn<ContainerProps> = Template.bind({});
FullHeight.args = {
  ...Default.args,
  fullHeight: true,
};

export const NoShadow: StoryFn<ContainerProps> = Template.bind({});
NoShadow.args = {
  ...Default.args,
  shadow: 'none',
};

export const CustomMargin: StoryFn<ContainerProps> = Template.bind({});
CustomMargin.args = {
  ...Default.args,
  margin: '2rem auto',
};
