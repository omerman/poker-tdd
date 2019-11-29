import React from "react";
import { ECardSuit } from "./constant/suit";
import { ECardValue } from "./constant/value";

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
            <img 
                data-testid={`card-img-${suit}_${value}`} 
                alt={`Card - Suit, ${suit}, Value, ${value} `}
            />
        </div>
    );
}
