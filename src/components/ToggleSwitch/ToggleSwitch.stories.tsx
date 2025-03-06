import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ToggleSwitch, { ToggleSwitchProps } from "./ToggleSwitch";
import { ThemeProvider } from "../Theme/ThemeProvider";

export default {
  title: "Components/Toggle Switch",
  component: ToggleSwitch,
} as Meta;

const Template: StoryFn<ToggleSwitchProps> = (args) => {
  const [isOn, setIsOn] = useState(args.isOn);
  
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <ThemeProvider><ToggleSwitch {...args} isOn={isOn} onToggle={handleToggle} /></ThemeProvider>;
};

export const ToggleSwitchStory = Template.bind({});
ToggleSwitchStory.args = {
  isOn: false,
  disabled: false,
};
