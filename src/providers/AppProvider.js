import React from "react";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import CountriesProvider from "./CountriesProvider";

const AppProvider = ({ children }) => {
    return (
        <CountriesProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </CountriesProvider>
    );
};

export default AppProvider;
