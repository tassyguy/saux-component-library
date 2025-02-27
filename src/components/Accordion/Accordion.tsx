import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  // activeIndex tracks the currently open accordion item (if any)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    // Toggle the active index (collapse if clicking the active item)
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <div
            onClick={() => toggleIndex(index)}
            style={{
              cursor: "pointer",
              background: "#f2f2f2",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ margin: 0 }}>{item.title}</h3>
          </div>
          {activeIndex === index && (
            <div
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderTop: "none",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
