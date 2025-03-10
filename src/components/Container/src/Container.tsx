import React from "react";
import "./Container.css";

export interface ContainerProps {
  /** The content inside the container */
  children: React.ReactNode;
  /** Additional CSS class names for custom styling */
  className?: string;
  /** Optional maximum width (default: 1200px) */
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  maxWidth = "1200px",
}) => {
  return (
    <div className={`container ${className}`} style={{ maxWidth }}>
      {children}
    </div>
  );
};

export default Container;
