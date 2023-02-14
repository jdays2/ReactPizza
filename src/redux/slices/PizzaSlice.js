import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
};

export const getPizzas = createAsyncThunk(
  "pizza/fetchPizza",
  async (params) => {
    const { sort, currentValue, paggination, category } = params;
    const { data } = await axios.get(
      `https://63de555b9fa0d60060fce0cd.mockapi.io/api/items?${category}sortBy=${sort}&search=${currentValue}${paggination}`
    );
    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.items = [];
      state.status = "pending";
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.items = action.payload;
    },
    [getPizzas.rejected]: (state) => {
      state.items = [];
      state.status = "rejected";
    },
  },
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
