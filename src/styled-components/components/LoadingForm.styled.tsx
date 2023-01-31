import styled, { keyframes } from "styled-components";

const spinning = keyframes`
    to {
    transform: rotate(360deg);
  }
`;

export const LoadingImagesStyle = styled.div`
    position: absolute;
    block-size: 100px;
    inline-size: 100px;
    border-radius: 50px;
    text-align: center;
    background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
    animation: ${spinning} 1.7s linear infinite;
    filter: blur(1px);
    z-index:3;

    div{

        block-size: inherit;
        inline-size: inherit;
        border-radius: inherit;
        background-color: rgb(36, 36, 36);
        filter: blur(10px);
    }

`;
