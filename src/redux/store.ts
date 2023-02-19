import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/CategorySlice";
import filterReducer from "./slices/FilterSlice";
import searchReducer from "./slices/SearchSlice";
import cartReducer from "./slices/CartSlice";
import pizzaReducer from "./slices/PizzaSlice";

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
