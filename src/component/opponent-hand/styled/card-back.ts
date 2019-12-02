import styled from '@emotion/styled';
import cardBackSrc from '../../../asset/card-back.png';

export const StyledCardBackImage = styled(
    'div',
)(
    {
        backgroundImage: `url(${cardBackSrc})`,
        width: 71,
        height: 97,
        backgroundSize: 'contain',
    },
);