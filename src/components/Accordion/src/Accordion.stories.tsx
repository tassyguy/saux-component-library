import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { ChevronDown, Info, Star } from 'react-feather';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <ThemeProvider>
    <Accordion {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Item 1',
      content: <p>Content 1</p>,
      icon: <ChevronDown size={16} />,
    },
    { title: 'Item 2', content: <p>Content 2</p>, icon: <Info size={16} /> },
    { title: 'Item 3', content: <p>Content 3</p>, icon: <Star size={16} /> },
  ],
};

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  ...Default.args,
  allowMultiple: true,
};

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  ...Default.args,
  defaultOpenIndex: 0,
};
