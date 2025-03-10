import React from "react";
import "./Avatar.css";

export interface AvatarProps {
  /** URL of the avatar image (optional) */
  src?: string;
  /** Alternate text for the avatar (used for fallback initials if no src provided) */
  alt?: string;
  /** The size (width and height in pixels) of the avatar */
  size?: number;
  /** Optional extra className for custom styling */
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = 40,
  className = "",
}) => {
  const style = {
    width: size,
    height: size,
    lineHeight: `${size}px`,
    fontSize: size / 2,
  };

  // Fallback: extract initials from the alt text.
  const getInitials = (text: string): string => {
    const names = text.split(" ");
    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <div className={`avatar ${className}`} style={style}>
      {src ? (
        <img src={src} alt={alt} className="avatar__img" style={{ width: size, height: size }} />
      ) : (
        <span className="avatar__fallback">{getInitials(alt)}</span>
      )}
    </div>
  );
};

export default Avatar;
