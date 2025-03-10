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
          <div
            style={{
              background: '#f0f0f0',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            This is content inside a container.
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  maxWidth: '1200px',
};
