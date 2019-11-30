import React from "react";
import { ECardSuit } from "../constant/suit";
import { ECardValue } from "../constant/value";
import { StyledCardImage } from "./styled/image";

export interface ICardViewProps {
    suit: ECardSuit,
    value: ECardValue,
}

export const CardView: React.FC<ICardViewProps> = ({
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
