import React from 'react';
import { useObserver, useLocalStore } from 'mobx-react';
import { Table } from '../table';
import { GameStore } from './store';


export const Game: React.FC = () => {
  const store = useLocalStore(() => new GameStore());

  return useObserver(() => {
    if (!store.handCards) {
      return null;
    } else {
      return (
        <div>
          <Table
            hand={{
              firstCardStore: store.handCards[0],
              secondCardStore: store.handCards[1],
            }} 
          />
        </div>
      );
    }
  });
}
