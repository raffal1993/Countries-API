import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    region: ""
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
        }
    }
});

export const { setName, setRegion } = countriesSlice.actions;

export default countriesSlice.reducer;
