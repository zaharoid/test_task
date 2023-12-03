import { advertsOperations } from "../operations";
import { createSlice } from "@reduxjs/toolkit";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(advertsOperations.fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(advertsOperations.fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(advertsOperations.fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
