import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        loginuser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loginuser, logout } = userSlice.actions;

// Selector to get the current user from the state
export const selectCurrentUser = (state) => state.user.user;

export default userSlice.reducer;
