import React from "react";
import "./Footer.css";

export interface FooterProps {
  /** Content to render inside the footer */
  children?: React.ReactNode;
  /** Optional additional className for custom styling */
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ children, className = "" }) => {
  return (
    <footer className={`footer ${className}`.trim()}>
      {children || (
        <div className="footer__default">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
