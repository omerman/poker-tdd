import { computed } from 'mobx';
import { promisedComputed } from 'computed-async-mobx';
import { CardStore } from '../card/store';

interface IGameState {
    cards: [CardStore, CardStore],
}

export class GameStore {
    private readonly gameStatePromise = promisedComputed<undefined | IGameState>(
        undefined,
        async () => {
            const handResponse = await fetch('api/game/state');
            const handCards: IGameState = await handResponse.json();
      
            return handCards;
        },
    );

    @computed
    get handCards() {
        const { gameState } = this;

        if (gameState) {
            return gameState.cards;
        } else {
            return undefined;
        }
    }

    @computed
    private get gameState() {
        return this.gameStatePromise.get();
    }
}