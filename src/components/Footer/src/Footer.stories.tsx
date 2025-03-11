import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from './Footer';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Footer {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>Designed by My Name.</p>
    </div>
  ),
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  backgroundColor: 'var(--primary-color)',
  textColor: '#fff',
  children: <p>Custom Background Footer</p>,
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  align: 'left',
  children: <p>Left-Aligned Footer</p>,
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  showDivider: true,
  children: <p>Footer with Divider</p>,
};
