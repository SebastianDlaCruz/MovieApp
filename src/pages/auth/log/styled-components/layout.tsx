import styled from "styled-components";
import { propsButton, propsCarrousel } from "./types/types";
export const ContainerCheckStyled = styled.div`

    display: flex;
    align-items: center;
    gap: 8px;    
    inline-size: 100%;
    margin : 17px 0;
    div{
        display: inherit;        
        align-items: center;
        inline-size: 69%;
        gap: 2px;
        label{
            order:2;
            min-inline-size: 222px;
            font-size: var(--step-5);
            font-weight: 300;
            text-align: center;
            color: #ffffff57;

        }
        input{
           --check-size: 15px;
           order:1;
           block-size: var(--check-size);
           inline-size: var(--check-size);
           appearance: none;
           border-radius: 4px;
           block-size: var(--check-size);
           inline-size: var(--check-size);
           border: 1px solid var(--color-secondary);
           &:checked{
            background-image: url('/icons/Done.svg');
            background-repeat: no-repeat;
            background-size: cover;
           }
        }

    }

    a{      
        inline-size: 200px;
        line-height: 48px;
        text-decoration:underline;
        color: #fff;
        font-size: var(--step-5);
        text-align: center;
    }
`;

export const ContainerStatisticsStyled = styled.div`
    position: absolute;
    inset-block-end: 0%;
    inset-inline: 0;
    display: flex;
    justify-content: space-between;
    padding-inline-start: 2rem;

    ul{
        display: inherit;
        flex-direction: column;
        text-align: left;
    }

    .container{
        display: inherit;
        flex-direction: column;
        div{
            display: inherit;
        }

        ul{
            display: inherit;
        }
    }


`;

export const SeriesInformationStyled = styled.ul`

    display: flex;
    flex-direction: column;
    text-align: left;
    li{
        min-inline-size: 200px;
        min-block-size: 10px;
        h2,h3,h4{
            margin: 12px 0;
        }
        h2{
            font-size: var(--step-2);
            line-height: 3px;
        }

        h3{
            font-size: var(--step-4);
        }

        h4{      
            font-size: var(--step-5);
        }

    }
  
`;

export const ContainerPointsStyled = styled.div` 
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: 200px;
    block-size: 140px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    div{
        display: inherit;
        align-items: center;
        gap: 10px;
        span{
            min-inline-size: 100%;
        }
    }

    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        inline-size: 100px;
    }
  
`;

export const ContainerCarrouselStyle = styled.li<propsCarrousel>`
    opacity: ${({ current, isActive }) => (isActive === current ? 1 : 0)};
  transition: opacity 1s ease-in-out;
    
`;

export const ButtonStyled = styled.button<propsButton>`
 
    padding: ${({ paddings }) => paddings};
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-repeat: no-repeat;
    
`;

export const ContainerButtonGoogleStyled = styled.legend`
    
    display : grid;
    place-items: center;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        inline-size: 250px;
        hr{

            inline-size: 35%;
        }
    }
`;
