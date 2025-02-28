import React from "react";

export interface h5Props {
  text: string;
}

const h5: React.FC<h5Props> = ({ text }) => {
  return <h5>{text}</h5>;
};

export default h5;
