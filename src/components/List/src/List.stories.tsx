// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/List/List.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UnorderedList, { UnorderedListProps } from './UL';
import OrderedList, { OrderedListProps } from './OL';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';

export default {
  title: 'Components/Lists',
  component: UnorderedList,
} as Meta;

const UnorderedTemplate: StoryFn<UnorderedListProps> = (args) => (
  <ThemeProvider>
    <UnorderedList {...args} />
  </ThemeProvider>
);

const OrderedTemplate: StoryFn<OrderedListProps> = (args) => (
  <ThemeProvider>
    <OrderedList {...args} />
  </ThemeProvider>
);

export const UnorderedListStory = UnorderedTemplate.bind({});
UnorderedListStory.args = {
  items: [
    { label: 'Unordered Item 1' },
    { label: 'Unordered Item 2' },
    { label: 'Unordered Item 3' },
  ],
};

export const OrderedListStory = OrderedTemplate.bind({});
OrderedListStory.args = {
  items: [
    { label: 'Ordered Item 1' },
    { label: 'Ordered Item 2' },
    { label: 'Ordered Item 3' },
  ],
};
