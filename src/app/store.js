// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice"; // Ensure the path is correct

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
