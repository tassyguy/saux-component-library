import React from 'react';
import './Form.css';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  layout?: 'vertical' | 'horizontal' | 'inline';
  validationSchema?: any;
  onReset?: () => void;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
}

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
