import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "actions/inputs";
import { countriesApi } from "actions/fetchCountries";
import { loadState, saveState } from "./sessionStorage";
import { throttle } from "lodash";

export const store = configureStore({
    preloadedState: loadState(),
    reducer: {
        countries: countriesReducer,
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
