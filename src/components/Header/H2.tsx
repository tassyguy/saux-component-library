// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/H2.tsx
import React from "react";
import Header from "./Header";

export interface H2Props {
  text: string;
}

const H2: React.FC<H2Props> = ({ text }) => {
  return <Header text={text} level={2} />;
};

export default H2;