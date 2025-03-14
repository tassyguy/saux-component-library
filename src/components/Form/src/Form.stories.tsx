import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form, { FormProps } from './Form';
import FormGroup from './FormGroup';
import InputField from '../../InputField';
import TextArea from '../../TextArea';
import Button from '../../Button';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import { Mail, User } from 'react-feather';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta;

const Template: StoryFn<FormProps> = (args) => {
  const isDarkMode = useDarkMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Form {...args}>
          <FormGroup label="Name" htmlFor="name" required>
            <InputField
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              icon={<User size={16} />}
              fullWidth
            />
          </FormGroup>
          <FormGroup
            label="Email"
            htmlFor="email"
            required
            error="Invalid email format"
          >
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              icon={<Mail size={16} />}
              fullWidth
            />
          </FormGroup>
          <FormGroup
            label="Message"
            htmlFor="message"
            description="Max 500 characters"
          >
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows={5}
              maxLength={500}
              characterCount
              fullWidth
            />
          </FormGroup>
          <Button type="submit" label="Submit" fullWidth />
        </Form>
      </div>
    </ThemeProvider>
  );
};

export const Default: StoryFn<FormProps> = Template.bind({});
Default.args = {
  onSubmit: (e) => {
    e.preventDefault();
    alert('Form submitted!');
  },
  layout: 'vertical',
  size: 'medium',
};

export const Horizontal: StoryFn<FormProps> = Template.bind({});
Horizontal.args = { ...Default.args, layout: 'horizontal' };

export const Inline: StoryFn<FormProps> = Template.bind({});
Inline.args = { ...Default.args, layout: 'inline' };

export const Loading: StoryFn<FormProps> = Template.bind({});
Loading.args = { ...Default.args, isLoading: true };
