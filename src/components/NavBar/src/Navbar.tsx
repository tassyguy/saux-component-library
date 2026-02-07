import React from 'react';
import './Navbar.css'; // Import CSS for styling

export interface NavbarProps {
  logo: string; // Path to the logo image
  links: { label: string; href: string }[]; // Array of navigation links
  className?: string; // Optional additional class for styling
  style?: React.CSSProperties; // Optional inline styles
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar__links">
        {links.map((link, index) => (
          <li key={index} className="navbar__item">
            <a href={link.href} className="navbar__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;