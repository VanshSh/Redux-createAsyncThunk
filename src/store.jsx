import { configureStore } from '@reduxjs/toolkit';
import contentSlice from '../src/slice/contentSlice';
import colorSlice from '../src/slice/backgroundColorSlice';

export const store = configureStore({
  reducer: {
    content: contentSlice,
    changeColor: colorSlice,
  },
});
