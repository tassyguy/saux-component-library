import React from 'react';
import Tooltip from '../../Tooltip';
import './Badge.css';

/**
 * Props for the `Badge` component.
 *
 * Use this interface to control the badge's content, appearance and behavior.
 */
export interface BadgeProps {
  /** The text content shown inside the badge. */
  text: string;
  /**
   * Visual style variant used for theming the badge.
   * - 'primary' | 'secondary' | 'success' | 'warning' | 'error'
   * Defaults to 'primary'.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Additional class name(s) applied to the root element for custom styling. */
  className?: string;
  /** Size of the badge. Affects padding and font-size. Defaults to 'medium'. */
  size?: 'small' | 'medium' | 'large';
  /** Optional icon node to render alongside the badge text. */
  icon?: React.ReactNode;
  /** Position of the optional icon relative to the text. Defaults to 'left'. */
  iconPosition?: 'left' | 'right';
  /** Corner rounding option. Use 'full' for pill-like shapes. Defaults to 'small'. */
  rounded?: 'none' | 'small' | 'full';
  /** Click handler for interactive badges. If provided, the badge is clickable. */
  onClick?: () => void;
  /** When true, renders the badge with pill styling (rounded full). */
  isPill?: boolean;
  /** Optional tooltip text; when provided, the badge is wrapped in a `Tooltip`. */
  tooltip?: string;
}

/**
 * `Badge` — small UI element for displaying short, contextual information.
 *
 * Accepts a `BadgeProps` object to configure text, appearance, icon placement
 * and optional interaction (click/tooltip).
 */
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
