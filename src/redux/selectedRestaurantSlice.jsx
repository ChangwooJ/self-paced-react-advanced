import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  description: '',
};

const selectedRestaurantSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedRestaurant: (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
  },
});

export const { setSelectedRestaurant } = selectedRestaurantSlice.actions;
export default selectedRestaurantSlice.reducer;
