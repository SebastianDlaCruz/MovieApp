import styled from 'styled-components';

type Props = {
    flex: string
}

export const SectionFormStyled = styled.section<Props>`    
    display: grid;
    place-items: center;
    inline-size: 900px;
    block-size: clamp(300px,100vh,700px); 
    flex: ${({ flex }) => flex};
    
`;