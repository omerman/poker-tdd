import React, { useState, useEffect } from 'react';
import { Table } from '../table';
import { CardStore } from '../card/store';

export const Game: React.FC = () => {
  const [handCards, setHandCards] = useState<[CardStore, CardStore] | undefined>(undefined);

  useEffect(() => {
    let isActive = true;

    async function fetchHand() {
      const handResponse = await fetch('api/hand');
      const handCards: [CardStore, CardStore] = await handResponse.json();

      if (isActive) {
        setHandCards(handCards);
      }
    }

    fetchHand();

    return () => {
      isActive = false;
    };
  }, []);

  if (!handCards) {
    return null;
  } else {
    return (
      <div>
        <Table
          hand={{
            firstCardStore: handCards[0],
            secondCardStore: handCards[1],
          }} 
        />
      </div>
    );
  }
}
