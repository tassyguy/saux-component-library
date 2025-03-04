// filepath: /C:/Users/simonp/Documents/Extra/saux-component-library/src/components/Button/Button.tsx
import React from "react";
import { useTheme } from "../Theme/ThemeProvider";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const { theme } = useTheme(); // Get theme values

  return (
    <button
      onClick={onClick}
      className="button"
    >
      {label}
    </button>
  );
};

export default Button;