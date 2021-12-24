import React from "react";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../assets/styles/theme";
import { useMode } from "hooks/useMode";

const StyleProvider = ({ children }) => {
    const { mode } = useMode();

    const theme = getTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default StyleProvider;
