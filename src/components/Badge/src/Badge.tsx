import React from "react";
import "./Badge.css";

export interface BadgeProps {
  /** The text to display in the badge */
  text: string;
  /** The variant determines the color styling of the badge */
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  /** Optional additional CSS classes */
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, variant = "primary", className = "" }) => {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()}>
      {text}
    </span>
  );
};

export default Badge;
