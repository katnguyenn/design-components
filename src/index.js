import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";

const App = () => {
    return (
        <>
            <PrimaryButton>Hello World</PrimaryButton>
            <SecondaryButton>Goodbye World</SecondaryButton>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));