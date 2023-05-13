import { createSlice } from '@reduxjs/toolkit';

const initalColor = {
  initalColor: '808080',
};

export const colorSlice = createSlice({
  name: 'Color Slice',
  initialState: initalColor,
  reducers: {
    changeColor(state, action) {
      state.initalColor = action.payload;
    },
  },
});

export default colorSlice.reducer;
export const colorSliceAction = colorSlice.actions;
