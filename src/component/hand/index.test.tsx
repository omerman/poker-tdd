import React from 'react';
import { render } from '@testing-library/react'
import { Hand } from '.';

it('renders without crashing', () => {
  render(<Hand />);
});

it('renders two cards', async () => {
  const { findAllByTestId } = render(<Hand />);
  const cards = await findAllByTestId('card');
  expect(cards.length).toBe(2);
});