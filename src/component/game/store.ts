import { computed } from 'mobx';
import { promisedComputed } from 'computed-async-mobx';
import { CardStore } from '../card/store';


export class GameStore {
    private readonly handCardsPromise = promisedComputed<undefined | [CardStore, CardStore]>(
        undefined,
        async () => {
            const handResponse = await fetch('api/game/hand');
            const handCards: [CardStore, CardStore] = await handResponse.json();
      
            return handCards;
        },
    );

    @computed
    get handCards() {
        return this.handCardsPromise.get();
    }
}