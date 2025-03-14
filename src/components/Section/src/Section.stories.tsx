import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Section, { SectionProps } from './Section';

export default {
  title: 'Components/Section',
  component: Section,
} as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Default: StoryFn<SectionProps> = Template.bind({});
Default.args = {
  title: 'Section Title',
  children: <p>This is an example of section body content.</p>,
};
