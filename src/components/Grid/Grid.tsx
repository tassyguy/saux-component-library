import React from "react";
import "./Grid.css";

export interface GridProps {
  /** Optionally specify the number of columns (if not provided, auto-fit is used) */
  columns?: number;
  /** Optional gap between grid items (default: 1em) */
  gap?: string;
  /** Grid children */
  children: React.ReactNode;
  /** Additional class name for custom styling */
  className?: string;
}

const Grid: React.FC<GridProps> = ({ columns, gap, children, className = "" }) => {
  const style = {
    gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : undefined,
    gap: gap || "1em",
  };

  return (
    <div className={`grid ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Grid;
