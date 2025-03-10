import React from "react";
import "./Section.css";

export interface SectionProps {
  /** Optional title to display as a header for the section */
  title?: string;
  /** The content to be wrapped by the section */
  children: React.ReactNode;
  /** Optional additional CSS class for custom styling */
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`section ${className}`}>
      {title && <div className="section__header">{title}</div>}
      <div className="section__body">
        {children}
      </div>
    </section>
  );
};

export default Section;
