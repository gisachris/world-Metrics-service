import { createSlice } from '@reduxjs/toolkit';
import mockData from './data';

export const baseURL = 'https://restcountries.com/v3.1/all';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

const countryMockedSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchMockedData: (state) => ({
      ...state,
      data: mockData,
    }),
  },
});

export const { fetchMockedData } = countryMockedSlice.actions;
export default countryMockedSlice.reducer;
