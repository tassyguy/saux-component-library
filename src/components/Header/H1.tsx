import React from "react";

export interface h1Props {
  text: string;
}

const h1: React.FC<h1Props> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default h1;
