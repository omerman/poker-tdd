import React from "react";

export const OpponentHand: React.FC<{}> = () => {
    return (
        <div data-testid="opponent-hand">
            <div data-testid="hidden-card" />
            <div data-testid="hidden-card" />
        </div>
    );
}
