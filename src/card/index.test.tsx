import React from 'react';
import { render } from '@testing-library/react'
import { Card } from '.';
import { ECardSuit } from './constant/suit';
import { ECardValue } from './constant/value';

it('renders without crashing', () => {
  render(<Card suit={ECardSuit.HEARTS} value={ECardValue.KING} />);
});

it('renders card, kings of heart', async () => {
  const { findByTestId } = render(<Card suit={ECardSuit.HEARTS} value={ECardValue.KING} />);
  await findByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
});
