import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table, { TableProps } from './Table';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => (
  <ThemeProvider>
    <Table {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  columns: [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Email', accessor: 'email' },
  ],
  data: [
    { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
    { name: 'Sam Johnson', age: 45, email: 'sam.johnson@example.com' },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  columns: [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Email', accessor: 'email' },
  ],
  data: [],
};
