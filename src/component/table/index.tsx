import React from "react";
import { Hand, IHandProps } from "../hand";
import { OpponentHand } from "../opponent-hand";

export interface ITableProps {
    hand: IHandProps,
    opponent?: boolean,
}

export const Table: React.FC<ITableProps> = ({
    hand,
    opponent,
}) => {
    return (
        <div data-testid="table">
            <Hand {...hand} />
            { opponent && <OpponentHand /> }
        </div>
    );
}
