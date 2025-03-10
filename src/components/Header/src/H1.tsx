// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/H1.tsx
import React from "react";
import Header from "./Header";

export interface H1Props {
  text: string;
}

const H1: React.FC<H1Props> = ({ text }) => {
  return <Header text={text} level={1} />;
};

export default H1;