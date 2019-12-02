import React from "react";
import { Hand, IHandProps } from "../hand";
import { OpponentHand } from "../opponent-hand";
import { StyledRoot } from "./styled/root";

export interface ITableProps {
    hand: IHandProps,
    opponent?: boolean,
}

export const Table: React.FC<ITableProps> = ({
    hand,
    opponent,
}) => {
    return (
        <StyledRoot data-testid="table">
            { opponent && <OpponentHand /> }
            <Hand {...hand} />
        </StyledRoot>
    );
}
