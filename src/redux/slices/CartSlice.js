import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const findeItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findeItem) {
        findeItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total;
      }, 0);
      state.totalItems = state.items.reduce((total, item) => {
        return total + item.count;
      }, 0);
    },
    removeAllItems(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    removeItem(state, action) {
      state.items = state.items.filter((e) => e.id !== action.payload);
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total;
      }, 0);
      state.totalItems = state.items.reduce((total, item) => {
        return total + item.count;
      }, 0);
    },
    plusItem(state, action) {
      const findeItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findeItem && action.payload.value) {
        findeItem.count++;
      } else {
        findeItem.count--;
      }
      if (findeItem.count < 0) {
        state.items = state.items.filter((e) => e !== findeItem);
      }
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total;
      }, 0);
      state.totalItems = state.items.reduce((total, item) => {
        return total + item.count;
      }, 0);
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addItems, removeAllItems, removeItem, minusItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
