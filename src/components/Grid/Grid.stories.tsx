import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Grid from "./Grid";
import GridItem from "./GridItem";

export default {
  title: "Components/Grid",
  component: Grid,
} as Meta;

const Template: StoryFn = () => (
  <Grid columns={3} gap="1em">
    <GridItem>Item 1</GridItem>
    <GridItem>Item 2</GridItem>
    <GridItem>Item 3</GridItem>
    <GridItem>Item 4</GridItem>
    <GridItem>Item 5</GridItem>
    <GridItem>Item 6</GridItem>
  </Grid>
);

export const Default = Template.bind({});
