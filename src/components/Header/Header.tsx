// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Header/Header.tsx
import React, { JSX } from "react";
import "./Header.css";

export interface HeaderProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
}

const Header: React.FC<HeaderProps> = ({ text, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className="header">{text}</Tag>;
};

export default Header;