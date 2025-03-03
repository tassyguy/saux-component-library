// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/H3.tsx
import React from "react";
import Header from "./Header";

export interface H3Props {
  text: string;
}

const H3: React.FC<H3Props> = ({ text }) => {
  return <Header text={text} level={3} />;
};

export default H3;