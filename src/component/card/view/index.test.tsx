import React from 'react';
import { render } from '@testing-library/react'
import { CardView } from '.';
import { ECardSuit } from '../constant/suit';
import { ECardValue } from '../constant/value';

it('renders without crashing', () => {
  render(<CardView suit={ECardSuit.HEARTS} value={ECardValue.KING} />);
});

it('renders king of heart', async () => {
  const { findByTestId } = render(<CardView suit={ECardSuit.HEARTS} value={ECardValue.KING} />);
  const card = await findByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
  const cardStyle = window.getComputedStyle(card);
  expect(cardStyle.backgroundImage).toBe('url(cards.png)');
  expect(cardStyle.backgroundPositionX).toBe('-878px');
  expect(cardStyle.backgroundPositionY).toBe('-99px');
});

it('renders king of spades', async () => {
  const { findByTestId } = render(<CardView suit={ECardSuit.SPADES} value={ECardValue.KING} />);
  const card = await findByTestId(`card-img-${ECardSuit.SPADES}_${ECardValue.KING}`);
  const cardStyle = window.getComputedStyle(card);
  expect(cardStyle.backgroundImage).toBe('url(cards.png)');
  expect(cardStyle.backgroundPositionX).toBe('-878px');
  expect(cardStyle.backgroundPositionY).toBe('-2px');
});

it('renders king of clubs', async () => {
  const { findByTestId } = render(<CardView suit={ECardSuit.CLUBS} value={ECardValue.KING} />);
  const card = await findByTestId(`card-img-${ECardSuit.CLUBS}_${ECardValue.KING}`);
  const cardStyle = window.getComputedStyle(card);
  expect(cardStyle.backgroundImage).toBe('url(cards.png)');
  expect(cardStyle.backgroundPositionX).toBe('-878px');
  expect(cardStyle.backgroundPositionY).toBe('-197px');
});

it('renders king of diamonds', async () => {
  const { findByTestId } = render(<CardView suit={ECardSuit.DIAMONDS} value={ECardValue.KING} />);
  const card = await findByTestId(`card-img-${ECardSuit.DIAMONDS}_${ECardValue.KING}`);
  const cardStyle = window.getComputedStyle(card);
  expect(cardStyle.backgroundImage).toBe('url(cards.png)');
  expect(cardStyle.backgroundPositionX).toBe('-878px');
  expect(cardStyle.backgroundPositionY).toBe('-295px');
});
