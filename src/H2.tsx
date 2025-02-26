import React from "react";

interface h2Props {
  text: string;
}

const h2: React.FC<h2Props> = ({ text }) => {
  return <h2>{text}</h2>;
};

export default h2;
