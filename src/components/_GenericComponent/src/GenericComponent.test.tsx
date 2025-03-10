import React from 'react';
import { render, screen } from '@testing-library/react';
import GenericComponent from './GenericComponent';

test('renders GenericComponent with title and description', () => {
  render(
    <GenericComponent title="Test Title" description="Test Description" />
  );
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});
