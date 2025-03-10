import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button, { ButtonProps } from './Button';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Button component', () => {
  test('renders Button with label', () => {
    renderWithTheme(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies primary variant class by default', () => {
    renderWithTheme(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toHaveClass('button primary');
  });

  test('applies secondary variant class when specified', () => {
    renderWithTheme(<Button label="Click Me" variant="secondary" />);
    expect(screen.getByText('Click Me')).toHaveClass('button secondary');
  });
});
