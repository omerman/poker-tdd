import styled from '@emotion/styled';
import { ECardSuit } from '../constant/suit';
import { ECardValue } from '../constant/value';

export interface IStyledCardImageProps {
    suit: ECardSuit,
    value: ECardValue,
}

export const StyledCardImage = styled(
    'div',
    {
        shouldForwardProp: (name: string) => name !== 'suit' && name !== 'value',
        
    },
)<IStyledCardImageProps>(
    {
        backgroundImage: `url(${require('../../asset/cards.png')})`,
        width: 71,
        height: 97,
    },
    ({ suit }) => {
        switch (suit) {
            case ECardSuit.SPADES:
                return { backgroundPositionY: -2 };
            case ECardSuit.HEARTS:
                return { backgroundPositionY: -99 };
            case ECardSuit.CLUBS: 
                return { backgroundPositionY: -197 };
            case ECardSuit.DIAMONDS:
                return { backgroundPositionY: -295 };
        }
    },
    ({ value }) => {
        switch (value) {
            case ECardValue.ACE:
                return { backgroundPositionX: -2 };
            case ECardValue.TWO:
                return { backgroundPositionX: -75 };
            case ECardValue.THREE: 
                return { backgroundPositionX: -148 };
            case ECardValue.FOUR:
                return { backgroundPositionX: -220 };
            case ECardValue.FIVE:
                return { backgroundPositionX: -294 };
            case ECardValue.SIX:
                return { backgroundPositionX: -366 };
            case ECardValue.SEVEN:
                return { backgroundPositionX: -440 };
            case ECardValue.EIGHT:
                return { backgroundPositionX: -512 };
            case ECardValue.NINE:
                return { backgroundPositionX: -586 };
            case ECardValue.TEN:
                return { backgroundPositionX: -658 };
            case ECardValue.PRINCE:
                return { backgroundPositionX: -732 };
            case ECardValue.QUEEN:
                return { backgroundPositionX: -804 };
            case ECardValue.KING:
                return { backgroundPositionX: -878 };
        }
    }
);