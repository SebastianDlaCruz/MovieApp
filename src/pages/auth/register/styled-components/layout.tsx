import { FlexBox } from "@styled/layout/layout.styled";
import styled, { keyframes } from "styled-components";
import { ImgType, ModalType } from "./types/type";

const animationCircle = keyframes`
    0% {
    stroke-dashoffset: 380;
  }

  100% {
    stroke-dashoffset: 0;
  }
`;

const animationCheck = keyframes`
    0% {
    stroke-dashoffset: 45;
  }

  100% {
    stroke-dashoffset: 90;
  }
`;

export const ContainerRegister = styled.div`
    ${FlexBox}
    justify-content: center;
    align-items: center;
    min-block-size: 100vh;
    background-color: var(--color-primary);
    color: #FFFFFF;
    @media screen and (width > 950px){
        gap: 4em;   
    }

`;

export const ContainerButton = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const ContainerInfoStyled = styled.div`

    position: absolute;
    inset-block-start: 32%;   
    inset-inline-start: 6%;
    font-size: var(--step-5);
    text-align: center;
    strong{
        font-weight: bold;
        font-size: var(--step-2);
        font-family: var(--font-family);
    }

    ul li {

        b {
            font-size: var(--step-4);
        
        } 
        p{  
            font-weight: 300;
            font-size: var(--step-5);
        }  
    }
    @media screen and (width > 950px){
        text-align: left;
    }
`;
export const ConfirmedStyled = styled.div`
    position: fixed;
    inset: 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    inline-size: 100%;
    block-size: 100vh;
    background-color: var(--color-primary);
    z-index: 3;
    svg{
        display: block;
        inline-size: 100%;
        block-size: 79%;
        
        circle{
            transform: rotate(-90deg);
            transform-origin: center;
            stroke-dasharray: 380;
            stroke-dashoffset: 380;
            animation: ${animationCircle} 2s ease-in-out forwards;
        }

        polyline{
            stroke-dasharray: 45;
            stroke-dashoffset: 45;
            animation:  ${animationCheck} 0.2s 2s ease-in-out forwards;
        }
    }
    
    p{
        font-size: var(--step-2);
        color: #fff;
    }
`;

export const ModalStyled = styled.div<ModalType>` 
    position: fixed;
    inset: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    block-size: 100vh;
    inline-size: 100%;
    background-color: #00000099;
    z-index: 1;
    visibility: ${({ open }) => (open ? "hidden" : "visible")};
    
    div{
        display: inherit;
        flex-direction: column;
        justify-content:inherit;
        align-items: inherit;
        block-size: 300px;
        padding: 2rem;
        inline-size: 400px;
        border-radius: 12px;
        text-align: center;
        line-height: 40px;
        background-color: #2c2c2c;
        z-index: 2;
        visibility: ${({ open }) => (open ? "hidden" : "visible")};
        
        button{ 
          padding: 1em 2em;
          border-radius: 12px;
          font-size: 1rem;
          background-color:#fff; 
          color:  #2c2c2c;
        }
    }
`;

export const ImagStyled = styled.img<ImgType>`

    opacity: ${({ count, index }) => (count === index ? 1 : 0)} ;

`;


