import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => {
    return (
        <>
            <PrimaryButton modifiers={["small", "warning" ]}>Hello World</PrimaryButton>
            <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Goodbye World</SecondaryButton>
            <GlobalStyle modifiers />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));