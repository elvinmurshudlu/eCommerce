import { configureStore } from '@reduxjs/toolkit';
import backetSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    backet: backetSlice,
  },
});
