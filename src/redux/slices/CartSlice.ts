import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalItems } from "../../utils/calcTotalItems";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

import { getPizzaByLS } from "../../utils/getPizzaByLS";
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

const { items, totalPrice, totalItems } = getPizzaByLS();

const initialState: CartState = {
  items: items,
  totalPrice: totalPrice,
  totalItems: totalItems,
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
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
      state.totalItems = calcTotalItems(state.items);
    },
    removeAllItems(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((e) => e.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalItems = calcTotalItems(state.items);
    },
    plusItem(state, action: PayloadAction<PlusMinus>) {
      const findeItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findeItem && action.payload.value) {
        findeItem.count++;
      } else if (findeItem && findeItem.count !== 1) {
        findeItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalItems = calcTotalItems(state.items);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItems, removeAllItems, removeItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
