import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';

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
    { title: 'Item 1', content: <p>Content 1</p> },
    { title: 'Item 2', content: <p>Content 2</p> },
    { title: 'Item 3', content: <p>Content 3</p> },
  ],
};
