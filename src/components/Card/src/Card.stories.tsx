import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';

export default {
  title: 'Components/Card List',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => (
  <ThemeProvider>
    <Card {...args} />
  </ThemeProvider>
);

export const Default: StoryFn<CardProps> = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Card 1',
      description: 'Description 1',
      imageUrl:
        'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
    },
    {
      title: 'Card 2',
      description: 'Description 2',
      imageUrl:
        'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
    },
    {
      title: 'Card 3',
      description: 'Description 3',
      imageUrl:
        'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
    },
  ],
};
