import React, { useId, useState } from 'react';
import './Accordion.css';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
  className?: string;
}

interface AccordionItemViewProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItemView: React.FC<AccordionItemViewProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  const triggerId = useId();
  const panelId = useId();

  return (
    <div
      className={`accordion-item ${isOpen ? 'open' : ''} ${item.className ?? ''}`.trim()}
    >
      <h3 className="accordion-heading">
        <button
          type="button"
          id={triggerId}
          className="accordion-title"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {item.icon && (
            <span className="accordion-icon" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className="accordion-title-text">{item.title}</span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="accordion-content"
        hidden={!isOpen}
      >
        {item.content}
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = null,
  allowMultiple = false,
  className = '',
}) => {
  const [activeIndices, setActiveIndices] = useState<number[]>(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    setActiveIndices((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      }
      return prev.includes(index) ? [] : [index];
    });
  };

  return (
    <div className={`accordion ${className}`.trim()}>
      {items.map((item, index) => (
        <AccordionItemView
          key={index}
          item={item}
          isOpen={activeIndices.includes(index)}
          onToggle={() => toggleIndex(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
