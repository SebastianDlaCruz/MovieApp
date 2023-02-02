import { PropsVisibility } from "@styled/types/type";
import { css } from "styled-components";
export const FlexBox = css`
    display: flex;
    flex-wrap: wrap;
`;

export const Visibility = css<PropsVisibility>`
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    visibility: ${({ isActive }) => (isActive ? "hidden" : "visible")};
    transition: opacity 1s cubic-bezier(.68,-0.55,.27,1.55);
`;
