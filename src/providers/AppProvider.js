import React from "react";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";

const AppProvider = ({ children }) => {
     return (
          <ThemeProvider theme={theme}>
               <GlobalStyle />
               {children}
          </ThemeProvider>
     );
};

export default AppProvider;
