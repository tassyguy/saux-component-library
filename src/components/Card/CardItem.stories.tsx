import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CardList, { CardItem } from "./CardItem";

export default {
  title: "Components/CardList",
  component: CardList,
} as Meta;

const Template: StoryFn<{ items: CardItem[] }> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imageUrl: "https://via.placeholder.com/300",
    },
  ],
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  items: [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imageUrl: "https://via.placeholder.com/300",
      onClick: () => alert("Card 1 clicked!"),
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imageUrl: "https://via.placeholder.com/300",
      onClick: () => alert("Card 2 clicked!"),
    },
  ],
};