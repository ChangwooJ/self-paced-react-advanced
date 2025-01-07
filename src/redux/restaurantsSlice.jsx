import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [],
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    saveRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { saveRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
