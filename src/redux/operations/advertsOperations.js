import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://656a6dc9dac3630cf72711bb.mockapi.io/api";

export const fetchAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?limit=12&page=${credentials}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
