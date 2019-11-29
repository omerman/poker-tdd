import React from "react";
import { Hand } from "../hand";

export const Board: React.FC = () => {
    return (
        <div data-testid="board">
            <Hand />
        </div>
    );
}
