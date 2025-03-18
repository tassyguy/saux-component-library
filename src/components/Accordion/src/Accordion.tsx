import React, { useState } from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Accordion.css';
import { H3 } from '../../Header';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  className?: string; // Allow className per item
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
  className?: string; // Allow className for the entire Accordion
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = null,
  allowMultiple = false,
  className = '', // Default empty class
}) => {
  const theme = useTheme(); // Get theme values
  const [activeIndices, setActiveIndices] = useState<number[]>(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    setActiveIndices((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className={`accordion ${className}`.trim()}> {/* Apply className here */}
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${item.className || ''}`.trim()}>
          <div onClick={() => toggleIndex(index)} className="accordion-title">
            {item.icon && <span className="accordion-icon">{item.icon}</span>}
            <H3 text={item.title} />
          </div>
          {activeIndices.includes(index) && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
