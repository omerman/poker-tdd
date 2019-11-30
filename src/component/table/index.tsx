import React from "react";
import { Hand } from "../hand";
import { CardStore } from "../card/store";
import { ECardSuit } from "../card/constant/suit";
import { ECardValue } from "../card/constant/value";

export const Table: React.FC = () => {
    return (
        <div data-testid="table">
            <Hand 
                firstCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.KING)} 
                secondCardStore={new CardStore(ECardSuit.HEARTS, ECardValue.KING)} 
            />
        </div>
    );
}
