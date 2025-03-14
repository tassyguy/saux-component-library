//// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/Header.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import H1, { H1Props } from './H1';
import H2, { H2Props } from './H2';
import H3, { H3Props } from './H3';
import H4, { H4Props } from './H4';
import H5, { H5Props } from './H5';
import { ThemeProvider } from '../../Theme';

export default {
  title: 'Components/Headers',
  component: H1,
} as Meta;

const TemplateH1: StoryFn<H1Props> = (args) => (
  <ThemeProvider>
    <H1 {...args} />
  </ThemeProvider>
);

const TemplateH2: StoryFn<H2Props> = (args) => (
  <ThemeProvider>
    <H2 {...args} />
  </ThemeProvider>
);

const TemplateH3: StoryFn<H3Props> = (args) => (
  <ThemeProvider>
    <H3 {...args} />
  </ThemeProvider>
);

const TemplateH4: StoryFn<H4Props> = (args) => (
  <ThemeProvider>
    <H4 {...args} />
  </ThemeProvider>
);

const TemplateH5: StoryFn<H5Props> = (args) => (
  <ThemeProvider>
    <H5 {...args} />
  </ThemeProvider>
);

export const Header1: StoryFn<H1Props> = TemplateH1.bind({});
Header1.args = {
  text: 'Header 1',
};

export const Header2: StoryFn<H2Props> = TemplateH2.bind({});
Header2.args = {
  text: 'Header 2',
};

export const Header3: StoryFn<H3Props> = TemplateH3.bind({});
Header3.args = {
  text: 'Header 3',
};

export const Header4: StoryFn<H4Props> = TemplateH4.bind({});
Header4.args = {
  text: 'Header 4',
};

export const Header5: StoryFn<H5Props> = TemplateH5.bind({});
Header5.args = {
  text: 'Header 5',
};
