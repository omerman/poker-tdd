import React from "react";
import { CardView } from "../card/view";
import { ECardSuit } from "../card/constant/suit";
import { ECardValue } from "../card/constant/value";

export const Hand: React.FC = () => {
    return (
        <div data-testid="hand">
            <CardView suit={ECardSuit.DIAMONDS} value={ECardValue.TWO} />
            <CardView suit={ECardSuit.DIAMONDS} value={ECardValue.TWO} />
        </div>
    );
}
