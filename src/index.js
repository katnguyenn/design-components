import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";
const App = () => {
    return (
        <>
            <PrimaryButton>Hello World</PrimaryButton>
            <SecondaryButton>Goodbye World</SecondaryButton>
            <GlobalStyle />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));