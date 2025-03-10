import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link, { LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    onClick: { action: 'clicked' },
    target: {
      control: {
        type: 'select',
        options: ['_blank', '_self', '_parent', '_top'],
      },
    },
    rel: {
      control: { type: 'text' },
    },
    className: { control: 'text' },
    style: { control: 'object' },
    ariaLabel: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Go to Google',
  href: 'https://www.google.com',
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me',
  href: '#',
  onClick: () => alert('Link clicked!'),
};

export const OpenInNewTab = Template.bind({});
OpenInNewTab.args = {
  label: 'Open in New Tab',
  href: 'https://www.example.com',
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const CustomStyledLink = Template.bind({});
CustomStyledLink.args = {
  label: 'Custom Styled Link',
  href: 'https://www.example.com',
  className: 'custom-link',
  style: { color: 'red' },
};

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  label: 'Accessible Link',
  href: 'https://www.example.com',
  ariaLabel: 'Example Link',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  href: 'https://www.example.com',
  children: <span>Custom Content</span>,
};
