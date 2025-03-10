import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectInput, { SelectInputProps } from "./SelectInput";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
} as Meta;

const Template: StoryFn<SelectInputProps> = (args) => {
  const [value, setValue] = useState(args.value);
  
  return (
    <SelectInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Choose an option:",
  value: "option1",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  disabled: false,
};
