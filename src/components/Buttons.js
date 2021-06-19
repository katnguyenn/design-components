import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
         font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,

    warning: ({props}) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.status.textColorInverted}

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }

    `,
    secondaryButtonWarning: ({props}) => `
        background: none;
        border: 2px solid ${props.theme.status.warningColor};
        color: ${props.theme.status.warningColor};
    `,
    
    success: ({props}) => `
        background-color: ${props.theme.status.successColor};
        color: ${props.theme.textColorInverted}

        &:hover {
            background-color: ${props.theme.status.successColorHover};
            
        }

        &:active {
            background-color: ${props.theme.status.successColorActive};
        }

    `,
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    transition: background-color 0.2 linear, color 0.2s linear;

    &:focus {
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary}
    }
    

`

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: white;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }
   
    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textonDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

export const SecondaryButton = styled(Button)`
    background-color: white;
    border: 2px solid ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryColor};

    &:hover {
        background-color: ${props => props.theme.secondaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }

     &:disabled {
        background: none;
        color: ${props => props.theme.disabled};
        border-color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`





