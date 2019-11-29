import React from "react";
import { ECardSuit } from "./constant/suit";
import { ECardValue } from "./constant/value";
import { StyledCardImage } from "./styled/image";

export interface ICardProps {
    suit: ECardSuit,
    value: ECardValue,
}

export const Card: React.FC<ICardProps> = ({
    suit,
    value,
}) => {
    return (
        <div data-testid="card">
            <StyledCardImage
                data-testid={`card-img-${suit}_${value}`}
                suit={suit}
                value={value}
            />
        </div>
    );
}
