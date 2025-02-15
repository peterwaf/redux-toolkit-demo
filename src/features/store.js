import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice"
import countSlice from "./countSlice"
export const store = configureStore({
    reducer:{
        users:usersSlice,
        count:countSlice
    }
})