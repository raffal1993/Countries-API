import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "store/countriesSlice";
import { countriesApi } from "hooks/useCountries";

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware)
});
