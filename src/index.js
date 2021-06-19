import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";
const App = () => {
    return (
        <>
            <PrimaryButton disabled>Hello World</PrimaryButton>
            <SecondaryButton disabled>Goodbye World</SecondaryButton>
            <GlobalStyle disabled />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));