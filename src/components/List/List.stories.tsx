import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import UnorderedList, { UnorderedListProps } from "./UL";
import OrderedList, { OrderedListProps } from "./OL";

export default {
  title: "Components/Lists",
  component: UnorderedList,
} as Meta;

const UnorderedTemplate: StoryFn<UnorderedListProps> = (args) => <UnorderedList {...args} />;
const OrderedTemplate: StoryFn<OrderedListProps> = (args) => <OrderedList {...args} />;

export const UnorderedListStory = UnorderedTemplate.bind({});
UnorderedListStory.args = {
  items: [
    { label: "Unordered Item 1" },
    { label: "Unordered Item 2" },
    { label: "Unordered Item 3" },
  ],
};

export const OrderedListStory = OrderedTemplate.bind({});
OrderedListStory.args = {
  items: [
    { label: "Ordered Item 1" },
    { label: "Ordered Item 2" },
    { label: "Ordered Item 3" },
  ],
};