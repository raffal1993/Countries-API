import React from "react";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { store } from "store/store";
import { Provider } from "react-redux";

const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </Provider>
    );
};

export default AppProvider;
