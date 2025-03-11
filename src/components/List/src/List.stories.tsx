import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import OrderedList from './OL';
import UnorderedList from './UL';
import { ListProps, ListItem } from './List';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import { CheckCircle, AlertTriangle, Info } from 'react-feather';

export default {
  title: 'Components/List',
  component: UnorderedList,
} as Meta;

const sampleItems: ListItem[] = [
  {
    key: 'success',
    label: 'Success Item',
    icon: <CheckCircle size={16} />,
    onClick: () => alert('Success clicked'),
  },
  {
    key: 'warning',
    label: 'Warning Item',
    icon: <AlertTriangle size={16} />,
    onClick: () => alert('Warning clicked'),
  },
  {
    key: 'info',
    label: 'Info Item',
    icon: <Info size={16} />,
    onClick: () => alert('Info clicked'),
  },
  { key: 'disabled', label: 'Disabled Item', disabled: true },
];

const TemplateUnordered: StoryFn<ListProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <UnorderedList {...args} />
      </div>
    </ThemeProvider>
  );
};

const TemplateOrdered: StoryFn<ListProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <OrderedList {...args} />
      </div>
    </ThemeProvider>
  );
};

export const Default = TemplateUnordered.bind({});
Default.args = {
  items: sampleItems,
};

export const Ordered = TemplateOrdered.bind({});
Ordered.args = {
  items: sampleItems,
};

export const EmptyUnordered = TemplateUnordered.bind({});
EmptyUnordered.args = {
  items: [],
  emptyMessage: 'No items available.',
};

export const EmptyOrdered = TemplateOrdered.bind({});
EmptyOrdered.args = {
  items: [],
  emptyMessage: 'No items available.',
};
