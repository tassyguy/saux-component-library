import React, { useState, useRef } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  /** The text (or JSX) to display in the tooltip */
  content: string | React.ReactNode;
  /** The content that triggers the tooltip on hover */
  children: React.ReactNode;
  /** Additional class name for custom styling */
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, className = '' }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setVisible(true);
    updatePosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const updatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        top: e.clientY - rect.top + 10,
        left: e.clientX - rect.left + 10,
      });
    }
  };

  return (
    <div
      className={`tooltip-container ${className}`.trim()}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className={`tooltip-content ${visible ? 'visible' : ''}`.trim()}
        style={{ top: position.top, left: position.left }}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
