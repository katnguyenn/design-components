import styled from "styled-components";

const primaryBlue = "#2A4793";
const primaryOrange = "#F08B2E";

const Button = styled.button `
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
`

export const PrimaryButton = styled(Button) `
    background-color: ${primaryBlue};
    border: none;
    color: white;
   

`;

export const SecondaryButton = styled(Button) `
    background-color: white;
    border: 2px solid ${primaryOrange};
    color: ${primaryOrange};
`





