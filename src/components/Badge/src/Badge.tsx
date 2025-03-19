import React from 'react';
import Tooltip from '../../Tooltip';
import './Badge.css';

export interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  rounded?: 'none' | 'small' | 'full';
  onClick?: () => void;
  isPill?: boolean;
  tooltip?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  className = '',
  size = 'medium',
  icon,
  iconPosition = 'left',
  rounded = 'small',
  onClick,
  isPill = false,
  tooltip,
}) => {
  const badgeElement = (
    <span
      className={[
        'badge',
        `badge--${variant}`,
        `badge--${size}`,
        `badge--${rounded}`,
        isPill ? 'badge--pill' : '',
        className, // Ensuring className is properly applied
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && (
        <span className="badge__icon">{icon}</span>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <span className="badge__icon">{icon}</span>
      )}
    </span>
  );

  return tooltip ? (
    <Tooltip content={tooltip}>{badgeElement}</Tooltip>
  ) : (
    badgeElement
  );
};

export default Badge;
