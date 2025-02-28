import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import H1, { h1Props } from "./H1";
import H2, { h2Props } from "./H2";
import H3, { h3Props } from "./H3";
import H4, { h4Props } from "./H4";
import H5, { h5Props } from "./H5";

export default {
  title: "Components/Headers",
  component: H1,
} as Meta;

const TemplateH1: StoryFn<h1Props> = (args) => <H1 {...args} />;
const TemplateH2: StoryFn<h2Props> = (args) => <H2 {...args} />;
const TemplateH3: StoryFn<h3Props> = (args) => <H3 {...args} />;
const TemplateH4: StoryFn<h4Props> = (args) => <H4 {...args} />;
const TemplateH5: StoryFn<h5Props> = (args) => <H5 {...args} />;

export const Header1 = TemplateH1.bind({});
Header1.args = {
  text: "Header 1",
};

export const Header2 = TemplateH2.bind({});
Header2.args = {
  text: "Header 2",
};

export const Header3 = TemplateH3.bind({});
Header3.args = {
  text: "Header 3",
};

export const Header4 = TemplateH4.bind({});
Header4.args = {
  text: "Header 4",
};

export const Header5 = TemplateH5.bind({});
Header5.args = {
  text: "Header 5",
};