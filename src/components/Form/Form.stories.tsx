import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Form, { FormProps } from "./Form";
import FormGroup from "./FormGroup";

export default {
  title: "Components/Form",
  component: Form,
} as Meta;

const Template: StoryFn<FormProps> = (args) => (
  <Form {...args}>
    <FormGroup label="Name">
      <input type="text" placeholder="Enter your name" />
    </FormGroup>
    <FormGroup label="Email">
      <input type="email" placeholder="Enter your email" />
    </FormGroup>
    <FormGroup label="Message">
      <textarea placeholder="Enter your message" rows={5} />
    </FormGroup>
    <button type="submit">Submit</button>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  onSubmit: (e) => {
    e.preventDefault();
    alert("Form submitted!");
  },
};
