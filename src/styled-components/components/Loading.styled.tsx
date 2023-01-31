import { Visibility } from "@styled/layout/layout.styled";
import styled, { keyframes } from "styled-components";

const animationLoading = keyframes`

    to {
        transform: rotate(360deg);
      }
`;

export const LoadingStyle = styled.div`
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;
    block-size: 100vh;
    background-color: var(--color-primary);
   
   div{
        ${Visibility}
    }
`;

export const ImageLoading = styled.img`
    position: absolute;
    ${Visibility} 
    animation: 1s ${animationLoading} linear infinite ;
`;
