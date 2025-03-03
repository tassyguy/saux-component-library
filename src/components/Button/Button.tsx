import React from "react";
import { useTheme } from "../Theme/ThemeProvider";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const theme = useTheme(); // Get theme values

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme.primaryColor,
        color: "#fff",
        fontFamily: theme.fontFamily,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
