import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from '.';
import fetchMock from 'fetch-mock';
import { ECardSuit } from '../card/constant/suit';
import { ECardValue } from '../card/constant/value';
import { CardStore } from '../card/store';

afterEach(
  () => {
    fetchMock.restore();
    cleanup();
  }
);

const mockHand = (
  cards: [CardStore, CardStore],
) => {
  fetchMock.getOnce(
    '/api/hand', 
    200, 
    {
      response: cards
    },
  );
}

it('renders without crashing', () => {
  mockHand([
    {
      suit: ECardSuit.HEARTS,
      value: ECardValue.TWO,
    },
    {
      suit: ECardSuit.HEARTS,
      value: ECardValue.TWO,
    }
  ]);
  render(<App />);
});

it('renders table', async () => {
  mockHand([
    {
      suit: ECardSuit.HEARTS,
      value: ECardValue.TWO,
    },
    {
      suit: ECardSuit.HEARTS,
      value: ECardValue.TWO,
    }
  ]);

  const { findByTestId } = render(<App />);
  await findByTestId('table');
});

it('renders hand with king of hearts and king of clubs', async () => {
  mockHand([
    {
      suit: ECardSuit.HEARTS,
      value: ECardValue.KING,
    },
    {
      suit: ECardSuit.CLUBS,
      value: ECardValue.KING,
    }
  ]);
  const { findByTestId, findAllByTestId } = render(<App />);
  const cards = await findAllByTestId('card');
  const firstCard = await findByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
  const secondCard = await findByTestId(`card-img-${ECardSuit.CLUBS}_${ECardValue.KING}`);

  expect(cards[0].contains(firstCard)).toBe(true);
  expect(cards[1].contains(secondCard)).toBe(true);
});

it('renders hand with king of spades and king of diamonds', async () => {
  mockHand([
    {
      suit: ECardSuit.SPADES,
      value: ECardValue.KING,
    },
    {
      suit: ECardSuit.DIAMONDS,
      value: ECardValue.KING,
    }
  ]);
  const { findByTestId, findAllByTestId } = render(<App />);
  const cards = await findAllByTestId('card');
  const firstCard = await findByTestId(`card-img-${ECardSuit.SPADES}_${ECardValue.KING}`);
  const secondCard = await findByTestId(`card-img-${ECardSuit.DIAMONDS}_${ECardValue.KING}`);

  expect(cards[0].contains(firstCard)).toBe(true);
  expect(cards[1].contains(secondCard)).toBe(true);
});