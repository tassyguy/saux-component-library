// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Accordion/Accordion.tsx
import React, { useState } from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Accordion.css';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const theme = useTheme(); // Get theme values
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={() => toggleIndex(index)} className="accordion-title">
            <h3>{item.title}</h3>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
