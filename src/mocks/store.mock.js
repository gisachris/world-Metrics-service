import { configureStore } from '@reduxjs/toolkit';
import countrymockReducer from './contrySlice.mock';

const store = configureStore({
  reducer: {
    countriesMocked: countrymockReducer,
  },
});

export default store;
