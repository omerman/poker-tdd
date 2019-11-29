import React from "react";
import { Card } from "../card";
import { ECardSuit } from "../card/constant/suit";

export const Hand: React.FC = () => {
    return (
        <div data-testid="hand">
            <Card suit={ECardSuit.HEARTS} value={1} />
        </div>
    );
}
