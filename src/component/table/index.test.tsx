import React from 'react';
import { render } from '@testing-library/react'
import { Table } from '.';

it('renders without crashing', () => {
  render(<Table />);
});

it('renders user hand', async () => {
  const { findByTestId } = render(<Table />);
  await findByTestId('hand');
});
