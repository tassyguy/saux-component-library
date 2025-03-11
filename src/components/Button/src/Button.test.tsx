import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button, { ButtonProps } from './Button';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { CheckCircle } from 'react-feather';

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

  test('displays loading spinner when loading is true', () => {
    renderWithTheme(<Button label="Click Me" loading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays tooltip when provided', () => {
    renderWithTheme(<Button label="Click Me" tooltip="This is a tooltip" />);
    expect(screen.getByText('Click Me')).toHaveAttribute(
      'title',
      'This is a tooltip'
    );
  });

  test('displays icon when provided', () => {
    renderWithTheme(<Button label="Click Me" icon={<CheckCircle />} />);
    expect(screen.getByTestId('button-icon')).toBeInTheDocument();
  });

  test('disables button when disabled is true', () => {
    renderWithTheme(<Button label="Click Me" disabled={true} />);
    expect(screen.getByText('Click Me')).toBeDisabled();
  });

  test('applies full-width class when fullWidth is true', () => {
    renderWithTheme(<Button label="Click Me" fullWidth={true} />);
    expect(screen.getByText('Click Me')).toHaveClass('full-width');
  });
});
