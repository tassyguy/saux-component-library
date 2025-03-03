// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/H5.tsx
import React from "react";
import Header from "./Header";

export interface H5Props {
  text: string;
}

const H5: React.FC<H5Props> = ({ text }) => {
  return <Header text={text} level={5} />;
};

export default H5;