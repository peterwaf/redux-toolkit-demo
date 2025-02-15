import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    users:[],
    loading:false,
    error:null
}

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    }
)
const usersSlice = createSlice({
    name:"users",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.users = action.payload;
            state.loading = true;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default usersSlice.reducer;