import React from "react";
import "./GridItem.css";

export interface GridItemProps {
  /** Content for the grid item */
  children: React.ReactNode;
  /** Additional class name for custom styling */
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ children, className = "" }) => {
  return <div className={`grid-item ${className}`}>{children}</div>;
};

export default GridItem;
