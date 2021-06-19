import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";



const Button = styled.button `
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    transition: background-color 0.2 linear, color 0.2s linear;

    

`

export const PrimaryButton = styled(Button) `
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }
   

`;

export const SecondaryButton = styled(Button) `
    background-color: white;
    border: 2px solid ${defaultTheme.secondaryColor};
    color: ${defaultTheme.secondaryColor};

    &:hover {
        background-color: ${defaultTheme.secondaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }
`





