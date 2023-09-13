import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { apiReducer } from './userApiSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userApiData: apiReducer,
  },
})