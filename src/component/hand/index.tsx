import React from "react";
import { Card } from "../card";
import { CardStore } from "../card/store";
import { StyledRoot } from "./styled/root";

export interface IHandProps {
    firstCardStore: CardStore,
    secondCardStore: CardStore,
}

export const Hand: React.FC<IHandProps> = ({
    firstCardStore,
    secondCardStore,
}) => {
    return (
        <StyledRoot data-testid="hand">
            <Card store={firstCardStore} />
            <Card store={secondCardStore} />
        </StyledRoot>
    );
}
