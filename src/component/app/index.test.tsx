import React from 'react';
import { render } from '@testing-library/react'
import { App } from '.';

it('renders without crashing', () => {
  render(<App />);
});

it('renders table', async () => {
  const { findByTestId } = render(<App />);
  await findByTestId('table');
});
