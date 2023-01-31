import styled from "styled-components";

interface PropsInput {
	readonly isActive: boolean;
	color: string;
	margin: string;
}

export const InputStyled = styled.div<PropsInput>`
    
    position: relative;
    margin: ${({ margin }) => margin};
    background-color: transparent ;
    

    label{
        position: absolute;
        inset-block-start: 15px;
        inset-inline-start: 0;
        pointer-events: none;

        span{
            display: inline-block;
            font-size: 18px;
            color : ${({ color }) => color};
            transform: ${({ isActive }) =>
							isActive ? "translateY(-31px)" : "translateY(0px)"};
            transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
    }

    input{

        display: block;
        inline-size: 100%;
        padding: .6rem 1rem;
        border: 0;
        border-bottom: 2px #252424 solid;
        font-size: 18px;
        background-color: transparent;
        color: #BABABA;
        
        &:focus,
        &:valid{
            outline: none;
            border-bottom-color: lightblue ;
        }
        
    }

`;
