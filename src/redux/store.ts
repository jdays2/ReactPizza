import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/slice";
import filterReducer from "./filter/slice";
import searchReducer from "./search/slice";
import cartReducer from "./cart/slice";
import pizzaReducer from "./pizza/slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    filter: filterReducer,
    search: searchReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
