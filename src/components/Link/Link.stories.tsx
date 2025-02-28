import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Link, { LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Link",
  href: "#",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Link",
  href: "#",
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  label: "Click Me",
  href: "#",
  onClick: () => alert("Link clicked!"),
};