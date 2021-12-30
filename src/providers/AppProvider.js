import React from "react";
import { store } from "store/index";
import { Provider } from "react-redux";
import StyleProvider from "./StyleProvider";

const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <StyleProvider>{children}</StyleProvider>
        </Provider>
    );
};

export default AppProvider;
