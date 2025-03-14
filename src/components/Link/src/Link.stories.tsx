import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link, { LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Callback function to handle link click',
    },
    target: {
      control: {
        type: 'select',
        options: ['_blank', '_self', '_parent', '_top'],
      },
      description: 'Specifies where to open the linked document',
    },
    rel: {
      control: { type: 'text' },
      description:
        'Specifies the relationship between the current document and the linked document',
    },
    className: {
      control: 'text',
      description: 'Additional class name for custom styling',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the link',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the link',
    },
    href: {
      control: 'text',
      description: 'The URL that the hyperlink points to',
    },
    label: {
      control: 'text',
      description: 'The text to display inside the link',
    },
    children: {
      control: 'text',
      description: 'The content to display inside the link',
    },
  },
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default: StoryFn<LinkProps> = Template.bind({});
Default.args = {
  label: 'Go to Google',
  href: 'https://www.google.com',
};

export const WithClickHandler: StoryFn<LinkProps> = Template.bind({});
WithClickHandler.args = {
  label: 'Click Me',
  href: '#',
  onClick: () => alert('Link clicked!'),
};

export const OpenInNewTab: StoryFn<LinkProps> = Template.bind({});
OpenInNewTab.args = {
  label: 'Open in New Tab',
  href: 'https://www.example.com',
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const CustomStyledLink: StoryFn<LinkProps> = Template.bind({});
CustomStyledLink.args = {
  label: 'Custom Styled Link',
  href: 'https://www.example.com',
  className: 'custom-link',
  style: { color: 'red' },
};

export const WithAriaLabel: StoryFn<LinkProps> = Template.bind({});
WithAriaLabel.args = {
  label: 'Accessible Link',
  href: 'https://www.example.com',
  ariaLabel: 'Example Link',
};

export const WithChildren: StoryFn<LinkProps> = Template.bind({});
WithChildren.args = {
  href: 'https://www.example.com',
  children: <span>Custom Content</span>,
};
