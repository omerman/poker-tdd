import React from 'react';
import { Table } from '../table';
import { CardStore } from '../card/store';
import { ECardSuit } from '../card/constant/suit';
import { ECardValue } from '../card/constant/value';

export const App: React.FC = () => {
  return (
    <div>
      <Table
        hand={{
          firstCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.TWO),
          secondCardStore: new CardStore(ECardSuit.HEARTS, ECardValue.TWO),
        }} 
      />
    </div>
  );
}
