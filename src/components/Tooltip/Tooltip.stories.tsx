import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tooltip, { TooltipProps } from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => (
  <div style={{ margin: "100px" }}>
    <Tooltip {...args}>
      <button>Hover over me</button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: "This is a tooltip!",
};
