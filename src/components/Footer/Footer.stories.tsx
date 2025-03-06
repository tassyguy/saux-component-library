import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>Designed by My Name.</p>
    </div>
  ),
};
