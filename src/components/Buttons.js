import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";



const Button = styled.button `
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`

export const PrimaryButton = styled(Button) `
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;
   

`;

export const SecondaryButton = styled(Button) `
    background-color: white;
    border: 2px solid ${defaultTheme.secondaryColor};
    color: ${defaultTheme.secondaryColor};
`





