import { ECardSuit } from "./constant/suit";
import { ECardValue } from "./constant/value";

export class CardStore {
    constructor(
        readonly suit: ECardSuit,
        readonly value: ECardValue,
    ) {}
}