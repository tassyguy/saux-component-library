import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Accordion, { AccordionProps } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Accordion Item 1",
      content: <p>This is the content for item 1.</p>,
    },
    {
      title: "Accordion Item 2",
      content: <p>This is the content for item 2.</p>,
    },
    {
      title: "Accordion Item 3",
      content: <p>This is the content for item 3.</p>,
    },
  ],
};

export const WithMultipleItems = Template.bind({});
WithMultipleItems.args = {
  items: [
    {
      title: "Accordion Item 1",
      content: <p>This is the content for item 1.</p>,
    },
    {
      title: "Accordion Item 2",
      content: <p>This is the content for item 2.</p>,
    },
    {
      title: "Accordion Item 3",
      content: <p>This is the content for item 3.</p>,
    },
    {
      title: "Accordion Item 4",
      content: <p>This is the content for item 4.</p>,
    },
  ],
};