import React from "react";
import { StyledRoot } from './styled/root';
import { StyledCardBackImage } from './styled/card-back';

export const OpponentHand: React.FC<{}> = () => {
    return (
        <StyledRoot data-testid="opponent-hand">
            <StyledCardBackImage data-testid="hidden-card" />
            <StyledCardBackImage data-testid="hidden-card" />
        </StyledRoot>
    );
}
