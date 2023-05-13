import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  // async (userId, thunkAPI)
  async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/photos');
    const data = await res.data.slice(0, 30);
    return data;
  }
);
export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },

  // OR YOU CAN WRITE LIKE THIS
  //  [getUserById.pending]: (state, action) => {
  //   state.status = 'loading';
  // },
  // [getUserById.fulfilled]: (state, action) => {
  //   state.status = 'succeeded';
  //   state.user = action.payload;
  // },
  // [getUserById.rejected]: (state, action) => {
  //   state.status = 'failed';
  //   state.error = action.error.message;
  // }
});

export default contentSlice.reducer;
