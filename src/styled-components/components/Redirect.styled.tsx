import styled from "styled-components";

type PropsRedirect = {
	colorSpan: string;
	colorLink: string;
};
export const RedirectStyled = styled.span<PropsRedirect>`
    display: inline-block;
    color: ${({ colorSpan }) => colorSpan};
    
    a{
        margin-inline-start : 10px;
        font-weight: bold;
        color: ${({ colorLink }) => colorLink};      
    }
`;
