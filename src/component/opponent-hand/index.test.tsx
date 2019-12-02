import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { OpponentHand } from '.';

afterEach(cleanup);

it('renders without crashing', () => {
  const { queryByTestId } = render(
    <OpponentHand />
  );

  expect(queryByTestId('opponent-hand')).toBeTruthy();
});

it('renders 2 hidden cards', () => {
  const { queryAllByTestId } = render(
    <OpponentHand />
  );

  expect(queryAllByTestId('hidden-card').length).toBe(2);
});

