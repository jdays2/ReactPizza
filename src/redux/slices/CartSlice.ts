import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string;
  title: string;
  type: string;
  sizes: number;
  imageUrl: string;
  price: number;
  count: number;
};

type PlusMinus = {
  id: string;
  value: boolean;
};

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {
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
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((e) => e.id !== action.payload);
      state.totalPrice = state.items.reduce((total, item) => {
        return item.price * item.count + total;
      }, 0);
      state.totalItems = state.items.reduce((total, item) => {
        return total + item.count;
      }, 0);
    },
    plusItem(state, action: PayloadAction<PlusMinus>) {
      const findeItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findeItem && action.payload.value) {
        findeItem.count++;
      } else if (findeItem) {
        findeItem.count--;
      }
      if (findeItem && findeItem.count < 0) {
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

export const selectCart = (state: RootState) => state.cart;

export const { addItems, removeAllItems, removeItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
