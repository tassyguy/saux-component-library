import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta;

const Template: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: StoryFn<TextAreaProps> = Template.bind({});
Default.args = {
  label: 'Your Message',
  value: '',
  placeholder: 'Type your message here...',
  rows: 5,
};

export const WithMaxLength: StoryFn<TextAreaProps> = Template.bind({});
WithMaxLength.args = {
  ...Default.args,
  maxLength: 200,
  characterCount: true,
};

export const WithError: StoryFn<TextAreaProps> = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'Message is required',
};

export const FullWidth: StoryFn<TextAreaProps> = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const AutoFocus: StoryFn<TextAreaProps> = Template.bind({});
AutoFocus.args = {
  ...Default.args,
  autoFocus: true,
};

export const NonResizable: StoryFn<TextAreaProps> = Template.bind({});
NonResizable.args = {
  ...Default.args,
  resize: 'none',
};

export const Disabled: StoryFn<TextAreaProps> = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
