import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components/Modal";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
                onClick={() => setUseDarkTheme(true)}
            >
                Dark Theme
                </button>
            <button style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
                onClick={() => setUseDarkTheme(false)}
            >
                Default Theme
                </button>

            <button style={{ margin: "0 16px 24px", padding: "8px", background: "none", cursor: "pointer" }}
                onClick={() => setShowModal(!showModal)}
            >
                Toggle Modal
                </button>

            <div style={{
                background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
           <SignUpModal showModal={showModal} setShowModal={setShowModal} />
            </div>
            <GlobalStyle />
        </ThemeProvider>
       
    )
}

ReactDOM.render(<App />, document.getElementById('root'));