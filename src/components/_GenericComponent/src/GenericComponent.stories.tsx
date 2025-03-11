import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GenericComponent, { GenericComponentProps } from './GenericComponent';

export default {
  title: 'Components/Generic Component',
  component: GenericComponent,
} as Meta;

const Template: StoryFn<GenericComponentProps> = (
  args: GenericComponentProps
) => <GenericComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  description: 'This is a sample description for the GenericComponent.',
};
