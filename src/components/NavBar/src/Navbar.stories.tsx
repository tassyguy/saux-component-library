import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    logo: { control: 'text' },
    links: { control: 'object' },
    className: { control: 'text' },
    style: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default: StoryFn<NavbarProps> = Template.bind({});
Default.args = {
  logo: '/path/to/logo.png',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const CustomStyled: StoryFn<NavbarProps> = Template.bind({});
CustomStyled.args = {
  logo: '/path/to/logo.png',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  className: 'custom-navbar',
  style: { backgroundColor: 'lightblue', padding: '1rem' },
};

export const WithFewLinks: StoryFn<NavbarProps> = Template.bind({});
WithFewLinks.args = {
  logo: '/path/to/logo.png',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ],
};