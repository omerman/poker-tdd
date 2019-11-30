import React from "react";
import { CardStore } from "./store";
import { CardView } from "./view";

export interface ICardProps {
    store: CardStore
}

export const Card: React.FC<ICardProps> = ({
    store,
}) => {
    return (
        <CardView suit={store.suit} value={store.value} />
    );
}
