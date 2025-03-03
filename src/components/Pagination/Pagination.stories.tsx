import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page: number) => setCurrentPage(page)}
    />
  );
};

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
  currentPage: 1,
  totalPages: 5,
};
