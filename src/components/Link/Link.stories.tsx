import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Link, { LinkProps } from "./Link";
import { ThemeProvider } from "../Theme/ThemeProvider";

export default {
  title: "Components/Link",
  component: Link,
} as Meta;

const Template: StoryFn<LinkProps> = (args) => (
  <ThemeProvider>
    <Link {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Go to Google",
  href: "https://www.google.com",
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: "Click Me",
  href: "#",
  onClick: () => alert("Link clicked!"),
};