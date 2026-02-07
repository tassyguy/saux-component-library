import React from 'react';
import './Form.css';

/**
 * Props for the `Form` component.
 *
 * Extends native HTML form attributes and adds custom styling, layout,
 * and validation options.
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Child elements to render within the form. */
  children: React.ReactNode;
  /**
   * Layout direction for form fields.
   * - 'vertical' — stack fields vertically (default)
   * - 'horizontal' — arrange fields side-by-side
   * - 'inline' — inline layout for compact forms
   * Defaults to 'vertical'.
   */
  layout?: 'vertical' | 'horizontal' | 'inline';
  /** Optional validation schema (e.g., Yup, Zod) for form-level validation. */
  validationSchema?: any;
  /** Callback fired when the form is reset. */
  onReset?: () => void;
  /** When true, disables form interaction and displays a loading state. */
  isLoading?: boolean;
  /** Size of the form, affecting padding and spacing. Defaults to 'medium'. */
  size?: 'small' | 'medium' | 'large';
  /** Additional class name(s) for custom styling and spacing. */
  className?: string;
}

/**
 * `Form` — wrapper for form elements with built-in layout, loading, and sizing options.
 *
 * Accepts a `FormProps` object to configure layout direction, size, loading state,
 * and optional validation. Inherits all native HTML form attributes.
 */
const Form: React.FC<FormProps> = ({
  children,
  className = '',
  layout = 'vertical',
  isLoading = false,
  size = 'medium',
  ...props
}) => {
  return (
    <form
      {...props}
      className={`form form--${layout} form--${size} ${isLoading ? 'form--loading' : ''} ${className}`.trim()}
    >
      {children}
    </form>
  );
};

export default Form;
