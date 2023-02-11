import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.items = push(action.payload);
    },
    removeAllItems(state) {
      state.items = [];
    },
    remoteItem(state, action) {
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;
