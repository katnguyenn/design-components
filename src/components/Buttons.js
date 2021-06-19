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

    &:focus {
        outline: 3px solid ${defaultTheme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColorOnPrimary}
    }
    

`

export const PrimaryButton = styled(Button) `
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }
   
    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textonDisabled};
        cursor: not-allowed;
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

     &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
`





