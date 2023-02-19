import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type PizzaItem = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

interface PizzaState {
  items: PizzaItem[];
  status: "loading" | "succes" | "error";
}

const initialState: PizzaState = {
  items: [],
  status: "loading",
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
    [getPizzas.fulfilled]: (state, action: PayloadAction<PizzaItem>) => {
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
