import React from 'react';
import { render, cleanup } from '@testing-library/react'
import { Hand } from '.';
import { ECardSuit } from '../card/constant/suit';
import { ECardValue } from '../card/constant/value';
import { CardStore } from '../card/store';

afterEach(cleanup);

it('renders without crashing', () => {
  render(
    <Hand
      firstCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.KING)}
      secondCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
    />
  );
});

it('renders two cards', async () => {
  const { findAllByTestId } = render(
    <Hand
      firstCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
      secondCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
    />
  );
  const cards = await findAllByTestId('card');
  expect(cards.length).toBe(2);
});

it('renders first card to be king of hearts', async () => {
  const { findAllByTestId, findByTestId } = render(
    <Hand
      firstCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.KING)}
      secondCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
    />
  );
  const cards = await findAllByTestId('card');
  const firstCard = await findByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
  expect(cards[0].contains(firstCard)).toBe(true);
});

it('renders first card to be king of spades', async () => {
  const { findAllByTestId, findByTestId } = render(
    <Hand
      firstCardStore={new CardStore(ECardSuit.SPADES, ECardValue.KING)}
      secondCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
    />
  );
  const cards = await findAllByTestId('card');
  const firstCard = await findByTestId(`card-img-${ECardSuit.SPADES}_${ECardValue.KING}`);
  expect(cards[0].contains(firstCard)).toBe(true);
});

it('renders second card to be king of clubs', async () => {
  const { findAllByTestId, findByTestId } = render(
    <Hand
      firstCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
      secondCardStore={new CardStore(ECardSuit.CLUBS, ECardValue.KING)}
    />
  );
  const cards = await findAllByTestId('card');
  const secondCard = await findByTestId(`card-img-${ECardSuit.CLUBS}_${ECardValue.KING}`);
  expect(cards[1].contains(secondCard)).toBe(true);
});

it('renders second card to be king of diamonds', async () => {
  const { findAllByTestId, findByTestId } = render(
    <Hand
      firstCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.TWO)}
      secondCardStore={new CardStore(ECardSuit.DIAMONDS, ECardValue.KING)}
    />
  );
  const cards = await findAllByTestId('card');
  const secondCard = await findByTestId(`card-img-${ECardSuit.DIAMONDS}_${ECardValue.KING}`);
  expect(cards[1].contains(secondCard)).toBe(true);
});