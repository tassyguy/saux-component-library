import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DropdownMenu, {
  DropdownMenuProps,
  DropdownMenuItem,
} from './DropdownMenu';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import { Settings, User, LogOut } from 'react-feather';

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
    value: 'profile',
    label: 'Profile',
    icon: <User size={16} />,
    onClick: () => alert('Profile clicked'),
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: <Settings size={16} />,
    onClick: () => alert('Settings clicked'),
  },
  {
    value: 'logout',
    label: 'Logout',
    icon: <LogOut size={16} />,
    onClick: () => alert('Logged out'),
  },
];

export const Default = Template.bind({});
Default.args = {
  label: 'Menu',
  items: sampleItems,
  disabled: false,
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  ...Default.args,
  align: 'right',
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  ...Default.args,
  align: 'center',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
