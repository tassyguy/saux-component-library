import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DropdownMenu, {
  DropdownMenuProps,
  DropdownMenuItem,
} from './DropdownMenu';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
} as Meta;

const Template: StoryFn<DropdownMenuProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <DropdownMenu {...args} />
      </div>
    </ThemeProvider>
  );
};

const sampleItems: DropdownMenuItem[] = [
  {
    value: 'option1',
    label: 'Option 1',
    onClick: () => alert('Option 1 selected'),
  },
  {
    value: 'option2',
    label: 'Option 2',
    onClick: () => alert('Option 2 selected'),
  },
  {
    value: 'option3',
    label: 'Option 3',
    onClick: () => alert('Option 3 selected'),
  },
];

export const Default = Template.bind({});
Default.args = {
  label: 'Select an Option',
  items: sampleItems,
  disabled: false,
};
