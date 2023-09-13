import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: '', age: 0, email: '' };

export const userSlice = createSlice({
    name: 'user', // name of the slice
    initialState: { value: initialStateValue }, // initial satate
    // actual reducer function
    reducers: {
        loginAction: (state, action) => {
            state.value = action.payload;
        },
        logOutAction: (state) => {
            state.value = initialStateValue;
        }
    }
});

export const { loginAction, logOutAction } = userSlice.actions;

export default userSlice.reducer;