import React from "react";

interface h3Props {
  text: string;
}

const h3: React.FC<h3Props> = ({ text }) => {
  return <h3>{text}</h3>;
};

export default h3;
