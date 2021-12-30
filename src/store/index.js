import { configureStore } from "@reduxjs/toolkit";
import inputsReducer from "store/actions/reducers/inputsSlice";
import modeReducer from "store/actions/reducers/modeSlice";
import countriesReducer from "store/actions/reducers/countriesSlice";
import { countriesApi } from "store/actions/api/countriesApi";
import { loadState, saveState } from "./sessionStorage";
import { throttle } from "lodash";

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
