import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';
import GridItem from './GridItem';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;

const Template: StoryFn = () => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Grid columns={3} gap="1em">
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
