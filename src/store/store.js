import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "actions/inputs";
import modeReducer from "actions/toggleMode";
import { countriesApi } from "actions/fetchData";
import { loadState, saveState } from "./sessionStorage";
import { throttle } from "lodash";
import countriesReducer from "actions/countries";

export const store = configureStore({
    preloadedState: loadState(),
    reducer: {
        countries: countriesReducer,

        inputs: inputsReducer,
        mode: modeReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(countriesApi.middleware);
    }
});

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 500)
);
