import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export enum Status {
  LOAD = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type PizzaItem = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

type GetPizzaParams = {
  sort: string;
  currentValue: string;
  paggination: string;
  category: string;
};

interface PizzaState {
  items: PizzaItem[];
  status: Status;
}

const initialState: PizzaState = {
  items: [],
  status: Status.LOAD,
};

export const getPizzas = createAsyncThunk(
  "pizza/fetchPizza",
  async (params: GetPizzaParams) => {
    const { sort, currentValue, paggination, category } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://63de555b9fa0d60060fce0cd.mockapi.io/api/items?${category}sortBy=${sort}&search=${currentValue}${paggination}`
    );
    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzas.pending, (state) => {
      state.items = [];
      state.status = Status.LOAD;
    });
    builder.addCase(
      getPizzas.fulfilled,
      (state, action: PayloadAction<PizzaItem[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(getPizzas.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
