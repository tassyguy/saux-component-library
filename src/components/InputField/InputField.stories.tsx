import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputField, { InputFieldProps } from "./InputField";

export default {
  title: "Components/Input Field",
  component: InputField,
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};

export const DefaultInputField = Template.bind({});
DefaultInputField.args = {
  value: "",
  placeholder: "Enter text here...",
};
