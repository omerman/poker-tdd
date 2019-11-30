import React from "react";
import { Card } from "../card";
import { CardStore } from "../card/store";

export interface IHandProps {
    firstCardStore: CardStore,
    secondCardStore: CardStore,
}

export const Hand: React.FC<IHandProps> = ({
    firstCardStore,
    secondCardStore,
}) => {
    return (
        <div data-testid="hand">
            <Card store={firstCardStore} />
            <Card store={secondCardStore} />
        </div>
    );
}
