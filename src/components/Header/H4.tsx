// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/H4.tsx
import React from "react";
import Header from "./Header";

export interface H4Props {
  text: string;
}

const H4: React.FC<H4Props> = ({ text }) => {
  return <Header text={text} level={4} />;
};

export default H4;