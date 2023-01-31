import styled from 'styled-components';

interface PropsSubmit {
    backgroundColor: string;
    color: string;
    padding: string;
}

export const SubmitStyled = styled.input<PropsSubmit>`
    border: none;
    padding: ${({ padding }) => padding};
    border-radius: 20px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    font-family: var(--font-family);
    font-size: var(--step-4);
    font-weight: bold;
`;