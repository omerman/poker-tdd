import React from 'react';
import { render } from '@testing-library/react'
import { CardStore } from './store';
import { ECardSuit } from './constant/suit';
import { ECardValue } from './constant/value';
import { Card } from '.';

it('renders without crashing', () => {
  const store = new CardStore(
    ECardSuit.HEARTS,
    ECardValue.KING,
  );
  render(<Card store={store} />);
});

it('renders king of hearts', async () => {
  const store = new CardStore(
    ECardSuit.HEARTS,
    ECardValue.KING,
  );
  const { findByTestId } = render(<Card store={store} />);
  const card = await findByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
});

it('renders king of spades', async () => {
  const store = new CardStore(
    ECardSuit.SPADES,
    ECardValue.KING,
  );
  const { findByTestId } = render(<Card store={store} />);
  const card = await findByTestId(`card-img-${ECardSuit.SPADES}_${ECardValue.KING}`);
});
