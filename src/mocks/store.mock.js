import { configureStore } from '@reduxjs/toolkit';
import countrymockReducer from './contrySlice.mock.js';

const store = configureStore({
  reducer: {
    countriesMocked: countrymockReducer,
  },
});

export default store;
