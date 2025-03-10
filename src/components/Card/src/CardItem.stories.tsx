import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardList, { CardListProps } from './CardItem';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';

export default {
  title: 'Components/Card List',
  component: CardList,
} as Meta;

const Template: StoryFn<CardListProps> = (args) => (
  <ThemeProvider>
    <CardList {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
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
