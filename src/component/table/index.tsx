import React from "react";
import { Hand, IHandProps } from "../hand";

export interface ITableProps {
    hand: IHandProps,
}

export const Table: React.FC<ITableProps> = ({
    hand,
}) => {
    return (
        <div data-testid="table">
            <Hand {...hand} />
        </div>
    );
}
