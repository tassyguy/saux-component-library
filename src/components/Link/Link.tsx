// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Link/Link.tsx
import React from "react";
import { useTheme } from "../Theme/ThemeProvider";
import "./Link.css";

export interface LinkProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ label, href, onClick }) => {
  const theme = useTheme(); // Get theme values

  return (
    <a
      href={href}
      onClick={onClick}
      className="link"
    >
      {label}
    </a>
  );
};

export default Link;