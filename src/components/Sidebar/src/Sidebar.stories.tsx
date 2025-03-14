import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sidebar, { SidebarProps, SidebarItem } from './Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: StoryFn<SidebarProps> = (args) => <Sidebar {...args} />;

const sampleItems: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Logout', onClick: () => alert('Logged out!') },
];

export const Default: StoryFn<SidebarProps> = Template.bind({});
Default.args = {
  title: 'My Sidebar',
  items: sampleItems,
};
