import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './features/countrySlice';

const Store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default Store;
