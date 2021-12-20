import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "actions/inputs";
import { countriesApi } from "actions/fetchCountries";

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware)
});
