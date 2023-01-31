import { FlexBox } from "@styled/layout/layout.styled";
import styled from "styled-components";

export const ContainerFormStyled = styled.div`
    ${FlexBox}
    align-items: center;
    min-block-size: 100vh;
    background-color: var(--color-primary);
    color: #fff;
`;
