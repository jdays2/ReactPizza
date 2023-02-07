import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/CategorySlice";
import filterReducer from "./slices/FilterSlice";

export const store = configureStore({
  reducer: { category: categoryReducer, filter: filterReducer },
});
