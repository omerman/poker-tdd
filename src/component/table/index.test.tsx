import React from 'react';
import { render } from '@testing-library/react'
import { Table } from '.';
import { ECardSuit } from '../card/constant/suit';
import { ECardValue } from '../card/constant/value';
import { CardStore } from '../card/store';

it('renders without crashing', () => {
  render(
    <Table
      hand={{
        firstCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.TWO),
        secondCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.TWO),
      }}
    />
  );
});

it('renders user hand', async () => {
  const { findByTestId } = render(
    <Table
      hand={{
        firstCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.TWO),
        secondCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.TWO),
      }}
    />
  );
  await findByTestId('hand');
});

it('renders user hand with king of hearts and king of spades', async () => {
  const { findAllByTestId, findByTestId } = render(
    <Table
      hand={{
        firstCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.KING),
        secondCardStore: new CardStore(ECardSuit.SPADES, ECardValue.KING),
      }}
    />
  );
  const cards = await findAllByTestId('card');

  const firstCardImage = await findByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
  expect(cards[0].contains(firstCardImage)).toBe(true);

  const secondCardImage = await findByTestId(`card-img-${ECardSuit.SPADES}_${ECardValue.KING}`);
  expect(cards[1].contains(secondCardImage)).toBe(true);
});

it('renders user hand with king of clubs and king of diamonds', async () => {
  const { findAllByTestId, findByTestId } = render(
    <Table
      hand={{
        firstCardStore: new CardStore(ECardSuit.CLUBS, ECardValue.KING),
        secondCardStore: new CardStore(ECardSuit.DIAMONDS, ECardValue.KING),
      }}
    />
  );

  const cards = await findAllByTestId('card');

  const firstCardImage = await findByTestId(`card-img-${ECardSuit.CLUBS}_${ECardValue.KING}`);
  expect(cards[0].contains(firstCardImage)).toBe(true);

  const secondCardImage = await findByTestId(`card-img-${ECardSuit.DIAMONDS}_${ECardValue.KING}`);
  expect(cards[1].contains(secondCardImage)).toBe(true);
});


