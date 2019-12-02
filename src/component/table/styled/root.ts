import styled from '@emotion/styled';

export const StyledRoot = styled(
    'div',
)(
    {
        width: 500,
        height: 500,
        borderRadius: '50%',
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
);