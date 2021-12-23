import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    region: "",
    countryCode: ""
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setRegion: (state, action) => {
            state.region = action.payload;
        },
        setCountryCode: (state, action) => {
            state.countryCode = action.payload;
        }
    }
});

export const { setName, setRegion, setCountryCode } = countriesSlice.actions;

export default countriesSlice.reducer;
