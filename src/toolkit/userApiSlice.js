import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

export const { reducer: apiReducer } = apiSlice; //

// Dispatch the action
// store.dispatch(fetchData());

// Access the data in the store
// const dataFromStore = store.getState().api.data;
// console.log(dataFromStore);