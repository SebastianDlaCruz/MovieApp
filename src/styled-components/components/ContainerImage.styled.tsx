import styled from 'styled-components';

type Props = {
  flex: string;
}

export const ContainerImageStyled = styled.div<Props>`
  
      position: relative;
      min-inline-size: 400px;
      block-size: clamp(300px,100vh,700px); 
      flex: ${({ flex }) => flex};
      margin:0;
      overflow: hidden;

`;