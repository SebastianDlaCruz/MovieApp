import styled from 'styled-components';

type Props = {
    status: string,
}

export const MessageResponseStyle = styled.span<Props>`
    position: absolute;
    padding: 1em 2em;
    border-radius : 6px;
    background-color: ${({ status }) => (status === 'success') ? '#098b1f' : '#b60d0d'};
`;