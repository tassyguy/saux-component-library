import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import CheckRadio, { CheckRadioProps } from "./CheckRadio";

export default {
  title: "Components/CheckRadio",
  component: CheckRadio,
} as Meta;

const Template: StoryFn<CheckRadioProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  
  return (
    <CheckRadio
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
  checked: false,
  disabled: false,
  label: "Example Checkbox",
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  type: "radio",
  checked: false,
  disabled: false,
  label: "Example Radio Button",
  name: "exampleRadio",
};
