import React from "react";
import { Card } from "../card";
import { ECardSuit } from "../card/constant/suit";
import { ECardValue } from "../card/constant/value";

export const Hand: React.FC = () => {
    return (
        <div data-testid="hand">
            <Card suit={ECardSuit.DIAMONDS} value={ECardValue.TWO} />
        </div>
    );
}
