import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    className: { control: 'text' },
    style: { control: 'object' },
    prevAriaLabel: { control: 'text' },
    nextAriaLabel: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange?.(page);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default: StoryFn<PaginationProps> = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const CustomStyled: StoryFn<PaginationProps> = Template.bind({});
CustomStyled.args = {
  currentPage: 1,
  totalPages: 10,
  className: 'custom-pagination',
  style: { backgroundColor: 'lightgray' },
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};

export const WithAriaLabels: StoryFn<PaginationProps> = Template.bind({});
WithAriaLabels.args = {
  currentPage: 1,
  totalPages: 10,
  prevAriaLabel: 'Go to previous page',
  nextAriaLabel: 'Go to next page',
  onPageChange: (page) => console.log(`Page changed to ${page}`),
};
