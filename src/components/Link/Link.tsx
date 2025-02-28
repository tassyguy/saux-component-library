import React from "react";

export interface LinkProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ label, href, onClick }) => {
  return <a href={href} onClick={onClick}>{label}</a>;
};

export default Link;
