import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import DropdownMenu, { DropdownMenuProps, DropdownMenuItem } from "./DropdownMenu";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
} as Meta;

const Template: StoryFn<DropdownMenuProps> = (args) => {
  return <DropdownMenu {...args} />;
};

const sampleItems: DropdownMenuItem[] = [
  { value: "option1", label: "Option 1", onClick: () => alert("Option 1 selected") },
  { value: "option2", label: "Option 2", onClick: () => alert("Option 2 selected") },
  { value: "option3", label: "Option 3", onClick: () => alert("Option 3 selected") },
];

export const Default = Template.bind({});
Default.args = {
  label: "Select an Option",
  items: sampleItems,
  disabled: false,
};
