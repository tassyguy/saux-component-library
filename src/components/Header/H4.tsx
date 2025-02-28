import React from "react";

export interface h4Props {
  text: string;
}

const h4: React.FC<h4Props> = ({ text }) => {
  return <h4>{text}</h4>;
};

export default h4;
