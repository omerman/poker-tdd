import React from 'react';
import { render, cleanup, act, RenderResult } from '@testing-library/react';
import { Game } from '.';
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

const mockState = (
  state: {
    cards: [CardStore, CardStore],
    opponent?: boolean,
  },
) => {
  const { cards, opponent = false } = state;

  fetchMock.getOnce(
    '/api/game/state',
    200,
    {
      response: {
        cards,
        opponent,
      }
    },
  );
}

describe('Game In Progress', () => {
  it('should render without crashing', async () => {
    mockState({
      cards: [
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
      ],
    });

    await act(
      async () => {
        render(<Game />);
        await fetchMock.flush();
      },
    );
  });
  
  it('should render table', async () => {
    mockState({
      cards: [
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
      ],
    });
    
    let renderResult: RenderResult;

    await act(
      async () => {
        renderResult = render(<Game />);
        await fetchMock.flush();
      },
    );

    act(
      () => {
        const { queryByTestId } = renderResult;
        expect(queryByTestId('table')).not.toBeNull();
      },
    );
  });
  
  it('should render a hand with king of hearts and king of clubs', async () => {
    mockState({
      cards: [
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.KING,
        },
        {
          suit: ECardSuit.CLUBS,
          value: ECardValue.KING,
        },
      ],
    });
  
    let renderResult: RenderResult;

    await act(
      async () => {
        renderResult = render(<Game />);
        await fetchMock.flush();
      },
    );

    act(
      () => {
        const { queryByTestId, queryAllByTestId } = renderResult;
        const cards = queryAllByTestId('card');
        const firstCard = queryByTestId(`card-img-${ECardSuit.HEARTS}_${ECardValue.KING}`);
        const secondCard = queryByTestId(`card-img-${ECardSuit.CLUBS}_${ECardValue.KING}`);
  
        expect(cards[0].contains(firstCard)).toBe(true);
        expect(cards[1].contains(secondCard)).toBe(true);
      },
    );
  });
  
  it('should render a hand with king of spades and king of diamonds', async () => {
    mockState({
      cards: [
        {
          suit: ECardSuit.SPADES,
          value: ECardValue.KING,
        },
        {
          suit: ECardSuit.DIAMONDS,
          value: ECardValue.KING,
        },
      ],
    });

    let renderResult: RenderResult;

    await act(
      async () => {
        renderResult = render(<Game />);
        await fetchMock.flush();
      },
    );

    act(
      () => {
        const { queryByTestId, queryAllByTestId } = renderResult;
        const cards = queryAllByTestId('card');
        const firstCard = queryByTestId(`card-img-${ECardSuit.SPADES}_${ECardValue.KING}`);
        const secondCard = queryByTestId(`card-img-${ECardSuit.DIAMONDS}_${ECardValue.KING}`);

        expect(cards[0].contains(firstCard)).toBe(true);
        expect(cards[1].contains(secondCard)).toBe(true);
      },
    );
  });
  
  it('should render opponent', async () => {
    mockState({
      cards: [
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
      ],
      opponent: true,
    });

    let renderResult: RenderResult;

    await act(
      async () => {
        renderResult = render(<Game />);
        await fetchMock.flush();
      },
    );
    
    act(
      () => {
        const { queryByTestId } = renderResult;
        expect(queryByTestId('opponent-hand')).not.toBeNull();
      }
    );
  });
  
  it('should render opponent', async () => {
    mockState({
      cards: [
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
        {
          suit: ECardSuit.HEARTS,
          value: ECardValue.TWO,
        },
      ],
      opponent: false,
    });

    let renderResult: RenderResult;

    await act(
      async () => {
        renderResult = render(<Game />);
        await fetchMock.flush();
      },
    );
    
    act(
      () => {
        const { queryByTestId } = renderResult;
        expect(queryByTestId('opponent-hand')).toBeNull();
      }
    );
  });
});