import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Container, { ContainerProps } from "./Container";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{ background: "#f0f0f0", padding: "2rem", textAlign: "center" }}>
      This is content inside a container.
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: "1200px",
};
