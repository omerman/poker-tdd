import React from 'react';
import { render } from '@testing-library/react'
import { Board } from '.';

it('renders without crashing', () => {
  render(<Board />);
});

it('renders user hand', async () => {
  const { findByTestId } = render(<Board />);
  await findByTestId('hand');
});
