import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextArea, { TextAreaProps } from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
} as Meta;

const Template: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Your Message",
  value: "",
  placeholder: "Type your message here...",
  rows: 5,
  disabled: false,
};
