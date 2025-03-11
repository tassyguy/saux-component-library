import React from 'react';
import './Footer.css';

export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  align?: 'left' | 'center' | 'right';
  showDivider?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  children,
  className = '',
  backgroundColor = 'var(--background-color)',
  textColor = 'var(--text-color)',
  align = 'center',
  showDivider = false,
}) => {
  return (
    <footer
      className={`footer ${className} ${showDivider ? 'footer--divider' : ''}`.trim()}
      style={{ backgroundColor, color: textColor, textAlign: align }}
    >
      {children || (
        <div className="footer__default">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
