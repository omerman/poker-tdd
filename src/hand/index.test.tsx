import React from 'react';
import { render } from '@testing-library/react'
import { Hand } from '.';

it('renders without crashing', () => {
  render(<Hand />);
});

it('renders card', async () => {
  const { findByTestId } = render(<Hand />);
  await findByTestId('card');
});
