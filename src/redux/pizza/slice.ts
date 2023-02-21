import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPizzas } from "./asyncActions";
import { PizzaItem, PizzaState, Status } from "./types";

const initialState: PizzaState = {
  items: [],
  status: Status.LOAD,
};

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
