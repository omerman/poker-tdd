import React from "react";
import { Card } from "../card";

export const Hand: React.FC = () => {
    return (
        <div data-testid="hand">
            <Card suit={1} value={1} />
        </div>
    );
}
