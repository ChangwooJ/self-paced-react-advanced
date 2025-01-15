import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    description: '',
};

const clickedRestaurantSlice = createSlice({
    name: "clickedRestaurant",
    initialState,
    reducers: {
        setClickedRestaurant: (state, action) => {
            state.name = action.payload.name;
            state.description = action.payload.description;
        }
    }
});

export const {
    setClickedRestaurant,
} = clickedRestaurantSlice.actions;

export default clickedRestaurantSlice.reducer;