import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    addFavoriteCar(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeFavoriteCar(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
