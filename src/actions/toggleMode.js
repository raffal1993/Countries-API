import { createSlice } from "@reduxjs/toolkit";

const initialState = "dark";

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (state, action) => {
            return (state = action.payload);
        }
    }
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
