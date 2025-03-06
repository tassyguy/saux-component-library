import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form, { FormProps } from './Form';
import FormGroup from './FormGroup';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

const Template: StoryFn<FormProps> = (args) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
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
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: (e) => {
    e.preventDefault();
    alert('Form submitted!');
  },
};
