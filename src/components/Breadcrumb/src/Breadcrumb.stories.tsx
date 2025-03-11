import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: StoryFn<BreadcrumbProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Breadcrumb {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Laptops' },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  ...Default.args,
  separator: '→',
};

export const Truncated = Template.bind({});
Truncated.args = {
  ...Default.args,
  truncate: true,
};

export const BoldCurrent = Template.bind({});
BoldCurrent.args = {
  ...Default.args,
  boldCurrent: true,
};
