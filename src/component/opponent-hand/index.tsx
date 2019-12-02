import React from "react";
import { StyledCardBackImage } from './styled/card-back';

export const OpponentHand: React.FC<{}> = () => {
    return (
        <div data-testid="opponent-hand">
            <StyledCardBackImage data-testid="hidden-card" />
            <StyledCardBackImage data-testid="hidden-card" />
        </div>
    );
}
